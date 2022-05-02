const Buildings = require("../models/buildings");

const buildingsController = {};

buildingsController.list = (req, res) => {
   Buildings.find()
      .then((building) => {
         res.json(building);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

buildingsController.create = (req, res) => {
   const body = req.body;
   const building = new Buildings(body);
   building
      .save()
      .then((building) => {
         res.json(building);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

buildingsController.show = (req, res) => {
   const id = req.params.id;
   Buildings.findById(id)
      .then((building) => {
         res.json(building);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

buildingsController.update = (req, res) => {
   const id = req.params.id;
   const body = req.body;
   Buildings.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      .then((building) => {
         res.json(building);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

buildingsController.destroy = (req, res) => {
   const id = req.params.id;
   Buildings.findByIdAndDelete(id)
      .then((building) => {
         res.json(building);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

module.exports = buildingsController;
