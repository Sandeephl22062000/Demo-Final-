const express = require("express");
const router = express.Router();
const TrainerController = require("../Controller/TrainerController/trainerController");

router.route("/register").post(TrainerController.RegisterTrainer);
// router.route("/login").post(TrainerController.loginRegister);
router.route("/:trainer").get(TrainerController.getAlltrainer);
router.route("/").get(TrainerController.getTrainers);
router.route("/trainerDetail/:id").get(TrainerController.getTrainerById);
// router.route("/updatePassword").post(UserController.updatePassword);

module.exports = router;
