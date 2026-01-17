import { MetadataRoute } from 'next'
import { blogPosts } from '@/components/Blog/data'
import { servicesData } from '@/components/Services/data';
import { caseStudies } from '@/components/CaseStudy/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.teque.tech'

    // Static pages
    const routes = [
        '',
        '/blog',
        '/blog/catalogue',
        '/about',
        '/team',
        '/case-study',
        '/meet-with-us',
        '/faq',
        '/privacy-policy',
        '/refund-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Blog posts
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // Services
    const servicePages = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Case Studies
    const caseStudyPages = caseStudies.map((study) => ({
        url: `${baseUrl}/case-study/${study.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...posts, ...servicePages, ...caseStudyPages]
}
