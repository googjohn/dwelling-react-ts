import { Spacer } from "@/components/ui/spacer";
import { SectionTitle } from "@/segments/sectionTitle";
import { FaEnvelope, FaGear, FaPhone } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RippleEffect } from "@/components/ui/ripple";

const USER_MESSAGE_SCHEMA = {
  userDetail: [
    {
      title: 'First Name',
      type: 'text',
      placeholder: 'John',
      isRequired: true,
      id: 'fname',
    },
    {
      title: 'Last Name',
      type: 'text',
      placeholder: 'Goog',
      isRequired: false,
      id: 'lname',
    },
  ],
  contactDetail: [
    {
      title: 'Email',
      type: 'email',
      placeholder: 'youremail@here.com',
      isRequired: true,
      id: 'email',
    },
    {
      title: 'Phone',
      type: 'tel',
      placeholder: '+63901-234-5678',
      isRequired: true,
      id: 'phone',
    },
  ],
  customerType: [
    {
      title: 'Customer Type',
      type: 'select',
      placeholder: 'Choose customer type',
      isRequired: true,
      id: 'customer',
    }
  ],
  messageDetail: [
    {
      title: 'Your Message',
      type: 'textarea',
      placeholder: 'Please leave your message.',
      isRequired: false,
      id: 'message',
    },
  ],
}
const CUSTOMER_TYPE = [
  'Buyer',
  'Seller',
  'Advertiser',
  'Subscriber',
  'Realtor',
  'Other'
]
export default function Contact() {
  return (
    <section className="section contact-section">
      <div className="contact-container z-10 relative  bg-(--bg-base)">
        <Spacer />
        <SectionTitle title="Contact Us" />
        <div className="contact-content">
          <div className="sub-heading container mx-auto text-center">
            <h3>Let us know your concern.</h3>
          </div>
          <div className="section-content p-(--pad-margin-n)">
            <ContactForm />
          </div>
          <AdditionalContactInfo />
        </div>
      </div>
      <div className="absolute bottom-0 z-0 w-full h-7/12 bg-white bg-linear-to-b from-45.5% from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.825)] to-20%"></div>
    </section>
  )
}

function AdditionalContactInfo() {
  return (
    <div className="max-w-7xl p-(--pad-margin-n) mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-2.5 *:rounded-3xl *:shadow-(--white-shadow) *:px-5 *:p-10 text-[clamp(.875rem,3.5vw,1rem)]">
      <div className="flex-item  w-full email-flex text-center ">
        <div className="text-5xl flex justify-center">
          <FaEnvelope className="text-(--primary-color)" />
        </div>
        <h2 className="text-[clamp(1.25rem,6vw,1.75rem)] font-semibold mb-2.5 gradient-text text-shadow-lg">Email us</h2>
        <p className="mb-2.5">Email us for general queries, including marketing and partnership opportunities.</p>
        <a href="#contact-section">topagent@miniOne.ph</a>
      </div>
      <div className="flex-item w-full call-flex text-center ">
        <div className="text-5xl flex justify-center">
          <FaPhone className="text-(--primary-color)" />
        </div>
        <h2 className="text-[clamp(1.25rem,6vw,1.75rem)] font-semibold mb-2.5 gradient-text text-shadow-lg">Call us</h2>
        <p className="mb-2.5">Call us to speak to a member of our team. We are always happy to help.</p>
        <span>+63912-345-6789</span>
      </div>
      <div className=" flex-item w-full sm:col-span-2 md:col-span-1 support-flex text-center">
        <div className="text-5xl flex justify-center">
          <FaGear className="text-(--primary-color)" />
        </div>
        <h2 className="text-[clamp(1.25rem,6vw,1.75rem)] font-semibold mb-2.5 gradient-text text-shadow-lg">Support</h2>
        <p className="mb-2.5">Email us for general queries, including marketing and partnership opportunities.</p>
        <Button
          variant={'primary'}
          className="btn-primary"
        >
          <RippleEffect />
          SUPPORT CENTER
        </Button>
      </div>
    </div>
  )
}

function ContactForm() {
  const groupSchemas = Object.values(USER_MESSAGE_SCHEMA)

  return (
    <div className="contact-form max-w-150 shadow-(--white-shadow) dark-glass  mx-auto p-(--pad-margin-n) rounded-2xl">
      <form action="" className="form">
        <FieldSet className="gap-2.5" >
          {groupSchemas.map((groupSchema, i) => (
            <FieldGroup key={i} className="sm:flex-row gap-2.5">
              {groupSchema.map((schema) => {
                return (
                  // for select type
                  schema.type === 'select' ?
                    <Field key={schema.id}>
                      <FieldLabel htmlFor={schema.id}>
                        {schema.title}
                      </FieldLabel>
                      <Select id={schema.id}>
                        <SelectTrigger className={"rounded-lg bg-white/30 border-white/40"}>
                          <SelectValue placeholder={schema.placeholder} className={"text-accent"} />
                        </SelectTrigger>
                        <SelectContent alignItemWithTrigger={false} className={"bg-black/20 backdrop-blur-3xl text-accent"}>
                          <SelectGroup className={""}>
                            {CUSTOMER_TYPE.map((customer, index) => (
                              <SelectItem
                                key={`${customer}-${index}`}
                                value={customer}
                              >
                                {customer}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field> :
                    // for textarea type
                    schema.type === 'textarea' ?
                      <Field key={schema.id}>
                        <FieldLabel htmlFor={schema.id}>{schema.title}</FieldLabel>
                        <Textarea
                          id={schema.id}
                          placeholder={schema.placeholder}
                          className={"rounded-lg placeholder:text-accent/50 bg-white/30 border-white/40"}
                        />
                      </Field> :
                      // for input type
                      <Field key={schema.id}>
                        <FieldLabel htmlFor={schema.id}>{schema.title}</FieldLabel>
                        <Input
                          id={schema.id}
                          type={schema.type}
                          required={schema.isRequired}
                          placeholder={schema.placeholder}
                          className="rounded-full placeholder:text-accent/50 bg-white/30 border-white/40"
                        />
                      </Field>
                )
              })}
            </FieldGroup>
          ))}
          <FieldGroup className="gap-2.5">
            <div className="contact-reminder my-5">
              <p className="text-[clamp(.875rem,3.25vw,1rem)] text-justify">
                By submitting this form you agree to our
                <a href="#" className="underline"> terms and conditions </a>
                and our <a href="#" className="underline"> privacy policy </a>
                which explains how we may collect, use and disclose your
                personal information including to third parties.</p>
            </div>
            <Button
              variant={"primary"}
              className="btn-primary self-center"

            >
              <RippleEffect />
              Send Message
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
