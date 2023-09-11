<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    export let data
  </script>
  
  <section>

    <!-- <h1>{data.title[0].text}</h1>
    <p>{data.content[0].text}</p> -->

    
    
    <SliceZone slices={data.slices} {components} />
  
  </section>
  
  <style>
  

  </style>