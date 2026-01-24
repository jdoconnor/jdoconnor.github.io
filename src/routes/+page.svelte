<script lang="ts">
	import { Award, CircuitBoard, Users } from "lucide-svelte";

	const nowProjects = [
		{
			title: "SecurityPal Concierge Agents",
			detail: "Applied AI rollout pairing concierge agents with human QA for questionnaires and audits.",
			status: "shipping",
		},
		{
			title: "DogShitAI.com",
			detail: "Edge-native pet tracking experiences built with SvelteKit, Turso, and Cloudflare.",
			status: "in-flight",
		},
		{
			title: "Rage Calculator",
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
		},
		{
			label: "Engineering strategy",
			summary: "Systems thinking across platform, AI copilots, and dependable delivery.",
			link: { href: "/blog", text: "Read essays" },
			icon: CircuitBoard,
		},
		{
			label: "People & culture",
			summary: "Growing teams that feel psychologically safe, ambitious, and accountable.",
			link: {
				href: "https://www.cal.com/jdoconnor",
				text: "Work together",
			},
			icon: Users,
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
				"Scaled engineering squads integrating Quip’s collaborative docs with Salesforce Sales & Service Cloud, improving go-to-market velocity.",
		},
	];
</script>

<section class="landing card fade-in" role="group" aria-label="Hero intro">
	<div class="color-sweep" aria-hidden="true">
		<span></span>
		<span></span>
		<span></span>
	</div>
	<div class="sky" aria-hidden="true">
		<span class="orb" style="--index: 0"></span>
		<span class="orb" style="--index: 1"></span>
		<span class="orb" style="--index: 2"></span>
	</div>
	<div class="hero-grid">
		<div class="intro">
			<p class="eyebrow reveal">Product & Engineering Leader</p>
			<h1 class="reveal delay-1">Hi, I’m Jay.</h1>
			<p class="lede reveal delay-2">
				I help high-velocity companies turn ambiguous problems into durable systems—and ship the work
				their customers rave about.
			</p>
			<div class="hero-actions reveal delay-3">
				<a class="btn primary" href="/now">What I’m building</a>
				<a class="btn ghost" href="/blog">Read the latest essays</a>
			</div>
			<dl class="metrics reveal delay-4">
				<div>
					<dt>Years growing teams</dt>
					<dd>15+</dd>
				</div>
			</dl>
		</div>
		<div class="signal card glass reveal delay-5">
			<p class="badge">Current</p>
			<ul class="now-list">
				{#each nowProjects as project}
					<li>
						<div>
							<p class="title">{project.title}</p>
							<p class="detail">{project.detail}</p>
						</div>
					</li>
				{/each}
			</ul>
			<a class="btn inline" href="https://www.cal.com/jdoconnor">Book time to discuss further →</a>
		</div>
	</div>
</section>

<section class="streams">
	<div class="panel card reveal delay-6">
		<p class="eyebrow">Focus tracks</p>
		<div class="tracks">
			{#each tracks as track}
				<article>
					<div class="track-head">
						<span class="track-icon" aria-hidden="true">
							<svelte:component this={track.icon} />
						</span>
						<div>
							<p class="label">{track.label}</p>
							<p class="summary">{track.summary}</p>
						</div>
					</div>
					<a class="track-link" href={track.link.href}>{track.link.text}</a>
				</article>
			{/each}
		</div>
	</div>
	<div class="timeline card reveal delay-7">
		<p class="eyebrow">Timeline</p>
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
		background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.25), transparent 55%),
			radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.2), transparent 45%),
			var(--card-bg);
	}

	.color-sweep {
		position: absolute;
		inset: 0;
		display: flex;
		gap: 2rem;
		animation: pulse 12s ease-in-out infinite;
		filter: blur(110px);
		opacity: 0.7;
	}

	.color-sweep span {
		flex: 1;
		background: linear-gradient(140deg, rgba(14, 165, 233, 0.35), rgba(236, 72, 153, 0.4));
	}

	.color-sweep span:nth-child(2) {
		background: linear-gradient(140deg, rgba(139, 92, 246, 0.35), rgba(34, 197, 94, 0.4));
	}

	.color-sweep span:nth-child(3) {
		background: linear-gradient(140deg, rgba(248, 113, 113, 0.35), rgba(14, 165, 233, 0.3));
	}

	.sky {
		position: absolute;
		inset: -20%;
		filter: blur(60px);
	}

	.orb {
		position: absolute;
		width: clamp(160px, 25vw, 320px);
		height: clamp(160px, 25vw, 320px);
		border-radius: 50%;
		opacity: 0.6;
		background: linear-gradient(140deg, rgba(59, 130, 246, 0.65), rgba(236, 72, 153, 0.45));
		animation: drift 14s ease-in-out infinite;
		animation-delay: calc(var(--index) * 2s);
	}

	.orb:nth-child(2) {
		background: linear-gradient(140deg, rgba(16, 185, 129, 0.65), rgba(139, 92, 246, 0.45));
		mix-blend-mode: screen;
	}

	.orb:nth-child(3) {
		background: linear-gradient(140deg, rgba(248, 113, 113, 0.5), rgba(59, 130, 246, 0.35));
	}

	.hero-grid {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		gap: 3rem;
		align-items: stretch;
	}

	.intro h1 {
		font-size: clamp(3.2rem, 5vw, 4.8rem);
		line-height: 1.1;
		margin-bottom: 1rem;
	}

	.eyebrow {
		font-size: 1.2rem;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		color: var(--text-muted);
		margin-bottom: 1rem;
	}

	.lede {
		font-size: 1.8rem;
		color: var(--text-secondary);
		max-width: 60ch;
		margin-bottom: 2rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.btn {
		border-radius: 999px;
		padding: 0.85rem 2.4rem;
		font-weight: 600;
		font-size: 1.4rem;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
		text-decoration: none;
	}

	.btn.primary {
		background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
		color: var(--text-primary);
		box-shadow: 0 12px 30px rgba(15, 118, 110, 0.35);
	}

	.btn.ghost {
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: var(--text-primary);
		background: transparent;
	}

	.btn.inline {
		padding: 0;
		border-radius: 0;
		background: none;
		color: var(--link-color);
		box-shadow: none;
		text-transform: uppercase;
		letter-spacing: 0.08em;
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
		color: var(--text-muted);
		margin-bottom: 0.3rem;
	}

	.metrics dd {
		font-size: 2rem;
		margin: 0;
	}

	.signal {
		background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.12), transparent 60%),
			var(--card-bg);
		border: 1px solid rgba(148, 163, 184, 0.3);
	}

	.reveal {
		opacity: 0;
		transform: translateY(24px);
		animation: reveal-up 0.8s ease forwards;
	}

	.reveal.delay-1 {
		animation-delay: 0.1s;
	}

	.reveal.delay-2 {
		animation-delay: 0.2s;
	}

	.reveal.delay-3 {
		animation-delay: 0.3s;
	}

	.reveal.delay-4 {
		animation-delay: 0.4s;
	}

	.reveal.delay-5 {
		animation-delay: 0.5s;
	}

	.reveal.delay-6 {
		animation-delay: 0.6s;
	}

	.reveal.delay-7 {
		animation-delay: 0.7s;
	}

	.glass {
		backdrop-filter: blur(18px);
	}

	.badge {
		font-size: 1.2rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.2em;
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
	}

	.status {
		font-family: "IBM Plex Mono", "Space Grotesk", sans-serif;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 999px;
		padding: 0.35rem 1.1rem;
		text-transform: uppercase;
		font-size: 1.1rem;
		align-self: flex-start;
	}

	.now-list .title,
	.timeline .title {
		font-weight: 600;
		margin: 0 0 0.3rem 0;
	}

	.detail {
		margin: 0;
		color: var(--text-secondary);
	}

	.streams {
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		gap: 2.4rem;
		margin-top: 2rem;
	}

	.tracks {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		height: 100%;
	}

	.tracks article {
		padding: 1.75rem;
		border-radius: 20px;
		border: 1px solid rgba(148, 163, 184, 0.3);
		background: rgba(15, 23, 42, 0.45);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		flex: 1 1 auto;
	}

	.track-head {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 1.5rem;
		align-items: center;
	}

	.track-icon {
		width: clamp(72px, 6vw, 88px);
		height: clamp(72px, 6vw, 88px);
		border-radius: 20px;
		background: linear-gradient(135deg, rgba(34, 197, 94, 0.35), rgba(14, 165, 233, 0.25));
		border: 1px solid rgba(148, 163, 184, 0.4);
		display: grid;
		place-items: center;
		color: var(--text-primary);
		box-shadow: 0 12px 30px rgba(15, 23, 42, 0.55);
	}

	.tracks article:nth-child(2) .track-icon {
		background: linear-gradient(135deg, rgba(14, 165, 233, 0.32), rgba(99, 102, 241, 0.32));
	}

	.tracks article:nth-child(3) .track-icon {
		background: linear-gradient(135deg, rgba(236, 72, 153, 0.32), rgba(139, 92, 246, 0.32));
	}

	.track-icon :global(svg) {
		width: 42px;
		height: 42px;
		stroke: currentColor;
		stroke-width: 2;
	}

	.tracks article:nth-child(1) {
		background: linear-gradient(160deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.08)), rgba(15, 23, 42, 0.5);
		border-color: rgba(16, 185, 129, 0.35);
	}

	.tracks article:nth-child(2) {
		background: linear-gradient(160deg, rgba(14, 165, 233, 0.18), rgba(99, 102, 241, 0.1)), rgba(15, 23, 42, 0.5);
		border-color: rgba(99, 102, 241, 0.35);
	}

	.tracks article:nth-child(3) {
		background: linear-gradient(160deg, rgba(236, 72, 153, 0.18), rgba(251, 191, 36, 0.08)), rgba(15, 23, 42, 0.5);
		border-color: rgba(236, 72, 153, 0.35);
	}

	.track-link {
		color: var(--link-color);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin-top: auto;
		align-self: flex-start;
	}

	.label {
		font-family: "IBM Plex Mono", "Space Grotesk", sans-serif;
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		margin-bottom: 0.8rem;
		color: var(--text-muted);
	}

	.tracks .summary {
		margin: 0;
		color: var(--text-secondary);
	}

	.timeline {
		overflow: hidden;
	}

	.timeline ol {
		list-style: none;
		margin: 0;
		padding: 0;
		border-left: 1px solid rgba(148, 163, 184, 0.4);
	}

	.timeline li {
		padding: 1.5rem 0 1.5rem 2rem;
		position: relative;
	}

	.timeline li::before {
		content: "";
		position: absolute;
		left: -0.65rem;
		top: 2.2rem;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: linear-gradient(130deg, var(--accent-primary), var(--accent-secondary));
		box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);
	}

	.timeline .date {
		font-size: 1.2rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--text-muted);
		margin-bottom: 0.5rem;
	}

	@keyframes drift {
		0% {
			transform: translate(-10%, -10%) scale(1);
		}

		50% {
			transform: translate(10%, 15%) scale(1.15);
		}

		100% {
			transform: translate(-10%, -10%) scale(1);
		}
	}

	@keyframes reveal-up {
		0% {
			opacity: 0;
			transform: translateY(32px) scale(0.98);
		}

		100% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes pulse {
		0% {
			transform: translateX(-5%);
		}

		50% {
			transform: translateX(5%);
		}

		100% {
			transform: translateX(-5%);
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
			left: -0.2rem;
		}
	}
</style>
