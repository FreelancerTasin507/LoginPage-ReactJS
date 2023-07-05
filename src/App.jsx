import "./App.css";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="container   max-w-[480px] w-[480px] p-[45px] pt-16 pb-16 border-2 border-bg border-shadows mt-[9%] mx-auto">
        <form action="#">
          <center>
            <b className="text-4xl ">Login</b>
          </center>
          <div className="mt-10">
            <div className="relative w-full mb-9">
              <input
                className=" input-field w-full h-full px-6 py-3 text-lg outline-none bg-transparent  rounded-3xl"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="relative w-full mb-9">
              <input
                className=" input-field w-full h-full px-6 py-3 text-lg outline-none bg-transparent  rounded-3xl"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="relative flex items-center gap-2 mb-9">
              <input
                className="h-full pl-4 text-lg outline-none bg-transparent "
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <span className="font-bold">Remember Me</span>
            </div>
            <div className="relative w-full mb-9">
              <input
                className="button w-full h-full pl-4 text-lg outline-none bg-transparent rounded-3xl px-2 py-2"
                type="button"
                value="Login"
              />
            </div>
            <div className="footer">
              <div className="social-media flex justify-between mx-10 mb-10">
                <FaFacebookF className="icons facebook rounded-3xl cursor-pointer h-[40px] w-[40px]"></FaFacebookF>
                <FaGoogle className="icons google rounded-3xl cursor-pointer h-[40px] w-[40px]"></FaGoogle>
                <FaInstagram className="icons instagram rounded-3xl cursor-pointer h-[40px] w-[40px]"></FaInstagram>
                <FaTwitter className="icons twitter rounded-3xl cursor-pointer h-[40px] w-[40px]"></FaTwitter>
              </div>
              <center>Forget Password ?</center>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
