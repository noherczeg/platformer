import { getRoute } from './utils/router.mjs';
import { isLoggedIn } from './auth/auth.mjs';

import './components/menu.mjs';

class App extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `
      <p-router page="${this.getPageName()}"></p-router>
    `;
  }

  connectedCallback() {
    if (!isLoggedIn()) {
      window.location.href = '#login';
    }
    this.shadowRoot.innerHTML = this.template;
    window.addEventListener('hashchange', this.onHashChanged.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('hashchange', this.onHashChanged.bind(this));
  }

  onHashChanged() {
    this.shadowRoot
      .querySelector('p-router')
      .setAttribute('page', this.getPageName());
  }

  getPageName() {
    return getRoute().split('/')[0];
  }

}

customElements.define('p-app', App);
