import { notFound } from 'next/navigation'
import Breadcrumbs from '../../components/ui/BreadCrumbs'
import PropertyListing from '../../components/ui/PropertyListing'
import PropertyDetails from '../../components/ui/PropertyDetails'
import FeatureSection from '../../components/ui/FeatureSection'
import { fetchProjectOverviewBySlug } from '../../utils/api'

interface Props {
  params: {
    slug: string
  }
}

export default async function PropertyPage(props: Props) {
  const { slug } = props.params

  console.log("Received slug param:", slug)

  const property = await fetchProjectOverviewBySlug(slug)

  if (!property) return notFound()

  const galleryImages = property.gallery_images ?? []

  const propertyDetailsRaw = property.property_details
  const details = propertyDetailsRaw
    ? {
        propertyType: propertyDetailsRaw.property_type,
        floorArea: propertyDetailsRaw.floor_area ?? '',
        unitTypes: propertyDetailsRaw.unit_types ?? '',
        price: propertyDetailsRaw.price,
        status: propertyDetailsRaw.property_status ?? '',
        location: propertyDetailsRaw.location,
      }
    : {
        propertyType: '',
        floorArea: '',
        unitTypes: '',
        price: '',
        status: '',
        location: '',
      }

  // const pricing = property.pricing_payment_plans ?? {
  //   price_range: [],
  //   flexible_payment_options: [],
  // }

  // const locationPoints = property.location_highlights ?? []

  // const mapFeatureArray = (arr?: { point: string }[]) =>
  //   (arr ?? []).map((item, index) => ({
  //     id: index.toString(),
  //     point: item.point,
  //   }))

      const mapFeatureArray = (arr?: { point: string }[]) =>
      (arr ?? []).map((item, index) => ({
        id: index.toString(),
        point: item.point,
      }))
      
    const locationPoints = mapFeatureArray(property.location_highlights)

    const pricing = {
      price_range: mapFeatureArray(property.pricing_payment_plans?.price_range),
      flexible_payment_options: mapFeatureArray(property.pricing_payment_plans?.flexible_payment_options),
    }


  const features = {
    nature_living: mapFeatureArray(property.features_amenities?.nature_living),
    building_unit_features: mapFeatureArray(property.features_amenities?.building_unit_features),
    recreational_facilities: mapFeatureArray(property.features_amenities?.recreational_facilities),
    convenience_accessibility: mapFeatureArray(
      property.features_amenities?.convenience_accessibility,
    ),
  }

  return (
    <div className="pt-[80px]">
      <div className="pt-5">
        <Breadcrumbs title={property.title} />
        <PropertyListing
          images={galleryImages}
          video={property.promo_video}
          title={property.title}
          location={property.property_details?.location || ''}
          price={property.property_details?.price || ''}
        />
        <PropertyDetails
          overview={property.overview}
          details={details}
          pricing={pricing}
          locationPoints={locationPoints}
        />
        <FeatureSection
          features={features}
          locationPoints={locationPoints}
          pricing={pricing}
        />
      </div>
    </div>
  )
}
