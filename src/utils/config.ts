// Configuration for base path
export const BASE_PATH = '/confidence'

// Helper function to get asset path
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${BASE_PATH}/${cleanPath}`
}