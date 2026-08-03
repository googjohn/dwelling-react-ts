import "@/App.css";
import { cn } from "@/lib/utils";
import { RippleEffect } from "@/components/ui/ripple";
import { Button } from "@/components/ui/button";
import appLogo from "@/assets/images/logo/logo-no-bg.svg";
import ServicesInfo from "@/segments/typingText";

const buttonCustomClasses = `shadow-amber-50 shadow-lg btn-primary btn-hero for-hero`
const salutationClasses = `gradient-text text-shadow-gray-500 text-shadow-lg`

type CustomButtonType = React.MouseEvent<HTMLButtonElement, MouseEvent>

export default function Hero() {
  // const { register } = useIntersectionObserver()

  const handleOnPress = (e: CustomButtonType) => {
    if (e.currentTarget.dataset.pressed === 'true') {
      e.currentTarget.dataset.pressed = 'false'
    } else {
      e.currentTarget.dataset.pressed = 'true'
    }
  }
  return (
    <section className="section hero-section w-full">
      <div className="hero-container">
        <div className="logo">
          <img src={appLogo} alt="app logo" className="w-[clamp(15rem,50vw,20rem)]" />
        </div>
        <div className="salutation text-white/80">
          <h1 className="uppercase text-center font-semibold leading-22">
            <span className={salutationClasses}>
              Welcome
            </span>
            <span className={salutationClasses}>
              Home
            </span>
          </h1>
          <ServicesInfo />
        </div>
        <div className="cta-container mx-auto w-full flex gap-2.5 sm:gap-5 place-content-center sm:flex-row flex-col">
          <Button
            variant="primary"
            onMouseDown={handleOnPress}
            onMouseUp={handleOnPress}
            className={cn(buttonCustomClasses)}
          >
            View Gallery
            <RippleEffect />
          </Button>
          <Button
            variant="primary"
            onMouseDown={handleOnPress}
            onMouseUp={handleOnPress}
            className={cn(buttonCustomClasses)}
          >
            Find Property
            <RippleEffect />
          </Button>
        </div>
      </div>
    </section>
  )
}