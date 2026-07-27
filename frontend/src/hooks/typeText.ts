import { useCallback, useEffect, useRef, useState } from "react"

type TypedTexts = string[]
type Phase = "typing" | "deleting" | "pausedBeforeDeleting" | "pausedBeforeTyping";
type Timeout = ReturnType<typeof setTimeout>;
export function useTypingText(textsArray: TypedTexts, TYPING_DELAY: number = 150) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Phase>("pausedBeforeTyping");
  const [arrayIndex, setArrayIndex] = useState(0);
  const timerRef = useRef<Timeout>(null);
  const PAUSE_DELAY = 500;

  // modulo for extra safe guard
  const currentText = textsArray[arrayIndex % textsArray.length];

  const startTyping = useCallback(() => {
    if (status !== 'typing') return;
    setText(prev => prev + currentText[prev.length])
    timerRef.current = setTimeout(startTyping, TYPING_DELAY)
  }, [status, currentText, TYPING_DELAY])

  const startDeleting = useCallback(() => {
    if (status !== 'deleting') return;
    setText(prev => currentText.substring(0, prev.length - 1))
    timerRef.current = setTimeout(startDeleting, TYPING_DELAY)
  }, [status, currentText, TYPING_DELAY])


  useEffect(() => {
    if (status === 'typing') startTyping();
    if (status === 'deleting') startDeleting();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [status, startDeleting, startTyping])

  useEffect(() => {
    if (status === 'deleting' || status === "typing") return;
    const timeout = setTimeout(() => {
      setStatus(
        status === "pausedBeforeDeleting" ?
          "deleting" :
          "typing"
      )
    }, PAUSE_DELAY)

    return () => clearTimeout(timeout)
  }, [status])

  useEffect(() => {
    if (status === 'typing') {
      if (text.length >= currentText.length) {
        setStatus('pausedBeforeDeleting')
      }
    }
    if (status === 'deleting') {
      if (text.length <= 0) {
        setStatus('pausedBeforeTyping')
        setArrayIndex(prev => {
          if (prev >= textsArray.length - 1) {
            return 0
          } else {
            return prev + 1
          }
        })
      }
    }

  }, [text, status, currentText.length, textsArray])

  return { text, status }
}