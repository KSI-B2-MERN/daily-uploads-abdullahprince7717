module.exports = {

    getUser: () => {
        try {
            return {
                response: "Getting User",
            }
        }
        catch (err) {
            return {
                error: "User not found" + err.message
            }
        }
    }

}