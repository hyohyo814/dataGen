const router = require('express').Router();
const { faker } = require('@faker-js/faker');

const { generateSel } = require('../utils/helpers');


const { Field, Personnel } = require('../models');
const { sequelize } = require('../models/contact');

router.post('/', async (req, res) => {
  const { select } = req.body;
  console.log(select);
  const newEntry = await Field.create({
    select: select
  });

  const passThrough = generateSel(newEntry.select);

  const newData = await Personnel.create(passThrough);
  res.json(newData);
})

// select: sequelize.literal(`ARRAY['username', 'firstName', 'lastName']::"enum_fields_select"[]`)

module.exports = router;