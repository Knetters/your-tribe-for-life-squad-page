<script>
  /** @type {import("@prismicio/client").Content.BoekenSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

  <div class="bookshelf">
    {#each slice.items as item (item.slug.text)}
      <a href={`book/${item.slug[0].text}`}>
        <div class="book book-{item.color}">
          <h2>{item.title[0].text}</h2>
        </div>
      </a>
    {/each}
    <div class="ghost">p</div>
    <div class="ghost">p</div>
    <div class="ghost">p</div>
  </div>

</section>

<style>
  .ghost {
    height: 200px;
    width: 100%;
    background-color: transparent;
    float: left;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .bookshelf {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 10px #7e6747 solid;
    overflow: hidden;
    background-image: linear-gradient(#241909, #2c1e0b 220px, #7e6747 220px, #514029 222px, #514029 222px, #69583f 228px, #514029 228px, #514029 230px);
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
    padding-top: .4rem;
    font-size: 1em;
    transform-origin: 0% 0%;
    transform: rotate(0.25turn) translateY(-35px);
    width: 170px;
    color: #e7dd71;
  }

  a {
    text-decoration: none;
  }
</style>
