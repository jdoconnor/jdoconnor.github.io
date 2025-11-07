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

<div class="max-w-4xl mx-auto">
	<h1 class="h1 gradient-text mb-8">Blog</h1>

	<div class="space-y-6">
		{#each data.posts as post}
			<article class="card bg-base-200 hover:bg-base-300 transition-colors">
				<div class="card-body">
					<a href="/blog/{post.slug}" class="card-title text-2xl hover:text-primary transition-colors">
						{post.title}
					</a>
					<time class="text-sm opacity-70" datetime={post.date}>
						{formatDate(post.date)}
					</time>
					<p class="text-base-content/80">
						{post.description}
					</p>
					<div class="card-actions justify-end">
						<a href="/blog/{post.slug}" class="btn btn-primary btn-sm">
							Read more →
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>

	{#if data.posts.length === 0}
		<div class="text-center py-12">
			<p class="text-lg opacity-70">No blog posts yet. Check back soon!</p>
		</div>
	{/if}
</div>
