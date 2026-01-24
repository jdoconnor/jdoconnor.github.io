<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";
</script>

<section class="now-deck fade-in" aria-labelledby="now-title">
	<div class="orb-cloud" aria-hidden="true">
		<div class="orb orb-alpha"></div>
		<div class="orb orb-beta"></div>
		<div class="orb orb-gamma"></div>
		<div class="orb orb-delta"></div>
	</div>
	<header class="now-hero">
		<p class="timestamp">Now · Updated May 13, 2024</p>
		<h1 id="now-title">What I'm building for 2026</h1>
		<p class="hero-lede">
			Cultivating applied AI systems, autonomous tooling, and human-in-the-loop experiences that feel
			bespoke—even as they scale.
		</p>
		<div class="signal-band" role="list">
			<span role="listitem">Applied AI</span>
			<span role="listitem">Edge-native apps</span>
			<span role="listitem">Trust automation</span>
		</div>
	</header>
	<div class="projects-grid">
		<ProjectCard
			image="/pottytracker_app.jpg"
			description="A progeressive web app for tracking your dog's potty times with the rest of your family"
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
	</div>
</section>

<style>
	:global(body) {
		background-color: #030712;
	}

	.now-deck {
		position: relative;
		padding: clamp(2rem, 4vw, 4.5rem);
		border-radius: 32px;
		background: radial-gradient(circle at 12% 20%, rgba(56, 189, 248, 0.25), transparent 45%),
			radial-gradient(circle at 80% 0%, rgba(168, 85, 247, 0.2), transparent 60%),
			rgba(4, 7, 15, 0.9);
		box-shadow: 0 20px 60px rgba(2, 6, 23, 0.65);
		overflow: hidden;
	}

	.now-deck::before,
	.now-deck::after {
		content: "";
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orb-cloud {
		position: absolute;
		inset: -10% -5% auto -5%;
		z-index: 0;
		filter: blur(20px);
	}

	.orb {
		position: absolute;
		width: clamp(160px, 22vw, 320px);
		height: clamp(160px, 22vw, 320px);
		border-radius: 999px;
		mix-blend-mode: screen;
		opacity: 0.85;
		animation: float var(--orb-duration, 40s) ease-in-out infinite;
	}

	.orb-alpha {
		top: 0;
		left: 5%;
		background: linear-gradient(145deg, rgba(59, 130, 246, 0.6), rgba(56, 189, 248, 0.35));
		--orb-duration: 12s;
	}

	.orb-beta {
		top: 20%;
		right: 8%;
		background: linear-gradient(145deg, rgba(168, 85, 247, 0.55), rgba(236, 72, 153, 0.35));
		animation-delay: 4s;
		--orb-duration: 8s;
	}

	.orb-gamma {
		bottom: -5%;
		left: 25%;
		background: linear-gradient(145deg, rgba(16, 185, 129, 0.5), rgba(34, 197, 94, 0.35));
		animation-delay: 7s;
		--orb-duration: 52s;
	}

	.orb-delta {
		bottom: -15%;
		right: 20%;
		background: linear-gradient(145deg, rgba(14, 165, 233, 0.4), rgba(248, 113, 113, 0.3));
		animation-delay: 10s;
		--orb-duration: 58s;
	}

	.now-deck::before {
		background: conic-gradient(from 120deg, rgba(14, 165, 233, 0.25), rgba(236, 72, 153, 0.2), rgba(34, 197, 94, 0.15));
		opacity: 0.4;
		filter: blur(140px);
	}

	.now-deck::after {
		border: 1px solid rgba(148, 163, 184, 0.2);
		border-radius: inherit;
		mix-blend-mode: screen;
		box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.04);
	}

	.now-hero {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding-bottom: 2.5rem;
		border-bottom: 1px solid rgba(148, 163, 184, 0.25);
	}

	.timestamp {
		font-size: 1.2rem;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		color: rgba(248, 250, 252, 0.7);
	}

	.now-hero h1 {
		font-size: clamp(2.8rem, 6vw, 4.6rem);
		margin: 0;
		color: #f8fafc;
		text-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
	}

	.hero-lede {
		font-size: clamp(1.4rem, 3vw, 1.9rem);
		color: rgba(229, 231, 235, 0.9);
		max-width: 60ch;
		margin: 0;
	}

	.signal-band {
		display: inline-flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.signal-band span {
		font-size: 1.2rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.4rem 1.4rem;
		border-radius: 999px;
		background: rgba(15, 118, 110, 0.15);
		border: 1px solid rgba(16, 185, 129, 0.3);
		color: #a7f3d0;
		box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);
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
		0% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		25% {
			transform: translate3d(15px, -20px, 0) scale(1.02);
		}
		50% {
			transform: translate3d(-10px, -35px, 0) scale(1.05);
		}
		75% {
			transform: translate3d(-25px, -15px, 0) scale(1.03);
		}
		100% {
			transform: translate3d(0, 0, 0) scale(1);
		}
	}
</style>
