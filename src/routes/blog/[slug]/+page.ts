import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../posts/${params.slug}.md`);

		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch (e) {
		throw error(404, `Post not found: ${params.slug}`);
	}
};

export async function entries() {
	const postFiles = import.meta.glob('../posts/*.md');
	const slugs: Array<{ slug: string }> = [];

	for (const path in postFiles) {
		const post = await postFiles[path]();
		const metadata = (post as any).metadata;

		if (metadata && metadata.slug) {
			slugs.push({ slug: metadata.slug });
		}
	}

	return slugs;
}
