import { useState } from "react"
import { CiDeliveryTruck, CiShop, CiShoppingCart } from "react-icons/ci";

const Checkout = () => {

  const [checked, setChecked] = useState(false);
  const [city, setCity] = useState("Lahore");

  const handleChecked = () => {
    setChecked((prevChecked) => !prevChecked);
  }

  return(
    <>
      {/* <div className="w-full flex justify-around gap-80 p-2 border-b"> 
          <p className="text-3xl text-black fot-semibold"> TechHub </p>
          <CiShoppingCart size={28} color="blue"/> 
      </div> */}

      <div className="w-full h-full flex justify-evenly p-2">
        
        <div className="w-3/5 h-full bg-white flex flex-col items-center">

          <div className="w-full flex justify-around gap-16">
            <p className="text-black text-2xl font-semibold"> Contact </p>
            <p className="mt-2 text-gray-500 text-sm"> Have an account? <span className="text-blue-600"> Log in </span> </p>
          </div>

          <input
            className="w-[71%] p-4 mt-4 text-black text-sm rounded-md border border-gray-300 focus:outline-blue-400"
            type="text"
            placeholder="Email or mobile phone number"
          />

          <div className="w-full flex flex-col items-start">
          
            <div className="flex gap-3 mt-8 ml-28 text-black text-sm">
              
              <input 
                type="checkbox"
                checked = {checked}
                onClick={handleChecked}
              />
              <p> Email me with news and offers  </p>
            
            </div>

            <p className="text-black text-2xl font-semibold mt-8 ml-28"> Delivery </p>

            <div className="w-[71%] ml-28 mt-4 p-3.5 flex justify-between text-sm text-black rounded-tl-md rounded-tr-md
                            border border-blue-400">
              <p> Ship </p>
              <CiDeliveryTruck size={24} color="blue"/>
            </div>

            <div className="w-[71%] ml-28 mt- p-3.5 flex justify-between text-sm text-black rounded-bl-md rounded-br-md
                            border border-gray-400">
              <p> Pick up </p>
              <CiShop size={24} color="blue"/>
            </div>

            <div className="w-full flex flex-col">
              {/* <input
                className="w-[71%] p-4 mt-8 ml-28 text-black text-sm rounded-md border border-gray-300 focus:outline-blue-400"
                type="text"
                placeholder="Enter your city"
              /> */}

              <select 
                className="w-[71%] p-4 mt-8 ml-28 outline-none text-sm rounded-md border border-gray-300
                 focus:border-blue-400" 
                id="city" 
                name="city"
                // placeholder="Select City"
                onChange={(e) => setCity(e.target.value) }>
                
                <option value="Lahore"> Lahore </option>
                <option value="Karachi"> Karachi </option>
                <option value="Faisalabad"> Faisalabad </option>
                <option value="Islamabad"> Islamabad </option>
                <option value="Peshawar"> Peshawar </option>
                <option value="Rawalpindi"> Rawalpindi </option>
                <option value="Multan"> Multan </option>
                <option value="Bahawalpur"> Bahawalpur </option>
                <option value="Gujranwala"> Gujranwala </option>
                <option value="Chishtian"> Chishtian </option>

              </select>

              {/* {city} */}

              <div className="flex gap-5 ml-28">
                <input
                  className="w-[40%] p-3.5 mt-4 text-black text-sm rounded-md border border-gray-300 focus:outline-blue-400"
                  type="text"
                  placeholder="First Name"
                />  

                <input
                  className="w-[40%] p-3.5 mt-4 text-black text-sm rounded-md border border-gray-300 focus:outline-blue-400"
                  type="text"
                  placeholder="Last Name"
                />  
              </div>

              <input
                  className="w-[71%] p-4 ml-28 mt-4 text-black text-sm rounded-md border border-gray-300 focus:outline-blue-400"
                  type="text"
                  placeholder="Address"
                />  

              <div className="flex gap-5 ml-28">
                <input
                  className="w-[40%] p-3.5 mt-4 text-black text-sm rounded-md border border-gray-300 focus:outline-blue-400"
                  type="text"
                  placeholder="City"
                />  

                <input
                  className="w-[40%] p-3.5 mt-4 text-black text-sm rounded-md border border-gray-300 focus:outline-blue-400"
                  type="text"
                  placeholder="Postal Code"
                />  
              </div>

              <p className="ml-28 mt-8 text-black text-2xl font-semibold"> Payment </p>
              <p className="ml-28 mt-2 text-gray-400 text-sm"> All transactions are secured and encrypted </p>
              <div className="w-[71%] h-36 mt-4 bg-gray-200 p-2 ml-28">
              

              </div>
              <button className="w-[71%] ml-28 mt-10 mb-16 p-4 bg-blue-400 rounded-none text-white"> Pay Now </button>
              <hr className="h-0.5 w-full"/>

              <div className="w-full flex justify-evenly mt-8 mb-6">
                <p className="text-sm text-blue-500 underline cursor-pointer"> Refund policy.</p>
                <p className="text-sm text-blue-500 underline cursor-pointer"> Privacy policy.</p>
                <p className="text-sm text-blue-500 underline cursor-pointer"> Terms of service.</p>
              </div>

            </div>

          </div>

        </div>


        <div className="w-[40%] h-full bg-[#F5F5F5]">

          <div className="w-full mt-2 flex justify-around">

            <div className="w-3/5 flex justify-evenly">
              
              <img 
                className="m-4 w-2/5 p-1 border rounded-md bg-white"
                src="https://picsum.photos/1200/700"
              />

              <div className="flex flex-col mt-8">
                <p className="text-sm text-black"> Abstract MacBook </p>
                <p className="text-xs text-gray-400"> Color Blue</p>
              </div>

            </div>

            <div>
              <p className="text-sm text-black mt-8"> $900 Price</p>
            </div>

          </div>

          <div className="w-full mt-4 flex justify-around gap-36">
              <p className="text-sm text-black"> Subtotal </p>
              <p className="text-sm text-black font-semibold"> $900.00 </p>
          </div>

          <div className="w-full mt-4 flex justify-around gap-36">
              <p className="text-sm text-black"> Shipping </p>
              <p className="text-sm text-black"> $900.00 </p>
          </div>

          <div className="w-full mt-4 flex justify-around gap-36">
              <p className="text-sm text-black font-semibold"> Total </p>
              <p className="text-sm text-black font-semibold"> <span className="font-normal text-xs text-gray-500"> USD </span> $900.00 </p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Checkout