<script>
  import { SliceZone } from '@prismicio/svelte'
  import { components } from '$lib/slices' 
  export let data
</script>

<section>
  <h1>{data.title[0].text}</h1>
  <p>{data.content[0].text}</p>
  
  <SliceZone slices={data.slices} {components} />

  <pre>
Data uit prismic:

{JSON.stringify(data, null, 2)}
  </pre>
</section>

<style>
  section {
    padding: 0rem .5rem;
  }

  pre {
    background-color: #240a6d;
    color: #7ddd90;
    padding: 1rem;
  }
</style>