<script lang="ts">
	import type { PageData } from "./$types";

	const { data }: { data: PageData } = $props();

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString("en-US", {
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

<article>
	<p class="muted small"><a href="/blog">← Writing</a></p>
	<time class="muted date" datetime={data.metadata.date}>{formatDate(data.metadata.date)}</time>
	<h1>{data.metadata.title}</h1>
	<div class="blog-content">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.small {
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
	}
	.date {
		display: block;
		font-size: 0.85rem;
		margin-bottom: 0.5rem;
	}
</style>
