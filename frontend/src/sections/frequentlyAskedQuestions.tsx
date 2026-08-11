import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Spacer } from "@/components/ui/spacer"
import { cn } from "@/lib/utils"
import { SectionTitle } from "@/segments/sectionTitle"

const ACCORDION_ITEMS = [
  {
    value: "location",
    question: "Where exactly are you located?",
    answer: "18th floor, The W Fifth Avenue, 5th Ave, Taguig, 1630",
    link: "#",
  },
  {
    value: "how to buy",
    question: "How do I buy realty?",
    answer: "To buy realty, you should work with a licensed real estate agent who can help you find properties that meet your needs and budget. Once you've found a property you're interested in, you'll typically make an offer through your agent, and negotiate a price with the seller. You'll then need to secure financing, complete inspections, and close the sale.",
    link: "#",
  },
  {
    value: "broker",
    question: "Who is a real estate broker?",
    answer: `A real estate broker or agent is a licensed professional who helps
            buyers and sellers with the process of buying or selling
            realty.They typically work for a brokerage firm, and are
            responsible for helping clients find properties, negotiate
            prices, complete paperwork, and close deals.`,
    link: "#",
  },
  {
    value: "realty vs real property",
    question: "What is the difference between realty and real property?",
    answer: `Realty and real property are two terms used interchangeably to
            refer to land and any permanent improvements made to it.
            However, realty is more commonly used to refer to the physical
            aspects of real estate, while real property encompasses both
            physical and legal aspects, including ownership rights and
            legal interests.`,
    link: "#",
  },
  {
    value: "first step",
    question: "What is the first step of the home buying process?",
    answer: `Getting pre-approved for a mortgage is the first
            step of the home buying process. Getting a pre-approval letter from a
            lender get the ball rolling in the right direction.`,
    link: "#",
  },
  {
    value: "prepare to sell",
    question: "How do I prepare my home before I sell it?",
    answer: `When preparing to sell your home, the first thing to do is
            make it presentable. This means giving the entire house a thorough cleaning and
            making small repairs. Mop the floors, scrub the bathrooms, and get rid of the
            grime in the kitchen.
            \n Little things like patching holes in the wall, changing burned-out lightbulbs,
            and repairing broken appliances can make your place stand out in a crowded market.
            \n And don’t forget about paint — returning the walls to a neutral color can help 
            your house sell quicker. White, creams, and grays can make rooms seem bigger 
            and help potential buyers see themselves living there.`,
    link: "#",
  },
  {
    value: "assessed value",
    question: "Why is my home’s assessed value different from the market value?",
    answer: `Your home's assessed value and market value are 
            each determined by different factors. Buyers and sellers affect the 
            market value of a home, while county assessors calculate the assessed 
            value for property tax purposes.
            \n Your home’s market value may be higher than its assessed value. 
            That’s because buyers are willing to pay more than the home is technically
            worth because of low inventory. Assessed value is only for calculating 
            your property taxes, so it is less influenced by swings in the market.
            \n Also, keep in mind that appraised value is separate from both market
            and assessed value. Appraised value is calculated by a licensed appraiser,
            usually to make sure your home is worth at least the value of your mortgage.`,
    link: "#",
  },
]
export default function FrequentlyAsked() {
  return (
    <section className={cn(
      "section asked-section bg-(--bg)",
    )}>
      <div className="section-container min-h-svh">
        <Spacer />
        <SectionTitle title="Frequently Asked Questions" />
        <div className="section-content relative p-(--pad-margin-n)">
          <Accordion multiple defaultValue={["location"]} className={cn(
            "relative max-w-4xl mx-auto p-(--pad-margin-n)"
          )}>
            {ACCORDION_ITEMS.map(item => (
              <AccordionItem key={item.value} value={item.value} className={cn(
                "border-b last:border-b-0"
              )}>
                <AccordionTrigger className={"txt-normal text-accent"}>{item.question}</AccordionTrigger>
                <AccordionContent className={"text-accent/60 px-5"}>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}