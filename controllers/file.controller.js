// @ts-check


/** @type {ControllerParams} */
const uploadController = (req, res) => {
    res.json({
        name: req.file?.originalname,
        type: req.file?.mimetype,
        size: req.file?.size
    });
};

module.exports = uploadController;

/**
 * @typedef {function(import('express').Request, import('express').Response): any} ControllerParams
 */