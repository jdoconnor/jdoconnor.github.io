<script lang="ts">
	const now = [
		{
			title: "SecurityPal AI",
			href: "https://securitypal.com",
			detail:
				"Applied AI solutions for GRC (governance, risk, and compliance) teams.",
		},
		{
			title: "DogShitAI.com",
			href: "https://dogshitai.com",
			detail: "Edge-native pet tracking experiences built with SvelteKit, Turso, and Cloudflare.",
		},
		{
			title: "FootSlapping",
			href: "https://footslapping.com",
			detail: "Team step competition app — challenge your friends and see who steps up.",
		},
		{
			title: "Rage Calculator",
			href: "https://jayoconnor.com/rage",
			detail: "Micro-app translating annual salary + days off into daily payout reality checks.",
		},
	];

	const history = [
		{
			date: "Aug 2023 — Present",
			title: "Head of Engineering & Product · SecurityPal",
			detail:
				"Establishing the patterns, structure, and norms for distributed engineering while guiding product roadmaps with customers and exec leadership.",
		},
		{
			date: "Jan 2024 — Present",
			title: "Founder · Dogshit AI",
			detail: "Building weird and creative applied AI projects.",
		},
		{
			date: "Apr 2023 — Present",
			title: "Engineering Leadership Mentor · Freelance",
			detail:
				"Coaching eng leaders on people management, process enhancement, and organizational leadership for remote-first companies.",
		},
		{
			date: "Nov 2021 — Apr 2023",
			title: "Senior Director of Engineering · Slack",
			detail:
				"Led 20+ engineers and managers shipping channel-based collaboration into sales workflows used by global teams.",
		},
		{
			date: "Nov 2018 — Nov 2021",
			title: "Senior Director of Engineering · Quip (Salesforce)",
			detail:
				"Scaled engineering squads integrating Quip's collaborative docs with Salesforce Sales & Service Cloud, improving go-to-market velocity.",
		},
	];
</script>

<section>
	<h1>Hi, I'm Jay.</h1>
	<p class="lede">
		I help high-velocity companies turn ambiguous problems into durable systems — and ship the
		work their customers rave about.
	</p>
	<p class="muted">
		25+ years in tech, 15+ growing teams. Product leadership, engineering strategy, and people
		& culture.
	</p>

	<h2>Now</h2>
	<ul class="projects">
		{#each now as p}
			<li>
				<a href={p.href} target="_blank" rel="noreferrer">{p.title}</a>
				<span class="muted"> — {p.detail}</span>
			</li>
		{/each}
	</ul>

	<h2>Work history</h2>
	<ul class="history">
		{#each history as h}
			<li>
				<div class="row">
					<span class="title">{h.title}</span>
					<span class="muted date">{h.date}</span>
				</div>
				<p class="muted">{h.detail}</p>
			</li>
		{/each}
	</ul>

	<h2>Get in touch</h2>
	<ul class="links">
		<li><a href="https://www.cal.com/jdoconnor" target="_blank" rel="noreferrer">Book time</a></li>
		<li><a href="mailto:jaydoconnor@gmail.com">Email</a></li>
		<li><a href="https://www.linkedin.com/in/jdoconnor" target="_blank" rel="noreferrer">LinkedIn</a></li>
	</ul>
</section>

<style>
	.lede {
		font-size: 1.25rem;
		line-height: 1.55;
		margin-bottom: 1.25rem;
	}

	.projects {
		list-style: none;
		padding: 0;
	}
	.projects li {
		margin-bottom: 0.6rem;
		line-height: 1.5;
	}

	.history {
		list-style: none;
		padding: 0;
	}
	.history li {
		margin-bottom: 1.5rem;
	}
	.history .row {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.history .title {
		font-weight: 600;
	}
	.history .date {
		font-size: 0.9rem;
		white-space: nowrap;
	}
	.history p {
		margin: 0.25rem 0 0;
		font-size: 0.98rem;
	}
</style>
