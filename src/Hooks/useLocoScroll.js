import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/src/locomotive-scroll.scss"

const useLocoScroll = (
  scrollRef,
  pathname,
  showLoader = false,
  home = false,
) => {
  const locoScrollRef = useRef(null)

  useEffect(() => {
    if (!showLoader) return

    if (home || pathname !== "/") {
      if (scrollRef.current) {
        locoScrollRef.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: "is-reveal",
        })
      }
    }

    return () => locoScrollRef.current?.destroy()
  }, [locoScrollRef, scrollRef, pathname, showLoader, home])

  return [locoScrollRef]
}

export default useLocoScroll
