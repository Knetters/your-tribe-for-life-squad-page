<script>
  /** @type {import("@prismicio/client").Content.BoekenSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

  <div class="bookshelf">
  <div class="bookshelf1">
    {#each slice.items as item (item.slug.text)}
      <a href={`book/${item.slug[0].text}`}>
        <div class="book book-{item.color}">
          <h2>{item.title[0].text}</h2>
        </div>
      </a>
    {/each}
    </div>

    <div class="bookshelf2">
      </div>

      <div class="bookshelf3">
      </div>

      <div class="bookshelf4">
      </div>
    </div>
</section>

<style>
  .bookshelf1 {
    box-sizing: border-box;
    margin: 13rem auto;
    width: 70%;
    border: 10px #553621 solid;
    overflow: hidden;
    background-image: linear-gradient(#241909, #2c1e0b 220px, #7e6747 220px, #514029 222px, #514029 222px, #69583f 228px, #514029 228px, #514029 230px);
  }

  .bookshelf2 {
    box-sizing: border-box;
    margin: -13.6rem auto;
    width: 70%;
    height: 8.5rem;
    border: 10px #553621 solid;
    overflow: hidden;
    background-image: linear-gradient(#241909, #2c1e0b 220px, #7e6747 220px, #514029 222px, #514029 222px, #69583f 228px, #514029 228px, #514029 230px);
  }

  .bookshelf3 {
    box-sizing: border-box;
    margin: 13rem auto;
    width: 70%;
    height: 8.5rem;
    border: 10px #553621 solid;
    overflow: hidden;
    background-image: linear-gradient(#241909, #2c1e0b 220px, #7e6747 220px, #514029 222px, #514029 222px, #69583f 228px, #514029 228px, #514029 230px);
  }

  .bookshelf4{
    display:none;
  }

  .book {
    height: 115px;
    width: 25px;
    float: left;
    color: white;
    font-size: 0.9em;
    font-family: Verdana, sans-serif;
    transition: transform 0.4s ease;
  }

  .book:hover {
    transform: scale(1.05);
    transform-origin: 0 0;
  }

  .book-red {
    background-color: var(--red-cover);
    border-left: 2px solid var(--red-lines);
    border-right: 2px solid var(--red-lines);
    color: black;
  }

  .book-blue {
    background-color: var(--blue-cover);
    border-left: 2px solid var(--blue-lines);
    border-right: 2px solid var(--blue-lines);
  }

  .book-green {
    background-color: var(--green-cover);
    border-left: 2px solid var(--green-lines);
    border-right: 2px solid var(--green-lines);
  }

  .book-yellow {
    background-color: var(--yellow-cover);
    border-left: 2px solid var(--yellow-lines);
    border-right: 2px solid var(--yellow-lines);
    color: black;
  }

  .book-purple {
    background-color: var(--purple-cover);
    border-left: 2px solid var(--purple-lines);
    border-right: 2px solid var(--purple-lines);
    color: black;
  }

  .book-brown {
    background-color: var(--brown-cover);
    border-left: 2px solid var(--brown-lines);
    border-right: 2px solid var(--brown-lines);
  }

  .book h2 {
    padding-top: .4rem;
    font-size: .6em;
    transform-origin: 0% 0%;
    transform: rotate(0.25turn) translateY(-24px);
    width: 170px;
    color: var(--gold-f-color);
  }

  a {
    text-decoration: none;
  }

  @media (min-width:390px) {
   .bookshelf1{
    margin: 17rem auto;
    height: 10rem;
   }

   .bookshelf2{
    margin: -17.5rem auto;
    height: 10rem;
   }

   .bookshelf3{
    margin: 17rem auto;
    height: 10rem;
   }

   .book {
    height: 145px;
    width: 30px;
  }
}

@media (min-width:768px){
  .bookshelf1{
    margin: 19rem auto;
    width: 60%;
    height: 13rem;
   }

   .bookshelf2{
    margin: -19.5rem auto;
    width: 60%;
    height: 13rem;
   }

   .bookshelf3{
    margin: 19rem auto;
    width: 60%;
    height: 13rem;
   }

   .book {
    height: 188px;
    width: 35px;
  }
}

@media (min-width:820px) {
  .bookshelf1{
    margin: 25rem auto;
    width: 55%;
    height: 14rem;
   }

   .bookshelf2{
    margin: -25.4rem auto;
    width: 55%;
    height: 14rem;
   }

   .bookshelf3{
    margin: 25rem auto;
    width: 55%;
    height: 14rem;
   }

   .book {
    height: 210px;
    width: 48px;
  }
  .book h2 {
    font-size: 1em;
    transform: rotate(0.25turn) translateY(-32px);
  }
}

@media (min-width:992px) {
  .bookshelf1{
    margin: 25rem auto;
    width: 55%;
    height: 13rem;
   }

   .bookshelf2{
    margin: -25.4rem auto;
    width: 55%;
    height: 13rem;
   }

   .bookshelf3{
    margin: 25rem auto;
    width: 55%;
    height: 13rem;
   }

  .bookshelf4{
    display:block;
    box-sizing: border-box;
    margin: -25.4rem auto;
    width: 40%;
    height: 13rem;
    border: 10px #553621 solid;
    overflow: hidden;
    background-image: linear-gradient(#241909, #2c1e0b 220px, #7e6747 220px, #514029 222px, #514029 222px, #69583f 228px, #514029 228px, #514029 230px);
  }

   .book {
    height: 188px;
    width: 48px;
  }
  .book h2 {
    font-size: 1em;
    transform: rotate(0.25turn) translateY(-32px);
  }
}

@media (min-width:1024px) {
  .bookshelf1{
    margin: 22rem auto;
    width: 35%;
    height: 11rem;
    overflow: visible;
   }

   .bookshelf2{
    margin: -22.5rem auto;
    width: 35%;
    height: 11rem;
    overflow: visible;
   }

   .bookshelf3{
    margin: 22rem auto;
    width: 35%;
    height: 11rem;
   }

   .bookshelf4{
    display: none;
   }

   .book {
    height: 155px;
    width: 40px;
  }
  .book h2 {
    font-size: .8em;
    transform: rotate(0.25turn) translateY(-32px);
  }
}

</style>
