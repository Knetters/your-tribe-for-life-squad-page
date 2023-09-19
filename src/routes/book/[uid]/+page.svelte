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
  <button onclick="goBack()">Terug</button>
  <SliceZone slices={data.slices} context={bookContent} {components} />
  
</section>
  
<style>
  button {
    position: absolute;
    margin: 2rem;
    font-size: 2rem;
    font-family: 'Caveat', cursive;
    text-decoration: none;
    color: rgb(94, 94, 94);
    transform: rotate(-10deg);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>