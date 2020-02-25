import { Document } from 'mongoose';

export interface Product extends Document {
  readonly id: string;
  readonly name: string;
  readonly desc: string;
  readonly menu: string;
  readonly price: number;
  readonly amount: number;
  readonly status: boolean;
  readonly images: string[];
}


