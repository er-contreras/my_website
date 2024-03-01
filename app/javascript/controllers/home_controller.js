import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "nav", "content", "container" ];

  connect() {
    const navClicked = this.navTarget.getAttribute("data-home-clicked") === "true";

    if (!navClicked) {
      this.hideContent();
    }

    this.containerTarget.style.display = "block";
  }

  changeWidth(event) {
    const link = event.target;
    const clicked = link.getAttribute('data-home-clicked');

    if (clicked === 'false') {
      this.navTarget.classList.toggle('small');

      const links = this.navTarget.querySelectorAll('a');

      links.forEach((link) => {
        link.setAttribute('data-home-clicked', 'true');
      });

      this.showContent()
    }
  }

  hideContent() {
    this.contentTarget.classList.add('hidden');
  }

  showContent() {
    this.contentTarget.classList.remove('hidden');
    this.containerTarget.style.display = "flex";
  }
}
