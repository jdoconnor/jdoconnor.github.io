<script lang="ts">
	import RingCarousel from "./RingCarousel.svelte";

	const projects = [
		{
			title: "DogShitAI.com",
			image: "/pottytracker_app.jpg",
			description:
				"A progressive web app for tracking your dog's potty times with the rest of your family",
			tech: [
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
			],
			link: "https://dogshitai.com",
		},
		{
			title: "FootSlapping",
			image: "/footslapping.jpg",
			description:
				"A team step competition app—form teams, challenge your friends, and see who steps up. Walk, repeat, compete, repeat, slap feet, slap feet.",
			tech: [
				{
					name: "React Native",
					tooltip: "Cross-platform mobile app for iOS and Android",
					color: "primary-content",
				},
				{
					name: "Better Auth",
					tooltip: "Google sign-in for frictionless team onboarding",
					color: "secondary",
				},
				{
					name: "Cloudflare Workers",
					tooltip: "Edge runtime keeps step sync low-latency worldwide",
					color: "neutral",
				},
				{
					name: "Web Push",
					tooltip: "Push notifications for challenges and step milestones",
					color: "neutral",
				},
			],
			link: "https://footslapping.com",
		},
		{
			title: "SecurityPal Concierge Agents",
			image: "/securitypal.jpg",
			description:
				"Designing SecurityPal's applied AI strategy—deploying concierge agents that pair proprietary assurance data with human QA to automate questionnaires, evidence packaging, and audit readiness.",
			tech: [
				{
					name: "Concierge Agents",
					tooltip: "Hybrid human + agent architecture purpose-built for trust-critical work",
					color: "secondary",
				},
				{
					name: "Knowledge Library",
					tooltip: "Hard-to-access security exchanges curated and validated by experts",
					color: "primary-content",
				},
				{
					name: "Automation Playbooks",
					tooltip: "Questionnaire intake, evidence packaging, and audit prep workflows",
					color: "neutral",
				},
			],
			link: "https://www.securitypalhq.com/agents",
		},
		{
			title: "Rage Calculator",
			image: "/rage.jpg",
			description:
				"A cathartic micro-app that translates annual salary, days off, and burnout into a daily payout reminder so workers can reframe rough days into reminders of why they do it.",
			tech: [
				{
					name: "SvelteKit",
					tooltip: "Reactive UI + server routing for the rage experience",
					color: "primary-content",
				},
				{
					name: "Local Storage",
					tooltip: "Stores personal inputs privately in-browser",
					color: "secondary",
				},
				{
					name: "Reactive math",
					tooltip: "Instant calculations for daily payout + stats",
					color: "neutral",
				},
			],
			link: "/rage",
		},
		{
			title: "Terminal 0",
			image: "/terminal0.jpg",
			description:
				"Terminal 0 is a multiplayer airport bingo game that turns layovers into collaborative hunts for real-world terminal happenings.",
			tech: [
				{
					name: "Cloudflare Workers",
					tooltip: "Edge runtime keeps every bingo call low-latency worldwide",
					color: "primary-content",
				},
				{
					name: "Durable Objects",
					tooltip: "Stateful lobbies keep multiplayer boards perfectly in sync",
					color: "secondary",
				},
				{
					name: "Mobile-first UI",
					tooltip: "Layout and controls optimized for on-the-go travelers",
					color: "neutral",
				},
			],
			link: "https://terminal0.jayoconnor.com",
		},
	];
</script>

<section class="now-deck fade-in" aria-labelledby="now-title">
	<header class="now-hero">
		<p class="timestamp">Now · Updated August 18, 2026</p>
		<h1 id="now-title">What I'm building for 2026</h1>
		<p class="hero-lede">
			Cultivating applied AI systems, autonomous tooling, and human-in-the-loop experiences that
			feel bespoke—even as they scale.
		</p>
		<div class="signal-band" role="list">
			<span role="listitem" class="tag tag--mint">Applied AI</span>
			<span role="listitem" class="tag tag--lavender">Edge-native apps</span>
		</div>
	</header>
	<RingCarousel items={projects} />
</section>

<style>
	.now-deck {
		position: relative;
		padding: clamp(2rem, 4vw, 4.5rem);
		border-radius: 28px;
		background: #fffdf7;
		border: 3px solid var(--warm-900);
		box-shadow: 0 8px 40px rgba(20, 20, 20, 0.12);
		overflow: hidden;
	}

	.now-hero {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding-bottom: 2.5rem;
		border-bottom: 1px solid var(--warm-200);
	}

	.timestamp {
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--warm-500) !important;
	}

	.now-hero h1 {
		font-size: clamp(2.8rem, 6vw, 4.6rem);
		margin: 0;
		color: var(--warm-900) !important;
	}

	.hero-lede {
		font-size: clamp(1.6rem, 3vw, 2rem);
		line-height: 1.65;
		color: var(--warm-700) !important;
		max-width: 60ch;
		margin: 0;
	}

	.signal-band {
		display: inline-flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.tag {
		font-size: 1.2rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 0.5rem 1.4rem;
		border-radius: 999px;
	}

	.tag--mint {
		background: var(--mint-100);
		border: 1.5px solid var(--mint-300);
		color: var(--mint-500);
	}

	.tag--lavender {
		background: var(--lavender-100);
		border: 1.5px solid var(--lavender-300);
		color: var(--lavender-500);
	}

	.tag--peach {
		background: var(--peach-100);
		border: 1.5px solid var(--peach-300);
		color: var(--peach-500);
	}

	@media (max-width: 600px) {
		.signal-band {
			flex-direction: column;
		}
	}
</style>
