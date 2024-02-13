import { useEffect } from 'react'

const useEventListener = (event: string, listener: (ev?: any) => any, useCapture?: boolean) => {
  useEffect(() => {
    if (listener) {
      listener()
      window.addEventListener(event, listener, useCapture)

      return () => window.removeEventListener(event, listener, useCapture)
    }

    return () => {}
  }, [event, listener, useCapture])
}

export default useEventListener;