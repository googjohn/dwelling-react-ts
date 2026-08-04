import { useIntersectionObserver } from "@/hooks/observer";
import { useTypingText } from "@/hooks/typeText";
import { cn } from "@/lib/utils";

const SERVICES = [
  "beautifully designed houses",
  "housing loan calculation",
  "hassle free online booking for site viewing",
  "assistance for on-site tour showcase",
]

export default function ServicesInfo() {
  const { register, isIntersecting } = useIntersectionObserver();
  const { text, status } = useTypingText(SERVICES, 35, 1500, isIntersecting)

  return (
    <div ref={register} className="border typing-text w-full min-h-16 flex gap-2.5 items-center justify-center place-self-center">
      {status !== 'unavailable' &&
        (
          <>
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
          </>
        )
      }
    </div >
  )
}