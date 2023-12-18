
function Login() {
    return (
        <div className="w-screen h-screen flex pt-16 bg-gradient-to-r from-cyan-300 to-blue-500 justify-center align-middle">
            <div className="w-2/3 h-5/6 flex item-center border-4 rounded-3xl">
                <div className="basis-1/2 rounded-l-3xl bg-gray-100 flex-col">
                    <div className="w-2/3 h-1/2 m-auto pt-14">
                        <h1 className="text-4xl font-bold text-center text-gray-900">
                            Sign In
                        </h1>

                        <div className="my-8 d-flex justify-center pl-12">
                            <button className="rounded-full w-1/8 h-1/8 text-xs mx-2 border-black outline-black bg-transparent text-black font-bold">G</button>
                            <button className="rounded-full w-1/8 h-1/8 text-xs mx-2 border-black outline-black bg-transparent text-black font-bold ">f</button>
                            <button className="rounded-full w-1/8 h-1/8 text-xs mx-2 border-black outline-black bg-transparent text-black font-bold ">t</button>
                        </div>

                        <div className="my-9 d-flex justify-center">
                            <input
                                type="email"
                                className="w-5/6 h-2xl rounded-full m-3 px-4 py-3 bg-gray-300 text-xs text-gray-900"
                                placeholder="email"
                                required
                            />
                            <input
                                type="password"
                                className="w-5/6 h-2xl rounded-full m-3 px-4 py-3 bg-gray-300 text-xs text-gray-900"
                                placeholder="password"
                                required
                            />

                            <button className="ml-5 mt-3 rounded-full hover:underline px-14 bg-transparent border-gray-100 outline-gray-100 text-black text-sm ">Forgot Password?</button>

                        </div>

                    </div>
                </div>

                <div className="basis-1/2 rounded-r-3xl bg-cyan-500/50 flex-col">
                    <div className="w-2/3 h-full mx-20 pt-14">

                        <h1 className="text-4xl px-14 mt-16 font-bold text-center text-white">
                            Create, Account!
                        </h1>

                        <p className="mt-14 ">SignUp if you dont have an account.</p>

                        <button className="ml-5 mt-5 rounded-full hover:underline px-14 w-3/4 bg-transparent border-gray-100 outline-gray-100 text-white text-md ">Sign Up</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login