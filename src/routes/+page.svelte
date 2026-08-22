<script lang="ts">
	import { Award, CircuitBoard, Users } from "lucide-svelte";

	const nowProjects = [
		{
			title: "SecurityPal Concierge Agents",
			href: "https://securitypal.com",
			detail:
				"Applied AI rollout pairing concierge agents with human QA for questionnaires and audits.",
			status: "shipping",
		},
		{
			title: "DogShitAI.com",
			href: "https://dogshitai.com",
			detail: "Edge-native pet tracking experiences built with SvelteKit, Turso, and Cloudflare.",
			status: "in-flight",
		},
		{
			title: "FootSlapping",
			href: "https://footslapping.com",
			detail: "Team step competition app—challenge your friends and see who steps up.",
			status: "live",
		},
		{
			title: "Rage Calculator",
			href: "https://jayoconnor.com/rage",
			detail: "Micro-app translating annual salary + days off into daily payout reality checks.",
			status: "live",
		},
	];

	const tracks = [
		{
			label: "Product leadership",
			summary: "Clarity, ruthless prioritization, and crisp storytelling that align exec teams.",
			link: { href: "/now", text: "See current work" },
			icon: Award,
			color: "lavender",
		},
		{
			label: "Engineering strategy",
			summary: "Systems thinking across platform, AI copilots, and dependable delivery.",
			link: { href: "/blog", text: "Read essays" },
			icon: CircuitBoard,
			color: "mint",
		},
		{
			label: "People & culture",
			summary: "Growing teams that feel psychologically safe, ambitious, and accountable.",
			link: {
				href: "https://www.cal.com/jdoconnor",
				text: "Work together",
			},
			icon: Users,
			color: "peach",
		},
	];

	const signals = [
		{
			date: "Aug 2023 — Present",
			title: "Head of Engineering & Product · SecurityPal",
			description:
				"Establishing the patterns, structure, and norms for distributed engineering while guiding product roadmaps with customers and exec leadership.",
		},
		{
			date: "Jan 2024 — Present",
			title: "Founder · Dogshit AI",
			description: "Building weird and creative applied AI projects",
		},
		{
			date: "Apr 2023 — Present",
			title: "Engineering Leadership Mentor · Freelance",
			description:
				"Coaching eng leaders on people management, process enhancement, and organizational leadership for remote-first companies.",
		},
		{
			date: "Nov 2021 — Apr 2023",
			title: "Senior Director of Engineering · Slack",
			description:
				"Led 20+ engineers and managers shipping channel-based collaboration into sales workflows used by global teams.",
		},
		{
			date: "Nov 2018 — Nov 2021",
			title: "Senior Director of Engineering · Quip (Salesforce)",
			description:
				"Scaled engineering squads integrating Quip's collaborative docs with Salesforce Sales & Service Cloud, improving go-to-market velocity.",
		},
	];
</script>

