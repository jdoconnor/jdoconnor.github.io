<script lang="ts">
	import type { PageData } from "./$types";

	const { data }: { data: PageData } = $props();

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

<div class="max-w-4xl mx-auto">
	<article class="prose prose-lg max-w-none">
		<div class="mb-8">
			<a href="/blog" class="text-sm text-accent-primary hover:underline mb-4 inline-block">
				← Back to blog
			</a>
		</div>

		<header class="mb-8">
			<h1 class="h1 gradient-text mb-2">{data.metadata.title}</h1>
			<time class="text-sm opacity-70" datetime={data.metadata.date}>
				{formatDate(data.metadata.date)}
			</time>
		</header>

		<div class="blog-content">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>

<style>
	:global(.blog-content h1) {
		@apply text-3xl font-bold mt-8 mb-4;
	}

	:global(.blog-content h2) {
		@apply text-2xl font-bold mt-6 mb-3;
	}

	:global(.blog-content h3) {
		@apply text-xl font-bold mt-4 mb-2;
	}

	:global(.blog-content p) {
		@apply mb-4 leading-relaxed;
	}

	:global(.blog-content ul, .blog-content ol) {
		@apply mb-4 ml-6;
	}

	:global(.blog-content li) {
		@apply mb-2;
	}

	:global(.blog-content a) {
		@apply text-accent-primary hover:underline;
	}

	:global(.blog-content pre) {
		@apply bg-base-300 p-4 rounded-lg mb-4 overflow-x-auto;
	}

	:global(.blog-content code) {
		@apply bg-base-300 px-1 py-0.5 rounded text-sm;
	}

	:global(.blog-content pre code) {
		@apply bg-transparent px-0 py-0;
	}

	:global(.blog-content blockquote) {
		@apply border-l-4 border-accent-primary pl-4 italic my-4;
	}

	:global(.blog-content strong) {
		@apply font-bold;
	}

	:global(.blog-content em) {
		@apply italic;
	}
</style>
