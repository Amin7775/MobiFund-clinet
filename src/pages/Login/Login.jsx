import { useState } from "react";
import LoginHeading from "../../components/login/LoginHeading";

const Login = () => {
  //   const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const isPinValid = (pin) => {
    return pin.length === 5;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userEmailOrPhone = form.emailOrPhone.value;
    const pinNumber = form.pin.value;

    // check pin
    const validPin = isPinValid(pinNumber);
    setError(!validPin);

    // continue only if pin is valid 
    if (validPin) {
      console.log(userEmailOrPhone, pinNumber);
    }
  };
  return (
    <div className="min-h-screen bg-[#F4EDE8] pb-12">
      <div className=" min-h-[95vh] rounded-3xl overflow-hidden w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto   flex justify-center items-center pt-10">
        <div className=" w-full bg-white rounded-3xl ">
          <div className="max-w-[80%] py-14 mx-auto">
            <LoginHeading></LoginHeading>
            {/* form */}
            <section>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* email */}
                <div>
                  <label className="block text-base font-medium leading-6 text-gray-900 ">
                    Email Address / Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="emailOrPhone"
                      type="text"
                      required
                      placeholder="Enter Email/Phone"
                      className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>
                {/* pin */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-base font-medium leading-6 text-gray-900 "
                    >
                      Pin Number
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-gray-400 hover:text-custom_Dark dark:hover:text-slate-500"
                      >
                        Forgot pin?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="pin"
                      name="pin"
                      type="number"
                      placeholder="Enter 5 Digits Pin"
                      required
                      className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 "
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 mt-2 -mb-4 font-medium">
                      Pin must be exactly 5 digits.
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-bg-1 w-full  rounded-md py-2  font-semibold text-white shadow-sm hover:bg-bg-2 transition-all duration-300 ease-in-out mt-1"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
