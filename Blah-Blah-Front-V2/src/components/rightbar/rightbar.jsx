import './rightbar.css'
import dp from '../../assets/dp.jpg'

function Rightbar(){
    return(
        <>
        <div className="rightbar overflow-scroll">
            <div className="container p-[20px]">
                <div className="rightbar-box">
                    <span className='text-gray-400'>Suggestions For You</span>
                        <div className="user flex items-center justify-between mx-[20px]">
                            <div className="userInfo flex items-center gap-[20px]">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <span className='text-gray-400'>Luna Lovegood</span>
                            </div>
                            <div className="buttons flex items-center gap-[10px] ">
                                <button className='p-[5px] bg-blue-500 cursor-pointer'>Follow</button>
                                <button className='p-[5px] bg-red-500 cursor-pointer'>Dismiss</button>
                            </div>
                        </div>
                        <div className="user flex items-center justify-between mx-[20px]">
                            <div className="userInfo flex items-center gap-[20px]">
                                <img className='w-[40px] h-[40px] rounded-3xl object-cover'
                                src={dp}></img>
                                    <span className='text-gray-400'>Luna Lovegood</span>
                            </div>
                            <div className="buttons flex items-center gap-[10px] ">
                                <button className='p-[5px] bg-blue-500 cursor-pointer'>Follow</button>
                                <button className='p-[5px] bg-red-500 cursor-pointer'>Dismiss</button>
                            </div>
                        </div>
                </div> 
            </div>
        </div>
        </>
    )
}

export default Rightbar;