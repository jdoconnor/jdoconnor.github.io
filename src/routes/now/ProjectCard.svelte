<script lang="ts">
	type Props = {
		image?: string;
		description: string;
		title: string;
		tech: { name: string; tooltip: string; color?: string }[];
		link?: string;
	};
	let { image, description, title, tech, link }: Props = $props();
	// badge-primary badge-primary-content badge-secondary-content badge-secondary badge-neutral badge-ghost badge-accent badge-info badge-success badge-warning badge-error
</script>

<div class="card lg:card-side bg-base-100 shadow-xl margin-md">
	<figure>
		{#if image}
			<img src={image} alt={title} class="max-h-96" />
		{/if}
	</figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="badges">
			{#each tech as { name, tooltip, color }}
				<div class="tooltip" data-tip={tooltip}>
					<div class="badge badge-{color ?? 'primary'}">{name}</div>
				</div>
			{/each}
		</div>
		<div class="card-actions justify-end">
			{#if link}
				<a href={link} target="_blank btn btn-primary">Go to app</a>
			{/if}
		</div>
	</div>
</div>
