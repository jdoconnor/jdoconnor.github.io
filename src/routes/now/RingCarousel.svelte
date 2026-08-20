<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";

	type Project = {
		title: string;
		description: string;
		image?: string;
		tech: { name: string; tooltip: string; color?: string }[];
		link?: string;
	};

	let { items }: { items: Project[] } = $props();

	const total = items.length;
	const AUTO_MS = 4500;

	let current = $state(0);
	let hovering = $state(false);
	let lastInteraction = $state(0);

	function touch() {
		lastInteraction++;
	}

	const rel = (i: number) => {
		let r = (i - current + total) % total;
		if (r > total / 2) r -= total;
		return r;
	};

	const transformFor = (i: number) => {
		const r = rel(i);
		const sign = r < 0 ? -1 : 1;
		const angle = sign * Math.abs(r) * 32;
		const off = sign * Math.abs(r) * 310;
		const push = -Math.abs(r) * 150;
		return `translate(-50%, -50%) translateX(${off}px) rotateY(${angle}deg) translateZ(${push}px)`;
	};

	const opacityFor = (i: number) => (Math.abs(rel(i)) > 1 ? 0 : 1 - Math.abs(rel(i)) * 0.15);
	const zIndexFor = (i: number) => 50 - Math.abs(rel(i)) * 10;

	function focus(i: number) {
		current = i;
		touch();
	}

	function next() {
		current = (current + 1) % total;
		touch();
	}

	function prev() {
		current = (current - 1 + total) % total;
		touch();
	}

	$effect(() => {
		if (hovering) return;
		lastInteraction;
		const id = setInterval(next, AUTO_MS);
		return () => clearInterval(id);
	});
</script>

<section
	class="carousel"
	aria-roledescription="carousel"
	aria-label="Current projects"
	onpointerenter={() => (hovering = true)}
	onpointerleave={() => (hovering = false)}
>
	<div
		class="scene"
		tabindex="0"
		aria-label="Project carousel, use arrow keys to navigate"
		onkeydown={(e) => {
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
		}}
	>
		<div class="stage">
			{#each items as item, i (item.title)}
				<div
					class="slide {rel(i) === 0 ? 'slide--front' : ''}"
					style="transform: {transformFor(i)}; z-index: {zIndexFor(i)}; opacity: {opacityFor(i)};"
					role="button"
					tabindex={Math.abs(rel(i)) > 1 ? -1 : 0}
					aria-label={`Show ${item.title}`}
					onclick={() => focus(i)}
					onkeydown={(e) => {
						if (e.key === "Enter" || e.key === " ") focus(i);
					}}
				>
					<ProjectCard {...item} />
				</div>
			{/each}
		</div>
	</div>
	<div class="controls">
		<button class="control" onclick={prev} aria-label="Previous project">‹</button>
		<div class="pips" aria-hidden="true">
			{#each items as _, i (i)}
				<button
					class="pip {i === current ? 'pip--on' : ''}"
					onclick={() => focus(i)}
					aria-label={`Go to ${items[i].title}`}
				/>
			{/each}
		</div>
		<button class="control" onclick={next} aria-label="Next project">›</button>
	</div>
</section>

<style>
	.carousel {
		position: relative;
		z-index: 1;
		margin-top: 3rem;
	}

	.scene {
		perspective: 1200px;
		perspective-origin: 50% 38%;
		height: clamp(440px, 60vh, 520px);
		position: relative;
		outline: none;
	}

	.stage {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
	}

	.slide {
		position: absolute;
		left: 50%;
		top: 50%;
		width: min(300px, 72vw);
		height: 100%;
		transform-origin: center center;
		backface-visibility: hidden;
		transition:
			transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.6s ease;
		cursor: pointer;
	}

	.slide :global(.project-card) {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.slide :global(.project-media) {
		height: 190px;
		flex-shrink: 0;
	}

	.slide :global(.project-media img) {
		max-height: 100%;
	}

	.slide :global(.project-content) {
		flex: 1;
		min-height: 0;
	}

	.slide :global(.project-description) {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.slide :global(.tech-list) {
		flex: 0 0 auto;
		min-height: 30px;
		max-height: 62px;
		overflow: hidden;
	}

	.slide--front {
		cursor: default;
	}

	.slide--front :global(.project-card) {
		border-color: var(--lavender-400);
		box-shadow: 0 16px 48px rgba(20, 20, 20, 0.18);
	}

	.controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.control {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 2px solid var(--warm-900);
		background: #fffdf7;
		color: var(--warm-900);
		font-size: 2.2rem;
		line-height: 1;
		display: grid;
		place-items: center;
		cursor: pointer;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			transform 0.2s ease;
	}

	.control:hover {
		background: var(--lavender-400);
		color: #fff;
		transform: translateY(-2px);
	}

	.pips {
		display: flex;
		gap: 0.6rem;
	}

	.pip {
		width: 10px;
		height: 10px;
		padding: 0;
		border-radius: 50%;
		border: 1.5px solid var(--warm-900);
		background: transparent;
		cursor: pointer;
		transition:
			background 0.2s ease,
			transform 0.2s ease;
	}

	.pip:hover {
		transform: scale(1.3);
	}

	.pip--on {
		background: var(--lavender-400);
	}

	@media (max-width: 767px) {
		.scene {
			perspective: none;
			height: auto;
			overflow-x: auto;
			overscroll-behavior-x: contain;
			scroll-snap-type: x mandatory;
			-webkit-overflow-scrolling: touch;
		}

		.stage {
			display: flex;
			gap: 1.25rem;
			padding: 1rem 2vw 1.5rem;
			width: max-content;
			height: auto;
		}

		.slide {
			position: static;
			left: auto;
			top: auto;
			width: 66vw;
			flex: 0 0 auto;
			transform: none !important;
			opacity: 1 !important;
			cursor: default;
			scroll-snap-align: center;
		}

		.controls {
			display: none;
		}
	}
</style>
