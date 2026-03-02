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

<section class="blog-section">
	<header class="blog-header">
		<h1 class="h1 gradient-text">Musings</h1>
		<p class="blog-subtitle">Thoughts on product, engineering, and building teams</p>
	</header>

	<div class="blog-grid">
		{#each data.posts as post}
			<article class="card blog-card">
				<div class="blog-card-content">
					<a href="/blog/{post.slug}" class="blog-title">
						{post.title}
					</a>
					<time class="blog-date" datetime={post.date}>
						{formatDate(post.date)}
					</time>
					<p class="blog-description">
						{post.description}
					</p>
					<div class="blog-actions">
						<a href="/blog/{post.slug}" class="blog-link">
							Read more →
						</a>
					</div>
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
		max-width: 900px;
		margin: 0 auto;
	}

	.blog-header {
		margin-bottom: 3rem;
	}

	.blog-subtitle {
		font-size: 1.6rem;
		line-height: 1.65;
		color: var(--text-secondary);
		margin-top: 1rem;
	}

	.blog-grid {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.blog-card {
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.blog-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 40px rgba(2, 6, 23, 0.75);
	}

	.blog-card-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.blog-title {
		font-size: 2.2rem;
		font-weight: 600;
		color: var(--text-primary);
		text-decoration: none;
		transition: color 0.3s ease;
		line-height: 1.3;
	}

	.blog-title:hover {
		color: var(--accent-primary);
	}

	.blog-date {
		font-size: 1.2rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-muted);
	}

	.blog-description {
		font-size: 1.6rem;
		line-height: 1.65;
		color: var(--text-secondary);
		margin: 0;
	}

	.blog-actions {
		margin-top: 0.5rem;
	}

	.blog-link {
		color: var(--link-color);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 1.3rem;
		transition: color 0.3s ease;
	}

	.blog-link:hover {
		color: var(--link-hover);
	}

	.blog-empty {
		text-align: center;
		padding: 6rem 2rem;
	}

	.blog-empty p {
		font-size: 1.8rem;
		color: var(--text-muted);
	}

	@media (max-width: 768px) {
		.blog-title {
			font-size: 2rem;
		}

		.blog-description {
			font-size: 1.5rem;
		}
	}
</style>
