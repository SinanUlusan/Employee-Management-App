import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import '../src/components/employeeList.js';

describe('EmployeeList Component', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`<employee-list></employee-list>`);
  });

  it('renders the employee list component', () => {
    const title = el.shadowRoot.querySelector('h2');
    expect(title.textContent).to.equal('Employee List');
  });

  it('opens the add employee modal when the button is clicked', async () => {
    const addButton = el.shadowRoot.querySelector('.add-new-employee-btn');
    addButton.click();

    await el.updateComplete;

    const modal = el.shadowRoot.querySelector('.modal');
    expect(modal).to.exist;
  });

  it('closes the modal when cancel is clicked', async () => {
    el.showModal = true;
    await el.updateComplete;

    const cancelButton = el.shadowRoot.querySelector('.cancel-btn');
    cancelButton.click();

    await el.updateComplete;
    expect(el.showModal).to.be.false;
  });

  it('paginates employees correctly', async () => {
    el.employees = [
      {
        firstName: "John",
        lastName: "Doe",
        employmentDate: "2020-06-15",
        birthDate: "1990-05-22",
        phoneNumber: "555-123-4567",
        email: "john.doe@example.com",
        department: "Tech",
        position: "Senior"
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        employmentDate: "2021-03-01",
        birthDate: "1992-11-12",
        phoneNumber: "555-987-6543",
        email: "jane.smith@example.com",
        department: "Analytics",
        position: "Medior"
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        employmentDate: "2019-09-23",
        birthDate: "1988-04-07",
        phoneNumber: "555-234-5678",
        email: "alice.johnson@example.com",
        department: "Tech",
        position: "Junior"
      },
      {
        firstName: "Bob",
        lastName: "Brown",
        employmentDate: "2022-01-10",
        birthDate: "1995-02-14",
        phoneNumber: "555-345-6789",
        email: "bob.brown@example.com",
        department: "Tech",
        position: "Medior"
      },
      {
        firstName: "Charlie",
        lastName: "Davis",
        employmentDate: "2020-12-05",
        birthDate: "1991-08-19",
        phoneNumber: "555-456-7890",
        email: "charlie.davis@example.com",
        department: "Analytics",
        position: "Senior"
      },
      {
        firstName: "David",
        lastName: "Williams",
        employmentDate: "2018-03-19",
        birthDate: "1985-09-28",
        phoneNumber: "555-678-1234",
        email: "david.williams@example.com",
        department: "Tech",
        position: "Senior"
      },
      {
        firstName: "Emily",
        lastName: "Taylor",
        employmentDate: "2019-07-23",
        birthDate: "1989-07-12",
        phoneNumber: "555-789-1234",
        email: "emily.taylor@example.com",
        department: "Analytics",
        position: "Medior"
      },
      {
        firstName: "Frank",
        lastName: "Miller",
        employmentDate: "2021-05-03",
        birthDate: "1993-06-11",
        phoneNumber: "555-890-1234",
        email: "frank.miller@example.com",
        department: "Tech",
        position: "Junior"
      },
      {
        firstName: "Grace",
        lastName: "Wilson",
        employmentDate: "2020-08-19",
        birthDate: "1991-04-15",
        phoneNumber: "555-901-2345",
        email: "grace.wilson@example.com",
        department: "Analytics",
        position: "Senior"
      },
      {
        firstName: "Henry",
        lastName: "Moore",
        employmentDate: "2017-12-10",
        birthDate: "1986-02-25",
        phoneNumber: "555-012-3456",
        email: "henry.moore@example.com",
        department: "Tech",
        position: "Senior"
      },
      {
        firstName: "Ivy",
        lastName: "Clark",
        employmentDate: "2019-11-09",
        birthDate: "1994-01-19",
        phoneNumber: "555-234-5678",
        email: "ivy.clark@example.com",
        department: "Analytics",
        position: "Junior"
      },
      {
        firstName: "Jack",
        lastName: "White",
        employmentDate: "2021-03-15",
        birthDate: "1990-10-12",
        phoneNumber: "555-345-6789",
        email: "jack.white@example.com",
        department: "Tech",
        position: "Medior"
      },
      {
        firstName: "Kelly",
        lastName: "Harris",
        employmentDate: "2020-02-01",
        birthDate: "1987-08-08",
        phoneNumber: "555-456-7890",
        email: "kelly.harris@example.com",
        department: "Tech",
        position: "Junior"
      },
      {
        firstName: "Leo",
        lastName: "Lewis",
        employmentDate: "2018-10-22",
        birthDate: "1992-03-18",
        phoneNumber: "555-567-8901",
        email: "leo.lewis@example.com",
        department: "Analytics",
        position: "Senior"
      },
      {
        firstName: "Mia",
        lastName: "Walker",
        employmentDate: "2022-05-12",
        birthDate: "1993-07-14",
        phoneNumber: "555-678-9012",
        email: "mia.walker@example.com",
        department: "Tech",
        position: "Junior"
      },
      {
        firstName: "Nina",
        lastName: "Hall",
        employmentDate: "2020-11-01",
        birthDate: "1991-09-25",
        phoneNumber: "555-789-0123",
        email: "nina.hall@example.com",
        department: "Analytics",
        position: "Medior"
      },
      {
        firstName: "Oscar",
        lastName: "Young",
        employmentDate: "2019-09-30",
        birthDate: "1990-11-23",
        phoneNumber: "555-890-1234",
        email: "oscar.young@example.com",
        department: "Tech",
        position: "Senior"
      },
      {
        firstName: "Paula",
        lastName: "King",
        employmentDate: "2021-04-10",
        birthDate: "1988-05-19",
        phoneNumber: "555-901-2345",
        email: "paula.king@example.com",
        department: "Analytics",
        position: "Junior"
      },
      {
        firstName: "Quincy",
        lastName: "Scott",
        employmentDate: "2017-07-18",
        birthDate: "1986-12-08",
        phoneNumber: "555-012-3456",
        email: "quincy.scott@example.com",
        department: "Tech",
        position: "Senior"
      },
      {
        firstName: "Rachel",
        lastName: "Green",
        employmentDate: "2018-01-25",
        birthDate: "1992-04-04",
        phoneNumber: "555-123-4567",
        email: "rachel.green@example.com",
        department: "Analytics",
        position: "Medior"
      }
    ];
    await el.updateComplete;

    const employeeRows = el.shadowRoot.querySelectorAll('tbody tr');
    expect(employeeRows.length).to.equal(el.rowsPerPage);
  });
});
