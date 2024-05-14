<script lang="ts">
	import githubLogo from "$lib/assets/github.svg?raw";
	import gmailLogo from "$lib/assets/gmail.svg?raw";
	import discordLogo from "$lib/assets/discord.svg?raw";
	import linkedInLogo from "$lib/assets/linkedin.svg?raw";
	import scheduleLogo from "$lib/assets/calendar.svg?raw";
	import Icon from "$lib/icon.svelte";
	import "tailwindcss/tailwind.css";
</script>

<div class="container mx-auto">
	<div id="content">
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
