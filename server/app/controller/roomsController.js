const Rooms = require("../models/rooms");

const roomsController = {};

roomsController.list = (req, res) => {
   Rooms.find()
      .then((room) => {
         res.json(room);
      })
      .catch((err) => {
         res.json(err);
      });
};

roomsController.create = (req, res) => {
   const body = req.body;
   const room = new Rooms(body);
   room
      .save()
      .then((room) => {
         res.json(room);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

roomsController.show = (req, res) => {
   const id = req.params.id;
   Rooms.findById(id)
      .then((room) => {
         res.json(room);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

roomsController.update = (req, res) => {
   const id = req.params.id;
   const body = req.body;
   Rooms.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      .then((room) => {
         res.json(room);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

roomsController.destroy = (req, res) => {
   const id = req.params.id;
   Rooms.findByIdAndDelete(id)
      .then((room) => {
         res.json(room);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

module.exports = roomsController;
