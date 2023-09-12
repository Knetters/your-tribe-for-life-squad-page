<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    export let data

    export const bookTitle = data.content[0].text;
  </script>
  
  <section>
    
    <SliceZone slices={data.slices} {components} />
  
  </section>
  
  <style>

  </style>