import { Context } from '@b9g/crank'

export function createEvent<T>(eventName: string, bubbles: boolean = true) {
  return {
    type: eventName,
    listen: (target: Context, handler: (e: CustomEvent<T>) => void) => {
      target.addEventListener(eventName, handler as EventListener)
      target.cleanup(() => {
        target.removeEventListener(eventName, handler as EventListener)
      })
    },
    dispatch: (target: EventTarget, detail: T) => {
      const event = new CustomEvent<T>(eventName, { detail, bubbles })
      target.dispatchEvent(event)
    },
  }
}
