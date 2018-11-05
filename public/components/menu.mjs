import { logout } from '../auth/auth.mjs';
import { routes } from '../utils/router.mjs';

class Menu extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `
      <style>
        nav > a:after {
          content: ' | ';
        }
        nav > a:last-child:after {
          content: '';
        }
      </style>
      <nav>
        ${routes
          .map(route => `<a href="#${route.name}">${route.title}</a>`)
          .join('')}
        <a id="logout" href="javascript:void(0);">logout</a>
      </nav>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
    this.shadowRoot.querySelector('#logout').addEventListener('click', this.logout.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#logout').removeEventListener('click', this.logout.bind(this));
  }

  logout(event) {
    event.preventDefault();
    logout();
  }
}

customElements.define('p-menu', Menu);
