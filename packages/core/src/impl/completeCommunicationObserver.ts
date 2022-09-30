import {CommunicationObserver, Headers} from '../results'

export default function completeCommunicationObserver(
  callbacks: Partial<CommunicationObserver<any>> = {}
): Omit<Required<CommunicationObserver<any>>, 'useCancellable' | 'useResume'> {
  let state = 0
  const retVal = {
    next: (data: any): void => {
      if (
        state === 0 &&
        callbacks.next &&
        data !== null &&
        data !== undefined
      ) {
        callbacks.next(data)
      }
    },
    error: (error: Error): void => {
      /* istanbul ignore else propagate error at most once */
      if (state === 0) {
        state = 1
        /* istanbul ignore else safety check */
        if (callbacks.error) callbacks.error(error)
      }
    },
    complete: (): void => {
      if (state === 0) {
        state = 2
        /* istanbul ignore else safety check */
        if (callbacks.complete) callbacks.complete()
      }
    },
    responseStarted: (headers: Headers, statusCode?: number): void => {
      if (callbacks.responseStarted)
        callbacks.responseStarted(headers, statusCode)
    },
  }
  return retVal
}
