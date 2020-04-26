const joi = require('@hapi/joi')
const min = 1, max = 50

module.exports = joi.object({
    log: joi.object({
        prefix: joi.string()
            .min(min)
            .max(max)
            .required(),
        type: joi.object().pattern(/^/, joi.object({
            prefix: joi.string()
                .min(min)
                .max(max)
                .required(),
            color: joi.string()
                .min(min)
                .max(max),
            bold: joi.boolean()
        }).required()).required(),
        console: joi.object({
            on: joi.boolean()
                .required(),
            exclude: joi.array().items(
                joi.string()
                    .min(min)
                    .max(max)
            )
        }).required()
    }).required()
})