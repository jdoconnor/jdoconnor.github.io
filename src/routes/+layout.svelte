<script lang="ts">
	import facebookLogo from '$lib/assets/facebook.svg?raw';
	import githubLogo from '$lib/assets/github.svg?raw';
	import gmailLogo from '$lib/assets/gmail.svg?raw';
	import discordLogo from '$lib/assets/discord.svg?raw';
	import linkedInLogo from '$lib/assets/linkedin.svg?raw';
	import scheduleLogo from '$lib/assets/calendar.svg?raw';
	import Icon from '$lib/icon.svelte';
</script>

<div id="container">
	<div id="content">
		<slot />
	</div>
	<footer id="social">
		<div class="icons">
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
		</div>
	</footer>
</div>

<style>
	:global(body) {
		background-image: url('$lib/assets/noise.png');
		background-color: var(--bg-color);
	}
	/* CSS HEX */
	:global(:root) {
		--tiffany-blue: #84dcc6ff;
		--columbia-blue: #d6edffff;
		--uranian-blue: #acd7ecff;
		--vista-blue: #8b95c9ff;
		--viridian: #478978ff;

		--bg-color: var(--columbia-blue);
		--text-color: #282828;
		--content-bg-color: var(--tiffany-blue);
		--accent-color: var(--viridian);
		--link-color: var(--uranian-blue);
		--dark-link-color: var(--viridian);
		--secondary-content-bg-color: #d6f1ff;

		--lighten-percentage: 5%;
		--darken-precentage: 5%;
	}

	#container {
		width: 80%;
		margin: 20px auto;
	}

	#content {
		display: block;
		border: 2px solid var(--accent-color);
		background-color: var(--content-bg-color);
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		color: var(--text-color);
		font-size: 18px;
		font-weight: 500;
		border-radius: 10px;
	}

	#social {
		text-align: center;
	}
</style>
