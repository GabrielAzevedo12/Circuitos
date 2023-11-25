const { uuid } = require('uuidv4');
const express = require('express');
const router = express.Router();

const version_obj = {
    title: "Node Express API",
    version: "0.0.1"
};

const Informaçoes_API = [
    {
        "Informaçoes_API" : version_obj
    }
];

router.get('/Informaçoes_API', function (req, res, next) {
    res.status(200).json(Informaçoes_API);
});

module.exports = router;