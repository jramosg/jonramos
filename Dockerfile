FROM node:22-alpine AS base
WORKDIR /app

RUN corepack enable
ENV PNPM_STORE_PATH=/pnpm/store

# Fetch all dependencies into the pnpm store once.
# This layer is keyed on pnpm-lock.yaml so it is reused across
# the prod-deps and build-deps stages instead of downloading twice.
COPY pnpm-lock.yaml ./
RUN pnpm fetch

# Copy package.json after fetch so the fetch layer is independent
# of unrelated package.json edits (scripts, metadata).
COPY package.json ./

FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile --offline

FROM base AS build-deps
RUN pnpm install --frozen-lockfile --offline

FROM build-deps AS build
COPY . .
RUN pnpm run build

FROM node:22-alpine AS runtime
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
