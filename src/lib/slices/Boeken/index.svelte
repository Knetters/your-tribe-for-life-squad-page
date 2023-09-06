<script>
  /** @type {import("@prismicio/client").Content.BoekenSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

  <div class="bookshelf">
    {#each slice.items as item (item.url.url)}
      <div class="book book-{item.color}">
        <a href={item.url.url} target="_blank"><h2>{item.title[0].text}</h2></a>
      </div>
    {/each}
  </div>

</section>

<style>
  .bookshelf {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 10px #a87328 solid;
    overflow: hidden;
    background-image: linear-gradient(#241909, #2c1e0b 220px, #b87e2c 220px, #b87e2c 222px, #a87328 222px, #a87328 228px, #986824 228px, #986824 230px);
    background-size: 10px 230px;
  }

  .book {
    height: 200px;
    width: 40px;
    float: left;
    color: white;
    font-size: 0.9em;
    font-family: Verdana, sans-serif;
    margin-bottom: 10px;
    margin-top: 20px;
    transition: transform 0.4s ease;
  }

  .book:hover {
    transform: scale(1.05);
  }

  .book-red {
    background-color: #a13030;
    border-left: 2px solid #7f1b1b;
    border-right: 2px solid #7f1b1b;
    color: black;
  }

  .book-blue {
    background-color: #32609c;
    border-left: 2px solid #032b75;
    border-right: 2px solid #032b75;
  }

  .book-green {
    background-color: #3a6c51;
    border-left: 2px solid #11683a;
    border-right: 2px solid #11683a;
  }

  .book-yellow {
    background-color: #eded80;
    border-left: 2px solid #f0f092;
    border-right: 2px solid #eaea6e;
    color: black;
  }

  .book-purple {
    background-color: #774194;
    border-left: 2px solid #551777;
    border-right: 2px solid #551777;
    color: black;
  }

  .book-brown {
    background-color: #54290c;
    border-left: 2px solid #66320f;
    border-right: 2px solid #422009;
  }

  .book h2 {
    padding: 0;
    font-size: 1em;
    transform-origin: 0% 0%;
    transform: rotate(0.25turn) translateY(-35px);
    width: 170px;
  }

  a {
    color: #e7dd71;
    text-decoration: none;
  }
</style>
