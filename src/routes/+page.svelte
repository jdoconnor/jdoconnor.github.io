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
	<!-- Soft pastel blobs -->
	<div class="blob-field" aria-hidden="true">
		<span class="blob blob-1"></span>
		<span class="blob blob-2"></span>
		<span class="blob blob-3"></span>
	</div>

	<div class="hero-grid">
		<div class="intro">
			<p class="eyebrow reveal">Product & Engineering Leader</p>
			<h1 class="reveal delay-1">Hi, I'm Jay.</h1>
			<p class="lede reveal delay-2">
				I help high-velocity companies turn ambiguous problems into durable systems—and ship the work
				their customers rave about.
			</p>
			<div class="hero-actions reveal delay-3">
				<a class="btn primary" href="/now">What I'm building</a>
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
						<span class="dot dot--{project.status}"></span>
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
					<a class="track-link track-link--{track.color}" href={track.link.href}>{track.link.text} →</a>
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
		background: linear-gradient(135deg, #f5f0ff 0%, #edfaf3 50%, #fff4ee 100%) !important;
		border: 1px solid var(--warm-200) !important;
	}

	/* Pastel floating blobs */
	.blob-field {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: hidden;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.55;
		mix-blend-mode: multiply;
	}

	.blob-1 {
		width: clamp(200px, 35vw, 420px);
		height: clamp(200px, 35vw, 420px);
		top: -10%;
		right: -5%;
		background: radial-gradient(circle, #d9ccff, #bba8f5 60%);
		animation: drift 18s ease-in-out infinite;
	}

	.blob-2 {
		width: clamp(150px, 25vw, 320px);
		height: clamp(150px, 25vw, 320px);
		bottom: -15%;
		left: 10%;
		background: radial-gradient(circle, #a8e4c4, #79ccaa 60%);
		animation: drift 24s ease-in-out infinite reverse;
		animation-delay: 3s;
	}

	.blob-3 {
		width: clamp(120px, 20vw, 260px);
		height: clamp(120px, 20vw, 260px);
		top: 30%;
		left: -8%;
		background: radial-gradient(circle, #f8c9a6, #f0a878 60%);
		animation: drift 20s ease-in-out infinite;
		animation-delay: 7s;
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
		transition: transform 0.25s ease, box-shadow 0.25s ease;
		text-decoration: none;
		display: inline-block;
	}

	.btn.primary {
		background: linear-gradient(120deg, #bba8f5, #79ccaa);
		color: #fff;
		box-shadow: 0 8px 24px rgba(155, 125, 232, 0.3);
	}

	.btn.ghost {
		border: 1.5px solid var(--warm-300);
		color: var(--warm-700);
		background: rgba(255,255,255,0.7);
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
		color: var(--warm-900);
		background: linear-gradient(120deg, #bba8f5, #52b38e);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
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

	.reveal.delay-1 { animation-delay: 0.08s; }
	.reveal.delay-2 { animation-delay: 0.16s; }
	.reveal.delay-3 { animation-delay: 0.24s; }
	.reveal.delay-4 { animation-delay: 0.32s; }
	.reveal.delay-5 { animation-delay: 0.4s; }
	.reveal.delay-6 { animation-delay: 0.5s; }
	.reveal.delay-7 { animation-delay: 0.6s; }

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

	.dot--shipping { background: #79ccaa; box-shadow: 0 0 8px rgba(121,204,170,0.6); }
	.dot--in-flight { background: #bba8f5; box-shadow: 0 0 8px rgba(187,168,245,0.6); }
	.dot--live { background: #f0a878; box-shadow: 0 0 8px rgba(240,168,120,0.6); }

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
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}

	.tracks article:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(100,80,60,0.1);
	}

	.track-lavender {
		background: linear-gradient(140deg, #f5f0ff, #ede5ff);
		border-color: var(--lavender-200) !important;
	}

	.track-mint {
		background: linear-gradient(140deg, #edfaf3, #d6f3e4);
		border-color: var(--mint-200) !important;
	}

	.track-peach {
		background: linear-gradient(140deg, #fff4ee, #fde8d8);
		border-color: var(--peach-200) !important;
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
		background: linear-gradient(135deg, #d9ccff, #bba8f5);
		color: #fff;
	}

	.track-icon--mint {
		background: linear-gradient(135deg, #a8e4c4, #79ccaa);
		color: #fff;
	}

	.track-icon--peach {
		background: linear-gradient(135deg, #f8c9a6, #f0a878);
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

	.track-link--lavender { color: var(--lavender-500); }
	.track-link--mint { color: var(--mint-500); }
	.track-link--peach { color: var(--peach-500); }

	.track-link:hover { opacity: 0.75; }

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
		border: 1px solid var(--warm-300) !important;
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
		background: linear-gradient(130deg, #bba8f5, #79ccaa);
		box-shadow: 0 0 10px rgba(187, 168, 245, 0.5);
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
	@keyframes drift {
		0% { transform: translate(0, 0) scale(1); }
		33% { transform: translate(3%, 5%) scale(1.06); }
		66% { transform: translate(-4%, -3%) scale(0.97); }
		100% { transform: translate(0, 0) scale(1); }
	}

	@keyframes reveal-up {
		0% { opacity: 0; transform: translateY(28px) scale(0.98); }
		100% { opacity: 1; transform: translateY(0) scale(1); }
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
