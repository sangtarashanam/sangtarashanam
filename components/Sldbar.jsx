function Sidbar (){
    return(
        <>
        <aside className='bg-blue-700  text-white   h-screen fixed '>
            <div>
                <div className=" flex  flex-col  items-center p-5">

                <img className=" h-36 w-36 rounded-full m-5" src={"./2.jpg"}/>
                <p>محمد مهدی سنگتراشان</p>
                </div>


        <ul>
            <li className="  p-3 ">صفحه اصلی</li>
            <li className="  p-3 ">خدمات</li>
            <li className="  p-3 ">نمونه کار</li>
            <li className="  p-3 ">رزومه</li>
            <li className="  p-3 ">بلاگ</li>
            <li className="  p-3 ">تماس با ما</li>
        </ul>
            </div>
        </aside>
        </>
    )
}
export default Sidbar;