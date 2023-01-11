// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}

const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },

    email: { type: String, required: true, lowercase: true, trim: true },

    mobile: { type: String, required: true, trim: true },

    collegeId: { type: ObjectId, ref: "college", },

    isDeleted: { type: Boolean, default: false }


}, { timestamps: true });

module.exports = mongoose.model("intern", internSchema);