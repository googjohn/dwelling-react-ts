import { useEffect, useState } from "react"

type TypedTexts = string[]
type Phase = "typing" | "deleting" | "pausedBeforeDeleting" | "pausedBeforeTyping" | "unavailable";

export function useTypingText(
  textsArray: TypedTexts,
  TYPING_DELAY: number = 150,
  PAUSE_DELAY: number = 2000
): {
  text: string,
  status: Phase
} {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Phase>("pausedBeforeTyping");
  const [arrayIndex, setArrayIndex] = useState(0);

  const currentText = textsArray[arrayIndex % textsArray.length];

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

    return () => clearTimeout(timeout)
  }, [status, text, currentText, TYPING_DELAY, PAUSE_DELAY])

  if (!textsArray.length) return { text: "unavailable", status: 'unavailable' };

  return { text, status }
}