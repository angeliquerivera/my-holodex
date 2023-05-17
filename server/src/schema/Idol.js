const mongoose = require("mongoose");

const idolSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2 },
  height: Number,
  subcount: {
    type: Number,
    required: true,
    min: 1,
    max: 10000000000,
    validate: {
      validator: (value) => value % 2 === 0,
      message: (props) => `${props.value} is not an even subcount.`,
    },
  },
  debut: Date,
  fanName: String,
  seiso: Boolean,
  unit: String,
  unitMembers: { type: [mongoose.SchemaTypes.ObjectId], ref: "Idol" },
  // hashTags: { // <- explicit object, no new Schema created, therefore created at document creation time
  //   streamTags: [String],
  //   fanArt: [String],
  // },
  hashTags: hashtagSchema, // <- this is a NEW Schema
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updatedAt: { type: Date, default: () => Date.now() },
});

idolSchema.methods.sayCatchphrase = function () {
  console.log(``);
};

idolSchema.statics.findByName = function (name) {
  return this.find({ name });
};

idolSchema.query.bySubcount = function (subcount) {
  return this.where("subcount").equals(subcount);
};

idolSchema.pre("save", function (next) {
  // Perform an update of `updatedAt` time to reflect time of changes
  this.updatedAt = Date.now();

  //Created the createdAt field, if legacy document
  if (!this.createdAt) {
    this.createdAt = Date.now();
  }

  next();
});

idolSchema.post("save", function (doc, next) {
  doc.sayHello();
  next();
});

module.exports = mongoose.model("Idol", idolSchema);
