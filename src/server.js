const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let customers = [];
//Create customer//
app.put("/customer", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const birthDate = req.body.birthDate;
  const notes = req.body.notes;

  customers.push({
    id: customers.length + 1,
    fullName: fullName,
    email: email,
    birthDate: birthDate,
    notes: notes,
    ctreatedDate: date
  });

  res.status(201).send();
});
//get all customers//
app.get("/customer/", (req, res) => {
  res.json(customers);
});
//get customer by id//
app.get("/customer/:id", (req, res) => {
  const requestedCustomer = customers.find(customer => {
    return customer.id === parseInt(req.params.id);
  });
  if (!requestedCustomer) {
    res.status(404).send();
    return;
  }
  res.status(200).json(requestedCustomer);
});

app.post("/customer/:id", (req, res) => {
  //edit customer//
  const requestedCustomer = customers.find(customer => {
    return customer.id === parseInt(req.params.id);
  });

  if (!requestedCustomer) {
    res.status(404).send();
    return;
  }

  const index = customers.indexOf(requestedCustomer);
  customers[index].fullName = req.body.fullName;
  customers[index].email = req.body.email;
  customers[index].birthDate = req.body.birthDate;
  customers[index].notes = req.body.notes;
  res.status(200).send();
});
//delete customer//
app.delete("/customers/:id", (req, res) => {
  Customer.findByIdAndRemove(req.params.id, err => {
    if (err) {
      res.redirect("/customers");
    } else {
      res.redirect("/customers");
    }
  });
});

app.listen(port, () => {
  console.log("App is listening on port " + port);
});

//datad//

function productUpdate() {
  if ($("table").val() != null && $("table").val() != "") {
    // Add product to Table
    productAddToTable();
    // Clear form fields
    formClear();
    // Focus to product name field
    $(".table").focus();
  }
}
