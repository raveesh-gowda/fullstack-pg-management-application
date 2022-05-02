const Tenants = require("../models/tenants");

const tenantsController = {};

tenantsController.list = (req, res) => {
   Tenants.find()
      .then((tenant) => {
         res.json(tenant);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

tenantsController.create = (req, res) => {
   const body = req.body;
   const tenant = new Tenants(body);
   tenant
      .save()
      .then((tenant) => {
         res.json(tenant);
      })
      .catch((err) => {
         res.json(err);
      });
};

tenantsController.show = (req, res) => {
   const id = req.params.id;
   Tenants.findById(id)
      .then((tenant) => {
         res.json(tenant);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

tenantsController.update = (req, res) => {
   const id = req.params.id;
   const body = req.body;
   Tenants.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      .then((tenant) => {
         res.json(tenant);
      })
      .catch((err) => {
         res.json(err);
      });
};

tenantsController.destroy = (req, res) => {
   const id = req.params.id;
   Tenants.findByIdAndDelete(id)
      .then((tenant) => {
         res.json(tenant);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

module.exports = tenantsController;
