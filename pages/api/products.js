import Product from "../../lib/models/Product";
import { initMongoose } from "../../lib/mongoose";

export default async function handle(req, res) {
   await initMongoose();
   res.json( await Product.find().exec() )
}