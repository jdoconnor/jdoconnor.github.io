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

<section>
	<h1>Writing</h1>
	<p class="lede">Thoughts on product, engineering, and building teams.</p>

	{#if data.posts.length === 0}
		<p class="muted">No posts yet. Check back soon.</p>
	{:else}
		<ul class="posts">
			{#each data.posts as post}
				<li>
					<a href="/blog/{post.slug}">{post.title}</a>
					<span class="muted date">{formatDate(post.date)}</span>
					<p class="muted desc">{post.description}</p>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.lede {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}
	.posts {
		list-style: none;
		padding: 0;
	}
	.posts li {
		padding: 1.25rem 0;
		border-bottom: 1px solid var(--border);
	}
	.posts li:last-child {
		border-bottom: none;
	}
	.posts .date {
		display: block;
		font-size: 0.85rem;
		margin-top: 0.25rem;
	}
	.posts .desc {
		margin: 0.4rem 0 0;
		font-size: 0.98rem;
	}
</style>
