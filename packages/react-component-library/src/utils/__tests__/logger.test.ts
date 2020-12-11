import logger from '../logger'

describe('logger', () => {
  let consoleLogSpy: jest.SpyInstance
  let consoleWarnSpy: jest.SpyInstance
  let consoleErrorSpy: jest.SpyInstance

  describe('debug', () => {
    it('invokes `console.log` with the correct message', () => {
      consoleLogSpy = jest.spyOn(global.console, 'log')
      logger.debug('Hello, World!')

      expect(consoleLogSpy).toHaveBeenCalledTimes(1)
      expect(consoleLogSpy).toHaveBeenCalledWith('DEBUG - RNDS - Hello, World!')
    })
  })

  describe('warn', () => {
    it('invokes `console.warn` with the correct message', () => {
      consoleWarnSpy = jest.spyOn(global.console, 'warn')
      logger.warn('Hello, World!')

      expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
      expect(consoleWarnSpy).toHaveBeenCalledWith('WARN - RNDS - Hello, World!')
    })
  })

  describe('error', () => {
    it('invokes `console.error` with the correct message', () => {
      consoleErrorSpy = jest.spyOn(global.console, 'error')
      logger.error('Hello, World!')

      expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
      expect(consoleErrorSpy).toHaveBeenCalledWith('ERROR - RNDS - Hello, World!')
    })
  })
})
