import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardAction, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { RippleEffect } from "@/components/ui/ripple";
import Autoplay from "embla-carousel-autoplay";

type ItemProp = {
  location: string,
  source: string,
  name: string,
  type: string,
  description: string,
}
const SLIDES: ItemProp[] = [
  {
    name: "Gretta",
    source: 'src/assets/images/slides/slide-1.jpg',
    location: 'Tagaytay, City',
    type: "Model House",
    description: 'A glamorous looking penthouse.'
  },
  {
    name: "Freyya",
    source: 'src/assets/images/slides/slide-2.jpg',
    location: 'Boracay Island',
    type: "Model House",
    description: 'A cozy and luxurious dwelling in the Island of Boracay.'
  },
  {
    name: "Ella",
    source: 'src/assets/images/slides/slide-3.jpg',
    location: 'Baguio City',
    type: "Model House",
    description: 'A modern look in the summer capital of the Philippines.'
  },
  {
    name: "Augustta",
    source: 'https://www.presello.com/wp-content/uploads/2020/09/IMG_9557-scaled.jpg',
    location: 'Cebu City',
    type: "Model House",
    description: 'Stylish multi-story home designed for convenience with private outdoor areas.'
  },
  {
    name: "Aletta",
    source: 'https://www.presello.com/wp-content/uploads/2022/02/21487-1.jpg',
    location: 'Metro Manila',
    type: "Model House",
    description: 'A modern, elegant townhouse with spacious interiors for comfortable urban living.'
  },
]
export default function Gallery() {
  const autoplay = useMemo(() =>
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
    []
  )

  return (
    <section className="section gallery-section">
      <div className="gallery-container h-svh">
        <div className="gallery-content  relative">
          <Carousel
            plugins={[autoplay]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="p-0">
              {SLIDES.map(slide => (
                <CarouselItem key={slide.name} className="p-0">
                  <Card className="p-0 rounded-none border-none relative">
                    <CardContent className="p-0 h-screen">
                      <div className="relative bg-(--bg-base-2) w-full h-full z-0 overlay">
                        <img src={slide.source} alt="" className="gallery h-full w-full object-cover" />
                      </div>
                      <CardDescription>
                        <div className="absolute top-1/3 left-1/12 sm:left-1/6 max-w-full h-80">
                          <p className="mb-2.5 text-[clamp(.875rem,3.5vw,1.25rem)] text-accent">{slide.location}</p>
                          <p className="mb-2.5 text-5xl sm:text-7xl font-bold text-logo">{slide.name}</p>
                          <p className="mb-2.5 text-5xl sm:text-7xl font-bold text-(--primary-color)">{slide.type}</p>
                          <p className="mb-2.5 text-[clamp(.875rem,3.5vw,1.25rem)] text-accent">{slide.description}</p>
                          <CardAction className="w-full">
                            <Button variant={"primary"} className="mt-5 btn-primary btn-hero non-hero">
                              <RippleEffect />
                              {"View More"}
                            </Button>
                          </CardAction>
                        </div>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}