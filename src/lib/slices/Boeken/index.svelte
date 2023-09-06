<script>
  /** @type {import("@prismicio/client").Content.BoekenSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  {#each slice.items as item (item.url.url)}
    <div class="{item.color}">
      <a href={item.url.url} target="_blank"><h2>{item.title[0].text}</h2></a>
    </div>
  {/each}
</section>

<style>
  a {
    color: #e7dd71;
    text-decoration: none;
  }

  .red {
    background-color: #a13030;
  }

  .blue {
    background-color: #32609c;
  }

  .green {
    background-color: #3a6c51;
  }

  .yellow {
    background-color: #e7dd71;
  }

  .purple {
    background-color: #774194;
  }

  .brown {
    background-color: #3f3333;
  }
</style>
