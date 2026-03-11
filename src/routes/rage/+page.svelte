<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'rage-calculator';
	const WORKDAYS_PER_YEAR = 260; // assume no weekends

	let salary = '';
	let holidays = '';
	let daysOff = '';
	let hasInteracted = false;

	type StoredValues = {
		salary: number;
		holidays: number;
		daysOff: number;
	};

	onMount(() => {
		if (!browser) return;

		const stored = localStorage.getItem(STORAGE_KEY);

		if (!stored) return;

		try {
			const parsed = JSON.parse(stored) as Partial<StoredValues>;
			if (typeof parsed.salary === 'number') {
				salary = parsed.salary.toString();
			}
			if (typeof parsed.holidays === 'number') {
				holidays = parsed.holidays.toString();
			}
			if (typeof parsed.daysOff === 'number') {
				daysOff = parsed.daysOff.toString();
			}
		} catch (error) {
			console.error('Unable to read rage calculator history', error);
		}
	});

	const integerFrom = (value: string) => {
		const parsed = Number.parseInt(value, 10);
		return Number.isFinite(parsed) ? Math.max(parsed, 0) : 0;
	};

	const floatFrom = (value: string) => {
		const parsed = Number.parseFloat(value);
		return Number.isFinite(parsed) ? Math.max(parsed, 0) : 0;
	};

	function persist() {
		if (!browser) return;

		const payload: StoredValues = {
			salary: floatFrom(salary),
			holidays: integerFrom(holidays),
			daysOff: integerFrom(daysOff)
		};

		localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
	}

	function handleInput() {
		hasInteracted = true;
		persist();
	}

	function resetForm() {
		salary = '';
		holidays = '';
		daysOff = '';
		hasInteracted = false;
		if (browser) {
			localStorage.removeItem(STORAGE_KEY);
		}
	}

	$: salaryValue = floatFrom(salary);
	$: holidaysValue = integerFrom(holidays);
	$: daysOffValue = integerFrom(daysOff);
	$: totalDaysOff = Math.min(WORKDAYS_PER_YEAR - 1, holidaysValue + daysOffValue);
	$: workingDays = Math.max(1, WORKDAYS_PER_YEAR - totalDaysOff);
	$: dailyRate = salaryValue > 0 ? salaryValue / workingDays : 0;
	$: formattedDailyRate = dailyRate
		? dailyRate.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
				maximumFractionDigits: dailyRate >= 100 ? 0 : 2
		  })
		: '';
	$: headline = formattedDailyRate
		? `I know your day sucked, but you still made ${formattedDailyRate} today.`
		: 'Tell me about your year and I'll keep score for you.';
	$: subline = formattedDailyRate
		? `Across roughly ${workingDays.toLocaleString()} working days, that's what your grit is worth.`
		: 'Drop in a few numbers and I will do the emotional accounting for you.';
</script>

<svelte:head>
	<title>Rage — Daily Pay Reality Check</title>
	<meta
		name="description"
		content="A small cathartic calculator that tells you how much today paid, even when it drained you."
	/>
</svelte:head>

