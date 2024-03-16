import {Controller} from "@hotwired/stimulus"
//
export default class extends Controller {
  static targets = ["modal", "content"]

  connect() {
    this.element.addEventListener("click", this.open.bind(this));
    this.element.addEventListener(("touchstart"), this.open.bind(this));
  }

  open(event) {
    // Change display none to block
    document.getElementById("modal").style.display = "block";
  }

  close(event) {
    // Change display block to none
    document.getElementById("modal").style.display = "none";
  }
}
