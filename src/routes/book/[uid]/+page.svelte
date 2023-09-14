<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    export let data

    let bookContent = {
      title : data.content[0].text,
      color : data.color
    }
  </script>
  
  <section>
    
    <SliceZone slices={data.slices} context={bookContent} {components} />
  
  </section>
  
  <style>
  </style>