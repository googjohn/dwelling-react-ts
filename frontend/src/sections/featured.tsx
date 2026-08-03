import { Spacer } from "@/components/ui/spacer";
import { SectionTitle } from "@/segments/sectionTitle";

export default function Featured() {
  return (
    <section className="section featured-section">
      <div className="featured-container">
        <Spacer />
        <SectionTitle title="Featured Properties" />
      </div>
    </section>
  )
}