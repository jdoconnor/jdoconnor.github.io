<script lang="ts">
	import { page } from "$app/stores";
	import "../theme.css";

	const nav = [
		{ label: "Home", href: "/" },
		{ label: "Now", href: "/now" },
		{ label: "Writing", href: "/blog" },
	];

	const isActive = (href: string, pathname: string) =>
		href === "/" ? pathname === "/" : pathname.startsWith(href);
</script>

<div id="app-shell">
	<header>
		<a class="wordmark" href="/">Jay O'Connor</a>
		<nav class="nav">
			{#each nav as link}
				<a href={link.href} class:active={isActive(link.href, $page.url.pathname)}>{link.label}</a>
			{/each}
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<hr />
		<ul class="links">
			<li><a href="https://www.linkedin.com/in/jdoconnor">LinkedIn</a></li>
			<li><a href="https://www.github.com/jdoconnor">GitHub</a></li>
			<li><a href="mailto:jaydoconnor@gmail.com">Email</a></li>
			<li><a href="https://www.cal.com/jdoconnor">Book time</a></li>
			<li><a href="https://discordapp.com/users/257316698728693760">Discord</a></li>
		</ul>
		<p class="muted small">&copy; {new Date().getFullYear()} Jay O'Connor</p>
	</footer>
</div>

<style>
	header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
		margin-bottom: 3rem;
	}

	.wordmark {
		font-size: 1.15rem;
		font-weight: 650;
		color: var(--fg);
		letter-spacing: -0.01em;
	}
	.wordmark:hover {
		text-decoration: none;
		color: var(--accent);
	}

	.nav {
		display: flex;
		gap: 1.25rem;
	}
	.nav a {
		color: var(--muted);
		font-size: 0.95rem;
		font-weight: 500;
	}
	.nav a:hover {
		color: var(--fg);
		text-decoration: none;
	}
	.nav a.active {
		color: var(--fg);
	}

	main {
		flex: 1;
	}

	footer {
		margin-top: 4rem;
	}
	footer .small {
		font-size: 0.85rem;
		margin-top: 1.25rem;
	}

	@media (max-width: 480px) {
		header {
			flex-direction: column;
		}
	}
</style>
