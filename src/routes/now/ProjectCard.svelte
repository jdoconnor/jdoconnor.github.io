<script lang="ts">
	type Props = {
		image?: string;
		description: string;
		title: string;
		tech: { name: string; tooltip: string; color?: string }[];
		link?: string;
	};
	let { image, description, title, tech, link }: Props = $props();
</script>

<div class="card project-card">
	{#if image}
		<figure>
			<img src={image} alt={title} />
		</figure>
	{/if}
	<div class="project-content">
		<h2 class="project-title">{title}</h2>
		<p class="project-description">{description}</p>
		<div class="tech-badges">
			{#each tech as { name, tooltip }}
				<div class="tech-badge" title={tooltip}>
					{name}
				</div>
			{/each}
		</div>
		{#if link}
			<div class="project-actions">
				<a href={link} target="_blank" rel="noopener noreferrer" class="project-link">Go to app</a>
			</div>
		{/if}
	</div>
</div>
