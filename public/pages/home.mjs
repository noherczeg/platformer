import { wrappedFetch } from '../utils/wrappedFetch.mjs';

class Home extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.state = {
      posts: [],
      error: null,
    };
  }

  get template() {
    return `
      <p-menu></p-menu>
      <h3>I'm: Home</h3>
      <ul id="home-posts">
        ${this.state.posts.map((post) => `
          <article>
            <header>
              <h4>${post.title}</h4>
              <p>${post.intro}</p>
            </header>
            <p>${post.content}</p>
          </article>
        `).join('')}
      </ul>
      ${this.state.error? `<div id="home-error" class="error-box">${ this.state.error}</div>` : ''}
    `;
  }

  connectedCallback() {
    
    wrappedFetch('api/posts?_page=0&_limit=5')
      .then(response => response.json())
      .then((posts) => {
        this.state.posts = posts;
        this.shadowRoot.innerHTML = this.template;
      })
      .catch((error) => {
        this.state.error = error;
        this.shadowRoot.innerHTML = this.template;
      });
  }
}

customElements.define('p-home', Home);
