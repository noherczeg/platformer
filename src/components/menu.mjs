import { routes } from '../utils/router.mjs';

class Menu extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `
      <ul>
      ${
        routes
          .map(route => `<li><a href="#${route.name}">${route.title}</a></li>`)
          .join('')
      }
      </ul>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }
}

customElements.define('p-menu', Menu);
