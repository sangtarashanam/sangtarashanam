import Button from "./Button";
function Container (){
    return(
        <>
        

        <div id="main" className="flex flex-col  justify-center items-center">
            <div className=" 	  bg-my_bg_image  flex items-center justify-center h-screen w-full ">
               <div className=" flex flex-col justify-center items-center p-4">

            <img className=" h-52 w-52 rounded-full m-5" src={"./2.jpg"}/>
            <p className=" text-3xl p-6">محمد مهدی سنگتراشان</p>
            <p className=" text-1xl">محمد مهدی سنگتراشان هستم طراح سایت و علاقه مند به فرانتند 
                اگر مایل به داشتن سایتی به روز و باکیفیت هستید در خدمت هستم
            </p>
            <div  className=" p-8">

            <Button className="mr-2 w-32" color="blue">
                تماس با من
              </Button>
              <Button className="mr-2 w-32" color="blue">
                پیج کاری من
              </Button>
            </div>

                
               </div>
                   </div>
            <div id="Services" className=" flex items-center justify-center h-screen w-full  ">
                

                <samp>خدمات
                    </samp>
                    </div>
            <div id="Work-samples" className=" flex items-center justify-center h-screen w-full ">
                

                <samp> نمونه کار
                    </samp>
                   </div>
            <div id="Cv" className=" flex items-center justify-center h-screen w-full bg-sky-400">
                

                <samp>رزومه
                    </samp>
                    </div>
            <div id="blog" className=" flex items-center justify-center h-screen w-full bg-sky-500">
                

                <samp>
                بلاگ
                    </samp>
                    </div>
            <div id="contact-us" className=" flex items-center justify-center h-screen w-full bg-sky-600">
                

                <samp> تماس باما
                    </samp>
                   </div>
        </div>
        </>
    )
}
export default Container;