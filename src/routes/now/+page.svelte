<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";
</script>

<div class="space-y-4">
	<h1 class="text-3xl font-bold mb-8">What I'm working on and with as of May 13, 2024</h1>
	<ProjectCard
		image="/pottytracker_app.jpg"
		description="A progeressive web app for tracking your dog's potty times with the rest of your family"
		title="PottyTracker.app"
		tech={[
			{
				name: "SvelteKit",
				tooltip: "Full stack framework based on Svelte",
				color: "primary-content",
			},
			{ name: "Tailwind", tooltip: "CSS framework", color: "primary-content" },
			{
				name: "Sqlite",
				tooltip:
					"Using Turso, a provider of sqlite that allows for edge distribution of sqlite databases",
				color: "secondary",
			},
			{
				name: "Google Cloud Run",
				tooltip: "Serverless runtime for docker containers",
				color: "neutral",
			},
			{
				name: "Cloudflare Pages",
				tooltip: "Serverless runtime for edge functions",
				color: "neutral",
			},
		]}
		link="https://pottytracker.app"
	/>
	<ProjectCard
		title="CommonSignature.com"
		description="An app to consolidate contract lifecycle management platforms"
		tech={[
			{
				name: "SvelteKit",
				tooltip: "Full stack framework based on Svelte",
				color: "primary-content",
			},
			{ name: "Tailwind", tooltip: "CSS framework", color: "primary-content" },
			{ name: "Hono", tooltip: "API router", color: "primary-content" },
			{
				name: "Google Cloud Run",
				tooltip: "Serverless runtime for docker containers",
				color: "neutral",
			},
		]}
	/>
	<ProjectCard
		description="A 'link in bio' type site for gear."
		title="stuffiuse.app"
		tech={[
			{ name: "Firestore", tooltip: "NOSQL Database provided by Google", color: "secondary" },
			{
				name: "GraphQL",
				tooltip: "Over the wire query language for apis",
				color: "primary-contet",
			},
			{
				name: "SvelteKit",
				tooltip: "Full stack framework based on Svelte",
				color: "primary-content",
			},
		]}
		link="https://stuffiuse.app"
	/>
</div>
