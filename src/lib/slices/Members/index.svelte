<script>
  export let slice;
  export let context;

  console.log(context)

</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

  <input type="checkbox" id="checkbox-cover">
  <input type="checkbox" id="checkbox-page1">
  <input type="checkbox" id="checkbox-page2">
  <input type="checkbox" id="checkbox-page3">
  <input type="checkbox" id="checkbox-page4">
  
  <div class="book">
      <div class="cover">
        <label class="book-title" for="checkbox-cover">{context.title}</label>
      </div>
      <div class="page" id="page1">
        <div class="front-page">
          <!-- Loop through items on the current page -->
          <p>{context.title}</p>
          <div id="card-container" class="container">
            {#each slice.items.slice(0, 20) as item}
              <div class="card-item">
                <div class="inner-card">
                  {#if !item.image.url}
                    <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                  {:else}
                    <img class="yearbook-image" src={item.image.url} alt={item.image.alt} />
                  {/if}
                  <p>{item.name[0].text}</p>
                </div>
              </div>
            {/each}
          </div>
          <!-- No need for the click event here -->
          <label class="next" for="checkbox-page1">Verder</label>
        </div>
          <div class="back-page">
            <p>{context}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(20, 40) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <img class="yearbook-image" src={item.image.url} alt={item.image.alt} />
                    {/if}
                    <p>{item.name[0].text}</p>
                  </div>
                </div>
              {/each}
            </div>
              <label class="prev" for="checkbox-page1">Terug</label>
          </div>
      </div>
      <div class="page" id="page2">
          <div class="front-page">
            <p>{context}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(40, 60) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <img class="yearbook-image" src={item.image.url} alt={item.image.alt} />
                    {/if}
                    <p>{item.name[0].text}</p>
                  </div>
                </div>
              {/each}
            </div>
              <label class="next" for="checkbox-page2">Verder</label>
          </div>
          <div class="back-page">
            <p>{context}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(60, 80) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <img class="yearbook-image" src={item.image.url} alt={item.image.alt} />
                    {/if}
                    <p>{item.name[0].text}</p>
                  </div>
                </div>
              {/each}
            </div>
            
              <label class="prev" for="checkbox-page2">Terug</label>
          </div>
      </div>
      <div class="page" id="page3">
        <div class="front-page">
          <p>{context}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(80, 100) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <img class="yearbook-image" src={item.image.url} alt={item.image.alt} />
                    {/if}
                    <p>{item.name[0].text}</p>
                  </div>
                </div>
              {/each}
            </div>
            
            <label class="next" for="checkbox-page3">Verder</label>
        </div>
        <div class="back-page">
          <p>{context}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(100, 120) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <img class="yearbook-image" src={item.image.url} alt={item.image.alt} />
                    {/if}
                    <p>{item.name[0].text}</p>
                  </div>
                </div>
              {/each}
            </div>
            <label class="prev" for="checkbox-page3">Terug</label>
        </div>
    </div>
      <div class="page" id="page4">
          <div class="front-page">
            <p>{context}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(120, 140) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <img class="yearbook-image" src={item.image.url} alt={item.image.alt} />
                    {/if}
                    <p>{item.name[0].text}</p>
                  </div>
                </div>
              {/each}
            </div>
              
          </div>
      </div>
      <div class="back-cover"></div>
  </div>

</section>

<style>

  /* Styling grid and yearbook cards */
  p {
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 1rem;
  }

  .container {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    position: relative;
  }

  .card-item {
    margin: .35%;
    height: 18vh;
    flex: 0 1 calc(20% - .7%);
    width: calc(20% - .7%);
  }

  .card-item p {
    font-size: .7rem;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .yearbook-image {
    width: 86%;
    margin-left: 7%;
    border: 1px solid #000;
  }

  /* Styling and logic yearbook */
  section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dcd3be;
  }

  .book-title {
    z-index: 10;
    text-align: center;
    margin-top: 40vh;
    font-size: 2rem;
    color: #a6a16c;
    transition: .2s;
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

  .cover,
  .back-cover {
    background-color: #a13030;
    width: 100%;
    height: 100%;
    border-radius: 0 5px 5px 0;
    box-shadow: 0 0 6px #424242;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center left;

  }

  .cover {
    position: absolute;
    z-index: 5;
    transition: transform 0.5s;
    outline: .4rem solid #a6a16c;
    outline-offset: -1rem; 
    transition: .2s;
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
    background-color: #f2f2f2;
    width: 34vw;
    height: 97%;
    margin: 2% 0%;
    border-radius: 0 5px 5px 0;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition-duration: 0.5s;
  }

  .front-page {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-sizing: border-box;
    padding: 1rem;
    box-shadow: inset 3px 0px 10px #828080;
  }

  .back-page {
    transform: rotateY(180deg);
    position: absolute;
    width: 95%;
    height: 96%;
    backface-visibility: hidden;
    z-index: 99;
    padding: 1rem;
    box-shadow: inset -3px 0px 10px #c4c1c1;
  }

  .next,
  .prev {
    position: absolute;
    bottom: 1em;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .next {
    right: 1em;
  }

  .prev {
    left: 1em;
  }

  #page1 {
    z-index: 4;
  }

  #page2 {
    z-index: 3;
  }

  #page3 {
    z-index: 2;
  }

  #page4 {
    z-index: 1;
  }

  /* Center the book when opened */
  #checkbox-cover:checked ~ .book {
    transform: translateX(calc(50% - 0vw)); /* Center the book */
  }

  #checkbox-cover:checked ~ .book .cover label {
    color: transparent;
  }

  #checkbox-cover:checked ~ .book .cover {
    transition: transform .5s, z-index .5s .5s;
    transform: rotateY(-180deg);
    z-index: 1;
    outline: .5rem solid transparent;
  }

  #checkbox-cover:checked ~ .book .page {
    box-shadow: 3px 0 0px #c8c8c8;
    border-left: 1px solid rgb(194, 194, 194);
  }

  #checkbox-page1:checked ~ .book #page1 {
    transform: rotateY(-180deg);
    z-index: 2;
  }

  #checkbox-page2:checked ~ .book #page2 {
    transform: rotateY(-180deg);
    z-index: 3;
  }

  #checkbox-page3:checked ~ .book #page3 {
    transform: rotateY(-180deg);
    z-index: 4;
  }

  @media only screen and (max-width: 1000px) {
    .book {
      width: 40vw;
      height: 50vh;
      position: relative;
      transition-duration: 1s;
      perspective: 1500;
    }

    .page {
      position: absolute;
      background-color: #f2f2f2;
      width: 49vw;
      height: 97%;
      margin: 2% 0%;
      border-radius: 0 5px 5px 0;
      transform-origin: left;
      transform-style: preserve-3d;
      transform: rotateY(0deg);
      transition-duration: 0.5s;
    }
  }
</style>
