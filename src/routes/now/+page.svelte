<div>
	<h1>What I'm working on and with as of Jul 11, 2023</h1>

	<h2>
		Better One On Ones - <a href="https://betteroneonones.com" target="_blank"
			>Better One on Ones.com</a
		><span>Improving 1:1 meetings at work one at a time</span>
	</h2>
	<ol style="--length: 3" role="list">
		<li style="--i: 1">
			<h3>SvelteKit w/ Typescript</h3>
			<p>
				<a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> is a framework for building full
				stack apps with Svelte. Like NuxtJS or Next.js, but for Svelte instead of React.
			</p>
		</li>
		<li style="--i: 2">
			<h3>SQLite</h3>
			<p>
				File based SQL database. Typescript has a lot of different options for a driver. They're all
				fine, but slightly weird in their own way.
			</p>
		</li>
		<li style="--i: 3">
			<h3>Cloudflare</h3>
			<p>
				<a href="https://www.cloudflare.com">Cloudflare</a> is a platform of tools for building web and
				mobile apps with a generous free tier. This project is using Pages (their hosting service)
			</p>
		</li>
	</ol>

	<h2>
		Stuff I Use - <a href="https://stuffiuse.app/@jdoconnor" target="_blank"
			>stuffiuse.app/@jdoconnor</a
		><span>A "link in bio" type site for gear</span>
	</h2>
	<ol style="--length: 3" role="list">
		<li style="--i: 1">
			<h3>SvelteKit w/ Typescript</h3>
			<p>
				<a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> is a framework for building full
				stack apps with Svelte. Like NuxtJS or Next.js, but for Svelte instead of React.
			</p>
		</li>
		<li style="--i: 2">
			<h3>Firebase</h3>
			<p>
				<a href="https://firebase.google.com/" target="_blank">Firebase</a> is a platform of tools for
				building web and mobile apps with a generous free tier. This project uses RemoteConfig, Firestore,
				and Analytics.
			</p>
		</li>
		<li style="--i: 3">
			<h3>Cloudflare</h3>
			<p>
				<a href="https://www.cloudflare.com">Cloudflare</a> is a platform of tools for building web and
				mobile apps with a generous free tier. This project is using Pages (their hosting service)
			</p>
		</li>
	</ol>
</div>

<style>
	div {
		padding: 20px;
	}
	a {
		color: var(--dark-link-color);
		text-decoration: none;
	}

	p {
		margin: 0;
	}

	ol {
		list-style: none;
		counter-reset: list;
		padding: 0 1rem;
	}

	li {
		--stop: calc(100%);
		--l: 62%;
		--l2: 88%;
		--h: calc((var(--i) - 1) * (180 / var(--length)));
		--c1: hsl(var(--h), 71%, var(--l));
		--c2: hsl(var(--h), 71%, var(--l2));

		position: relative;
		counter-increment: list;
		max-width: 45rem;
		margin: 2rem auto;
		padding: 2rem 1rem 1rem;
		box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.3);
		border-radius: 0.25rem;
		overflow: hidden;
		background-color: var(--secondary-content-bg-color);
	}

	li::before {
		content: '';
		display: block;
		width: 100%;
		height: 1rem;
		position: absolute;
		top: 0;
		left: 0;
		background: var(--accent-color);
	}

	h3 {
		display: flex;
		align-items: baseline;
		margin: 0 0 1rem;
		color: var(--text-color);
		position: relative;
		padding: 0;
		margin: 0;
		font-family: sans-serif;
		font-weight: 300;
		font-size: 40px;
		-webkit-transition: all 0.4s ease 0s;
		-o-transition: all 0.4s ease 0s;
		transition: all 0.4s ease 0s;
	}

	h3::before {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 0 auto;
		margin-right: 1rem;
		width: 3rem;
		height: 3rem;
		padding: 1rem;
		border-radius: 50%;
		background-color: var(--dark-link-color);
	}

	@media (min-width: 40em) {
		li {
			margin: 3rem auto;
			padding: 3rem 2rem 2rem;
		}

		h3 {
			font-size: 2.25rem;
			margin: 0 0 2rem;
		}

		h3::before {
			margin-right: 1.5rem;
		}
	}

	h2 span {
		font-size: 13px;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 4px;
		padding-left: 0.25em;
		color: rgba(0, 0, 0, 0.4);
		padding-bottom: 10px;
		display: block;
		font-size: 0.5em;
	}
	h2 {
		position: relative;
		padding: 0;
		margin: 1em;
		font-weight: 300;
		font-size: 40px;
	}

	h1 {
		font-weight: 400;
		font-size: 40px;
	}

	h1,
	h2,
	h3 {
		font-family: sans-serif;
		color: var(--text-color);
		-webkit-transition: all 0.4s ease 0s;
		-o-transition: all 0.4s ease 0s;
		transition: all 0.4s ease 0s;
	}
</style>
