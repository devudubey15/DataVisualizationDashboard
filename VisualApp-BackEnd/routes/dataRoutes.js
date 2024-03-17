const express = require('express');
const router = express.Router();
const DataModel = require('../models/DataModel'); 

router.get('/data', async (req, res) => {
  try {
      const data = await DataModel.find({});
      res.status(200).send(data);
  } catch (err) {
      console.error("Error:", err);
      res.status(500).send('Something went wrong');
  }
});

module.exports = router;
