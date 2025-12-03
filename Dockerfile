FROM node:22-alpine AS base
WORKDIR /app

# Enable Corepack to use pnpm
RUN corepack enable
ENV PNPM_STORE_PATH=/pnpm/store

# Copy only manifest files to leverage build cache
COPY package.json pnpm-lock.yaml ./

FROM base AS prod-deps
RUN pnpm install --prod

FROM base AS build-deps
RUN pnpm install 

FROM build-deps AS build
COPY . .
RUN pnpm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]