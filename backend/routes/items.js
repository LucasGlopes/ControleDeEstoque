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
    .then(() => res.json(`Item ${name} added!`))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
    .then((item) => res.json(`Item ${item.name} deleted.`))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
    .then(item => {
        item.name = req.body.name;
        item.description = req.body.description;
        item.price = Number(req.body.price);
        item.quantity = Number(req.body.quantity);

        item.save()
        .then(() => res.json(`Item ${item.name} updated!`))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;