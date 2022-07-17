const router = require('express').Router();
const Item = require('../models/item.model');

router.route('/').get((req, res) => {
    Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);
    const quantity = Number(req.body.quantity);

    const newItem = new Item({
        name,
        description,
        price,
        quantity,
    });

    newItem.save()
    .then(() => res.json('Item added'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;