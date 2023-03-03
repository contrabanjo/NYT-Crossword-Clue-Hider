const clues = document.querySelectorAll(".xwd__clue--filled");

// `document.querySelector` may return null if the selector doesn't match anything.
if (clues) {
  clues.forEach(e => e.style.display = "none");
}