import '../pages/notFound.mjs';
import '../pages/home.mjs';
import '../pages/about.mjs';
import '../pages/login.mjs';
import { isLoggedIn } from '../auth/auth.mjs';

export const routes = [
  { name: 'home', title: 'Home' },
  { name: 'about', title: 'About' },
];

export const getRoute = () => {
  if (!isLoggedIn()) {
    return 'login';
  }
  const route = window.location.hash.substr(1) || 'home';
  return routes.find(r => r.name === route) ? route : 'not-found';
};

class Router extends HTMLElement {
  static get observedAttributes() {
    return ['page'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `<p-${this.page}></p-${this.page}>`;
  }

  get page() {
    return this.hasAttribute('page') && this.getAttribute('page');
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.shadowRoot.innerHTML = this.template;
  }
}

customElements.define('p-router', Router);
