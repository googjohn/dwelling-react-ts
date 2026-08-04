import { useCallback, useEffect, useRef, useState } from "react"

export function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const isScrolling = useRef(false);
  const observer = useRef<IntersectionObserver>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isScrolling.current = true;
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false)
        }
      })
    }, {
      rootMargin: "-10px 0px",
      threshold: .1,
    })

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    }
  }, [])

  const register = useCallback((el: HTMLElement | null) => {
    if (!observer.current) return;

    observer.current.disconnect();

    if (el) {
      observer.current.observe(el)
    }

  }, [observer])
  return { register, isIntersecting }
}