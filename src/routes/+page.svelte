<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    export let data
  
    /** @type {import("@prismicio/client").Content.NamePfSlice} */
  
  </script>
  
  
  <section>
    <SliceZone slices={data.slices} {components} />

    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    
  </section>