import  functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addCustomer, getCustomers } from "./src/customers.js";

const app = express();
app.use(cors());
app.use(express.json());


// APIs

app.post("/customers", addCustomer)
app.get("/customers", getCustomers);





export const api = functions.https.onRequest(app);




