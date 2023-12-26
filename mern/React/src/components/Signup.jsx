import { useState } from "react"
import axios from 'axios'

function Signup(updateSignUp) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('Customer')

    const signUp = async () => {
        const { data, error } = await axios.post("http://localhost:3000/users/createuser", {
            firstName: name,
            lastName: name,
            email: email,
            password: password,
            repeatPassword: repeatPassword,
            // role: role
            roleId: 'f4c05830-176b-4e29-9b04-27811979b01f'
        })
        if (data.error || error) {
            alert("Invalid Credentials")
        }
    }

    return (
        <div className="w-screen h-screen flex pt-16 bg-gradient-to-r from-cyan-300 to-blue-500 justify-center align-middle">
            <div className="w-2/3 h-5/6 flex item-center border-4 rounded-3xl">
                <div className="basis-1/2 rounded-l-3xl bg-cyan-500/50 flex-col">
                    <div className="w-2/3 h-full mx-20 pt-14">

                        <h1 className="text-4xl px-14 mt-16 font-bold text-center text-white">
                            Login!
                        </h1>

                        <p className="mt-14 ">Login if you already have an account.</p>

                        <button onClick={updateSignUp.updateSignUp} className="ml-5 mt-5 rounded-full hover:underline px-14 w-3/4 bg-transparent border-gray-100 outline-gray-100 text-white text-md ">Login</button>
                    </div>

                </div>
                <div className="basis-1/2 rounded-r-3xl bg-gray-100 flex-col">
                    <div className="w-2/3 h-1/2 m-auto pt-6">
                        <h1 className="text-4xl font-bold text-center text-gray-900">
                            Sign Up
                        </h1>

                        {/* <div className="my-5 d-flex justify-center pl-12">
                            <button className="rounded-full w-1/8 h-1/8 text-xs mx-2 border-black outline-black bg-transparent text-black font-bold">G</button>
                            <button className="rounded-full w-1/8 h-1/8 text-xs mx-2 border-black outline-black bg-transparent text-black font-bold ">f</button>
                            <button className="rounded-full w-1/8 h-1/8 text-xs mx-2 border-black outline-black bg-transparent text-black font-bold ">t</button>
                        </div> */}

                        <div className="mt-4 mb-2 d-flex justify-center">
                            <input
                                type="text"
                                className="w-5/6 h-2xl rounded-full m-2 px-4 py-3 bg-gray-300 text-xs text-gray-900"
                                placeholder="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <input

                                type="email"
                                className="w-5/6 h-2xl rounded-full m-2 px-4 py-3 bg-gray-300 text-xs text-gray-900"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                className="w-5/6 h-2xl rounded-full m-2 px-4 py-3 bg-gray-300 text-xs text-gray-900"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <input
                                type="password"
                                className="w-5/6 h-2xl rounded-full m-2 px-4 py-3 bg-gray-300 text-xs text-gray-900"
                                placeholder="Confirm Password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                required
                            />

                            <select className="w-5/6 h-2xl rounded-full m-3 px-4 py-3 bg-gray-300 text-xs text-gray-900">
                                <option value={role} onChange={(e) => setRole(e.target.value)}>Customer</option>
                                <option value={role} onChange={(e) => setRole(e.target.value)}>Vendor</option>
                            </select>

                            {/* <button className="ml-5 mt-3 rounded-full hover:underline px-14 bg-transparent border-gray-100 outline-gray-100 text-black text-sm ">Forgot Password?</button> */}
                            <button onClick={signUp} className="ml-5 mt-5 rounded-full hover:underline px-14 w-3/4 bg-transparent border-gray-100 outline-gray-100 text-black text-md ">Sign Up</button>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Signup