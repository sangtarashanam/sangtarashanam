import {HiHome, HiAnnotation,HiBookOpen ,HiBriefcase,HiClipboardList ,HiColorSwatch} from "react-icons/hi";
function Sidbar (){
    return(
        <>
        <aside className=' bg-blue-700  text-white   h-screen  '>
            <div>
                <div className=" hidden  lg:flex  flex-col  items-center p-5">

                <img className=" h-36 w-36 rounded-full m-5" src={"./2.jpg"}/>
         

                <p>محمد مهدی سنگتراشان</p>
                              
                              </div>
                              


        <ul className=" text-3xl lg:text-sm  ">
            <li className="  hover:bg-white hover:text-black p-3 ">
                    <a className="flex flex-row " href="/#main"> 
                    <HiHome title="صفحه اصلی" /><samp className=" hidden hover:black lg:flex lg:mr-1">صفحه اصلی</samp> 
                    </a>
                
            </li>
            <li title="خدمات" className=" hover:bg-white hover:text-black  p-3 "><a className="flex flex-row " href="/#Services"> <HiColorSwatch/><samp className="hidden lg:flex mr-1">خدمات</samp> </a></li>
            <li title="نمونه کار" className=" hover:bg-white hover:text-black  p-3 "><a className="flex flex-row " href="/#Work-samples
                "><HiClipboardList/><samp className="hidden lg:flex mr-1">نمونه کار</samp> </a></li>
            <li title="رزومه" className=" hover:bg-white hover:text-black  p-3 "><a className="flex flex-row " href="/#Cv"> <HiBriefcase /><samp className="hidden lg:flex mr-1">رزومه</samp></a></li>
            <li title="بلاگ" className=" hover:bg-white hover:text-black  p-3 "><a className="flex flex-row " href="/#blog"> <HiBookOpen/><samp className="hidden lg:flex mr-1">بلاگ</samp> </a></li>
            <li title="تماس باما" className=" hover:bg-white hover:text-black  p-3 "><a className="flex flex-row " href="/#contact-us
                "> <HiAnnotation/><samp className=" hidden lg:flex mr-1">تماس با ما</samp></a></li>
        </ul>
            </div>
            




        </aside>
        </>
    )
}
export default Sidbar;