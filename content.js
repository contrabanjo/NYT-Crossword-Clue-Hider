const hideFilledCluesButton = document.createElement("li")
hideFilledCluesButton.id = "hideFilledCluesButton"
hideFilledCluesButton.classList.add("xwd__tool--button");
hideFilledCluesButton.classList.add("xwd__tool--texty");

const hideFilledCluesButtonLabel = document.createElement("button")
hideFilledCluesButtonLabel.textContent = "Hide Filled";
hideFilledCluesButton.appendChild(hideFilledCluesButtonLabel);

hideFilledCluesButton.onclick = hideFilledClues;

//insert button after page is loaded
setTimeout(()=>{
  //insert before "xwd__timer--button"
  const crosswordToolbar = document.querySelector(".xwd__toolbar--expandedMenu");
  crosswordToolbar.appendChild(hideFilledCluesButton);  
}, 500)


function hideFilledClues(){
  const clues = document.querySelectorAll(".xwd__clue--li");
  // `document.querySelector` may return null if the selector doesn't match anything.
  if (clues) {
    clues.forEach(e => {
      if (e.classList.contains("xwd__clue--filled")) { 
        e.style.display = "none";
      }
      else e.style.display = "flex";
    })
  }

  const hideFilledCluesButton = document.getElementById("hideFilledCluesButton")
  hideFilledCluesButtonLabel.textContent = "Show Filled"
  hideFilledCluesButton.onclick = showFilledClues

  document.addEventListener("keyup", hideFilledClues);
}

function showFilledClues(){
  const clues = document.querySelectorAll(".xwd__clue--filled");
  // `document.querySelector` may return null if the selector doesn't match anything.
  if (clues) {
    clues.forEach(e => e.style.display = "flex");
  }

  const hideFilledCluesButton = document.getElementById("hideFilledCluesButton")
  hideFilledCluesButtonLabel.textContent = "Hide Filled"
  hideFilledCluesButton.onclick = hideFilledClues

  document.removeEventListener("keyup", hideFilledClues);
}




