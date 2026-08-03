import {
  FaLinkedin,
  FaChevronRight,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
import appFullLogo from '@/assets/images/logo/logo-no-bg.svg'
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const THE_COMPANY = [
  { name: 'Site Map', source: '#' },
  { name: 'Legal', source: '#' },
  { name: 'Agent Admin', source: '#' },
  { name: 'Careers', source: '#' },
  { name: 'Affiliate', source: '#' },
  { name: 'Privacy Policy', source: '#' },
]

const SITES = [
  { location: "Baguio City", source: "#" },
  { location: "Boracay Island", source: "#" },
  { location: "Cebu City", source: "#" },
  { location: "Davao City", source: "#" },
  { location: "Tagaytay City", source: "#" },
  { location: "Metro Manila", source: "#" },
]

const LINKS = [
  { element: <FaSquareFacebook />, source: 'www.facebook.com' },
  { element: <FaSquareXTwitter />, source: 'www.twitter.com' },
  { element: <FaSquareInstagram />, source: 'www.instagram.com' },
  { element: <FaLinkedin />, source: 'www.linkedin.com' },
]

export default function Footer() {

  return (
    <footer className="section-end w-full h-full bg-lg text-accent relative">
      <div className="footer-container bg-(--bg-base) ">
        <FooterContainer>
          <FooterLogo />
          <FooterContent>
            <FooterItem classes="col-span-12 md:col-span-12 lg:col-span-4" classesExtra="text-center">
              <FooterItemHeader title="topagent.ph" headerStyle="hidden lg:block" />
              <FooterItemContent>
                <div className="max-w-96 p-2.5 sm:p-0">
                  <p className="foot-text text-justify text-[clamp(.875rem,3.25vw,1rem)]">
                    TopAgentPH is a real estate company based in the Philippines
                    that specializes in providing exceptional service to clients
                    in buying, selling, and renting properties.
                  </p>
                </div>
                <div className="">
                  <ul className="footer-list text-[clamp(.875rem,3.25vw,1rem)]">
                    <li>
                      <span className="text-light">Phone </span> <span className="foot-text"> +63912-345-6789</span>
                    </li>
                    <li>
                      <span className="text-light">Email </span> <span className="foot-text">
                        <a href="#contact-section">topagent@miniOne.ph</a>   </span>
                    </li>
                  </ul>
                </div>
              </FooterItemContent>
            </FooterItem>
            <FooterItem classes="col-span-12 md:col-span-6 lg:col-span-4">
              <FooterItemHeader title="The Company" />
              <FooterItemContent>
                <ul className="footer-company text-[clamp(.875rem,3.25vw,1rem)]">
                  {THE_COMPANY.map((item, index) => {
                    return (
                      <li key={index}
                        className="flex gap-2.5 items-center"
                      >
                        <FaChevronRight />
                        <a href={item.source}>{item.name}</a>
                      </li>
                    )
                  })
                  }
                </ul>
              </FooterItemContent>
            </FooterItem>
            <FooterItem classes="col-span-12 md:col-span-6 lg:col-span-4">
              <FooterItemHeader title="Key Locations" />
              <FooterItemContent>
                <ul className="footer-company text-[clamp(.875rem,3.25vw,1rem)]">
                  {SITES.map((site, index) => {
                    return (
                      <li key={index}
                        className="flex gap-2.5 items-center"
                      >
                        <FaChevronRight />
                        <span>{site.location}</span>
                      </li>
                    )
                  })}
                </ul>
              </FooterItemContent>
            </FooterItem>
            <FooterItem classes="col-span-12 md:col-span-12 lg:col-span-12">
              <FooterItemContent classes="w-full">
                <div className="footer-social p-2.5 sm:p-5">
                  <ul className="foot-social flex justify-center gap-2.5 text-[clamp(1.5rem,6vw,1.875rem)]">
                    {LINKS.map((link, index) => {
                      return (
                        <li key={index}>
                          <a href={link.source}
                            className="hover:text-(--primary-color) duration-500"
                          >
                            {link.element}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                {/* <hr className="w-full" /> */}
                <div className="foot-last-item p-2.5 sm:p-5 border-t w-full">
                  <p className="foot-text text-[clamp(.875rem,3.25vw,1rem)]">
                    &copy;
                    <span className=""> topagent.ph</span> All Rights Reserved.
                  </p>
                </div>
              </FooterItemContent>
            </FooterItem>
          </FooterContent>
        </FooterContainer>
      </div>
    </footer>
  )
}

function FooterContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto h-full w-full bg-white/10 bg-linear-to-b from-45.5% from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.825)] to-20%">
      {children}
    </div>
  )
}
function FooterContent({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 place-items-center gap-2.5 h-full w-full max-w-7xl mx-auto lg:pl-5">
      {children}
    </div>
  )
}
function FooterItem({ classes, classesExtra, children }: { classes?: string, classesExtra?: string, children?: ReactNode }) {
  return (
    <div className={cn(
      "col-span-12 md:col-span-12 lg:col-span-4",
      classes
    )}>
      <div className={cn(
        'foot-item w-full',
        classesExtra
      )}>
        {children}
      </div>
    </div>
  )
}
function FooterItemHeader({ title, headerStyle }: { title: string, headerStyle?: string }) {
  return (
    <div className={cn(
      "foot-item-header",
      headerStyle
    )}>
      <h3 className="text-[clamp(1.25rem,6vw,1.75rem)] font-semibold my-2.5 sm:my-5 gradient-text text-shadow-lg">
        {title}
      </h3>
    </div>
  )
}
function FooterItemContent({ classes, children }: { classes?: string, children?: ReactNode }) {
  return (
    <div className={cn(
      classes
    )}>
      {children}
    </div>
  )
}
function FooterLogo() {
  return (
    <div className="h-full w-full flex justify-center py-2.5 sm:py-5">
      <img
        src={appFullLogo}
        alt="footer logo"
        className="w-[clamp(15rem,50vw,20rem)]"
      />
    </div>
  )
}

