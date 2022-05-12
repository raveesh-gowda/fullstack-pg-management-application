const express = require("express");
const { authenticateUser } = require("../app/middleware/authenticate");
const router = express.Router();

const usersController = require("../app/controller/usersController");
const buildingsController = require("../app/controller/buildingsController");
const roomsController = require("../app/controller/roomsController");
const tenantsController = require("../app/controller/tenantsController");

//user authentication 
router.post("/api/user/register", usersController.register);
router.post("/api/user/login", usersController.login);
router.get("/api/user/account", authenticateUser, usersController.account);

//buildings
router.get("/api/buildings", authenticateUser, buildingsController.list);
router.post("/api/buildings", authenticateUser, buildingsController.create);
router.get("/api/buildings/:id", authenticateUser, buildingsController.show);
router.put("/api/buildings/:id", authenticateUser, buildingsController.update);
router.delete(
   "/api/buildings/:id",
   authenticateUser,
   buildingsController.destroy
);

//rooms
router.get("/api/rooms", authenticateUser, roomsController.list);
router.post("/api/rooms", authenticateUser, roomsController.create);
router.get("/api/rooms/:id", authenticateUser, roomsController.show);
router.put("/api/rooms/:id", authenticateUser, roomsController.update);
router.delete("/api/rooms/:id", authenticateUser, roomsController.destroy);

//tenants
router.get("/api/tenants", authenticateUser, tenantsController.list);
router.post("/api/tenants", authenticateUser, tenantsController.create);
router.get("/api/tenants/:id", authenticateUser, tenantsController.show);
router.put("/api/tenants/:id", authenticateUser, tenantsController.update);
router.delete("/api/tenants/:id", authenticateUser, tenantsController.destroy);

module.exports = router;
