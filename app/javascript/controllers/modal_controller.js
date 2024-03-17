import {Controller} from "@hotwired/stimulus"
//
export default class extends Controller {
  static targets = ["modal", "content"]

  connect() {
    alert('Connected');
  }

  open(event) {
    event.preventDefault();
    console.log("click open");

    document.getElementById("modal").style.display = "block";

    alert('Click open')
  }

  close(event) {
    console.log("click close");
    // Change display block to none
    document.getElementById("modal").style.display = "none";
  }
}
