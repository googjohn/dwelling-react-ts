import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { RippleEffect } from "@/components/ui/ripple";
import { Spacer } from "@/components/ui/spacer";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/segments/sectionTitle";
import { LocateFixed } from "lucide-react";
import { FaBed, FaShower } from "react-icons/fa6";

const FEATURED_PROPERTIES = [
  {
    id: 1,
    name: 'Property One',
    location: 'Location One',
    price: 10000000,
    src: '/src/assets/images/backgrounds/bg-contact.jpg',
    description: 'Description for Property One',
    features: {
      home: ["Maid's Room", "Smart Home", "Walk-In Closet", "Dirty Kitchen", "Family Room",
        "Guest Room", "Spacious Master Bedroom", "Porch", "Barbecue Area", "Stunning Architecture",
        "A/C Units Included", "Swimming Pool", "Lush Garden", "Led Lights", "High Ceiling",
        "Foyer", "Water Storage Tracking", "High Fence", "Laundry Area", "Driver's Room", "Gym",
        "Breathtaking Views", "Utility Area", "Guest Parking",
      ],
      neighborhod: [
        "Private Gated Community",
        "CCTV in Common Areas",
        "Clubhouse",
        "Basketball Court",
        "Playground",
        "Spacious Driveway",
        "Lush Greenery"
      ],
      vicinity: ["Bonifacio Global City"],
      establishements: {
        foodhubs: ['BGC Food Hubs'],
        grocery: ['SM Hypermarket'],
        gym: ['Anytime Fitness Bonifacio'],
        school: ['University of Makati', 'De La Salle University Rufino Campus',
          'The British School Manila', 'International School Manila', 'Everest Academy',
          'Fort Bonifacio Highschool'
        ],
        mall: ['Market Market', 'SM Aura', 'BGC Uptown Mall', 'Venice Grand Canall',
          'SM Mega Mall', 'Rustan\'s - Shangri-La Plaza'
        ],
        hospital: [
          'Unciano General Hospital', 'St.Lukes Medical Center BGC', 'Ospital ng Makati',
          'The Medical City'
        ]
      }
    }
  },
  {
    id: 2,
    name: 'Property Two',
    location: 'Location Two',
    price: 10000000,
    src: '/src/assets/images/backgrounds/bg-services.jpg',
    description: 'Description for Property Three',
    features: {
      home: ["Maid's Room", "Smart Home", "Walk-In Closet", "Dirty Kitchen", "Family Room",
        "Guest Room", "Spacious Master Bedroom", "Porch", "Barbecue Area", "Stunning Architecture",
        "A/C Units Included", "Swimming Pool", "Lush Garden", "Led Lights", "High Ceiling",
        "Foyer", "Water Storage Tracking", "High Fence", "Laundry Area", "Driver's Room", "Gym",
        "Breathtaking Views", "Utility Area", "Guest Parking",
      ],
      neighborhod: [
        "Private Gated Community",
        "CCTV in Common Areas",
        "Clubhouse",
        "Basketball Court",
        "Playground",
        "Spacious Driveway",
        "Lush Greenery"
      ],
      vicinity: ["Bonifacio Global City"],
      establishements: {
        foodhubs: ['BGC Food Hubs'],
        grocery: ['SM Hypermarket'],
        gym: ['Anytime Fitness Bonifacio'],
        school: ['University of Makati', 'De La Salle University Rufino Campus',
          'The British School Manila', 'International School Manila', 'Everest Academy',
          'Fort Bonifacio Highschool'
        ],
        mall: ['Market Market', 'SM Aura', 'BGC Uptown Mall', 'Venice Grand Canall',
          'SM Mega Mall', 'Rustan\'s - Shangri-La Plaza'
        ],
        hospital: [
          'Unciano General Hospital', 'St.Lukes Medical Center BGC', 'Ospital ng Makati',
          'The Medical City'
        ]
      }
    }
  },
  {
    id: 3,
    name: 'Property Three',
    location: 'Location Three',
    price: 10000000,
    src: '/src/assets/images/backgrounds/bg-services.jpg',
    description: 'Description for Property Three',
    features: {
      home: ["Maid's Room", "Smart Home", "Walk-In Closet", "Dirty Kitchen", "Family Room",
        "Guest Room", "Spacious Master Bedroom", "Porch", "Barbecue Area", "Stunning Architecture",
        "A/C Units Included", "Swimming Pool", "Lush Garden", "Led Lights", "High Ceiling",
        "Foyer", "Water Storage Tracking", "High Fence", "Laundry Area", "Driver's Room", "Gym",
        "Breathtaking Views", "Utility Area", "Guest Parking",
      ],
      neighborhod: [
        "Private Gated Community",
        "CCTV in Common Areas",
        "Clubhouse",
        "Basketball Court",
        "Playground",
        "Spacious Driveway",
        "Lush Greenery"
      ],
      vicinity: ["Bonifacio Global City"],
      establishements: {
        foodhubs: ['BGC Food Hubs'],
        grocery: ['SM Hypermarket'],
        gym: ['Anytime Fitness Bonifacio'],
        school: ['University of Makati', 'De La Salle University Rufino Campus',
          'The British School Manila', 'International School Manila', 'Everest Academy',
          'Fort Bonifacio Highschool'
        ],
        mall: ['Market Market', 'SM Aura', 'BGC Uptown Mall', 'Venice Grand Canall',
          'SM Mega Mall', 'Rustan\'s - Shangri-La Plaza'
        ],
        hospital: [
          'Unciano General Hospital', 'St.Lukes Medical Center BGC', 'Ospital ng Makati',
          'The Medical City'
        ]
      }
    }
  },
  {
    id: 4,
    name: 'Property Four',
    location: 'Location Four',
    price: 10000000,
    src: '/src/assets/images/backgrounds/bg-hero-main.webp',
    description: 'Description for Property Four',
    features: {
      home: ["Maid's Room", "Smart Home", "Walk-In Closet", "Dirty Kitchen", "Family Room",
        "Guest Room", "Spacious Master Bedroom", "Porch", "Barbecue Area", "Stunning Architecture",
        "A/C Units Included", "Swimming Pool", "Lush Garden", "Led Lights", "High Ceiling",
        "Foyer", "Water Storage Tracking", "High Fence", "Laundry Area", "Driver's Room", "Gym",
        "Breathtaking Views", "Utility Area", "Guest Parking",
      ],
      neighborhod: [
        "Private Gated Community",
        "CCTV in Common Areas",
        "Clubhouse",
        "Basketball Court",
        "Playground",
        "Spacious Driveway",
        "Lush Greenery"
      ],
      vicinity: ["Bonifacio Global City"],
      establishements: {
        foodhubs: ['BGC Food Hubs'],
        grocery: ['SM Hypermarket'],
        gym: ['Anytime Fitness Bonifacio'],
        school: ['University of Makati', 'De La Salle University Rufino Campus',
          'The British School Manila', 'International School Manila', 'Everest Academy',
          'Fort Bonifacio Highschool'
        ],
        mall: ['Market Market', 'SM Aura', 'BGC Uptown Mall', 'Venice Grand Canall',
          'SM Mega Mall', 'Rustan\'s - Shangri-La Plaza'
        ],
        hospital: [
          'Unciano General Hospital', 'St.Lukes Medical Center BGC', 'Ospital ng Makati',
          'The Medical City'
        ]
      }
    }
  },
  {
    id: 5,
    name: 'Property Five',
    location: 'Location Five',
    price: 10000000,
    src: '/src/assets/images/backgrounds/bg-subscribe.jpg',
    description: 'Description for Property Five',
    features: {
      home: ["Maid's Room", "Smart Home", "Walk-In Closet", "Dirty Kitchen", "Family Room",
        "Guest Room", "Spacious Master Bedroom", "Porch", "Barbecue Area", "Stunning Architecture",
        "A/C Units Included", "Swimming Pool", "Lush Garden", "Led Lights", "High Ceiling",
        "Foyer", "Water Storage Tracking", "High Fence", "Laundry Area", "Driver's Room", "Gym",
        "Breathtaking Views", "Utility Area", "Guest Parking",
      ],
      neighborhod: [
        "Private Gated Community",
        "CCTV in Common Areas",
        "Clubhouse",
        "Basketball Court",
        "Playground",
        "Spacious Driveway",
        "Lush Greenery"
      ],
      vicinity: ["Bonifacio Global City"],
      establishements: {
        foodhubs: ['BGC Food Hubs'],
        grocery: ['SM Hypermarket'],
        gym: ['Anytime Fitness Bonifacio'],
        school: ['University of Makati', 'De La Salle University Rufino Campus',
          'The British School Manila', 'International School Manila', 'Everest Academy',
          'Fort Bonifacio Highschool'
        ],
        mall: ['Market Market', 'SM Aura', 'BGC Uptown Mall', 'Venice Grand Canall',
          'SM Mega Mall', 'Rustan\'s - Shangri-La Plaza'
        ],
        hospital: [
          'Unciano General Hospital', 'St.Lukes Medical Center BGC', 'Ospital ng Makati',
          'The Medical City'
        ]
      }
    }
  },
  {
    id: 6,
    name: 'Property Six',
    location: 'Location Six',
    price: 10000000,
    src: '/src/assets/images/backgrounds/bg-subscribe-2.jpg',
    description: 'Description for Property Six',
    features: {
      home: ["Maid's Room", "Smart Home", "Walk-In Closet", "Dirty Kitchen", "Family Room",
        "Guest Room", "Spacious Master Bedroom", "Porch", "Barbecue Area", "Stunning Architecture",
        "A/C Units Included", "Swimming Pool", "Lush Garden", "Led Lights", "High Ceiling",
        "Foyer", "Water Storage Tracking", "High Fence", "Laundry Area", "Driver's Room", "Gym",
        "Breathtaking Views", "Utility Area", "Guest Parking",
      ],
      neighborhod: [
        "Private Gated Community",
        "CCTV in Common Areas",
        "Clubhouse",
        "Basketball Court",
        "Playground",
        "Spacious Driveway",
        "Lush Greenery"
      ],
      vicinity: ["Bonifacio Global City"],
      establishements: {
        foodhubs: ['BGC Food Hubs'],
        grocery: ['SM Hypermarket'],
        gym: ['Anytime Fitness Bonifacio'],
        school: ['University of Makati', 'De La Salle University Rufino Campus',
          'The British School Manila', 'International School Manila', 'Everest Academy',
          'Fort Bonifacio Highschool'
        ],
        mall: ['Market Market', 'SM Aura', 'BGC Uptown Mall', 'Venice Grand Canall',
          'SM Mega Mall', 'Rustan\'s - Shangri-La Plaza'
        ],
        hospital: [
          'Unciano General Hospital', 'St.Lukes Medical Center BGC', 'Ospital ng Makati',
          'The Medical City'
        ]
      }
    }
  },
]

