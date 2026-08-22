<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	const STORAGE_KEY = "rage-calculator";
	const WORKDAYS_PER_YEAR = 260;

	let salary = "";
	let holidays = "";
	let daysOff = "";
	let hasInteracted = false;

	type StoredValues = { salary: number; holidays: number; daysOff: number };

	onMount(() => {
		if (!browser) return;
		const stored = localStorage.getItem(STORAGE_KEY);
		if (!stored) return;
		try {
			const parsed = JSON.parse(stored) as Partial<StoredValues>;
			if (typeof parsed.salary === "number") salary = parsed.salary.toString();
			if (typeof parsed.holidays === "number") holidays = parsed.holidays.toString();
			if (typeof parsed.daysOff === "number") daysOff = parsed.daysOff.toString();
		} catch (e) {
			console.error("Unable to read rage calculator history", e);
		}
	});

	const integerFrom = (v: string) => {
		const n = Number.parseInt(v, 10);
		return Number.isFinite(n) ? Math.max(n, 0) : 0;
	};
	const floatFrom = (v: string) => {
		const n = Number.parseFloat(v);
		return Number.isFinite(n) ? Math.max(n, 0) : 0;
	};

	function persist() {
		if (!browser) return;
		localStorage.setItem(
			STORAGE_KEY,
			JSON.stringify({ salary: floatFrom(salary), holidays: integerFrom(holidays), daysOff: integerFrom(daysOff) })
		);
	}

	function handleInput() {
		hasInteracted = true;
		persist();
	}

	function resetForm() {
		salary = "";
		holidays = "";
		daysOff = "";
		hasInteracted = false;
		if (browser) localStorage.removeItem(STORAGE_KEY);
	}

	$: salaryValue = floatFrom(salary);
	$: holidaysValue = integerFrom(holidays);
	$: daysOffValue = integerFrom(daysOff);
	$: totalDaysOff = Math.min(WORKDAYS_PER_YEAR - 1, holidaysValue + daysOffValue);
	$: workingDays = Math.max(1, WORKDAYS_PER_YEAR - totalDaysOff);
	$: dailyRate = salaryValue > 0 ? salaryValue / workingDays : 0;
	$: formattedDailyRate = dailyRate
		? dailyRate.toLocaleString("en-US", {
				style: "currency",
				currency: "USD",
				maximumFractionDigits: dailyRate >= 100 ? 0 : 2,
			})
		: "";
	$: headline = formattedDailyRate
		? `I know your day sucked, but you still made ${formattedDailyRate} today.`
		: "Tell me about your year and I'll keep score for you.";
	$: subline = formattedDailyRate
		? `Across roughly ${workingDays.toLocaleString()} working days, that's what your grit is worth.`
		: "Drop in a few numbers and I will do the emotional accounting for you.";
</script>

<svelte:head>
	<title>Rage — Daily Pay Reality Check</title>
	<meta
		name="description"
		content="A small cathartic calculator that tells you how much today paid, even when it drained you."
	/>
</svelte:head>

<section>
	<h1>Rage calculator</h1>
	<p class="lede">
		We all have days that fry every nerve ending. I'm assuming you already protect your weekends,
		so let me do the weekday math your brain can't hold right now.
	</p>

	<form class="form" on:submit|preventDefault>
		<label>
			<span>Yearly salary</span>
			<div class="input-prefix">
				<span>$</span>
				<input type="number" inputmode="decimal" min="0" step="500" placeholder="125000" bind:value={salary} on:input={handleInput} />
			</div>
		</label>
		<label>
			<span>Paid holidays taken</span>
			<input type="number" inputmode="numeric" min="0" max="365" placeholder="15" bind:value={holidays} on:input={handleInput} />
		</label>
		<label>
			<span>Other days off</span>
			<input type="number" inputmode="numeric" min="0" max="365" placeholder="10" bind:value={daysOff} on:input={handleInput} />
		</label>

		<div class="actions">
			<button type="button" class="ghost" on:click={resetForm}>Clear</button>
			{#if hasInteracted}
				<span class="muted small">Saved locally in your browser.</span>
			{/if}
		</div>
	</form>

	<div class="result">
		<p class="payout">{formattedDailyRate || "—"}</p>
		<h2>{headline}</h2>
		<p class="muted">{subline}</p>

		<dl class="stats">
			<div>
				<dt>Working days this year</dt>
				<dd>{workingDays.toLocaleString()}</dd>
			</div>
			<div>
				<dt>Total days off</dt>
				<dd>{totalDaysOff.toLocaleString()}</dd>
			</div>
		</dl>
	</div>
</section>

<style>
	.lede {
		font-size: 1.15rem;
		margin-bottom: 2rem;
	}
	.form {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-bottom: 2.5rem;
	}
	.form label {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		font-size: 0.9rem;
		font-weight: 500;
	}
	.form span {
		color: var(--muted);
	}
	input {
		width: 100%;
		font: inherit;
		font-size: 1rem;
		padding: 0.6rem 0.7rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: #fff;
		color: var(--fg);
	}
	input:focus {
		outline: 2px solid var(--accent);
		outline-offset: 1px;
		border-color: transparent;
	}
	.input-prefix {
		position: relative;
	}
	.input-prefix span {
		position: absolute;
		left: 0.7rem;
		top: 50%;
		transform: translateY(-50%);
		color: var(--muted);
	}
	.input-prefix input {
		padding-left: 1.5rem;
	}
	.actions {
		grid-column: 1 / -1;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.ghost {
		font: inherit;
		font-size: 0.9rem;
		padding: 0.45rem 1.1rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: #fff;
		cursor: pointer;
	}
	.ghost:hover {
		border-color: var(--muted);
	}
	.small {
		font-size: 0.85rem;
	}
	.result {
		border-top: 1px solid var(--border);
		padding-top: 2rem;
	}
	.payout {
		font-size: 3rem;
		font-weight: 700;
		margin: 0 0 0.5rem;
		letter-spacing: -0.02em;
	}
	.result h2 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}
	.stats {
		display: flex;
		gap: 2.5rem;
		margin: 1.5rem 0 0;
	}
	.stats dt {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--muted);
	}
	.stats dd {
		margin: 0.2rem 0 0;
		font-size: 1.5rem;
		font-weight: 600;
	}

	@media (max-width: 600px) {
		.form {
			grid-template-columns: 1fr;
		}
		.stats {
			gap: 1.5rem;
		}
	}
</style>
