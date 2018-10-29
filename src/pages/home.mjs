class Home extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `
      <h3>I'm: Home</h3>
      <p>Yayy for me!</p>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }
}

customElements.define('p-home', Home);
