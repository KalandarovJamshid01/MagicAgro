const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema(
   {
      name: { type: String, required: true, trim: true },

      createdAt: {
         type: Date,
         default: Date.now,
      },

      littleId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "littlecategories",
      },
   },
   {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
   }
);

LevelSchema.virtual("le", {
   ref: "contents",
   foreignField: "levelId",
   localField: "_id",
});

module.exports = mongoose.model("levels", LevelSchema);
