import { useTypingText } from "@/hooks/typeText";
import { cn } from "@/lib/utils";

const SERVICES = [
  "beautifully designed houses",
  "housing loan calculation",
  "free online booking for site viewing",
  "assistance for site viewing",
]

export default function ServicesInfo() {
  const { text, status } = useTypingText(SERVICES, 50)
  return (
    <div className="typing-text w-full min-h-16 flex gap-2.5 items-center justify-center place-self-center">
      <span className="text-white/60 whitespace-nowrap">{"We offer:"}</span>
      <p className="place-self-start self-center text-left">
        <span className="underline underline-offset-4">
          {text}
        </span>
        <span className={cn(
          "font-extrabold text-white",
          status !== 'typing' &&
          status !== "deleting" &&
          "blink underline-offset-0"
        )}>
          {"|"}
        </span>
      </p>
    </div >
  )
}