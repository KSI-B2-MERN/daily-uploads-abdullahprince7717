import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"
import axios from "axios"
import { useEffect, useState } from "react"


function Protected({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const getSession = async () => {
        try {
            const { data, error } = await axios.get("http://localhost:3000/auth/session", { withCredentials: true })
            if (error) {
                return alert("unable to get session")
            }
            !data.error ? setIsLoggedIn(true) : setIsLoggedIn(false)

        }
        catch (err) {
            console.log(err)
            setIsLoggedIn(false);
        }
    };
    useEffect(() => {
        getSession();
    }, [])
    return (
        <>{isLoggedIn ? children : <Navigate to="/login" />}</>
    )
}

Protected.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Protected