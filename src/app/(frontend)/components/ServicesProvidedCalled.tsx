// pages/index.tsx or any page

import ServiceProvidedCard from "../components/ui/ServicesProvidedCard";
import bgImage1 from "../public/assets/ServicesAssets/real-estate-sector.png";
import bgImage2 from "../public/assets/ServicesAssets/monochrome-scene-depicting-life-workers-construction-industry-site.png";
import bgImage3 from "../public/assets/ServicesAssets/delimitation-two-land-plots.png";
import bgImage4 from "../public/assets/ServicesAssets/architect-working-blueprint-his-desk-office.png";
import numberImage1 from "../public/assets/ServicesAssets/num1.png";
import numberImage2 from "../public/assets/ServicesAssets/num2.png";
import numberImage3 from "../public/assets/ServicesAssets/num3.png";
import numberImage4 from "../public/assets/ServicesAssets/num4.png";

export default function HomePage() {
  return (
    <main className="p-4 mb-10">
      <ServiceProvidedCard
        bgImage={bgImage1}
        numberImage={numberImage1}
        heading="Legal & Paperwork Processing"
        subheading="Hassle-free property transactions with complete legal assistance."
        points={[
          {
            title: "Title Transfers & Deed Processing",
            description:
              "We ensure that all land titles are properly transferred and legally documented.",
          },
          {
            title: "Land Title Verification & Authentication",
            description:
              "Avoid scams by confirming the authenticity of land titles before purchase.",
          },
          {
            title: "Government Approvals & Permits",
            description:
              "We secure all necessary building permits, zoning clearances, and environmental compliance certificates.",
          },
          {
            title: "Tax Declaration & Property Assessment",
            description:
              "We assist in updating tax declarations and property valuation assessments for a smooth transaction.",
          },
          {
            title: "Estate Settlement & Land Partitioning",
            description:
               "For inherited properties, we help with legal documentation and partitioning among heirs.",
          },
        ]}
      />
      <ServiceProvidedCard
        bgImage={bgImage2}
        numberImage={numberImage2}
        heading="Construction Services"
        subheading="From road construction to residential and commercial buildings, we build with excellence."
        points={[
          {
            title: "Residential & Commercial Construction",
            description:
              "We construct high-quality homes, condominiums, and commercial buildings tailored to your needs.",
          },
          {
            title: "Road & Infrastructure Development ",
            description:
              " We specialize in building roads, drainage systems, and other infrastructure projects.",
          },
          {
            title: "Home Renovation & Remodeling",
            description:
              "Upgrade your space with modern designs and energy-efficient solutions.",
          },
          {
            title: "Interior Fit-Outs & Custom Builds",
            description:
              "We provide high-end interior designs for homes, offices, and commercial spaces",
          },
        ]}
      />
      <ServiceProvidedCard
        bgImage={bgImage3}
        numberImage={numberImage3}
        heading="Land Surveying Services"
        subheading="Accurate and professional land surveying for legal and construction purposes."
        points={[
          {
            title: "Boundary & Topographic Surveys",
            description:
              "We establish property boundaries and map terrain elevations.",
          },
          {
            title: "Subdivision & Lot Development Surveys",
            description:
              "We divide land into residential or commercial lots while fully complying with local zoning regulations.",
          },
          {
            title: "Construction Layout & Planning",
            description:
              "Ensuring precise measurements before starting construction.",
          },
          {
            title: "Geodetic Surveys with GPS Mapping",
            description:
              "Advanced land measurement using GPS and GIS technology.",
          },
        ]}
      />
      <ServiceProvidedCard
        bgImage={bgImage4}
        numberImage={numberImage4}
        heading="Architectural Design Services"
        subheading="Innovative & functional designs that bring your vision to life."
        points={[
          {
            title: "Conceptual Design & Space Planning",
            description:
              "We create efficient and aesthetic layouts for residential and commercial projects",
          },
          {
            title: "Building Design & 3D Visualization",
            description:
              "Visualize and explore every detail of your property in 3D environment before the actual construction starts.",
          },
          {
            title: "Permit Drawings & Compliance Documentation ",
            description:
              "We prepare architectural blueprints and secure necessary permits",
          },
          {
            title: "Sustainable & Smart Home Designs",
            description:
              "Energy-efficient and eco-friendly building solutions.",
          },
        ]}
      />
    </main>
  );
}
