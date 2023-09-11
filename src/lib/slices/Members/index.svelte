<script>
  /** @type {import("@prismicio/client").Content.MembersSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

  <input type="checkbox" id="checkbox-cover">
    <input type="checkbox" id="checkbox-page1">
    <input type="checkbox" id="checkbox-page2">
    <input type="checkbox" id="checkbox-page3">
    
    <div class="book">
        <div class="cover">
            <label for="checkbox-cover"></label>
        </div>
        <div class="page" id="page1">
            <div class="front-page">
              <!-- Hier komt een loop -->
              <h2>Page 1</h2>
                <label class="next" for="checkbox-page1">Verder</label>
            </div>
            <div class="back-page">
              <!-- Hier komt een loop -->
                <label class="prev" for="checkbox-page1">Terug</label>
            </div>
        </div>
        <div class="page" id="page2">
            <div class="front-page">
              <!-- Hier komt een loop -->
                <h2>Page 2</h2>
                <label class="next" for="checkbox-page2">Verder</label>
            </div>
            <div class="back-page">
              <!-- Hier komt een loop -->
                <label class="prev" for="checkbox-page2">Terug</label>
            </div>
        </div>
        <div class="page" id="page3">
            <div class="front-page">
              <!-- Hier komt een loop -->
                <h2>Page 3</h2>
            </div>
        </div>
        <div class="back-cover"></div>
    </div>

  <!-- {#each slice.items as item (item.slug.text)}
  {#if !item.image.url}
    <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
  {:else}
    <img class="yearbook-image" src={item.image.url} alt={item.image.alt} />
  {/if}
    <h2>{item.name[0].text}</h2>
  {/each} -->

</section>

<style>
  .yearbook-image {
    width: 200px;
  }

  section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .book {
    width: 35vw;
    height: 90vh;
    position: relative;
    transition-duration: 1s;
    perspective: 1500;
  }
  input {
    display: none;
  }
  .cover, .back-cover {
    background-color: #4173a5;
    width: 100%;
    height: 100%;
    border-radius: 0 5px 5px 0;
    box-shadow: 0 0 5px rgb(41, 41, 41);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center left;
  }
  .cover {
    position: absolute;
    z-index: 4;
    transition: transform .5s;
  }
  .cover label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .back-cover {
    position: relative;
    z-index: -1;
  }
  .page {
    position: absolute;
    background-color: white;
    width: 34vw;
    height: 96%;
    margin: 2% 0%;
    border-radius: 0 5px 5px 0;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition-duration: .5s;
  }

  .front-page {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-sizing: border-box;
    padding: 1rem;
  }
  .back-page {
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    z-index: 99;
  }
  .next, .prev {
    position: absolute;
    bottom: 1em;
    cursor: pointer;
  }
  .next {
    right: 1em;
  }
  .prev {
    left: 1em;
  }
  #page1 {
    z-index: 3;
  }
  #page2 {
    z-index: 2;
  }
  #page3 {
    z-index: 1;
  }
  #checkbox-cover:checked ~ .book {
    transform: translateX(17vw);
  }
  #checkbox-cover:checked ~ .book .cover {
    transition: transform 1.5s, z-index 0.5s 0.5s;
    transform: rotateY(-180deg);
    z-index: 1;
  }
  #checkbox-cover:checked ~ .book .page {
    box-shadow: 0 0 3px rgb(99, 98, 98);
  }
  #checkbox-page1:checked ~ .book #page1 {
    transform: rotateY(-180deg);
    z-index: 2;
  }
  #checkbox-page2:checked ~ .book #page2 {
    transform: rotateY(-180deg);
    z-index: 3;
  }
</style>
