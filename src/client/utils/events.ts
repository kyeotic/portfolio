import { Context } from '@b9g/crank'

export function createEvent<T>(eventName: string, bubbles: boolean = true) {
  return {
    type: eventName,
    listen: (target: Context, handler: (e: CustomEvent<T>) => void) => {
      // Since the type for the event is defined by this function's generic type
      // we don't need to extend the Crank EventMap with it, we can just cast the handler to EventListener
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
