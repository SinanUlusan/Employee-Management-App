import { LitElement, html, css } from 'lit';
import './src/components/employeeList.js';
import { translations } from './src/localization.js';

class App extends LitElement {
  static styles = css`
    nav {
      background-color: #3498db;
      padding: 10px;
      color: white;
      text-align: center;
      display: flex;
      justify-content: space-between;
    }
    nav button {
      background: white;
      color: #3498db;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-weight: bold;
      margin-right: 10px;
      border-radius: 5px;
    }
    nav button:hover {
      background-color: #2980b9;
      color: white;
    }
    nav select {
      background: white;
      color: #3498db;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-weight: bold;
      margin-right: 10px;
      border-radius: 5px;
    }
    nav select:hover {
      background-color: #2980b9;
      color: white;
    }
    h1 {
      margin: 0;
    }
    main {
      padding: 20px;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
      main {
        padding: 10px;
      }
    }

    @media (max-width: 480px) {
      nav {
        padding: 5px;
      }
      h1 {
        font-size: 18px;
      }
      nav button, nav select {
        padding: 8px;
      }
      main {
        padding: 5px;
      }
    }
  `;


  static properties = {
    page: { type: String },
    lang: { type: String },
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.page = 'home'; // Home page will be shown at start
    this.lang = 'en'; // Default language is English
  }

  // Update Language
  updateLang(event) {
    this.lang = event.target.value;
  }

  // Show Home Page
  showHome() {
    this.page = 'home';
  }

  // Show Employee Page
  showEmployeeList() {
    this.page = 'addEmployee';
  }

  // Content is rendered on a case-by-case basis
  renderPage() {
    const t = translations[this.lang];

    if (this.page === 'home') {
      return html`
        <h2>${t.employeeListTitle}</h2>
        <p>${t.description}</p>
      `;
    } else if (this.page === 'addEmployee') {
      return html`<employee-list .lang="${this.lang}"></employee-list>`;
    }
  }

  render() {
    const t = translations[this.lang];

    return html`
      <nav>
        <div>
          <button @click="${this.showHome}">${t.home}</button>
          <button @click="${this.showEmployeeList}">${t.employees}</button>
        </div>
        <!-- Language Selection Dropdown -->
        <select @change="${this.updateLang}">
          <option value="en" ?selected="${this.lang === 'en'}">EN</option>
          <option value="tr" ?selected="${this.lang === 'tr'}">TR</option>
        </select>
      </nav>
      <main>
        ${this.renderPage()}
      </main>
    `;
  }
}

customElements.define('my-app', App);
