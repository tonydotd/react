import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data-with-examles"
import Section from "./Section"

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept key={index} {...conceptItem} />
        ))}
      </ul>
    </Section>
  )
}