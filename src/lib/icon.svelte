<script>
  export let name;
  export let link;
  export let image;
</script>

<a class={name} href={link} style="background:url({image}" aria-label={name}><span /></a>

<style>
  a {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 10px;
    vertical-align: middle;
    background-repeat: no-repeat;
  }
</style>
