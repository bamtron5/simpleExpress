import * as mongoose from 'mongoose';

export interface IRabbit extends mongoose.Document {
  name: string;
  color: string;
  age: number;
}

let RabbitSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  color: String,
  age: Number
});

export const Rabbit = mongoose.model<IRabbit>('Rabbit', RabbitSchema);
