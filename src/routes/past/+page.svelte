<script lang="ts">
	import ProjectCard from "../now/ProjectCard.svelte";

	const pastProjects = [
		{
			title: "CommonSignature.com",
			description: "An app to consolidate contract lifecycle management platforms",
			tech: [
				{ name: "SvelteKit", tooltip: "Full stack framework based on Svelte" },
				{ name: "Tailwind", tooltip: "CSS framework" },
				{ name: "Hono", tooltip: "API router" },
				{ name: "Google Cloud Run", tooltip: "Serverless runtime for docker containers" },
			],
		},
		{
			title: "stuffiuse.app",
			description: "A 'link in bio' type site for gear.",
			link: "https://stuffiuse.app",
			tech: [
				{ name: "Firestore", tooltip: "NOSQL Database provided by Google" },
				{ name: "GraphQL", tooltip: "Over the wire query language for apis" },
				{ name: "SvelteKit", tooltip: "Full stack framework based on Svelte" },
			],
		},
	];
</script>

<section class="fade-in past-shell">
	<header class="past-header">
		<p class="eyebrow">Archive</p>
		<h1 class="h1 gradient-text">Past projects</h1>
		<p class="lede">Archived experiments, prototypes, and tools that shaped how I build today.</p>
	</header>

	<div class="grid">
		{#each pastProjects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>

<style>
	.past-shell {
		position: relative;
		overflow: hidden;
		padding: clamp(2rem, 4vw, 4rem);
		border-radius: 24px;
		background: #fffdf7;
		border: 3px solid var(--warm-900);
		box-shadow: 0 4px 24px rgba(20, 20, 20, 0.1);
	}

	.past-header {
		position: relative;
		z-index: 1;
		margin-bottom: 2.5rem;
	}

	.eyebrow {
		font-size: 1.2rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--peach-400);
		margin-bottom: 0.5rem;
	}

	.lede {
		font-size: 1.8rem;
		line-height: 1.65;
		color: var(--warm-700) !important;
		max-width: 60ch;
		margin-top: 0.75rem;
		margin-bottom: 0;
	}

	.grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}
</style>
