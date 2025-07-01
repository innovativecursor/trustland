//type.ts (separate as per need)x
import { StaticImageData } from 'next/image'

export interface BuyerInquiry {
  name: string
  email: string
  budget: number
  minSize: number
  howToAddress: 'mr' | 'ms' | 'mrs' | 'dr' | 'mx' | 'other'
  personnelRole: 'buyer' | 'agent' | 'investor' | 'other'
  createdAt: string
  sourcePage?: string
  phone?: string
  serviceType?: string
  message?: string
}

export interface Location {
  id: string
  location_city: string
  location_province: string
  location_image?: {
    url: string
  }
  createdAt?: string
  updatedAt?: string
}

export interface PropertyType {
  property_type: any
  name: string
}

export interface ProjectOverview {
  title: string
  slug: string
  overview: string
  gallery_images?: any[]
  promo_video?: any

  property_details?: {
    property_type: string
    floor_area?: string
    unit_types?: string
    price: string
    property_status?: string
    location: Location // fixed from string to object
    bedroom?: string
  }

  features_amenities?: {
    nature_living?: { point: string }[]
    building_unit_features?: { point: string }[]
    recreational_facilities?: { point: string }[]
    convenience_accessibility?: { point: string }[]
  }

  pricing_payment_plans?: {
    price_range?: { point: string }[]
    flexible_payment_options?: { point: string }[]
  }

  location_highlights?: { point: string }[]

  card_data?: {
    beds?: number
    baths?: number
    area?: number
    image: any
    badges?: { badge: string }[]
  }

  prop_featured?: boolean
  prop_offer?: boolean
}

export interface ServiceCard {
  heading: string
  subheading: string
  bgImage: { url: string } | null
  numberImage: { url: string } | null
  points: {
    title: string
    description: string
  }[]
}

export interface Agent {
  name: string
  email: string
  phone: string
  rating: number
  image: {
    url: string
  } | null
}

export interface Discount {
  name: 'perfectHouseDiscount'
  label: 'Perfect House Discount (%)'
  type: 'number'
  required: true
  defaultValue: '15'
}

// API BASE CONFIG 
const API_BASE_URL =
  typeof window === 'undefined' ? process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000' : ''

const fetchFromAPI = async (endpoint: string, params?: Record<string, string>): Promise<any[]> => {
  try {
    const query = params ? `?${new URLSearchParams(params).toString()}` : ''
    const fullUrl = `${API_BASE_URL}/api/${endpoint}${query}`

    const res = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`)

    const data = await res.json()
    return data.docs || []
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    return []
  }
}

// ✅ Fetch All Location City Names
export const fetchLocationCities = async (): Promise<string[]> => {
  const locations: Location[] = await fetchFromAPI('location')
  return locations.map((loc) => loc.location_city)
}

// ✅ Fetch All Location Objects
export const fetchAllLocations = async (): Promise<Location[]> => {
  return await fetchFromAPI('location')
}

// ✅ Fetch All Property Types
export const fetchAllPropertyTypes = async (): Promise<PropertyType[]> => {
  return await fetchFromAPI('propertyType')
}

// ✅ Fetch Only Property Type Names
export const fetchPropertyTypeNames = async (): Promise<string[]> => {
  const res = await fetch('/api/propertyType', { cache: 'no-store' })
  const data = await res.json()
  return data.docs.map((doc: { name: string }) => doc.name)
}

// ✅ Fetch All Buyer Inquiries
export const fetchBuyerInquiries = async (): Promise<BuyerInquiry[]> => {
  return await fetchFromAPI('buyer-inquiry')
}

// ✅ Fetch Buyer Names Only
export const fetchBuyerNames = async (): Promise<string[]> => {
  const buyers: BuyerInquiry[] = await fetchFromAPI('buyer-inquiry')
  return buyers.map((b) => b.name)
}

// ✅ Fetch Project By Slug (with depth)
export const fetchProjectOverviewBySlug = async (slug: string): Promise<ProjectOverview | null> => {
  const results: ProjectOverview[] = await fetchFromAPI('project-overview', {
    'where[slug][equals]': slug,
    depth: '2',
  })

  return results.length ? results[0] : null
}

// ✅ Fetch All Project Slugs
export const fetchAllProjectSlugs = async (): Promise<string[]> => {
  try {
    const res = await fetch('/api/project-overview', { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch project slugs')

    const data = await res.json()
    return data?.docs?.map((doc: { slug: string }) => doc.slug) || []
  } catch (error) {
    console.error('Error fetching project slugs:', error)
    return []
  }
}

// ✅ Fetch All Project Overviews
export const fetchAllProjects = async (): Promise<ProjectOverview[]> => {
  try {
    const res = await fetch('/api/project-overview?depth=2', {
      cache: 'no-store',
    })

    if (!res.ok) throw new Error('Failed to fetch project data')

    const data = await res.json()
    return data?.docs || []
  } catch (error) {
    console.error('Error fetching all projects:', error)
    return []
  }
}

// ✅ Fetch All Services
export const fetchServiceCards = async (): Promise<ServiceCard[]> => {
  return await fetchFromAPI('services')
}

// ✅ Fetch Single Agent
export const fetchAgent = async (): Promise<Agent | null> => {
  const agents: Agent[] = await fetchFromAPI('agent')
  return agents.length ? agents[0] : null
}

// ✅ Fetch Discount For Perfect House Section
export const fetchPerfectHouseDiscount = async (): Promise<string> => {
  const discounts: { percentage: string }[] = await fetchFromAPI('discount')
  return discounts.length ? discounts[0].percentage : '15'
}
