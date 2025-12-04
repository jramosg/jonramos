import pino from 'pino';
import path from 'path';
import fs from 'fs';
import { Transform } from 'stream';

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

  const infoStream = fs.createWriteStream(path.join(logDir, 'info.log'));
  const warnStream = fs.createWriteStream(path.join(logDir, 'warn.log'));
  const errorStream = fs.createWriteStream(path.join(logDir, 'error.log'));

  const splitter = new Transform({
    transform(chunk, _enc, cb) {
      try {
        const log = JSON.parse(chunk.toString());
        if (log.level >= 50) {
          errorStream.write(chunk);
        } else if (log.level === 40) {
          warnStream.write(chunk);
        } else if (log.level === 30) {
          infoStream.write(chunk);
        }
      } catch (e) {
        // If not JSON, ignore
      }
      cb();
    },
  });

  return pino(
    {
      level: logLevel,
      timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,
    },
    splitter,
  );
})();

export { logger };
