<script lang="ts">
	import { page } from "$app/stores";
	import githubLogo from "$lib/assets/github.svg?raw";
	import gmailLogo from "$lib/assets/gmail.svg?raw";
	import discordLogo from "$lib/assets/discord.svg?raw";
	import linkedInLogo from "$lib/assets/linkedin.svg?raw";
	import scheduleLogo from "$lib/assets/calendar.svg?raw";
	import Icon from "$lib/icon.svelte";
	import "../theme.css";

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "Now", href: "/now" },
		{ label: "Blog", href: "/blog" },
	];

	const contactCta = {
		label: "Book time",
		href: "https://www.cal.com/jdoconnor",
	};

	const isActive = (href: string, pathname: string) => {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname === href || pathname.startsWith(`${href}/`);
	};
</script>

<div class="container mx-auto">
	<header class="site-header" aria-label="Primary">
		<div class="nav-card">
			<a class="brand" href="/">
				<span class="brand-mark" aria-hidden="true">J•O</span>
				<div class="brand-copy">
					<span class="brand-name">Jay O’Connor</span>
					<span class="brand-caption">Engineering × Product</span>
				</div>
			</a>
			<nav class="primary-nav" aria-label="Primary site navigation">
				{#each navLinks as link}
					<a
						href={link.href}
						class:selected={isActive(link.href, $page.url.pathname)}
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<a class="cta" href={contactCta.href} rel="noreferrer" target="_blank">
				{contactCta.label}
			</a>
		</div>
	</header>
	<div id="content" class="content-padding">
		<slot />
	</div>
	<footer id="social" class="footer footer-center text-base-content">
		<nav class="grid grid-flow-col gap-4">
			<Icon
				name="View my LinkedIn profile"
				image={linkedInLogo}
				link="https://www.linkedin.com/in/jdoconnor"
			/>
			<Icon
				name="Schedule a meeting with me"
				image={scheduleLogo}
				link="https://www.cal.com/jdoconnor"
			/>
			<Icon
				name="View my Github profile"
				image={githubLogo}
				link="https://www.github.com/jdoconnor"
			/>
			<Icon name="Email me" image={gmailLogo} link="mailto:jaydoconnor@gmail.com" />
			<Icon
				name="View my Discord profile"
				image={discordLogo}
				link="https://discordapp.com/users/257316698728693760"
			/>
		</nav>
	</footer>
</div>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		margin-bottom: 3rem;
	}

	.nav-card {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 1.2rem 1.6rem;
		border-radius: 18px;
		border: 1px solid rgba(148, 163, 184, 0.35);
		background: rgba(15, 23, 42, 0.82);
		box-shadow: 0 25px 65px rgba(2, 6, 23, 0.65);
		backdrop-filter: blur(18px);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		text-decoration: none;
	}

	.brand-mark {
		width: 44px;
		height: 44px;
		border-radius: 14px;
		display: grid;
		place-items: center;
		font-weight: 600;
		letter-spacing: 0.05em;
		background: linear-gradient(130deg, var(--accent-primary), var(--accent-secondary));
		color: var(--text-primary);
	}

	.brand-name {
		font-size: 1.6rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.brand-caption {
		display: block;
		font-size: 1.2rem;
		color: var(--text-muted);
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}

	.primary-nav {
		display: flex;
		gap: 1.2rem;
		flex: 1;
		justify-content: center;
		flex-wrap: wrap;
	}

	.primary-nav a {
		position: relative;
		padding: 0.6rem 1.2rem;
		border-radius: 999px;
		text-transform: uppercase;
		font-size: 1.2rem;
		letter-spacing: 0.14em;
		color: var(--text-secondary);
		transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease;
	}

	.primary-nav a::after {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: linear-gradient(130deg, var(--accent-primary), transparent 80%);
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	.primary-nav a:hover {
		color: var(--text-primary);
		transform: translateY(-1px);
	}

	.primary-nav a.selected {
		color: var(--text-primary);
		background: rgba(99, 102, 241, 0.15);
	}

	.primary-nav a.selected::after {
		opacity: 1;
	}

	.cta {
		padding: 0.85rem 1.8rem;
		border-radius: 999px;
		background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
		color: var(--text-primary);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-size: 1.2rem;
		box-shadow: 0 12px 32px rgba(14, 165, 233, 0.35);
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}

	.cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 20px 40px rgba(14, 165, 233, 0.45);
	}

	@media (max-width: 960px) {
		.nav-card {
			flex-direction: column;
			align-items: flex-start;
		}

		.primary-nav {
			justify-content: flex-start;
		}

		.cta {
			align-self: stretch;
			text-align: center;
			width: 100%;
		}
	}

	@media (max-width: 520px) {
		.nav-card {
			gap: 1.2rem;
		}

		.primary-nav a {
			width: 100%;
			text-align: center;
		}
	}
</style>
