import axios from "axios";
// import { navigate } from "@reach/router";
import { toast } from "react-toastify";
const { navigate } = require('@reach/router')

const pay = async (amount:number, token:string) => {
  axios
    .post("http://localhost:4000/checkout", {
      amount: amount * 100,
      token,
    })
    .then((response) => {
      toast.success("Payment Success");
      navigate("/");
    })
    .catch((error) => {
      console.log("Payment Error: ", error);
      toast.error("Payment Error");
    });
};

export default pay;
