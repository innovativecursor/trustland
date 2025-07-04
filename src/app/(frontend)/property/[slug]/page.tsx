import { notFound } from 'next/navigation'
import Breadcrumbs from '../../components/ui/BreadCrumbs'
import PropertyListing from '../../components/ui/PropertyListing'
import PropertyDetails from '../../components/ui/PropertyDetails'
import FeatureSection from '../../components/ui/FeatureSection'
import { fetchProjectOverviewBySlug } from '../../utils/api'

// eslint-disable-next-line @next/next/no-async-client-component
export default async function PropertyPage(props: { params: Promise<{ slug: string }> }) { 
  const { slug } = await props.params
  if (!slug) return notFound()

  const decodedSlug = decodeURIComponent(slug)

  try {
    const property = await fetchProjectOverviewBySlug(decodedSlug)
    if (!property) return notFound()

    const galleryImages = property.gallery_images ?? []

    const propertyDetailsRaw = property.property_details
    const location = propertyDetailsRaw?.location
    const locationText =
      typeof location === 'object' && location !== null
        ? `${location.location_city}, ${location.location_province}`
        : typeof location === 'string'
        ? location
        : '—'

    const details = propertyDetailsRaw
      ? {
          propertyType: propertyDetailsRaw.property_type,
          floorArea: propertyDetailsRaw.floor_area ?? '',
          unitTypes: propertyDetailsRaw.unit_types ?? '',
          price: propertyDetailsRaw.price,
          status: propertyDetailsRaw.property_status ?? '',
          location: locationText,
        }
      : {
          propertyType: '',
          floorArea: '',
          unitTypes: '',
          price: '',
          status: '',
          location: '',
        }

    const mapFeatureArray = (arr?: { point: string }[]) =>
      (arr ?? []).map((item, index) => ({
        id: index.toString(),
        point: item.point,
      }))

    const locationPoints = mapFeatureArray(property.location_highlights)

    const pricing = {
      price_range: mapFeatureArray(property.pricing_payment_plans?.price_range),
      flexible_payment_options: mapFeatureArray(
        property.pricing_payment_plans?.flexible_payment_options,
      ),
    }

    const features = {
      nature_living: mapFeatureArray(property.features_amenities?.nature_living),
      building_unit_features: mapFeatureArray(property.features_amenities?.building_unit_features),
      recreational_facilities: mapFeatureArray(
        property.features_amenities?.recreational_facilities,
      ),
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
            location={locationText}
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
  } catch (error) {
    console.error('Error loading property by slug:', error)
    return notFound()
  }
}
