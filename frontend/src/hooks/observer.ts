import { useCallback, useEffect, useMemo, useRef } from "react"

export default function useIntersectionObserver(threshold: number) {
  const isIntersecting = useRef(false);
  const isScrolling = useRef(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isScrolling.current = true;
          isIntersecting.current = true;
        }
      })
    }, {
      threshold,
    })
  }, [])

  const register = useCallback((el: HTMLElement | null) => {
    if (el && observer.current) {
      observer.current.observe(el)
    }
  }, [observer])
  return { register }
}