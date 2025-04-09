import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
  productName: string;
  productPrice: number;
}

const productSchema: Schema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;