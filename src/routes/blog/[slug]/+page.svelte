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

<div class="post-shell fade-in">
	<article>
		<div class="back-row">
			<a href="/blog" class="back-link">← Back to musings</a>
		</div>

		<header class="post-header">
			<time class="post-date" datetime={data.metadata.date}>
				{formatDate(data.metadata.date)}
			</time>
			<h1 class="h1 gradient-text">{data.metadata.title}</h1>
		</header>

		<div class="blog-content post-body">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>

<style>
	.post-shell {
		max-width: 720px;
		margin: 0 auto;
	}

	.back-row {
		margin-bottom: 2.5rem;
	}

	.back-link {
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--lavender-500);
		text-decoration: none;
		letter-spacing: 0.04em;
		transition: color 0.2s ease, letter-spacing 0.2s ease;
	}

	.back-link:hover {
		color: var(--lavender-400);
		letter-spacing: 0.07em;
	}

	.post-header {
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1.5px solid var(--warm-200);
	}

	.post-date {
		display: block;
		font-size: 1.2rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--lavender-400);
		margin-bottom: 1rem;
	}

	.post-body {
		font-size: 1.7rem;
		line-height: 1.75;
		color: var(--warm-800);
	}

	:global(.post-body p) {
		color: var(--warm-700) !important;
	}

	:global(.post-body h1),
	:global(.post-body h2),
	:global(.post-body h3) {
		color: var(--warm-900) !important;
	}
</style>
