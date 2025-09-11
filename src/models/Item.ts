  import mongoose, { Schema, Document } from "mongoose";

  export interface IItem extends Document {
    title: string;
    description: string;
    category: string;
    images: {
      thumbnail: string;
      gallery: string[];
    };
    sizes: string[];
    price: number;
    quantity: number;
  }

  const ItemSchema = new Schema<IItem>(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      category: {
        type: String,
        required: true,
      },
      images: {
        thumbnail: { type: String, required: true },
        gallery: [{ type: String, required: true }],
      },
      sizes: [{ type: String, required: true }],
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
    { timestamps: true }
  );

  export default mongoose.models.Item ||
    mongoose.model<IItem>("Item", ItemSchema);
