<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    export let data

    let bookContent = {
      title : data.content[0].text,
      color : data.color
    }
</script>

<svelte:head>
  <title>FDND class of {data.content[0].text}</title>
</svelte:head>
  
<section>
  <a href="/" rel="prefetch">Terug</a>
  <SliceZone slices={data.slices} context={bookContent} {components} />
  
</section>
  
<style>
  a {
    position: absolute;
    padding: 2rem;
    font-size: 2rem;
    font-family: 'Caveat', cursive;
    text-decoration: none;
    color: black;
    transform: rotate(-10deg);
  }
</style>