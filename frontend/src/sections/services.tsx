import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Spacer } from "@/components/ui/spacer";
import { SectionTitle } from "@/segments/sectionTitle";
import { SubHeading } from "@/segments/subHeading";
import { BiSolidBank } from "react-icons/bi";
import { FaBinoculars, FaGavel, FaHandshake, FaLaptop, FaListCheck } from "react-icons/fa6";

const SERVICES = [
  {
    title: 'Land Titling Assistance',
    icon: <FaHandshake />,
    description: "Guidance and support in processing land titles to help ensure a smooth and hassle-free transfer of ownership."
  },
  {
    title: 'PAG-IBIG Assistance',
    icon: <FaListCheck />,
    description: "End-to-end assistance with PAG-IBIG housing loan applications, requirements, and processing."
  },
  {
    title: 'Bank Loan Assistance',
    icon: <BiSolidBank />,
    description: "Expert support in securing bank financing, from document preparation to loan application and approval."
  },
  {
    title: 'Property Site Viewing',
    icon: <FaBinoculars />,
    description: "Scheduled property visits to help you explore locations and make informed buying decisions."
  },
  {
    title: 'Legal Assistance',
    icon: <FaGavel />,
    description: "Professional guidance on property-related legal matters, including documentation and contract review."
  },
  {
    title: 'Virtual Tour',
    icon: <FaLaptop />,
    description: "Experience properties remotely through interactive virtual tours, allowing you to view homes anytime, anywhere."
  },
]

export default function Services() {
  return (
    <section className="section services-section">
      <div className="services-container min-h-svh bg-(--bg-base-2)">
        <Spacer />
        <SectionTitle title="Our Services" />
        <div className="services-content max-w-7xl mx-auto p-(--pad-margin-n)">
          <SubHeading>
            Our services include but are not limited to property sales,
            rentals, leasing, and property management. Whether you're a
            first-time buyer or a seasoned investor, our team of agents
            will work tirelessly to ensure that you find the property that
            meets your needs and fits within your budget.
          </SubHeading>

          <div className="mx-auto gap-2.5 w-full h-full flex flex-wrap">
            {SERVICES.map((service, index) => {
              return (
                <Card key={index} className='gap-2.5 bg-(--bg) dark-glass ovl shadow-(--bs-cards) w-full sm:flex-4/12 lg:flex-3/12'>
                  <div className='w-full h-auto flex justify-center items-center text-5xl text-(--primary-color)'>
                    {service.icon}
                  </div>
                  <CardTitle className='text-center px-6 text-[clamp(1.25rem,6vw,1.5rem)] gradient-text text-shadow-lg'>
                    {service.title}
                  </CardTitle>
                  <CardContent className='w-full text-white/70 text-center text-[clamp(.875rem,3.25vw,1rem)]'>
                    {service.description}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}