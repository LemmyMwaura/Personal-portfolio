import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/src/locomotive-scroll.scss"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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

        if (pathname !== "/") return

        locoScrollRef.current.on("scroll", () => {
          ScrollTrigger.update()
        })

        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            if (locoScrollRef.current) {
              return arguments.length
                ? locoScrollRef.current?.scrollTo(value, 0, 0)
                : locoScrollRef.current?.scroll.instance.scroll.y
            }
            return null
          },
          scrollLeft(value) {
            if (locoScrollRef.current) {
              return arguments.length
                ? locoScrollRef.current?.scrollTo(value, 0, 0)
                : locoScrollRef.current?.scroll.instance.scroll.x
            }
            return null
          },
        })

        const lsUpdate = () => {
          if (locoScrollRef.current) {
            locoScrollRef.current?.update()
          }
        }

        ScrollTrigger.addEventListener("refresh", lsUpdate)
        ScrollTrigger.update()
      }
    }

    return () => {
      if (locoScrollRef.current) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate)
        locoScrollRef.current?.destroy()
      }
    }
  }, [locoScrollRef, scrollRef, pathname, showLoader, home])

  return [locoScrollRef]
}

export default useLocoScroll
