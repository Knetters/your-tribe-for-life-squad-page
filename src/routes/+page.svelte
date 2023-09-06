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

  <style>
    pre {
      background-color: #240a6d;
      color: #7ddd90;
      padding: 1rem;
    }
  </style>