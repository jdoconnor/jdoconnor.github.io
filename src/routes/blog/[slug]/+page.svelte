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
