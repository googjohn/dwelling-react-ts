import { useCallback, useEffect, useRef, useState } from "react"

type TypedTexts = string[]
type Phase = "typing" | "deleting" | "pausedBeforeDeleting" | "pausedBeforeTyping";
type Timeout = ReturnType<typeof setTimeout>;
export function useTypingText(textsArray: TypedTexts, TYPING_DELAY: number = 150, PAUSE_DELAY: number = 2000) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Phase>("pausedBeforeTyping");
  const [arrayIndex, setArrayIndex] = useState(0);
  const timerRef = useRef<Timeout>(null);
  const delayTimeoutRef = useRef<Timeout>(null);
  // modulo for extra safe guard
  const currentText = textsArray[arrayIndex % textsArray.length];

  // const startTyping = useCallback(() => {
  //   setText(prev => prev + currentText[prev.length])
  // }, [])

  // const startDeleting = useCallback(() => {
  //   setText(prev => currentText.substring(0, prev.length - 1))
  // }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      switch (status) {
        case "typing": {
          if (text.length < currentText.length) {
            setText(prev => prev + currentText[prev.length])
          }
          if (text.length === currentText.length) {
            setStatus('pausedBeforeDeleting');
          }
          break;
        }
        case "deleting": {
          if (text.length > 0) {
            setText(prev => currentText.substring(0, prev.length - 1))
          }
          if (text.length === 0) {
            setArrayIndex(prev => (prev + 1) % textsArray.length);
            setStatus('pausedBeforeTyping')
          }
          break;
        }
        case "pausedBeforeDeleting": {
          setStatus("deleting");
          break;
        }
        case "pausedBeforeTyping": {
          setStatus('typing');
          break;
        }
      }
    }, (status === 'typing' || status === 'deleting' ? TYPING_DELAY : PAUSE_DELAY))

    // return () => {
    //   if (timerRef.current) {
    //     console.log('timer ref')
    //     clearTimeout(timerRef.current);
    //     timerRef.current = null;
    //   }
    //   // still needs to confirm that this would not early terminate either timeout
    //   if (delayTimeoutRef.current) {
    //     console.log('delay ref')
    //     clearTimeout(delayTimeoutRef.current);
    //     delayTimeoutRef.current = null;
    //   }
    // }
    return () => clearTimeout(timeout)
  }, [status, text])

  return { text, status }
}