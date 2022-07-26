import Button from "./Button";
import Services from "../components/Services";
import WorkSamples from "../components/WorkSamples";
import Cv from "./cv";

function Container() {
  return (
    <>
      <div id="main" className="flex flex-col  justify-center items-center">
        <div className=" 	  bg-my_bg_image  flex items-center justify-center h-screen w-full ">
          <div className=" flex flex-col justify-center items-center p-4">
            <img className=" h-52 w-52 rounded-full m-5" src={"./2.jpg"} />
            <p className=" text-3xl p-6">محمد مهدی سنگتراشان</p>
            <p className=" text-1xl p-7">
              محمد مهدی سنگتراشان هستم طراح سایت و علاقه مند به فرانتند اگر مایل
              به داشتن سایتی به روز و باکیفیت هستید در خدمت هستم
            </p>
            <div className=" flex flex-col sm:flex-row " >
              <a  href="/#contact-us">

              <Button className="mr-2 w-32" color="blue">
                تماس با من
              </Button>
              </a>
              <a  target="blank" href="https://www.instagram.com/mahdi_sangtarashan/">

              <Button  className="mr-2 w-32" color="blue">
                پیج کاری من
              </Button>
              </a>
            </div>
          </div>
        </div>
        <div id="Services" className=" h-screen w-full flex-1 mt-24 ">
          <Services />
        </div>
        <div id="Work-samples" className="h-screen  w-full flex-1 mt-24">
        
          <WorkSamples />
        </div>
        <div
          id="Cv"
          className="flex items-center justify-center mt-24"
        >
          <div></div>
          <Cv/>
        </div>
        <div
          id="blog"
          className=" flex items-center justify-center h-screen w-full bg-sky-500"
        >
          <samp>بلاگ</samp>
        </div>
        <div
          id="contact-us"
          className=" flex items-center justify-center h-screen w-full bg-sky-600"
        >
          <samp> تماس باما</samp>
        </div>
      </div>
    </>
  );
}
export default Container;
