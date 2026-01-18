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
		: 'Tell me about your year and I’ll keep score for you.';
	$: subline = formattedDailyRate
		? `Across roughly ${workingDays.toLocaleString()} working days, that’s what your grit is worth.`
		: 'Drop in a few numbers and I will do the emotional accounting for you.';
</script>

<svelte:head>
	<title>Rage — Daily Pay Reality Check</title>
	<meta
		name="description"
		content="A small cathartic calculator that tells you how much today paid, even when it drained you."
	/>
</svelte:head>

<section class="rage card fade-in floaty">
	<header class="stack gap-sm">
		<p class="eyebrow">New route • Rage</p>
		<h1 class="gradient-text">Your rage-to-pay translator</h1>
		<p>
			We all have the kind of day that fries every nerve ending. I’m assuming you already protect your weekends,
			so let me do the weekday math your brain can’t hold right now.
		</p>
	</header>

	<form class="rage-form" on:submit|preventDefault>
		<div class="fields-grid">
			<label>
				<span>What’s your yearly salary?</span>
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
			<button type="button" class="ghost" on:click={resetForm}>
				Clear the slate
			</button>
			{#if hasInteracted}
				<span class="hint">Autosaved locally. No servers, no bosses, just catharsis.</span>
			{/if}
		</div>
	</form>

	<div class="result card secondary">
		<div class="payout-spotlight">
			<p class="eyebrow">Today’s payout</p>
			<p class="payout-amount">{formattedDailyRate || '—'}</p>
			<p class="payout-context">
				Even on the worst weekday, this is what you earned for showing up.
			</p>
		</div>

		<p class="eyebrow">Reality check</p>
		<h2>{headline}</h2>
		<p>{subline}</p>

		<dl class="stats">
			<div>
				<dt>Working days this year</dt>
				<dd>{workingDays.toLocaleString()}</dd>
			</div>
			<div>
				<dt>Total days off logged</dt>
				<dd>{totalDaysOff.toLocaleString()}</dd>
			</div>
		</dl>

		<p class="whisper">
			Need another reminder later? Your answers stay in this browser so future-you can vent faster.
		</p>
	</div>
</section>

<style>
	.rage {
		display: flex;
		flex-direction: column;
		gap: 2.4rem;
	}

	.stack {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.rage-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
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
		font-weight: 500;
		height: 100%;
	}

	.fields-grid label > input,
	.fields-grid label > .input-with-prefix {
		margin-top: auto;
	}

	label span {
		color: var(--text-primary);
	}

	input[type='number'] {
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid var(--card-border);
		border-radius: 12px;
		padding: 1rem 1.2rem;
		color: var(--text-primary);
		font-size: 1.6rem;
		font-family: inherit;
		width: 100%;
	}

	input[type='number']:focus {
		border-color: var(--accent-primary);
		outline: none;
		box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
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
		color: var(--text-secondary);
		pointer-events: none;
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

	button.ghost {
		background: transparent;
		border: 1px solid var(--card-border);
		border-radius: 999px;
		color: var(--text-secondary);
		padding: 0.6rem 1.6rem;
		font-size: 1.4rem;
		cursor: pointer;
		transition: border-color 0.2s ease, color 0.2s ease;
	}

	button.ghost:hover {
		color: var(--text-primary);
		border-color: var(--accent-secondary);
	}

	.hint {
		font-size: 1.3rem;
		color: var(--text-muted);
	}

	.result.secondary {
		background: rgba(15, 23, 42, 0.75);
		border: 1px solid rgba(148, 163, 184, 0.4);
		display: flex;
		flex-direction: column;
		gap: 1.8rem;
	}

	.payout-spotlight {
		background: radial-gradient(circle at top right, rgba(96, 165, 250, 0.3), transparent 60%);
		border: 1px solid rgba(139, 92, 246, 0.4);
		border-radius: 18px;
		padding: 2rem;
		text-align: center;
		box-shadow: 0 15px 45px rgba(15, 23, 42, 0.6);
	}

	.payout-amount {
		font-size: clamp(3.6rem, 8vw, 6rem);
		margin: 1rem 0 0.5rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.payout-context {
		font-size: 1.4rem;
		color: var(--text-secondary);
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 1.2rem;
		color: var(--text-muted);
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 1.2rem;
	}

	.stats div {
		background: rgba(255, 255, 255, 0.02);
		border-radius: 12px;
		padding: 1rem;
		border: 1px solid rgba(148, 163, 184, 0.2);
	}

	.stats dt {
		font-size: 1.3rem;
		color: var(--text-muted);
		margin-bottom: 0.4rem;
	}

	.stats dd {
		margin: 0;
		font-size: 2rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.whisper {
		font-size: 1.3rem;
		color: var(--text-muted);
	}

	@media (max-width: 900px) {
		.fields-grid {
			grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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
