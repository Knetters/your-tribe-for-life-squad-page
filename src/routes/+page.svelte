<script>
  import { SliceZone } from '@prismicio/svelte'
  import { components } from '$lib/slices' 
  export let data
</script>

<section>
  <!-- <h1>{data.title[0].text}</h1>
  <p>{data.content[0].text}</p> -->

  <div class="background">
      
  <SliceZone slices={data.slices} {components} />

  </div>


</section>

<style>
  .background{
    height: 100vh;
    background-image: url("/img/background-mobile.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1rem;
  }
</style>