export default function Featured() {

  return (
    <section className="section featured-section bg-(--bg)">
      <div className="featured-container min-h-svh">
        <Spacer />
        <SectionTitle title="Featured Properties" />
        <div className="featured-content p-(--pad-margin-n) max-w-7xl mx-auto">
          <div className="card-container w-full h-full flex flex-wrap gap-2.5">
            {FEATURED_PROPERTIES.map(property => (
              <Card
                key={property.id}
                className={cn(
                  "relative flex-1/2 sm:flex-1/3 lg:flex-1/4 gap-0 justify-between p-0 rounded-md dark-glass hover:shadow-(--white-shadow)",
                )}>
                <CardHeader className="overlay group relative p-0 overflow-hidden mb-(--pad-margin-n) rounded-t-md">
                  <Badge variant={"secondary"} className="absolute top-2 left-2 z-10 outline bg-black/30 shadow-(--white-shadow) text-accent py-3">
                    <LocateFixed data-icon="inline-start" />
                    {property.location}
                  </Badge>
                  <div className="card-img w-full group aspect-16/10">
                    <img src={property.src} alt={property.name} className="object-cover aspect-16/10 group-hover:scale-110 duration-200" />
                  </div>
                </CardHeader>
                <CardContent className="place-items-start px-(--pad-margin-n) text-accent mb-(--pad-margin-n)">
                  <div className="">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{
                      `${property.price.toLocaleString(undefined, {
                        style: "currency",
                        currency: "php",
                      })}`
                    }
                    </h5>
                    <a href="#" className="text-lg font-medium">
                      {property.description}
                    </a>
                    <div className="flex items-center gap-6 my-2">
                      <div className="flex items-center gap-2">
                        <FaBed /><span className="text-sm"> 4 Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaShower /><span className="text-sm"> 5 Bathrooms</span>
                      </div>
                    </div>
                    <div className="">Available</div>
                  </div>
                </CardContent>
                <CardFooter className="px-(--pad-margin-n) pb-(--pad-margin-n)">
                  <Button
                    variant={"primary"}
                    className={"btn-primary"}
                  >
                    <RippleEffect />
                    {"View more"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

