import {Controller} from "@hotwired/stimulus"
//
export default class extends Controller {
  connect() {
    const colorsArray = [
      "#dabdbd",
      "#d3c1b1",
      "#d5d5b4",
      "#9bb49b",
      "#aeaed5",
      "#b7a8ce",
      "#b99ec7",
      "#ccafb5",
      "#d2b6bd",
      "#ceb0b0",
      "#c4c4c4"
    ];
    let i = 0;

    function changeColor() {
      document.getElementById("change-color").style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
      i = (i + 1) % colorsArray.length;
    }

    setInterval(function () {
      changeColor();
    }, 1200);
  }

  open(event) {
    event.preventDefault();
    console.log("click open");

    document.getElementById("modal").style.display = "block";
  }

  close(event) {
    console.log("click close");
    // Change display block to none
    document.getElementById("modal").style.display = "none";
  }
}
