import { db } from "./dbConnect.js";
import { ObjectId } from "mongodb";


const coll = db.collection("check-in-customers");


export const addCustomer = async (req, res) => {

  try {
    const { fname, lname, email, phone } = req.body;
    const custObj = {
      fname, lname, email, phone,
      createdAt: new Date().toLocaleString("en-US", {timeZone: 'America/New_York'})
    }

    await coll.insertOne(custObj);
  
    res.status(201).send({message: "customer added"});
    
  } catch (error) {
      console.log(error);
    
  }
}

export const getCustomers = async (req, res) => {

  try {
    const custCollection = await coll.find().toArray();
    res.status(201).send(custCollection);
    
  } catch (error) {
      console.log(error);
  }
  
}