<section class="landing card fade-in" role="group" aria-label="Hero intro">
	<div class="hero-grid">
		<div class="intro">
			<p class="eyebrow reveal">Product & Engineering Leader</p>
			<h1 class="reveal delay-1">Hi, I'm Jay.</h1>
			<div class="stamp-wrap reveal delay-2" aria-hidden="true">
				<span class="stamp">stupid &amp; joyous ★ fun but wise</span>
			</div>
			<p class="lede reveal delay-3">
				I help high-velocity companies turn ambiguous problems into durable systems—and ship the
				work their customers rave about.
			</p>
			<div class="hero-actions reveal delay-4">
				<a class="btn primary" href="/now">What I'm working on</a>
				<a class="btn ghost" href="/blog">Read my writing</a>
			</div>
			<dl class="metrics reveal delay-5">
				<div>
					<dt>Years in tech</dt>
					<dd>25+</dd>
				</div>
				<div>
					<dt>Years growing teams</dt>
					<dd>15+</dd>
				</div>
			</dl>
		</div>
		<div class="signal card glass reveal delay-6">
			<p class="badge">Right now</p>
			<ul class="now-list">
				{#each nowProjects as project}
					<li>
						<span class="dot dot--{project.status}"></span>
						<div>
							<p class="title">
								<a href={project.href} target="_blank">{project.title}</a>
							</p>
							<p class="detail">{project.detail}</p>
						</div>
					</li>
				{/each}
			</ul>
			<a class="btn inline" href="https://www.cal.com/jdoconnor">Let's chat →</a>
		</div>
	</div>
</section>

<section class="streams">
	<div class="panel card reveal delay-7">
		<div class="tracks">
			{#each tracks as track}
				<article class="track-{track.color}">
					<div class="track-head">
						<span class="track-icon track-icon--{track.color}" aria-hidden="true">
							<svelte:component this={track.icon} />
						</span>
						<div>
							<p class="label">{track.label}</p>
							<p class="summary">{track.summary}</p>
						</div>
					</div>
					<a class="track-link track-link--{track.color}" href={track.link.href}
						>{track.link.text} →</a
					>
				</article>
			{/each}
		</div>
	</div>
	<div class="timeline card reveal delay-8">
		<p class="eyebrow">Journey</p>
		<ol>
			{#each signals as signal}
				<li>
					<p class="date">{signal.date}</p>
					<p class="title">{signal.title}</p>
					<p class="detail">{signal.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.landing {
		position: relative;
		overflow: hidden;
		background: #fffdf7 !important;
		border: 3px solid var(--warm-900) !important;
	}

	.hero-grid {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		gap: 3rem;
		align-items: stretch;
		z-index: 1;
	}

	.intro h1 {
		font-size: clamp(3.2rem, 5vw, 4.8rem);
		line-height: 1.1;
		margin-bottom: 1rem;
		color: var(--warm-900) !important;
	}

	.eyebrow {
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--lavender-400);
		margin-bottom: 1rem;
	}

	.lede {
		font-size: 1.8rem;
		line-height: 1.65;
		color: var(--warm-700) !important;
		max-width: 60ch;
		margin-bottom: 2rem;
	}

	.stamp-wrap {
		margin: -0.5rem 0 1.5rem;
	}

	.stamp {
		display: inline-block;
		padding: 0.5rem 1.4rem;
		border: 2px dashed var(--lavender-400);
		border-radius: 10px;
		color: var(--lavender-500);
		font-size: 1.15rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		transform: rotate(-3deg);
		animation: stamp-wobble 6s ease-in-out infinite;
		background: rgba(255, 255, 255, 0.4);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.btn {
		border-radius: 999px;
		padding: 0.9rem 2.4rem;
		font-weight: 700;
		font-size: 1.5rem;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
		text-decoration: none;
		display: inline-block;
	}

	.btn.primary {
		background: var(--lavender-400);
		color: #fff;
		box-shadow: 0 8px 24px rgba(198, 40, 40, 0.35);
	}

	.btn.ghost {
		border: 1.5px solid var(--warm-300);
		color: var(--warm-700);
		background: rgba(255, 255, 255, 0.7);
	}

	.btn.ghost:hover {
		border-color: var(--lavender-300);
		color: var(--lavender-500);
		background: var(--lavender-50);
	}

	.btn.inline {
		padding: 0;
		border-radius: 0;
		background: none;
		color: var(--lavender-500);
		box-shadow: none;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 1.3rem;
	}

	.btn.inline:hover {
		color: var(--lavender-400);
	}

	.btn:hover {
		transform: translateY(-2px) scale(1.01);
	}

	.metrics {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 1.5rem;
	}

	.metrics dt {
		font-size: 1.2rem;
		font-weight: 500;
		color: var(--warm-500);
		margin-bottom: 0.4rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.metrics dd {
		font-size: 2.4rem;
		font-weight: 700;
		margin: 0;
		color: var(--lavender-500);
	}

	.signal {
		background: rgba(255, 255, 255, 0.8) !important;
		border: 1px solid var(--lavender-200) !important;
		backdrop-filter: blur(16px);
	}

	.glass {
		backdrop-filter: blur(16px);
	}

	/* Reveal animation */
	.reveal {
		opacity: 0;
		transform: translateY(24px);
		animation: reveal-up 0.7s ease forwards;
	}

	.reveal.delay-1 {
		animation-delay: 0.08s;
	}
	.reveal.delay-2 {
		animation-delay: 0.16s;
	}
	.reveal.delay-3 {
		animation-delay: 0.24s;
	}
	.reveal.delay-4 {
		animation-delay: 0.32s;
	}
	.reveal.delay-5 {
		animation-delay: 0.4s;
	}
	.reveal.delay-6 {
		animation-delay: 0.5s;
	}
	.reveal.delay-7 {
		animation-delay: 0.6s;
	}

	.badge {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--lavender-400);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 1.5rem;
	}

	.now-list {
		list-style: none;
		margin: 0 0 2rem 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.now-list li {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		flex-shrink: 0;
		margin-top: 0.6rem;
	}

	.dot--shipping {
		background: #79ccaa;
		box-shadow: 0 0 8px rgba(121, 204, 170, 0.6);
	}
	.dot--in-flight {
		background: #bba8f5;
		box-shadow: 0 0 8px rgba(187, 168, 245, 0.6);
	}
	.dot--live {
		background: #f0a878;
		box-shadow: 0 0 8px rgba(240, 168, 120, 0.6);
	}

	.now-list .title,
	.timeline .title {
		font-size: 1.65rem;
		font-weight: 700;
		margin: 0 0 0.35rem 0;
		color: var(--warm-900);
	}

	.detail {
		margin: 0;
		font-size: 1.45rem;
		line-height: 1.65;
		color: var(--warm-600) !important;
	}

	/* Streams section */
	.streams {
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		gap: 2.4rem;
		margin-top: 2rem;
	}

	.streams .panel {
		border: 2px solid var(--warm-900) !important;
	}

	.tracks {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		height: 100%;
	}

	.tracks article {
		padding: 1.75rem;
		border-radius: 20px;
		border: 1.5px solid transparent;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		flex: 1 1 auto;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
	}

	.tracks article:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(100, 80, 60, 0.1);
	}

	.track-lavender {
		background: var(--lavender-50);
		border-color: var(--lavender-300) !important;
	}

	.track-mint {
		background: var(--mint-50);
		border-color: var(--mint-300) !important;
	}

	.track-peach {
		background: var(--peach-50);
		border-color: var(--peach-300) !important;
	}

	.track-head {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 1.25rem;
		align-items: center;
	}

	.track-icon {
		width: clamp(60px, 5vw, 76px);
		height: clamp(60px, 5vw, 76px);
		border-radius: 18px;
		display: grid;
		place-items: center;
	}

	.track-icon--lavender {
		background: var(--lavender-400);
		color: #fff;
	}

	.track-icon--mint {
		background: var(--mint-400);
		color: #141414;
	}

	.track-icon--peach {
		background: var(--peach-400);
		color: #fff;
	}

	.track-icon :global(svg) {
		width: 36px;
		height: 36px;
		stroke: currentColor;
		stroke-width: 2;
	}

	.track-link {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 1.2rem;
		margin-top: auto;
		align-self: flex-start;
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	.track-link--lavender {
		color: var(--lavender-500);
	}
	.track-link--mint {
		color: var(--mint-500);
	}
	.track-link--peach {
		color: var(--peach-500);
	}

	.track-link:hover {
		opacity: 0.75;
	}

	.label {
		font-size: 1.25rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
		color: var(--warm-700);
	}

	.tracks .summary {
		margin: 0;
		font-size: 1.55rem;
		line-height: 1.65;
		color: var(--warm-600) !important;
	}

	/* Timeline */
	.timeline {
		background: var(--warm-50) !important;
		border: 2px solid var(--warm-900) !important;
	}

	.timeline ol {
		list-style: none;
		margin: 0;
		padding: 0;
		border-left: 2px solid var(--lavender-200);
	}

	.timeline li {
		padding: 1.5rem 0 1.5rem 2rem;
		position: relative;
	}

	.timeline li::before {
		content: "";
		position: absolute;
		left: -0.6rem;
		top: 2.2rem;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: var(--lavender-400);
		box-shadow: 0 0 10px rgba(198, 40, 40, 0.5);
	}

	.timeline .date {
		font-size: 1.15rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--lavender-400);
		margin-bottom: 0.4rem;
	}

	/* Keyframes */
	@keyframes stamp-wobble {
		0% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(-4deg);
		}
	}

	@keyframes reveal-up {
		0% {
			opacity: 0;
			transform: translateY(28px) scale(0.98);
		}
		100% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (max-width: 960px) {
		.hero-grid,
		.streams {
			grid-template-columns: 1fr;
		}

		.landing {
			padding: 2.5rem;
		}
	}

	@media (max-width: 640px) {
		.btn {
			width: 100%;
			text-align: center;
		}

		.metrics {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.timeline li {
			padding-left: 1.5rem;
		}

		.timeline li::before {
			left: -0.55rem;
		}
	}
</style>
