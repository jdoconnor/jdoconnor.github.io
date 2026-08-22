<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";

	const projects = [
		{
			title: "DogShitAI.com",
			href: "https://dogshitai.com",
			description:
				"A progressive web app for tracking your dog's potty times with the rest of your family.",
		},
		{
			title: "FootSlapping",
			href: "https://footslapping.com",
			description:
				"A team step competition app — form teams, challenge your friends, and see who steps up.",
		},
		{
			title: "SecurityPal AI",
			href: "https://securitypal.com",
			description:
				"Applied AI solutions for GRC (governance, risk, and compliance) teams — automating questionnaires, evidence packaging, and audit readiness.",
		},
		{
			title: "Rage Calculator",
			href: "/rage",
			description:
				"A cathartic micro-app that translates annual salary, days off, and burnout into a daily payout reminder.",
		},
		{
			title: "Terminal 0",
			href: "https://terminal0.jayoconnor.com",
			description:
				"A multiplayer airport bingo game that turns layovers into collaborative hunts for real-world terminal happenings.",
		},
	];
</script>

<section>
	<p class="muted small">Updated August 18, 2026</p>
	<h1>What I'm building</h1>
	<p class="lede">Applied AI systems, autonomous tooling, and human-in-the-loop experiences.</p>

	{#each projects as p}
		<ProjectCard {...p} />
	{/each}
</section>

<style>
	.small {
		font-size: 0.85rem;
		margin-bottom: 0.5rem;
	}
	.lede {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}
</style>
