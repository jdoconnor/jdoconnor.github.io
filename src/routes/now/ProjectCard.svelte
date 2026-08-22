<script lang="ts">
	type Props = {
		title: string;
		description: string;
		href?: string;
	};
	let { title, description, href }: Props = $props();
</script>

<article class="project">
	<h3>
		{#if href}
			<a href={href} target="_blank" rel="noreferrer">{title}</a>
		{:else}
			{title}
		{/if}
	</h3>
	<p class="muted">{description}</p>
</article>

<style>
	.project {
		padding: 1.25rem 0;
		border-bottom: 1px solid var(--border);
	}
	.project:last-child {
		border-bottom: none;
	}
	.project h3 {
		margin: 0 0 0.35rem;
	}
	.project p {
		margin: 0;
		font-size: 0.98rem;
	}
</style>
