const express = require("express");
const router = express.Router();
const Staff = require("../../Database/Staff");
router.get("/staff/all", async (req, res) => {
  Staff.find({}, (e, o) => {
    if (e) {
      res.status(500).json({
        status: 500,
        errors: { msg: "Server Error Try Again Later !" },
      });
    } else {
      if (o) {
        res.status(200).json({
          status: 200,
          msg: "Success",
          result: o,
        });
      } else {
        res.status(404).json({
          status: 404,
          errors: { msg: "No Guilds Found" },
        });
      }
    }
  });
});
router.get("/staff/all/:id", async (req, res) => {
  let checkID = new RegExp("^[0-9a-fA-F]{24}$");
  console.log(req.params.id);
  if (!checkID.test(req.params.id)) {
    res.status(400).json({
      status: 400,
      errors: { msg: "Bad Request : ID not valid" },
    });
  } else {
    Staff.findOne({ _id: req.params.id }, (e, o) => {
      if (e) {
        res.status(500).json({
          status: 500,
          errors: { msg: "Server Error Try Again Later !" },
        });
      } else {
        if (o) {
          res.status(200).json({
            status: 200,
            msg: "Success",
            result: o,
          });
        } else {
          res.status(404).json({
            status: 404,
            errors: { msg: "Can't find data with the provided id" },
          });
        }
      }
    });
  }
});

router.get("/staff/:limit", async (req, res) => {
  if (isNaN(req.params.limit)) {
    res.status(400).json({
      status: 400,
      errors: { msg: "Bad Request : result limit must be a number" },
    });
  } else {
    Staff.find({}, (e, o) => {
      if (e) {
        res.status(500).json({
          status: 500,
          errors: { msg: "Server Error Try Again Later !" },
        });
      } else {
        if (o) {
          res.status(200).json({
            status: 200,
            msg: "Success",
            result: o,
          });
        } else {
          res.status(404).json({
            status: 404,
            errors: { msg: "No Guilds Found" },
          });
        }
      }
    }).limit(req.params.limit);
  }
});
module.exports = router;
