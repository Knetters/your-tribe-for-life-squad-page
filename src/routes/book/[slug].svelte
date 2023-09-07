<script context="module">
  import { fetchDetailPageData } from '$lib/prismic'; // Import your Prismic fetch function

  export async function load({ params }) {
    const slug = params.slug; // Access the slug parameter from the URL
    const document = await fetchDetailPageData(slug); // Fetch data from Prismic using the slug
    return {
      props: {
        detailPageData: document.data,
      },
    };
  }
</script>

<script>
  export let detailPageData; // Access the fetched data through a prop
</script>

<main>
  <!-- Display the fetched data -->
  <h1>{detailPageData.title[0].text}</h1>
  <p>{detailPageData.content[0].text}</p>
  <!-- Display additional content as needed -->
</main>