<section class="rage fade-in">
	<!-- Animated pastel background blobs -->
	<div class="blob-bg" aria-hidden="true">
		<span class="blob b1"></span>
		<span class="blob b2"></span>
		<span class="blob b3"></span>
	</div>

	<header class="rage-header">
		<p class="eyebrow">New route · Rage</p>
		<h1 class="gradient-text">Your rage-to-pay translator</h1>
		<p class="intro-lede">
			We all have the kind of day that fries every nerve ending. I'm assuming you already protect your weekends,
			so let me do the weekday math your brain can't hold right now.
		</p>
	</header>

	<form class="rage-form" on:submit|preventDefault>
		<div class="fields-grid">
			<label>
				<span>What's your yearly salary?</span>
				<div class="input-with-prefix">
					<span class="prefix">$</span>
					<input
						type="number"
						inputmode="decimal"
						min="0"
						step="1000"
						placeholder="125000"
						bind:value={salary}
						on:input={handleInput}
					/>
				</div>
			</label>

			<label>
				<span>How many paid holidays do you actually take?</span>
				<input
					type="number"
					inputmode="numeric"
					min="0"
					max="365"
					placeholder="15"
					bind:value={holidays}
					on:input={handleInput}
				/>
			</label>

			<label>
				<span>How many other days off do you claim?</span>
				<input
					type="number"
					inputmode="numeric"
					min="0"
					max="365"
					placeholder="10"
					bind:value={daysOff}
					on:input={handleInput}
				/>
			</label>
		</div>

		<div class="actions">
			<button type="button" class="ghost-btn" on:click={resetForm}>
				Clear the slate
			</button>
			{#if hasInteracted}
				<span class="hint">Autosaved locally. No servers, no bosses, just catharsis.</span>
			{/if}
		</div>
	</form>

	<div class="result-card">
		<div class="payout-spotlight">
			<p class="eyebrow">Today's payout</p>
			<p class="payout-amount">{formattedDailyRate || '—'}</p>
			<p class="payout-context">
				Even on the worst weekday, this is what you earned for showing up.
			</p>
		</div>

		<div class="reality-check">
			<p class="eyebrow">Reality check</p>
			<h2>{headline}</h2>
			<p class="subline">{subline}</p>

			<dl class="stats">
				<div class="stat">
					<dt>Working days this year</dt>
					<dd>{workingDays.toLocaleString()}</dd>
				</div>
				<div class="stat">
					<dt>Total days off logged</dt>
					<dd>{totalDaysOff.toLocaleString()}</dd>
				</div>
			</dl>

			<p class="whisper">
				Need another reminder later? Your answers stay in this browser so future-you can vent faster.
			</p>
		</div>
	</div>
</section>

<style>
	.rage {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 2.4rem;
		padding: clamp(2rem, 4vw, 4rem);
		border-radius: 24px;
		background: linear-gradient(135deg, #fddde7 0%, #f5f0ff 45%, #d6f3e4 100%);
		border: 1px solid var(--warm-200);
		box-shadow: 0 4px 28px rgba(100, 80, 60, 0.07);
		overflow: hidden;
	}

	/* Animated blobs */
	.blob-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: hidden;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(50px);
		opacity: 0.4;
		mix-blend-mode: multiply;
	}

	.b1 {
		width: 300px;
		height: 300px;
		top: -80px;
		right: -60px;
		background: radial-gradient(circle, #f9bad0, #f090b4);
		animation: sway 16s ease-in-out infinite;
	}

	.b2 {
		width: 240px;
		height: 240px;
		bottom: -60px;
		left: 10%;
		background: radial-gradient(circle, #a8e4c4, #79ccaa);
		animation: sway 22s ease-in-out infinite reverse;
		animation-delay: 4s;
	}

	.b3 {
		width: 200px;
		height: 200px;
		top: 40%;
		left: -60px;
		background: radial-gradient(circle, #d9ccff, #bba8f5);
		animation: sway 18s ease-in-out infinite;
		animation-delay: 8s;
	}

	.rage-header {
		position: relative;
		z-index: 1;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--rose-400);
		margin-bottom: 0.5rem;
	}

	.rage-header h1 {
		margin-bottom: 0.75rem;
	}

	.intro-lede {
		font-size: 1.65rem;
		line-height: 1.65;
		color: var(--warm-700) !important;
		max-width: 62ch;
	}

	.rage-form {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		background: rgba(255, 255, 255, 0.65);
		border: 1.5px solid var(--warm-200);
		border-radius: 20px;
		padding: 2rem;
		backdrop-filter: blur(12px);
	}

	.fields-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem;
		width: 100%;
	}

	.fields-grid label {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		font-weight: 600;
		font-size: 1.5rem;
		color: var(--warm-800);
		height: 100%;
	}

	.fields-grid label > input,
	.fields-grid label > .input-with-prefix {
		margin-top: auto;
	}

	label span {
		color: var(--warm-700);
	}

	input[type='number'] {
		background: #fff;
		border: 1.5px solid var(--warm-300);
		border-radius: 12px;
		padding: 0.9rem 1.2rem;
		color: var(--warm-900);
		font-size: 1.6rem;
		font-family: inherit;
		width: 100%;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	input[type='number']:focus {
		border-color: var(--lavender-300);
		outline: none;
		box-shadow: 0 0 0 3px rgba(187, 168, 245, 0.2);
	}

	.input-with-prefix {
		position: relative;
		width: 100%;
	}

	.prefix {
		position: absolute;
		left: 1.2rem;
		top: 50%;
		transform: translateY(-50%);
		color: var(--warm-500);
		pointer-events: none;
		font-size: 1.6rem;
	}

	.input-with-prefix input {
		padding-left: 2.4rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		justify-content: space-between;
	}

	.ghost-btn {
		background: transparent;
		border: 1.5px solid var(--warm-300);
		border-radius: 999px;
		color: var(--warm-600);
		padding: 0.6rem 1.6rem;
		font-size: 1.4rem;
		font-weight: 600;
		cursor: pointer;
		transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
		font-family: inherit;
	}

	.ghost-btn:hover {
		color: var(--rose-500);
		border-color: var(--rose-300);
		background: var(--rose-50);
	}

	.hint {
		font-size: 1.3rem;
		color: var(--warm-500);
	}

	/* Result card */
	.result-card {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
		gap: 2rem;
		background: rgba(255, 255, 255, 0.7);
		border: 1.5px solid var(--warm-200);
		border-radius: 20px;
		padding: 2rem;
		backdrop-filter: blur(12px);
	}

	.payout-spotlight {
		background: linear-gradient(135deg, #f5f0ff, #ede5ff);
		border: 1.5px solid var(--lavender-200);
		border-radius: 16px;
		padding: 2rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.payout-spotlight .eyebrow {
		color: var(--lavender-400);
	}

	.payout-amount {
		font-size: clamp(3.2rem, 7vw, 5.5rem);
		margin: 0;
		font-weight: 800;
		background: linear-gradient(120deg, #bba8f5, #52b38e);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1.1;
	}

	.payout-context {
		font-size: 1.35rem;
		color: var(--warm-600) !important;
		line-height: 1.5;
	}

	.reality-check {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.reality-check h2 {
		font-size: clamp(1.7rem, 2.5vw, 2rem);
		color: var(--warm-900) !important;
		margin: 0;
		line-height: 1.4;
	}

	.subline {
		font-size: 1.5rem;
		color: var(--warm-600) !important;
		margin: 0;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
	}

	.stat {
		background: var(--warm-50);
		border-radius: 14px;
		padding: 1.25rem;
		border: 1px solid var(--warm-200);
	}

	.stats dt {
		font-size: 1.25rem;
		color: var(--warm-500);
		margin-bottom: 0.4rem;
		font-weight: 500;
	}

	.stats dd {
		margin: 0;
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--warm-900);
	}

	.whisper {
		font-size: 1.3rem;
		color: var(--warm-400) !important;
		margin: 0;
	}

	@keyframes sway {
		0% { transform: translate(0, 0) scale(1); }
		35% { transform: translate(3%, 5%) scale(1.05); }
		70% { transform: translate(-4%, -2%) scale(0.97); }
		100% { transform: translate(0, 0) scale(1); }
	}

	@media (max-width: 900px) {
		.fields-grid {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}

		.result-card {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		.actions {
			flex-direction: column;
			align-items: flex-start;
		}

		.hint {
			font-size: 1.2rem;
		}
	}
</style>
