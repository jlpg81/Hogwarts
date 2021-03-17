import Customer from "./customerServiceInterface"
const axios = require("axios");

const addCustomer = (customer : Customer) => {
  //const {name, phone, email, password, location}  = customer;
  return axios.post("http://localhost:4000/signUp", {
    ...customer
  });
};

const getCustomers = async () => {
  let servicesList;
  await axios("http://localhost:4000/customers").then((res:any) => {
    servicesList = res.data;
  });
  return servicesList;
};



export { addCustomer, getCustomers };
