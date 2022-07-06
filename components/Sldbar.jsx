function Sidbar (){
    return(
        <>
        <aside className=' bg-blue-700  text-white   h-screen  '>
            <div>
                <div className=" flex  flex-col  items-center p-5">

                <img className=" h-36 w-36 rounded-full m-5" src={"./2.jpg"}/>
                <p>محمد مهدی سنگتراشان</p>
                </div>


        <ul>
            <li className="  p-3 "><a href="/#main">صفحه اصلی</a></li>
            <li className="  p-3 "><a href="/#Services">خدمات</a></li>
            <li className="  p-3 "><a href="/#Work-samples
                ">نمونه کار</a></li>
            <li className="  p-3 "><a href="/#Cv">رزومه</a></li>
            <li className="  p-3 "><a href="/#blog">بلاگ</a></li>
            <li className="  p-3 "><a href="/#contact-us
                ">تماس با ما</a></li>
        </ul>
            </div>
        </aside>
        </>
    )
}
export default Sidbar;