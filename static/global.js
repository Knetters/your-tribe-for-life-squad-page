// variables
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const book = document.getElementById("book");

const paper1 = document.getElementById("p1");
const paper2 = document.getElementById("p2");
const paper3 = document.getElementById("p3");

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
  // Implement the logic for opening the book here
}

function closeBook() {
  // Implement the logic for closing the book here
}

function goNextPage() {
  if (currentLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        break;
      case 2:
        openBook();
        paper2.classList.add("flipped");
        break;
      case 3:
        openBook();
        paper3.classList.add("flipped");
        break;
      default:
        throw new Error("Error");
    }
  }
}

function goPrevPage() {
  // Implement the logic for going to the previous page here
}
