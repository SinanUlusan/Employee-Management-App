import { css } from 'lit';

export const employeeListStyles = css`
  h2 {
    color: #333;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border-radius: 10px;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
    font-size: 14px;
  }
  th {
    background-color: #f1f1f1;
    color: #333;
  }
  tr:nth-child(even) {
    background-color: #fafafa;
  }
  th:first-child, td:first-child {
    border: none;
    padding: 10px 0;
    background-color: #f7f7f7;
  }
  button {
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
  }
  button.edit {
    background-color: #eeeeee;
    border-radius: 50%;
  }
  button.edit:hover {
    background-color: #3498db;
  }
  .delete-btn {
    background-color: #e74c3c;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }
  .delete-btn:hover {
    opacity: 0.7;
  }
  .button-div {
    display: flex;
    justify-content: center;
  }
  .add-new-employee-btn {
    background-color: rgb(255 77 12);
    color: white;
  }
  .add-new-employee-btn:hover {
    background-color: #ff7043;
  }
  input, select {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  label {
    font-weight: bold;
    margin-top: 10px;
    display: block;
  }
  label span {
    color: red;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    border-radius: 8px;
    text-align: left;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  .modal-content h3 {
    margin-top: 0;
  }
  .modal-content button {
    margin-top: 10px;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .save-btn {
    background-color: #2ecc71;
    color: white;
    margin-right: 10px;
  }
  .cancel-btn {
    background-color: #dcdcdc;
  }
  .icon {
    background: none;
    color: #3498db;
    font-size: 20px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }
  .icon:hover {
    color: #2980b9;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .pagination span {
    margin: 0 20px;
  }
  .top-bar {
    position: relative;
    left: 20px;
  }
  .delete-confirmation-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .button-group {
    margin-top: 20px;
  }
  .confirm-delete-btn {
    background-color: #e74c3c;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }
  .confirm-delete-btn:hover {
    opacity: 0.7;
  }
  .cancel-btn {
    background-color: #dcdcdc;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .cancel-btn:hover {
    opacity: 0.7;
  }  

  /* Responsive Styles */
  @media (max-width: 768px) {
    table {
      display: block;
      overflow-x: auto;
    }
    th, td {
      font-size: 12px;
      padding: 8px;
    }
    .modal-content {
      width: 75%;
    }
    .add-new-employee-btn {
      padding: 6px 10px;
    }
    .pagination span {
      margin: 0 10px;
    }
  }

  @media (max-width: 480px) {
    th, td {
      font-size: 10px;
      padding: 6px;
    }
    .icon {
      font-size: 18px;
    }
    .button-div {
      flex-direction: column;
    }
    .save-btn {
      margin-right: 0px;
    }
  }
`;

