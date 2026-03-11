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
	<div class="petal petal-1" aria-hidden="true"></div>
	<div class="petal petal-2" aria-hidden="true"></div>
	<div class="petal petal-3" aria-hidden="true"></div>

	<header class="past-header">
		<p class="eyebrow">Archive</p>
		<h1 class="h1 gradient-text">Past projects</h1>
		<p class="lede">
			Archived experiments, prototypes, and tools that shaped how I build today.
		</p>
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
		background: linear-gradient(135deg, #fff4ee 0%, #f5f0ff 55%, #edfaf3 100%);
		border: 1px solid var(--warm-200);
		box-shadow: 0 4px 24px rgba(100, 80, 60, 0.07);
	}

	.petal {
		position: absolute;
		border-radius: 50%;
		filter: blur(38px);
		opacity: 0.45;
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	.petal-1 {
		width: clamp(160px, 26vw, 300px);
		height: clamp(160px, 26vw, 300px);
		top: -60px;
		left: -40px;
		background: radial-gradient(circle, #d9ccff, #bba8f5);
		animation: drift-slow 22s ease-in-out infinite;
	}

	.petal-2 {
		width: clamp(130px, 22vw, 260px);
		height: clamp(130px, 22vw, 260px);
		bottom: -70px;
		left: 22%;
		background: radial-gradient(circle, #a8e4c4, #79ccaa);
		animation: drift-slow 30s ease-in-out infinite reverse;
		animation-delay: 5s;
	}

	.petal-3 {
		width: clamp(120px, 18vw, 240px);
		height: clamp(120px, 18vw, 240px);
		top: 10%;
		right: -80px;
		background: radial-gradient(circle, #f8c9a6, #f0a878);
		animation: drift-slow 26s ease-in-out infinite;
		animation-delay: 10s;
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

	@keyframes drift-slow {
		0% { transform: translate(0, 0) scale(1); }
		40% { transform: translate(3%, 6%) scale(1.05); }
		70% { transform: translate(-4%, -3%) scale(0.97); }
		100% { transform: translate(0, 0) scale(1); }
	}
</style>
