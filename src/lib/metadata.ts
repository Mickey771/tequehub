import { Metadata } from "next";

const BASE_URL = "https://www.teque.tech";

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
    // Remove trailing slash and ensure leading slash
    const cleanPath = path === "/" ? "" : `/${path.replace(/^\/|\/$/g, "")}`;
    return `${BASE_URL}${cleanPath}`;
}

/**
 * Generate base metadata with canonical URL
 */
export function generateMetadata({
    title,
    description,
    path,
    image = "/logo.jpg",
    noIndex = false,
}: {
    title: string;
    description: string;
    path: string;
    image?: string;
    noIndex?: boolean;
}): Metadata {
    const canonicalUrl = getCanonicalUrl(path);

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "Teque Hub",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        robots: noIndex
            ? {
                index: false,
                follow: false,
            }
            : undefined,
    };
}
