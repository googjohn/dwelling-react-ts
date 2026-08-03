import { Spacer } from "@/components/ui/spacer";
import { SectionTitle } from "@/segments/sectionTitle";

export default function About() {
  return (
    <section className="section about-section">
      <div className="about-container">
        <Spacer />
        <SectionTitle title="About" />
      </div>
    </section>
  )
}