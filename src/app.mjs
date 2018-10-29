import { getRoute } from './utils/router.mjs';
import './components/menu.mjs';

class App extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `
      <p-menu></p-menu>
      <p-router page="${getRoute()}"></p-router>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
    window.addEventListener('hashchange', this.onHashChanged.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('hashchange', this.onHashChanged.bind(this));
  }

  onHashChanged(event) {
    this.shadowRoot
      .querySelector('p-router')
      .setAttribute('page', getRoute());
  }
  
}

customElements.define('p-app', App);
