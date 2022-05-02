const mongoose = require("mongoose");

const configureDb = () => {
   mongoose
      .connect("mongodb://127.0.0.1:27017/pg_management")
      .then(() => {
         console.log("connected to db");
      })
      .catch((err) => {
         console.log("error connecting to db", err);
      });
};

module.exports = configureDb;
