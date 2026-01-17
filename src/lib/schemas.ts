/**
 * Generate Service schema for a service page
 */
export function generateServiceSchema({
    name,
    description,
    provider = "Teque Hub",
    areaServed = ["US", "CA", "GB", "AE", "SA"],
    serviceType,
}: {
    name: string;
    description: string;
    provider?: string;
    areaServed?: string[];
    serviceType?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
            "@type": "Organization",
            name: provider,
            url: "https://www.teque.tech",
        },
        areaServed: areaServed.map((country) => ({
            "@type": "Country",
            name: country,
        })),
        serviceType: serviceType || name,
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${name} Services`,
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name,
                    },
                },
            ],
        },
    };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema({
    headline,
    description,
    image,
    datePublished,
    dateModified,
    authorName = "Teque Hub",
}: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        image,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            "@type": "Organization",
            name: authorName,
            url: "https://www.teque.tech",
        },
        publisher: {
            "@type": "Organization",
            name: "Teque Hub",
            logo: {
                "@type": "ImageObject",
                url: "https://www.teque.tech/logo.jpg",
            },
        },
    };
}

/**
 * Generate Review schema for testimonials
 */
export function generateReviewSchema({
    itemReviewed,
    reviewBody,
    reviewRating,
    author,
    datePublished,
}: {
    itemReviewed: string;
    reviewBody: string;
    reviewRating: number;
    author: string;
    datePublished: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
            "@type": "Service",
            name: itemReviewed,
        },
        reviewBody,
        reviewRating: {
            "@type": "Rating",
            ratingValue: reviewRating,
            bestRating: 5,
        },
        author: {
            "@type": "Person",
            name: author,
        },
        datePublished,
    };
}
