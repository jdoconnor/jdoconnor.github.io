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

<div class="project-card">
	{#if image}
		<figure class="project-media">
			<img src={image} alt={title} loading="lazy" decoding="async" />
		</figure>
	{/if}
	<div class="project-content">
		<h2 class="project-title">{title}</h2>
		<p class="project-description">{description}</p>
		<div class="tech-list">
			{#each tech as badge}
				<span class="tech-pill" title={badge.tooltip}>{badge.name}</span>
			{/each}
		</div>
		{#if link}
			<div class="project-actions">
				<a href={link} target="_blank" rel="noopener noreferrer" class="project-link">Go to app →</a>
			</div>
		{/if}
	</div>
</div>

<style>
	.project-card {
		background: #ffffff;
		border: 1.5px solid var(--warm-200);
		border-radius: 20px;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		position: relative;
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
		box-shadow: 0 2px 12px rgba(100, 80, 60, 0.06);
	}

	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 36px rgba(100, 80, 60, 0.12);
		border-color: var(--lavender-200);
	}

	.project-media {
		margin: 0;
		border-radius: 14px;
		overflow: hidden;
		background: linear-gradient(135deg, var(--lavender-50), var(--mint-50));
		border: 1px solid var(--warm-200);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: clamp(0.8rem, 2vw, 1.4rem);
	}

	.project-media img {
		display: block;
		max-width: 100%;
		max-height: clamp(160px, 28vw, 260px);
		height: auto;
		width: auto;
		object-fit: contain;
		border-radius: clamp(10px, 1.5vw, 14px);
	}

	.project-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.project-title {
		color: var(--warm-900) !important;
		font-size: 1.9rem;
		font-weight: 700;
		margin: 0;
		line-height: 1.3;
	}

	.project-description {
		color: var(--warm-700) !important;
		font-size: 1.5rem;
		line-height: 1.65;
		margin: 0;
	}

	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-pill {
		background: var(--lavender-50);
		border: 1px solid var(--lavender-200);
		color: var(--lavender-500);
		padding: 0.3rem 0.9rem;
		border-radius: 999px;
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		transition: background 0.2s ease, transform 0.2s ease;
		cursor: default;
	}

	.tech-pill:hover {
		background: var(--lavender-100);
		transform: translateY(-1px);
	}

	.project-link {
		display: inline-block;
		background: linear-gradient(120deg, #bba8f5, #79ccaa);
		color: #fff;
		padding: 0.7rem 1.8rem;
		border-radius: 999px;
		text-decoration: none;
		font-weight: 700;
		font-size: 1.35rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.3s ease;
		box-shadow: 0 4px 16px rgba(155, 125, 232, 0.25);
	}

	.project-link:hover {
		transform: translateY(-2px) scale(1.02);
		box-shadow: 0 8px 24px rgba(155, 125, 232, 0.35);
		color: #fff;
	}

	@media (max-width: 640px) {
		.project-media {
			padding: 0.6rem;
		}

		.project-media img {
			max-height: 200px;
		}
	}
</style>
