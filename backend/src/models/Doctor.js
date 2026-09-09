import mongoose from 'mongoose';
const doctorSchema=new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true,unique:true},specialty:{type:String,required:true},bio:{type:String,default:''},fee:{type:Number,default:500,min:0},image:{type:String,default:''},city:{type:String,default:''},available:{type:Boolean,default:true},slots:[String]},{timestamps:true});
export const Doctor=mongoose.model('Doctor',doctorSchema);
