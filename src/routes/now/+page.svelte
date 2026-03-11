<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";
</script>

<section class="now-deck fade-in" aria-labelledby="now-title">
	<div class="petal-cloud" aria-hidden="true">
		<div class="petal petal-alpha"></div>
		<div class="petal petal-beta"></div>
		<div class="petal petal-gamma"></div>
		<div class="petal petal-delta"></div>
	</div>
	<header class="now-hero">
		<p class="timestamp">Now · Updated March 1, 2026</p>
		<h1 id="now-title">What I'm building for 2026</h1>
		<p class="hero-lede">
			Cultivating applied AI systems, autonomous tooling, and human-in-the-loop experiences that feel
			bespoke—even as they scale.
		</p>
		<div class="signal-band" role="list">
			<span role="listitem" class="tag tag--mint">Applied AI</span>
			<span role="listitem" class="tag tag--lavender">Edge-native apps</span>
			<span role="listitem" class="tag tag--peach">Trust automation</span>
		</div>
	</header>
	<div class="projects-grid">
		<ProjectCard
			image="/pottytracker_app.jpg"
			description="A progressive web app for tracking your dog's potty times with the rest of your family"
			title="DogShitAI.com"
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
			link="https://dogshitai.com"
		/>
		<ProjectCard
			title="SecurityPal Concierge Agents"
			description="Designing SecurityPal's applied AI strategy—deploying concierge agents that pair proprietary assurance data with human QA to automate questionnaires, evidence packaging, and audit readiness."
			tech={[
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
			]}
			link="https://www.securitypalhq.com/agents"
		/>
		<ProjectCard
			title="Rage Calculator"
			image="/rage.jpg"
			description="A cathartic micro-app that translates annual salary, days off, and burnout into a daily payout reminder so workers can reframe rough days into reminders of why they do it."
			tech={[
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
			]}
			link="/rage"
		/>
		<ProjectCard
			title="Terminal 0"
			description="Terminal 0 is a multiplayer airport bingo game that turns layovers into collaborative hunts for real-world terminal happenings."
			tech={[
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
			]}
			link="https://terminal0.jayooconnor.com"
		/>
	</div>
</section>

<style>
	.now-deck {
		position: relative;
		padding: clamp(2rem, 4vw, 4.5rem);
		border-radius: 28px;
		background: linear-gradient(135deg, #f5f0ff 0%, #edfaf3 50%, #fff4ee 100%);
		border: 1px solid var(--warm-200);
		box-shadow: 0 8px 40px rgba(100, 80, 60, 0.08);
		overflow: hidden;
	}

	.petal-cloud {
		position: absolute;
		inset: -10% -5% auto -5%;
		z-index: 0;
		pointer-events: none;
	}

	.petal {
		position: absolute;
		border-radius: 999px;
		filter: blur(30px);
		opacity: 0.5;
		mix-blend-mode: multiply;
		animation: float var(--petal-dur, 40s) ease-in-out infinite;
	}

	.petal-alpha {
		width: clamp(140px, 20vw, 280px);
		height: clamp(140px, 20vw, 280px);
		top: 0;
		left: 5%;
		background: radial-gradient(circle, #d9ccff, #bba8f5);
		--petal-dur: 14s;
	}

	.petal-beta {
		width: clamp(100px, 16vw, 220px);
		height: clamp(100px, 16vw, 220px);
		top: 15%;
		right: 8%;
		background: radial-gradient(circle, #f8c9a6, #f0a878);
		animation-delay: 4s;
		--petal-dur: 10s;
	}

	.petal-gamma {
		width: clamp(120px, 18vw, 250px);
		height: clamp(120px, 18vw, 250px);
		bottom: -5%;
		left: 25%;
		background: radial-gradient(circle, #a8e4c4, #79ccaa);
		animation-delay: 7s;
		--petal-dur: 48s;
	}

	.petal-delta {
		width: clamp(100px, 14vw, 200px);
		height: clamp(100px, 14vw, 200px);
		bottom: -10%;
		right: 18%;
		background: radial-gradient(circle, #fddde7, #f9bad0);
		animation-delay: 10s;
		--petal-dur: 38s;
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

	.projects-grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: clamp(1.5rem, 3vw, 2.5rem);
		margin-top: 3rem;
	}

	@media (max-width: 600px) {
		.signal-band {
			flex-direction: column;
		}
	}

	@keyframes float {
		0% { transform: translate3d(0, 0, 0) scale(1); }
		25% { transform: translate3d(12px, -16px, 0) scale(1.03); }
		50% { transform: translate3d(-8px, -28px, 0) scale(1.05); }
		75% { transform: translate3d(-20px, -12px, 0) scale(1.02); }
		100% { transform: translate3d(0, 0, 0) scale(1); }
	}
</style>
