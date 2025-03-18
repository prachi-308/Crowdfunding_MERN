// src/services/payment.js

import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.js";

axios.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem("token");

export const makePayment = async (id, amount) => {
  try {
    const response = await axios.post(config.donateTo(id), { amount });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Payment processing failed. Please try again.");
    }
    throw error;
  }
};