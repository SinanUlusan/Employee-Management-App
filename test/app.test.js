import { expect } from '@esm-bundle/chai';
import '../app.js';

describe('my-app', () => {
  let el;

  beforeEach(() => {
    // Create a new sample before each test
    el = document.createElement('my-app');
    document.body.appendChild(el);
  });

  afterEach(() => {
    // Clean the component after each test
    document.body.removeChild(el);
  });

  it('renders correctly', () => {
    expect(el).to.be.ok; // Check for the presence of the component
  });

  it('displays the home page by default', async () => {
    await el.updateComplete;

    const heading = el.shadowRoot.querySelector('h2');
    expect(heading).to.exist;
    expect(heading.textContent).to.equal('Employee List');
  });

  it('shows employee list page when button is clicked', async () => {
    await el.updateComplete;
  
    const buttons = el.shadowRoot.querySelectorAll('button');
    expect(buttons.length).to.be.greaterThan(1);
  
    const employeeButton = buttons[1];
    employeeButton.click();
  
    await el.updateComplete;
  
    const employeeListComponent = el.shadowRoot.querySelector('employee-list');
    expect(employeeListComponent).to.exist;
  });

  it('updates language when select value changes', async () => {
    await el.updateComplete;

    const select = el.shadowRoot.querySelector('select');
    expect(select).to.exist;
    select.value = 'tr';
    select.dispatchEvent(new Event('change'));

    await el.updateComplete;
  
    const heading = el.shadowRoot.querySelector('h2');
    expect(heading.textContent).to.equal('Çalışan Listesi');
  });
});
