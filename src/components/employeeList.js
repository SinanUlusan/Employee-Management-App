import { LitElement, html, css } from "lit";
import { employeeData } from "../mockEmployeeData.js";
import { translations } from "../localization.js";
import { employeeListStyles } from "../styles/employeeListStyles.js";

class EmployeeList extends LitElement {
  static styles = [employeeListStyles];

  static properties = {
    employees: { type: Array },
    showModal: { type: Boolean },
    editingIndex: { type: Number },
    currentPage: { type: Number },
    rowsPerPage: { type: Number },
    lang: { type: String },
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.showModal = false;
    this.editingIndex = null;
    this.currentPage = 1;
    this.rowsPerPage = 10;
    this.lang = document.documentElement.lang || "en";
    this.employees = this.loadEmployees();
  }

  // Load from LocalStorage by merging employees and mock data
  loadEmployees() {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

    // Merge data from mock data and localStorage
    const combinedEmployees = [...employeeData, ...storedEmployees];

    return combinedEmployees;
  }

  saveEmployees() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
  }

  addEmployeeButton() {
    this.showModal = true;
    this.editingIndex = null;
  }

  handleCancel() {
    this.showModal = false;
  }

  updated(changedProperties) {
    if (changedProperties.has("showModal") && this.showModal) {
      this.clearForm(); // Clear form when modal opens
      if (this.editingIndex !== null) {
        this.fillForm(); // Fill in the form if the arrangement is being made
      }
    }
  }

  clearForm() {
    this.shadowRoot.getElementById("firstName").value = "";
    this.shadowRoot.getElementById("lastName").value = "";
    this.shadowRoot.getElementById("employmentDate").value = "";
    this.shadowRoot.getElementById("birthDate").value = "";
    this.shadowRoot.getElementById("phoneNumber").value = "";
    this.shadowRoot.getElementById("email").value = "";
    this.shadowRoot.getElementById("department").value = "";
    this.shadowRoot.getElementById("position").value = "";
  }

  fillForm() {
    const employee = this.employees[this.editingIndex];
    this.shadowRoot.getElementById("firstName").value = employee.firstName;
    this.shadowRoot.getElementById("lastName").value = employee.lastName;
    this.shadowRoot.getElementById("employmentDate").value =
      employee.employmentDate;
    this.shadowRoot.getElementById("birthDate").value = employee.birthDate;
    this.shadowRoot.getElementById("phoneNumber").value = employee.phoneNumber;
    this.shadowRoot.getElementById("email").value = employee.email;
    this.shadowRoot.getElementById("department").value = employee.department;
    this.shadowRoot.getElementById("position").value = employee.position;
  }

  // Add Employee
  addEmployee(event) {
    event.preventDefault();

    // Get input values
    const firstName = this.shadowRoot.getElementById("firstName").value;
    const lastName = this.shadowRoot.getElementById("lastName").value;
    const employmentDate =
      this.shadowRoot.getElementById("employmentDate").value;
    const birthDate = this.shadowRoot.getElementById("birthDate").value;
    const phoneNumber = this.shadowRoot.getElementById("phoneNumber").value;
    const email = this.shadowRoot.getElementById("email").value;
    const department = this.shadowRoot.getElementById("department").value;
    const position = this.shadowRoot.getElementById("position").value;

    // Create new employee object
    const employee = {
      firstName,
      lastName,
      employmentDate,
      birthDate,
      phoneNumber,
      email,
      department,
      position,
    };

    const storedEmployees = JSON.parse(localStorage.getItem("employees")) ?? []; // Employees in LocalStorage

    if (this.editingIndex !== null) {
      // If an edit is being made, update the relevant employee
      storedEmployees[this.editingIndex] = employee; // Update LocalStorage
    } else {
      // If adding new employees, add them at the beginning
      storedEmployees.unshift(employee);
    }

    // Update LocalStorage and merge it with mock data
    localStorage.setItem("employees", JSON.stringify(storedEmployees));

    // Merge all workers with mock data and localStorage (mock data remains constant)
    // Only merge mock data with stored employees once, to avoid duplicates
    if (this.employees.length === 0) {
      this.employees = [...storedEmployees, ...employeeData];
    } else {
      this.employees = storedEmployees;
    }
    
    this.saveEmployees(); // Register and update employees
    this.showModal = false; // Close the Modal
  }

  // Delete related employee
  deleteCurrentEmployee() {
    const t = translations[this.lang];

    if (confirm(`${t.confirm}`)) {
      this.employees.splice(this.editingIndex, 1);
      this.saveEmployees();
      this.showModal = false;
      this.editingIndex = null;
    }
  }

  // Manage page transition
  handlePageChange(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

  // Calculate the number of pages
  totalPages() {
    return Math.ceil(this.employees.length / this.rowsPerPage); // Toplam sayfa sayısı
  }

  // Slice data for pagination
  paginatedEmployees() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    return this.employees.slice(start, end);
  }

  renderModal() {
    const t = translations[this.lang];

    // Get the employee to be organized according to the selected index
    const employeeToEdit =
      this.editingIndex !== null ? this.employees[this.editingIndex] : null;

    return html`
      <div class="modal">
        <div class="modal-content">
          <h3>
            ${this.editingIndex !== null
              ? `${t.employee} ${employeeToEdit.firstName} ${employeeToEdit.lastName}`
              : `${t.addEmployeeButton}`}
          </h3>
          <form @submit="${this.addEmployee}">
            <label for="firstName">${t.firstName} <span>*</span></label>
            <input
              type="text"
              id="firstName"
              placeholder=${t.firstName}
              required
              title="${t.invalidName}"
            />

            <label for="lastName">${t.lastName} <span>*</span></label>
            <input
              type="text"
              id="lastName"
              placeholder=${t.lastName}
              required
              title="${t.invalidName}"
            />

            <label for="employmentDate"
              >${t.employmentDate} <span>*</span></label
            >
            <input type="date" id="employmentDate" required />

            <label for="birthDate">${t.birthDate} <span>*</span></label>
            <input type="date" id="birthDate" required />

            <label for="phoneNumber">${t.phoneNumber} <span>*</span></label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder=${t.phoneNumber}
              required
              pattern="^+?[0-9]+([-][0-9]+)*$"
              title="${t.invalidPhoneNumber}"
            />

            <label for="email">${t.emailAddress} <span>*</span></label>
            <input
              type="email"
              id="email"
              placeholder=${t.emailAddress}
              required
            />

            <label for="department">${t.department} <span>*</span></label>
            <select id="department" required>
              <option value="" disabled selected>${t.selectDepartment}</option>
              <option value="Analytics">${t.analytics}</option>
              <option value="Tech">${t.tech}</option>
            </select>

            <label for="position">${t.position} <span>*</span></label>
            <select id="position" required>
              <option value="" disabled selected>${t.selectPosition}</option>
              <option value="Junior">${t.junior}</option>
              <option value="Medior">${t.medior}</option>
              <option value="Senior">${t.senior}</option>
            </select>
            <div class="button-div">
              <button type="submit" class="save-btn">${t.save}</button>
              <button
                type="button"
                class="cancel-btn"
                @click="${this.handleCancel}"
              >
                ${t.cancel}
              </button>
            </div>

            <!-- Delete Button -->
            ${this.editingIndex !== null
              ? html`
                  <button
                    type="button"
                    class="delete-btn"
                    @click="${this.deleteCurrentEmployee}"
                  >
                    ${t.delete}
                  </button>
                `
              : ""}
          </form>
        </div>
      </div>
    `;
  }

  render() {
    const t = translations[this.lang];

    return html`
      <div>
        <div class="top-bar">
          <h2>${t.employeeListTitle}</h2>
          <button
            class="add-new-employee-btn"
            @click="${this.addEmployeeButton}"
          >
            ${t.addEmployeeButton}
          </button>
        </div>
        ${this.showModal ? this.renderModal() : ""}
        <!-- Page navigation buttons -->
        <div class="pagination">
          <button
            @click="${() => this.handlePageChange(this.currentPage - 1)}"
            ?disabled="${this.currentPage === 1}"
          >
            ${t.previous}
          </button>
          <span
            >${t.page} ${this.currentPage} ${t.of} ${this.totalPages()}</span
          >
          <button
            @click="${() => this.handlePageChange(this.currentPage + 1)}"
            ?disabled="${this.currentPage === this.totalPages()}"
          >
            ${t.next}
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>${t.firstName}</th>
              <th>${t.lastName}</th>
              <th>${t.employmentDate}</th>
              <th>${t.birthDate}</th>
              <th>${t.phoneNumber}</th>
              <th>${t.emailAddress}</th>
              <th>${t.department}</th>
              <th>${t.position}</th>
            </tr>
          </thead>
          <tbody>
            ${this.paginatedEmployees().map(
              (employee, index) => html`
                <tr>
                  <td style="display: flex; justify-content: center;">
                    <button
                      class="icon edit"
                      @click="${() => {
                        this.editingIndex = index;
                        this.showModal = true;
                      }}"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#000"
                        width="14px"
                        height="14px"
                      >
                        <path
                          d="M3 21v-3.75l11.96-11.96 3.75 3.75-11.96 11.96zm19.71-12.29c.39-.39.39-1.02 0-1.41l-2.12-2.12c-.39-.39-1.02-.39-1.41 0l-1.46 1.46 3.75 3.75 1.46-1.46c.39-.39.39-1.02 0-1.41zm-6.35-1.35l-2.12 2.12-3.75-3.75 2.12-2.12c.39-.39 1.02-.39 1.41 0l2.34 2.34c.38.39.38 1.03 0 1.41z"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>${employee.firstName}</td>
                  <td>${employee.lastName}</td>
                  <td>${employee.employmentDate}</td>
                  <td>${employee.birthDate}</td>
                  <td>${employee.phoneNumber}</td>
                  <td>${employee.email}</td>
                  <td>${employee.department}</td>
                  <td>${employee.position}</td>
                </tr>
              `
            )}
          </tbody>
        </table>
        <!-- Page navigation buttons -->
        <div class="pagination">
          <button
            @click="${() => this.handlePageChange(this.currentPage - 1)}"
            ?disabled="${this.currentPage === 1}"
          >
            ${t.previous}
          </button>
          <span
            >${t.page} ${this.currentPage} ${t.of} ${this.totalPages()}</span
          >
          <button
            @click="${() => this.handlePageChange(this.currentPage + 1)}"
            ?disabled="${this.currentPage === this.totalPages()}"
          >
            ${t.next}
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("employee-list", EmployeeList);
