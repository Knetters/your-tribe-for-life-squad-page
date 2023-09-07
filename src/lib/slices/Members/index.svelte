<script>
  /** @type {import("@prismicio/client").Content.MembersSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

  {#each slice.items as item (item.slug.text)}
    <h2>{item.name[0].text}</h2>
    <img src={item.image.url} alt={item.image.alt} />
  {/each}

</section>
