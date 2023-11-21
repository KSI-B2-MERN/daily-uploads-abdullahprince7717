module.exports = {
    signUp: () => {
        try {
            return {
                response: "User signed up",
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    }

}