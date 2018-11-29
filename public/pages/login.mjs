import { login } from '../auth/auth.mjs';

class Login extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return `
      <h3>Login</h3>
      <p>Any username and password will do.</p>
      <form id="login" name="login">
        <label>
          username:
          <input id="username" type="text" name="username" />
        </label>
        <label>
          password:
          <input id="password" type="password" name="password" />
        </label>
        <button id="login" type="submit">Login</button>
      </form>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
    this.shadowRoot.querySelector('#login').addEventListener('submit', this.onSubmit.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#login').removeEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    const { username } = event.target.elements;
    login(Object.assign({}, { username: username.value }));
  }
}

customElements.define('p-login', Login);
