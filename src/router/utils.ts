let cb: () => void
export function triggerScroll() {
  if (cb) {
    cb()
  }
}
export function onTriggerScroll(behaviorCb: () => void) {
  cb = behaviorCb
}
