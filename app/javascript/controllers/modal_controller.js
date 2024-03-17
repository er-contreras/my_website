import {Controller} from "@hotwired/stimulus"
//
export default class extends Controller {
  static targets = ["modal", "content"]

  // connect() {
  //   this.element.addEventListener("touchstart", function (e) {
  //     console.log("click");
  //
  //     // console.log(e.target);
  //     console.log(this);
  //   });
  //   // console.log(ele);
  //
  //   // this.element.addEventListener("click", this.open.bind(this));
  //   // this.element.addEventListener("click", this.close.bind(this));
  //   // this.element.addEventListener(("touchstart"), this.open.bind(this));
  // }

  open(event) {
    // Change display none to block
    console.log("click open", event.target);
    document.getElementById("modal").style.display = "block";
  }

  close(event) {
    console.log("click close");
    // Change display block to none
    document.getElementById("modal").style.display = "none";
  }
}
