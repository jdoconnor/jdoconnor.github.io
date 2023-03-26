<script>
  export let name;
  export let link;
  export let image;
</script>

<a class={name} href={link} aria-label={name}> {@html image}</a>

<style>
  a {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 10px;
    vertical-align: middle;
    background-repeat: no-repeat;
    fill: #8aa29e;
  }
  a:hover {
    fill: black;
  }
</style>
