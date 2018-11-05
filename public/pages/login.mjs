import { login } from '../auth/auth.mjs';

class Login extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.state = {
      username: '',
      password: '',
    };
  }

  get template() {
    return `
      <h3>Login</h3>
      <p>Any username and password will do.</p>
      <form id="login" name="login">
        <label>
          username:
          <input id="username" type="text" name="username" value="${this.state.username}" />
        </label>
        <label>
          password:
          <input id="password" type="password" name="password" value="${this.state.password}" />
        </label>
        <button id="login" type="submit">Login</button>
      </form>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
    this.shadowRoot.querySelector('#login').addEventListener('submit', this.onSubmit.bind(this));
    this.shadowRoot.querySelector('#username').addEventListener('blur', this.onUsernameChanged.bind(this));
    this.shadowRoot.querySelector('#password').addEventListener('blur', this.onPasswordChanged.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#login').removeEventListener('submit', this.onSubmit.bind(this));
    this.shadowRoot.querySelector('#username').removeEventListener('blur', this.onUsernameChanged.bind(this));
    this.shadowRoot.querySelector('#password').removeEventListener('blur', this.onPasswordChanged.bind(this));
  }

  onUsernameChanged(evt) {
    this.state.username = evt.target.value
  }

  onPasswordChanged(evt) {
    this.state.password = evt.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    login(Object.assign({}, {username: this.state.username}));
  }
}

customElements.define('p-login', Login);
