import {Controller} from "@hotwired/stimulus"
//
export default class extends Controller {
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
