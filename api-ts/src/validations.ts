import Joi = require("@hapi/joi");

const schema = Joi.object().keys({
    manufacturer: Joi.string().valid("bmw", "audi").required()
})

const validationsSchema = {
    cars: (req, res, next) => {
        console.log("In middleware...")
        console.log(req.query)
        const { error } = schema.validate(req.query);
        if (error) {
            console.log(error.details)
            res.send("error validation")
        } else {
            next()
        }
    }
}

export function getValidation(path) {
    const validator = validationsSchema[path]
    const isValidatorExist = typeof validator === 'function';
    return isValidatorExist ? validator : generalUnsafeCallback
}

function generalUnsafeCallback(req, res, next) {
    console.log(`THIS API IS NOT SAFE: ${req.path}`)
    return next();
}