import type { MetadataRoute } from 'next'

const BASE_URL = 'https://evogroup.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/about',
    '/cases',
    '/contact',
    '/solutions',
    '/solutions/whatsapp',
    '/solutions/evopay',
    '/solutions/evoclinic',
    '/solutions/smartuchet',
    '/solutions/edo',
    '/solutions/cce',
    '/team',
    '/technology',
    '/privacy',
    '/terms',
  ]

  return pages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: path === '' ? 1 : path.startsWith('/solutions') ? 0.8 : 0.6,
  }))
}
