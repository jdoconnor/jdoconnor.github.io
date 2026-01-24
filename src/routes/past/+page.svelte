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

<section class="card fade-in past-shell">
	<div class="orb orb-1" aria-hidden="true"></div>
	<div class="orb orb-2" aria-hidden="true"></div>
	<div class="orb orb-3" aria-hidden="true"></div>
	<h1 class="h1 gradient-text">Past projects</h1>
	<p class="lede">
		Archived experiments, prototypes, and tools that shaped how I build today.
	</p>
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
		gap: 2rem;
		background: radial-gradient(circle at 15% 10%, rgba(56, 189, 248, 0.2), transparent 40%),
			radial-gradient(circle at 85% 20%, rgba(168, 85, 247, 0.15), transparent 50%),
			var(--card-bg);
	}

	.orb {
		position: absolute;
		width: clamp(180px, 30vw, 320px);
		height: clamp(180px, 30vw, 320px);
		border-radius: 50%;
		filter: blur(40px);
		opacity: 0.85;
		mix-blend-mode: screen;
	}

	.orb-1 {
		top: -60px;
		left: -40px;
		background: linear-gradient(135deg, rgba(56, 189, 248, 0.55), rgba(14, 165, 233, 0.25));
	}

	.orb-2 {
		bottom: -80px;
		left: 20%;
		background: linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(16, 185, 129, 0.25));
	}

	.orb-3 {
		top: 10%;
		right: -120px;
		background: linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.3));
	}

	.lede {
		color: var(--text-secondary);
		max-width: 60ch;
		margin-bottom: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2.4rem;
	}
</style>
