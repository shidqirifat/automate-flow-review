import { useEffect, useState } from 'react'

export default function useDelay(delayTime: number) {
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDelay(true)
    }, delayTime)
  }, [])

  return [delay]
}
