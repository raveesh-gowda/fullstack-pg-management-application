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
router.get("/api/buildings", buildingsController.list);
router.post("/api/buildings", buildingsController.create);
router.get("/api/buildings/:id", buildingsController.show);
router.put("/api/buildings/:id", buildingsController.update);
router.delete("/api/buildings/:id", buildingsController.destroy);

//rooms
router.get("/api/rooms", roomsController.list);
router.post("/api/rooms", roomsController.create);
router.get("/api/rooms/:id", roomsController.show);
router.put("/api/rooms/:id", roomsController.update);
router.delete("/api/rooms/:id", roomsController.destroy);

//tenants
router.get("/api/tenants", tenantsController.list);
router.post("/api/tenants", tenantsController.create);
router.get("/api/tenants/:id", tenantsController.show);
router.put("/api/tenants/:id", tenantsController.update);
router.delete("/api/tenants/:id", tenantsController.destroy);

module.exports = router;
