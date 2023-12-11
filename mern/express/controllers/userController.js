const userService = require('../services/userService');
const joi = require("joi");

const userSchema = joi.object().keys({
    roleId: joi.string().required(),
    firstName: joi.string().required().min(3),
    lastName: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeatPassword: joi.ref('password')
})


const paginationSchema = joi.object().keys({
    pageNo: joi.number().positive().greater(0).required(),
    limit: joi.number().valid(),
    sortValue: joi.string().valid('email', 'firstName', "lastName", "createdAt"), // enum value 
    sortOrder: joi.string().valid('ASC', 'DESC'),
    roleName: joi.string().valid('vendor', 'customer'), //filter
    email: joi.string() // filter

})

const getByIdSchema = joi.object().keys({
    userId: joi.string().required(),
});


module.exports = {
    getUsers: async (req, res) => {
        try {
            const validate = await paginationSchema.validateAsync(req.query);
            console.log(validate);
            const userServiceResponse = await userService.getUsers(validate);
            console.log(userServiceResponse);
            if (userServiceResponse.error) {
                res.send({
                    error: userServiceResponse.error
                })
            }
            else {
                res.send({
                    response: userServiceResponse.response
                })
            }
        }
        catch (err) {
            res.send({
                error: err
            })
        }
    },
    createUser: async (req, res) => {
        try {
            // console.log('In controller')
            const validate = await userSchema.validateAsync(req.body)
            const createUserResponse = await userService.createUser(validate);
            delete createUserResponse.response.dataValues.password;

            if (createUserResponse.error || !createUserResponse.response) {

                return res.send({
                    error: createUserResponse.error
                })
            }

            return res.send({
                response: createUserResponse.response
            })

        }
        catch (error) {
            return res.send({
                error: error || "User already exists"
            })
        }
    },
    deleteUser: async (req, res) => {
        try {
            const validate = await getByIdSchema.validateAsync(req.query);
            const user = await userService.deleteUser(validate);
            if (user.error) {
                return res.send({
                    error: user.error,
                });
            }
            return res.send({
                response: user.response,
            });
        } catch (error) {
            return {
                error: error,
            };
        }
    },
}