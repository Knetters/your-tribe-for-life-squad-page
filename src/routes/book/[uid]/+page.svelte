<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    export let data
  </script>
  
  <section>

    <!-- Previous button -->
    <button id="prev-btn">
      links
    </button>

    <!-- Yearbook -->
    <div class="book" id="book">
      <!-- Page 1 -->
      <div class="paper" id="p1">
        <div class="front">
          <div class="front-content" id="f1">
            <p>Front 1</p>
          </div>
        </div>
        <div class="back">
          <div class="back-content" id="b1">
            <p>Back 1</p>
          </div>
        </div>
      </div>

      <!-- Page 2 -->
      <div class="paper" id="p2">
        <div class="front">
          <div class="front-content" id="f2">
            <p>Front 2</p>
          </div>
        </div>
        <div class="back">
          <div class="back-content" id="b2">
            <p>Back 2</p>
          </div>
        </div>
      </div>

      <!-- Page 3 -->
      <div class="paper" id="p3">
        <div class="front">
          <div class="front-content" id="f3">
            <p>Front 3</p>
          </div>
        </div>
        <div class="back">
          <div class="back-content" id="b3">
            <p>Back 3</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Next button -->
    <button id="next-btn">
      rechts
    </button>

    <!-- <h1>{data.title[0].text}</h1>
    <p>{data.content[0].text}</p>
    
    <SliceZone slices={data.slices} {components} /> -->
  
  </section>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    section {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: aquamarine;
    }

    /* Styling yearbook */
    .book {
      position: relative;
      width: 30vw;
      height: 80vh;
    }

    .paper {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      perspective: 1500px;
    }

    .front, .back {
      background-color: #f2f2f2;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform-origin: left;
      transition: transform 0.5s;
    }

    .front {
      z-index: 1;
      backface-visibility: hidden;
      border-left: 2px solid black;
    }

    .back {
      z-index: 0;
    }

    .front-content, .back-content {
      width: 100%;
      height: 100%;
      display: flex;

      /* Dit aanpassen met loop */
      justify-content: center;
      align-items: center;
    }

    .back-content {
      transform:  rotateY(180deg);
    }

    /* Paper stack order */
    #p1 {
      z-index: 3;
    }

    #p2 {
      z-index: 2;
    }

    #p3 {
      z-index: 1;
    }

    /* Flip effect */
    .flipped .front, .flipped .back {
      transform: rotateY(-180deg);
    }

  </style>