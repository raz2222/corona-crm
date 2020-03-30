import { json } from "body-parser";

const API_URL = "http://localhost:3000";
const newCustomerForm = document.getElementById("new-customer-form");
newCustomerForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!validate(newCustomerForm)) {
    return;
  }
  createCustomer({
    fullName: newCustomerForm.fullName.value,
    email: newCustomerForm.email.value,
    birthDate: newCustomerForm.birthdate.value,
    notes: newCustomerForm.notes.value
  });
});
function createCustomer(customer) {
  fetch(API_URL + "/customer", {
    method: "PUT",
    body: JSON.stringify(customer)
  });
}
function validate(form) {
  if (!form.over18.checked) {
    return false;
  }
  return true;
}
