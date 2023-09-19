<script>
  export let slice;
  export let context;
</script>

<section class="desktop-book" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

  <svg class="pencil" onclick="toggleDraw()" width="17" height="406" viewBox="0 0 17 406" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="46" width="6" height="340" fill="#F7C441"/>
    <rect y="46" width="4" height="340" fill="#EEB82F"/>
    <rect x="10" y="46" width="7" height="340" fill="#EEB82F"/>
    <path d="M8.5 0L16.7272 45.75H0.272758L8.5 0Z" fill="#D1C8A8"/>
    <path d="M0 45H17V46H0V45Z" fill="#DBBF5E"/>
    <path d="M8.5 0L10.6651 12H6.33494L8.5 0Z" fill="#121212"/>
    <rect y="386" width="17" height="7" fill="#D0D0D0"/>
    <rect x="10" y="386" width="7" height="7" fill="#C5C5C5"/>
    <path d="M0 394H17V404C17 405.105 16.1046 406 15 406H2C0.89543 406 0 405.105 0 404V394Z" fill="#D08383"/>
  </svg>

  <input type="checkbox" id="checkbox-cover">
  <input type="checkbox" id="checkbox-page1">
  <input type="checkbox" id="checkbox-page2">
  <input type="checkbox" id="checkbox-page3">
  <input type="checkbox" id="checkbox-page4">
  
  <div class="book">
      <div class="cover {context.color}">
        <label class="book-title" for="checkbox-cover"><span class="title">FDND JAARBOEK</span><br><span class="year">{context.title}</span></label>
      </div>
      <div class="page" id="page1">
        <div class="front-page">
          <!-- Loop through items on the current page -->

          <p>FDND laatstejaars studenten {context.title}</p>
          <div id="card-container" class="container">
            {#each slice.items.slice(0, 20) as item}
              <div class="card-item">
                <div class="inner-card">
                  {#if !item.image.url}
                    <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                  {:else}
                    <a href="{item.url}">
                      <img class="yearbook-image" src={item.image.url} alt="mugshot van {item.name[0].text}">
                    </a>
                  {/if}
                  {#if item.name && item.name[0]?.text}
                    <p>{item.name[0].text}</p>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
          <canvas id="drawing-canvas" class="drawing-canvas" width="600" height="700"></canvas>
          <label class="next" for="checkbox-page1">Verder</label>
        </div>
          <div class="back-page">
            <p>FDND studenten, class of {context.title}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(20, 40) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <a href="{item.url}">
                        <img class="yearbook-image" src={item.image.url} alt="mugshot van {item.name[0].text}">
                      </a>
                    {/if}
                    {#if item.name && item.name[0]?.text}
                      <p>{item.name[0].text}</p>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
              <label class="prev" for="checkbox-page1">Terug</label>
          </div>
      </div>
      <div class="page" id="page2">
          <div class="front-page">
            <p>FDND studenten, class of {context.title}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(40, 60) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <a href="{item.url}">
                        <img class="yearbook-image" src={item.image.url} alt="mugshot van {item.name[0].text}">
                      </a>
                    {/if}
                    {#if item.name && item.name[0]?.text}
                      <p>{item.name[0].text}</p>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
              <label class="next" for="checkbox-page2">Verder</label>
          </div>
          <div class="back-page">
            <p>FDND studenten, class of {context.title}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(60, 80) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <a href="{item.url}">
                        <img class="yearbook-image" src={item.image.url} alt="mugshot van {item.name[0].text}">
                      </a>
                    {/if}
                    {#if item.name && item.name[0]?.text}
                      <p>{item.name[0].text}</p>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
            
              <label class="prev" for="checkbox-page2">Terug</label>
          </div>
      </div>
      <div class="page" id="page3">
        <div class="front-page">
          <p>FDND studenten, class of {context.title}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(80, 100) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <a href="{item.url}">
                        <img class="yearbook-image" src={item.image.url} alt="mugshot van {item.name[0].text}">
                      </a>
                    {/if}
                    {#if item.name && item.name[0]?.text}
                      <p>{item.name[0].text}</p>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
            
            <label class="next" for="checkbox-page3">Verder</label>
        </div>
        <div class="back-page">
          <p>FDND studenten, class of {context.title}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(100, 120) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <a href="{item.url}">
                        <img class="yearbook-image" src={item.image.url} alt="mugshot van {item.name[0].text}">
                      </a>
                    {/if}
                    {#if item.name && item.name[0]?.text}
                      <p>{item.name[0].text}</p>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
            <label class="prev" for="checkbox-page3">Terug</label>
        </div>
    </div>
      <div class="page" id="page4">
          <div class="front-page">
            <p>FDND studenten, class of {context.title}</p>
            <div id="card-container" class="container">
              {#each slice.items.slice(120, 140) as item}
                <div class="card-item">
                  <div class="inner-card">
                    {#if !item.image.url}
                      <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
                    {:else}
                      <a href="{item.url}">
                        <img class="yearbook-image" src={item.image.url} alt="mugshot van {item.name[0].text}">
                      </a>
                    {/if}
                    {#if item.name && item.name[0]?.text}
                      <p>{item.name[0].text}</p>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
              
          </div>
      </div>
      <div class="back-cover {context.color}"></div>
  </div>

</section>

<section class="mobile-book" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

  <div class="mobile-book">
    <p>FDND laatstejaars studenten {context.title}</p>
    <div id="card-container" class="container">
      {#each slice.items as item}
        <div class="card-item">
          <div class="inner-card">
            {#if !item.image.url}
              <img class="yearbook-image" src="/img/placeholder-image.jpg" alt="" />
            {:else}
              <a href="{item.url}">
                <img class="yearbook-image" src={item.image.url} alt="mugshot van {item.name[0]?.text}">
              </a>
            {/if}
            {#if item.name && item.name[0]?.text}
              <p>{item.name[0].text}</p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>

</section>

<style>
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
    background-color: #eded80;
  }

  .purple {
    background-color: #774194;
  }

  .brown {
    background-color: #54290c;
  }

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

  #page1 .card-item:first-of-type:before {
    content: "Click me!";
    position: absolute;
    font-family: 'Caveat', cursive;
    left: 0;
    top: 0;
    transform: rotate(-30deg);
    font-size: 1.4vw;
    margin-top: -.5rem;
    margin-left: -1rem;
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
    /* border: 1px solid #000; */
  }

  .pencil {
    position: absolute;
    top: 35vh;
    right: 10vw;
    transform: rotate(10deg);
    transition: .2s;
    cursor: pointer;
  }

  .pencil:hover {
    transform: rotate(15deg);
  }

  .drawing-canvas {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    /* border: solid 1px red; */
    cursor: crosshair;
    pointer-events: none;
    backface-visibility: none;
  }

  /* Styling and logic yearbook */
  section {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dcd3be;
    overflow-y: hidden;
  }

  .book-title {
    z-index: 10;
    text-align: center;
    padding-top: 40vh;
    color: #a6a16c;
    transition: .2s;
  }

  .title {
    font-size: 3.5vw;
    font-family: 'Cormorant Infant', serif;
    text-decoration: underline;
  }

  .year {
    font-size: 2.5vw;
    text-decoration: none;
    font-family: 'Cormorant Infant', serif;
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

  .mobile-book {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    section {
      overflow-y: scroll;
    }

    p {
      margin-top: 1rem;
    }

    .book {
      width: 45vw;
      height: 90vh;
    }

    .page {
      width: 43vw;
      height: 98%;
      margin: 2% 0%;
    }

    .container {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      position: relative;
    }

    .card-item {
      margin: 0.5%; /* Adjusted margin for better spacing */
      height: 14vh;
      flex: 0 1 calc(25% - 1%); /* 25% width for each card item */
      width: calc(25% - 1%);
    }
  }

  @media only screen and (max-width: 500px) {
    section {
      overflow-y: scroll;
    }

    .desktop-book {
      display: none;
    }

    .mobile-book {
      display: block;
      position: relative;
      background-color: #f2f2f2;
      padding: .2rem;
    }

    p {
      margin-top: 1rem;
    }

    .container {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      position: relative;
    }

    .card-item {
      margin: 0.5%; /* Adjusted margin for better spacing */
      height: 18vh;
      flex: 0 1 calc(25% - 1%); /* 25% width for each card item */
      width: calc(25% - 1%);
    }
  }
</style>
