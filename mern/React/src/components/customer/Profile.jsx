import { useState } from "react"

function Profile() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    // const [address, setAddress] = useState("")
    // const [city, setCity] = useState("")
    // const [country, setCountry] = useState("")

    return (
        <div className="flex justify-center">
        <div className="w-[50%] flex flex-col ">
            <b className="ml-1">Name</b>
            <input
                type="text"
                className="w-5/6 h-2xl rounded-full my-3 px-4 py-3 bg-gray-300 text-sm text-gray-900"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <b className="ml-1">Email</b>
            <input
                type="email"
                className="w-5/6 h-2xl rounded-full my-3 px-4 py-3 bg-gray-300 text-sm text-gray-900"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <b className="ml-1">Password</b>
            <input
                type="password"
                className="w-5/6 h-2xl rounded-full my-3 px-4 py-3 bg-gray-300 text-sm text-gray-900"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <b className="ml-1">Phone</b>
            <input
                type="number"
                className="w-5/6 h-2xl rounded-full my-3 px-4 py-3 bg-gray-300 text-sm text-gray-900"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button className="w-5/6 h-2xl rounded-full mt-6 px-4 py-3 bg-gray-300 text-sm text-gray-900 hover:bg-black hover:text-white hover:outline-none ">Update</button>
        </div>
    </div>
    )
}

export default Profile