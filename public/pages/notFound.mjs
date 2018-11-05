class NotFound extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `
      <h3>404</h3>
      <p>Page not found :(</p>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }
}

customElements.define('p-not-found', NotFound);
