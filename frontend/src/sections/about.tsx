import { Spacer } from "@/components/ui/spacer";
import { SectionTitle } from "@/segments/sectionTitle";
import { SubHeading } from "@/segments/subHeading";
import bgTeam from "@/assets/images/backgrounds/bg-about.jpg"
import { useMemo, type ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/observer";
import { RippleEffect } from "@/components/ui/ripple";

const ADVANTAGES = [
  {
    title: "Expertise",
    content: "Our team consists of licensed real estate agents and industry professionals with an in-depth understanding of the local market. We stay up-to-date with the latest trends and developments to ensure you have access to the best opportunities.",
  },
  {
    title: "Extensive Listings",
    content: "Whether you're searching for a cozy apartment, a spacious family home, a commercial property, or an investment opportunity, our website offers a comprehensive range of listings to suit diverse needs and budgets. Explore our vast collection of properties and discover your perfect match.",
  },
  {
    title: "User-Friendly Interface",
    content: "We have designed our website with simplicity and functionality in mind. Our intuitive search filters, detailed property descriptions, high-quality images, and virtual tours allow you to explore properties from the comfort of your own home.",
  },
  {
    title: "Trust and Transparency",
    content: "We believe in building long-lasting relationships with our clients based on trust and transparency. Our team is dedicated to providing honest and reliable information, ensuring you have all the facts needed to make confident decisions.",
  },
  {
    title: "Exceptional Customer Service",
    content: "Your satisfaction is our top priority. Whether you have questions about a listing, need guidance on the buying or selling process, or require assistance with financing options, our friendly and knowledgeable support team is here to help. We are just a phone call or email away.",
  },
]

export default function About() {
  return (
    <section className="section about-section">
      <div className="about-container bg-(--bg-base) min-h-svh">
        <Spacer />
        <SectionTitle title="About Us" />
        <div className="about-content p-(--pad-margin-n)">
          <SubHeading>
            Topagentph is a premier real estate brokerage firm that has been
            providing exceptional service to clients throughout the
            Philippines for over a decade.
          </SubHeading>
          {/* <div className="flex flex-col gap-[clamp(.625rem,2vw,2rem)]"> */}
          <div className="max-w-7xl mx-auto overflow-hidden bg-(--bg-base-2) rounded-lg flex flex-col sm:flex-row *:flex-1 mb-[clamp(.625rem,2vw,2rem)]">
            <div className="relative overlay">
              <img
                src={bgTeam}
                alt="team image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="dark-glass flex flex-col gap-(--pad-margin-n) justify-center items-center p-(--pad-margin-n)">
              <div className="content-title gradient-text font-semibold text-center txt-heading-2">
                Welcome to Topagentph!
              </div>
              <div className="txt-normal text-justify leading-7">
                <p>
                  At Topagentph, we understand that finding the perfect property
                  is more than just a transaction; it's about finding a place to
                  call home or a space to build your dreams. With our passion for
                  real estate and dedication to exceptional service, we are here
                  to guide you every step of the way.
                </p>
                <br />
                <p>
                  As a leading real estate platform, we strive to provide a seamless
                  and enjoyable experience for buyers, sellers, renters, and
                  investors alike. Our team of experienced professionals is committed
                  to delivering personalized attention, reliable advice, and valuable
                  insights to help you make informed decisions.
                </p>
                {/* Topagentph is a Philippines-based real estate firm renowned
                for our exceptional property services, serving both local and
                international clients. With a dedicated team of knowledgeable real
                estate agents, we offer expert assistance in buying, selling,
                and renting properties. Our services cover property listing,
                management, consultation, and investment advice, all characterized
                by professionalism, integrity, and a commitment to client satisfaction.
                Topagentph's transparent, honest, and expert approach makes us a top
                choice for all real estate needs in the Philippines. */}
              </div>
            </div>
          </div>
          <AdditionalAdvantages />
          <PostMessage>
            Thank you for choosing Topagentph. We are excited to embark on this
            journey with you and help you find your perfect property. Start
            exploring our listings today and let us be your trusted partner
            in real estate.
          </PostMessage>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export function AdditionalAdvantages() {
  const { register, isIntersecting } = useIntersectionObserver("0px", .25)
  const autoplay = useMemo(() =>
    Autoplay({
      delay: 3500,
      stopOnInteraction: true,
    }),
    []
  )
  return (
    <div ref={register} className="relative ovl max-w-7xl flex flex-col lg:flex-row justify-center items-center w-full h-full mx-auto rounded-lg mb-[clamp(.625rem,2vw,2rem)]" >
      <div className="basis-[40%]">
        <h3 className="txt-heading text-center whitespace-nowrap gradient-text italic p-(--pad-margin-n)">What sets us apart</h3>
      </div>
      <div className="carousel-container basis-[60%] w-full p-(--pad-margin-n)">
        <Carousel
          plugins={isIntersecting ? [autoplay] : []}
          opts={{
            loop: isIntersecting,
            align: "start"
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {ADVANTAGES.map(item => (
              <CarouselItem key={item.title} className="md:basis-1/2">
                <Card className="rounded-md h-full bg-(--bg-base-2) relative z-20 text-accent/80 py-(--pad-margin-n)">
                  <CardHeader className="px-(--pad-margin-n) txt-heading-2 font-semibold gradient-text">{item.title}</CardHeader>
                  <CardContent className="px-(--pad-margin-n) leading-7">{item.content}</CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

function PostMessage({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden px-(--pad-margin-n) p-(--pad-margin-n) sm:py-[clamp(5rem,4vh,10rem)] rounded-lg flex flex-col sm:flex-row gap-5 justify-center items-center">
      <div className="basis-2/3">
        <p className="post-message leading-7">
          {children}
        </p>
      </div>
      <div className="flex items-center justify-end basis-1/3">
        <Button
          variant={"primary"}
          className={"btn-primary btn-hero bg-transparent"}
        >
          <RippleEffect />
          Visit Properties
        </Button>
      </div>
    </div>
  )
}