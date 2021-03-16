const axios = require("axios");

const verifyCustomer = (email: string, password:string) => {
  return axios
    .post("http://localhost:4000/login", {
      email,
      password,
    })
    .then((response:any) => {
      console.log('response',response);
      
      return response;
    });
};

export { verifyCustomer };
