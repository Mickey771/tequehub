import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/admin/',
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Google-Extended', 'PerplexityBot', 'OAI-SearchBot'],
                allow: '/',
            }
        ],
        sitemap: 'https://www.teque.tech/sitemap.xml',
    }
}
