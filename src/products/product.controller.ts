import { Request, Response } from "express";
import Product from "./product.model";

// 全てのプロダクトを取得
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to get all products" });
  }
};

// 特定のプロダクトを取得
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to get a product by ID" });
  }
};

// プロダクトを追加
export const addProduct = async (req: Request, res: Response) => {
  const { productName, productPrice } = req.body;
  const product = new Product({ productName, productPrice });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Failed to add a new product" });
  }
};

// プロダクトを編集
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update a product" });
  }
};

// プロダクトを削除
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete a product" });
  }
};
