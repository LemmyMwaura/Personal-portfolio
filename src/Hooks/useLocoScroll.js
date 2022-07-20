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
    const lsUpdate = () => locoScrollRef.current?.update()

    if (home || pathname !== "/") {
      if (scrollRef.current) {
        locoScrollRef.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: "is-reveal",
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        })

        if (pathname !== "/") return
        locoScrollRef.current.on("scroll", ScrollTrigger.update)
        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locoScrollRef.current?.scrollTo(value, 0, 0)
              : locoScrollRef.current?.scroll.instance.scroll.y
          },
          scrollLeft(value) {
            return arguments.length
              ? locoScrollRef.current?.scrollTo(value, 0, 0)
              : locoScrollRef.current?.scroll.instance.scroll.x
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },
          pinType: scrollRef.current.style.transform ? "transform" : "fixed",
        })

        ScrollTrigger.addEventListener("refresh", lsUpdate)
        ScrollTrigger.refresh()
      }
    }

    return () => {
      ScrollTrigger.removeEventListener("refresh", lsUpdate)
      locoScrollRef.current?.destroy()
    }
  }, [locoScrollRef, scrollRef, pathname, showLoader, home])

  return [locoScrollRef]
}

export default useLocoScroll
