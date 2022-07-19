import { useEffect, useRef } from "react"

//locomotiveScroll
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/src/locomotive-scroll.scss"

//gsap
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

    const lsUpdate = () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.update()
      }
    }

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
                ? locoScrollRef.current.scrollTo(value, 0, 0)
                : locoScrollRef.current.scroll.instance.scroll.y
            }
            return null
          },
          scrollLeft(value) {
            if (locoScrollRef.current) {
              return arguments.length
                ? locoScrollRef.current.scrollTo(value, 0, 0)
                : locoScrollRef.current.scroll.instance.scroll.x
            }
            return null
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },
          // pinType: document.getElementById("scroller").style.transform
          //   ? "transform"
          //   : "fixed",
        })

        ScrollTrigger.addEventListener("refresh", lsUpdate)
        ScrollTrigger.update()
      }
    }

    return () => {
      ScrollTrigger.removeEventListener("refresh", lsUpdate)
      locoScrollRef.current?.destroy()
      locoScrollRef.current = null
    }
  }, [locoScrollRef, scrollRef, pathname, showLoader, home])

  return [locoScrollRef]
}

export default useLocoScroll
