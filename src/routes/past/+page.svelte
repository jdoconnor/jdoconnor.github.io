<script lang="ts">
	import ProjectCard from "../now/ProjectCard.svelte";

	const pastProjects = [
		{
			title: "CommonSignature.com",
			description: "An app to consolidate contract lifecycle management platforms.",
		},
		{
			title: "stuffiuse.app",
			href: "https://stuffiuse.app",
			description: "A 'link in bio' type site for gear.",
		},
	];
</script>

<section>
	<h1>Past projects</h1>
	<p class="lede">Archived experiments, prototypes, and tools that shaped how I build today.</p>

	{#each pastProjects as p}
		<ProjectCard {...p} />
	{/each}
</section>

<style>
	.lede {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}
</style>
