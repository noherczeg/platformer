class About extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `
      <h3>I'm: About</h3>
      <p>Yayy for me... please?!</p>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }
}

customElements.define('p-about', About);
