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
				<span class="brand-mark" aria-hidden="true">JO</span>
				<div class="brand-copy">
					<span class="brand-name">Jay OConnor</span>
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
		padding-top: 1.2rem;
	}

	.nav-card {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 1rem 1.6rem;
		border-radius: 20px;
		border: 1px solid rgba(226, 219, 208, 0.9);
		background: rgba(254, 252, 248, 0.88);
		box-shadow: 0 4px 32px rgba(100, 80, 60, 0.1);
		backdrop-filter: blur(20px);
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
		font-weight: 700;
		letter-spacing: 0.05em;
		background: linear-gradient(130deg, #bba8f5, #79ccaa);
		color: #fff;
		font-size: 1.3rem;
	}

	.brand-name {
		font-size: 1.6rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		color: var(--warm-900);
	}

	.brand-caption {
		display: block;
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--warm-500);
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.primary-nav {
		display: flex;
		gap: 0.5rem;
		flex: 1;
		justify-content: center;
		flex-wrap: wrap;
	}

	.primary-nav a {
		position: relative;
		padding: 0.6rem 1.4rem;
		border-radius: 999px;
		text-transform: uppercase;
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		color: var(--warm-600);
		transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease;
		text-decoration: none;
	}

	.primary-nav a:hover {
		color: var(--lavender-500);
		background: var(--lavender-50);
		transform: translateY(-1px);
	}

	.primary-nav a.selected {
		color: var(--lavender-500);
		background: var(--lavender-100);
	}

	.cta {
		padding: 0.8rem 1.8rem;
		border-radius: 999px;
		background: linear-gradient(120deg, #bba8f5, #79ccaa);
		color: #fff;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 1.2rem;
		box-shadow: 0 6px 20px rgba(155, 125, 232, 0.3);
		transition: transform 0.25s ease, box-shadow 0.25s ease;
		text-decoration: none;
	}

	.cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 30px rgba(155, 125, 232, 0.4);
		color: #fff;
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
