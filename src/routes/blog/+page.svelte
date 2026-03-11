<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<section class="blog-section fade-in">
	<header class="blog-header">
		<p class="eyebrow">Writing</p>
		<h1 class="h1 gradient-text">Musings</h1>
		<p class="blog-subtitle">Thoughts on product, engineering, and building teams</p>
	</header>

	<div class="blog-grid">
		{#each data.posts as post, i}
			<article class="blog-card" style="animation-delay: {i * 0.1}s">
				<div class="blog-card-inner">
					<time class="blog-date" datetime={post.date}>
						{formatDate(post.date)}
					</time>
					<a href="/blog/{post.slug}" class="blog-title">
						{post.title}
					</a>
					<p class="blog-description">
						{post.description}
					</p>
					<a href="/blog/{post.slug}" class="blog-link">
						Read more →
					</a>
				</div>
			</article>
		{/each}
	</div>

	{#if data.posts.length === 0}
		<div class="blog-empty">
			<p>No blog posts yet. Check back soon!</p>
		</div>
	{/if}
</section>

<style>
	.blog-section {
		max-width: 860px;
		margin: 0 auto;
	}

	.blog-header {
		margin-bottom: 3.5rem;
	}

	.eyebrow {
		font-size: 1.2rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--lavender-400);
		margin-bottom: 0.75rem;
	}

	.blog-subtitle {
		font-size: 1.7rem;
		line-height: 1.65;
		color: var(--warm-600) !important;
		margin-top: 0.75rem;
	}

	.blog-grid {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.blog-card {
		background: #fff;
		border: 1.5px solid var(--warm-200);
		border-radius: 20px;
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
		box-shadow: 0 2px 12px rgba(100, 80, 60, 0.05);
		animation: slide-in 0.6s ease both;
	}

	.blog-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 36px rgba(100, 80, 60, 0.1);
		border-color: var(--lavender-200);
	}

	.blog-card-inner {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		padding: 2.25rem;
	}

	.blog-title {
		font-size: 2.2rem;
		font-weight: 700;
		color: var(--warm-900);
		text-decoration: none;
		transition: color 0.25s ease;
		line-height: 1.3;
	}

	.blog-title:hover {
		color: var(--lavender-500);
	}

	.blog-date {
		font-size: 1.15rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--lavender-400);
		order: -1;
	}

	.blog-description {
		font-size: 1.6rem;
		line-height: 1.65;
		color: var(--warm-600) !important;
		margin: 0;
	}

	.blog-link {
		color: var(--lavender-500);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 1.25rem;
		transition: color 0.25s ease, letter-spacing 0.25s ease;
		text-decoration: none;
		align-self: flex-start;
	}

	.blog-link:hover {
		color: var(--lavender-400);
		letter-spacing: 0.12em;
	}

	.blog-empty {
		text-align: center;
		padding: 6rem 2rem;
	}

	.blog-empty p {
		font-size: 1.8rem;
		color: var(--warm-500) !important;
	}

	@keyframes slide-in {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@media (max-width: 768px) {
		.blog-title {
			font-size: 2rem;
		}

		.blog-card-inner {
			padding: 1.75rem;
		}
	}
</style>
