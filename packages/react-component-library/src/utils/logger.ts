export type LogLevel =
  | 'debug'
  | 'info'
  | 'warn'
  | 'error'
  | '__RNDS_LOG_LEVEL'

export type Logger = Record<LogLevel, typeof console.log>

const RNDS_LOG_LEVEL: LogLevel = '__RNDS_LOG_LEVEL'
const levels: LogLevel[] = ['debug', 'info', 'warn', 'error']

function isValidLogLevel(logLevel: LogLevel, index: number): boolean {
  const enabledLevel = levels.indexOf(
    logLevel.toString().toLowerCase() as LogLevel
  )

  return enabledLevel > -1 && index >= enabledLevel
}

/**
 * Generates a `logger[debug | info | warn | error](...args)`
 * Log level is set at build time via `RNDS_LOG_LEVEL` env var
 *
 */
export default levels.reduce((logger, level: LogLevel, index: number) => {
  return {
    ...logger,
    [level]: (...args: unknown[]) => {
      const func = level === 'debug' ? 'log' : level

      if (
        RNDS_LOG_LEVEL &&
        console &&
        isValidLogLevel(RNDS_LOG_LEVEL, index)
      ) {
        const [message, ...rest] = [...args]

        // eslint-disable-next-line no-console
        console[func](`${level.toUpperCase()} - RNDS - ${message}`, ...rest)
      }
    },
  }
}, <Logger>{})
