// types.ts (you can separate this if needed)
export interface BuyerInquiry {
  name: string
  email: string
  budget: number
  minSize: number
  howToAddress: 'mr' | 'ms' | 'mrs' | 'dr' | 'mx' | 'other'
  personnelRole: 'buyer' | 'agent' | 'investor' | 'other'
  createdAt: string
}

export interface Location {
  location_city: string
}

export interface PropertyType {
  property_type: string
}

// API Utility Function
const fetchFromAPI = async (endpoint: string) => {
  try {
    const res = await fetch(`/api/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`)

    const data = await res.json()
    return data.docs || []
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    return []
  }
}

// ✅ Fetch All Locations (Only City Names)
export const fetchLocationCities = async (): Promise<string[]> => {
  const locations: Location[] = await fetchFromAPI('location')
  return locations.map((loc) => loc.location_city)
}

// ✅ Fetch All Location Data
export const fetchAllLocations = async (): Promise<Location[]> => {
  return await fetchFromAPI('location')
}

// ✅ Fetch Property Types
export const fetchAllPropertyTypes = async (): Promise<PropertyType[]> => {
  return await fetchFromAPI('property-type')
}

// ✅ Fetch Only Property Type Names
export const fetchPropertyTypeNames = async (): Promise<string[]> => {
  const res = await fetch('/api/property-type') // or your actual endpoint
  const data = await res.json()
  return data.docs.map((doc: { name: string }) => doc.name)
}

export const fetchBuyerInquiries = async (): Promise<BuyerInquiry[]> => {
  return await fetchFromAPI('buyer-inquiry')
}

// ✅ Fetch buyer names (example utility if needed)
export const fetchBuyerNames = async (): Promise<string[]> => {
  const buyers: BuyerInquiry[] = await fetchFromAPI('buyer-inquiry')
  return buyers.map((b) => b.name)
}
