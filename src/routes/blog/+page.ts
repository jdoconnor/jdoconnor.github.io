import type { PageLoad } from './$types';

export const prerender = true;

export interface BlogPost {
	title: string;
	date: string;
	description: string;
	slug: string;
}

export const load: PageLoad = async () => {
	const postFiles = import.meta.glob('./posts/*.md');
	const posts: BlogPost[] = [];

	for (const path in postFiles) {
		const post = await postFiles[path]();
		const metadata = (post as any).metadata;

		if (metadata) {
			posts.push({
				title: metadata.title,
				date: metadata.date,
				description: metadata.description,
				slug: metadata.slug
			});
		}
	}

	// Sort posts by date (newest first)
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts
	};
};
