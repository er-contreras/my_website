import {Controller} from "@hotwired/stimulus"
//
export default class extends Controller {
  connect() {
    const colorsArray = ["tomato", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "pink", "red", "white"];
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
