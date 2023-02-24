import connectDatabase from "./config/connectDatabase.js";
import dotenv from 'dotenv'
dotenv.config()
import Product from "./models/Product.js";

import products from './products.json' assert { type: "json" };

const populate = async ()=>{
  try {
    await connectDatabase(process.env.DATABASE_URL)
    console.log('DB connected');
    await Product.deleteMany({})
    await Product.insertMany(products)
    console.log('Success');
    process.exit(0)
  } catch (error) {
    console.log(error);
  }
}

populate()