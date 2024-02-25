import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "nav" ];

  changeWidth(event) {
    event.preventDefault();

    this.navTarget.classList.toggle('small');
  }
}
