import pino from 'pino';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const isProduction = import.meta.env.PROD;
const logLevel = process.env.LOG_LEVEL || (isProduction ? 'info' : 'debug');

// In development, pretty-print to console; in production, JSON logs
const logger = (() => {
  if (!isProduction) {
    return pino({
      level: logLevel,
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
        },
      },
    });
  }

  const logDir = import.meta.env.LOG_DIR || path.resolve(process.cwd(), 'logs');
  try {
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
      // eslint-disable-next-line no-console
      console.log('Created log directory:', logDir);
    }
    fs.accessSync(logDir, fs.constants.W_OK);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Unable to create or write to log directory:', logDir, err);
  }

  const combinedDest = pino.destination(path.join(logDir, 'combined.log'));

  return pino(
    {
      level: logLevel,
      timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,
    },
    combinedDest,
  );
})();

export { logger };
