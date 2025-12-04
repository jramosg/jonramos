import { defineMiddleware } from 'astro:middleware';
import { logger } from './logger';

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.originPathname;

  // Paths that should not be logged (static assets, health checks, etc.)
  const shouldNotLog =
    path.startsWith('/_image') ||
    path.startsWith('/_astro') ||
    path.startsWith('/assets') ||
    path === '/health' ||
    path === '/favicon.ico' ||
    path === '/robots.txt' ||
    path === '/sitemap.xml' ||
    path.endsWith('.css') ||
    path.endsWith('.png') ||
    path.endsWith('.jpg') ||
    path.endsWith('.jpeg') ||
    path.endsWith('.gif') ||
    path.endsWith('.svg') ||
    path.endsWith('.ico') ||
    path.endsWith('.webp') ||
    path.endsWith('.woff') ||
    path.endsWith('.woff2') ||
    path.endsWith('.ttf') ||
    path.endsWith('.eot');

  if (shouldNotLog) {
    return next();
  }

  const startTime = Date.now();
  const method = context.request.method;
  const userAgent = context.request.headers.get('user-agent') || 'unknown';
  const ip =
    context.request.headers.get('x-forwarded-for') ||
    context.request.headers.get('x-real-ip') ||
    'unknown';

  try {
    const response = await next();
    const duration = Date.now() - startTime;
    const status = response.status;

    // Log successful requests (except filtered paths)
    if (!shouldNotLog) {
      logger.info('Request completed: %O', {
        method,
        url: path,
        status,
        duration: `${duration}ms`,
        ip,
        userAgent: userAgent.substring(0, 100), // Truncate long user agents
      });
    }

    // Log slow requests (>1 second)
    if (duration > 1000 && !shouldNotLog) {
      logger.warn('Slow request detected: %O', {
        method,
        url: path,
        status,
        duration: `${duration}ms`,
        ip,
      });
    }

    // Log client errors (4xx)
    if (status >= 400 && status < 500 && !shouldNotLog) {
      logger.warn('Client error: %O', {
        method,
        url: path,
        status,
        duration: `${duration}ms`,
        ip,
      });
    }

    // Log server errors (5xx)
    if (status >= 500 && !shouldNotLog) {
      logger.error('Server error: %O', {
        method,
        url: path,
        status,
        duration: `${duration}ms`,
        ip,
        userAgent: userAgent.substring(0, 100),
      });
    }

    return response;
  } catch (error) {
    const duration = Date.now() - startTime;

    // Log exceptions
    logger.error('Request failed with exception: %O', {
      method,
      url: path,
      duration: `${duration}ms`,
      ip,
      userAgent: userAgent.substring(0, 100),
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    throw error;
  }
});
