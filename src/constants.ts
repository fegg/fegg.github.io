type MapKey<T extends Map<any, any>> = T extends Map<infer K, any> ? K : never

/**
 * Metadata for your site
 */
export const SITE: Record<string, string> = {
	/**
	 * Base URL of your site, used in sitemap generation
	 */
	url: 'https://fegg.github.io',
	/**
	 * Site-wide title
	 */
	title: '大毛星人',
	/**
	 * Used on index page and as a fallback if no title is set
	 */
	titleDefault: '大毛星人',
	/**
	 * Used in meta tags, RSS feed, and other places
	 */
	description: 'Follow Your Heart, Think Independently, Think Deeply',
	/**
	 * Language used in the <html> tag
	 */
	lang: 'zh_cn',
	/**
	 * Name of the image inside `public` folder that should be used as a default og:image
	 */
	defaultOgImage: '/og-image.png',
	/**
	 * Default author name that gets added to meta tags
	 */
	defaultAuthor: 'Lucas.X',
}

interface Header {
	internal: Array<{ title: string, url: string }>
	external: Array<{ title: string, url: string, props?: Record<string, unknown> }>
}

/**
 * Links used in the header
 */
export const HEADER: Header = {
	/**
	 * Internal links to other subpages shown in the header navigation
	 */
	internal: [
		{
			title: 'Blog',
			url: '/blog/',
		},
	],
	/**
	 * Arbitrary list of links (e.g. social media) shown on the right side of the header
	 */
	external: [],
}

/**
 * A map of name - slug pairs
 */
export const FRONTMATTER_TAGS = new Map(
	[
		['Default', 'default'] as const,
		['Coding', 'coding'] as const,
		['Ai', 'ai'] as const,
		['Open Source', 'open-source'] as const,
		['Heart', 'heart'] as const,
	],
)

export type FrontmatterTag = MapKey<typeof FRONTMATTER_TAGS>

export const SKIP_NAV_ID = 'skip-to-content'

/**
 * Available "asides" that can be used in MDX files
 */
export const ASIDE_TYPES = ['note', 'tip', 'caution', 'danger'] as const
export type AsideType = (typeof ASIDE_TYPES)[number]
