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
		<figure class="project-media">
			<span class="project-media__glow" aria-hidden="true"></span>
			<img src={image} alt={title} loading="lazy" decoding="async" />
		</figure>
	{/if}
	<div class="project-content">
		<h2 class="project-title">{title}</h2>
		<p class="project-description">{description}</p>
		{#if link}
			<div class="project-actions">
				<a href={link} target="_blank" rel="noopener noreferrer" class="project-link">Go to app</a>
			</div>
		{/if}
	</div>
</div>

<style>
	.project-card {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		position: relative;
		overflow: hidden;
	}

	.project-media {
		position: relative;
		margin: 0;
		border-radius: 24px;
		overflow: hidden;
		border: 1px solid rgba(148, 163, 184, 0.35);
		background: radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.35), rgba(2, 6, 23, 0.9));
		display: flex;
		justify-content: center;
		align-items: center;
		padding: clamp(0.8rem, 2vw, 1.6rem);
	}

	.project-media img {
		display: block;
		max-width: 100%;
		max-height: clamp(180px, 32vw, 300px);
		height: auto;
		width: auto;
		object-fit: contain;
		border-radius: clamp(12px, 2vw, 18px);
		filter: saturate(1.05) contrast(1.05);
	}

	.project-media__glow {
		position: absolute;
		inset: 12% 18% auto 18%;
		height: 50%;
		border-radius: 999px;
		background: radial-gradient(circle, rgba(236, 72, 153, 0.35), transparent 70%);
		filter: blur(12px);
		pointer-events: none;
	}

	.project-content {
		position: relative;
		z-index: 1;
	}

	@media (max-width: 640px) {
		.project-media {
			padding: 0.6rem;
		}

		.project-media img {
			max-height: 220px;
		}
	}
</style>
