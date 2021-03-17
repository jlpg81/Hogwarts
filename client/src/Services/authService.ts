// const axios = require("axios");
import axios, { AxiosResponse } from 'axios'

const verifyCustomer = (email: string, password:string) => {
  return axios
    .post("http://localhost:4000/login", {
      email,
      password,
    })
    .then((response:AxiosResponse<string>) => {
      console.log(response)
      return response;
    });
};

export { verifyCustomer };
