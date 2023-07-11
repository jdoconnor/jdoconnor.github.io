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
		background-color: #e3f2fd;
	}
	#container {
		width: 80%;
		margin: 20px auto;
	}

	#content {
		display: block;
		border: 2px solid #251101;
		background-color: #8aa29e;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		line-height: 20px;
		color: #251101;
		font-size: 18px;
		font-weight: 500;
		border-radius: 10px;
	}

	#social {
		text-align: center;
	}
</style>
