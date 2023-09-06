<script>
  /** @type {import("@prismicio/client").Content.BoekenSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  {#each slice.items as item (item.url.url)}
    <div>
      <h2>{item.title[0].text}</h2>
      <a href={item.url.url} target="_blank">Link</a>
      <p>Color: {item.color}</p>
    </div>
  {/each}
</section>
