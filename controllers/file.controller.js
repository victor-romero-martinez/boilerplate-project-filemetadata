// @ts-check


/** @type {ControllerParams} */
const uploadController = (req, res) => {
    console.log('Archivo: %s', req.file);
    res.send('Archivo recibido');
}

module.exports = uploadController;

/**
 * @typedef {function(import('express').Request, import('express').Response): any} ControllerParams
 */