const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/portfolio' : ''

export const getAssetPath = (path: string) => {
  if (path.startsWith('http')) return path // External URLs
  return `${basePath}${path}`
}

export const getBasePath = () => basePath
