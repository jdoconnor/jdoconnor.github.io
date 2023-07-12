<script lang="ts">
	export let name: string;
	export let link: string;
	export let image: string;
</script>

<a href={link} aria-label={name} title={name} target="_blank">{@html image}</a>

<style>
	a {
		display: inline-block;
		width: 64px;
		height: 64px;
		margin: 10px;
		vertical-align: middle;
		background-repeat: no-repeat;
		fill: var(--dark-link-color);
	}
	a:hover {
		fill: var(--link-color);
	}
</style>
