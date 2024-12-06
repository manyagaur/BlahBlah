import userImg from '../../assets/user.jpg';
import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';

function Leftbar(){
    return(
        <>
        <div className="leftbar p-[12px]"> 
            <div className="container p-[20px]">
                <div className="menu flex flex-col gap-[20px]">
                    <div className="user flex items-center gap-[12px]">
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover' 
                        src={userImg} 
                        alt="User image">
                        </img>
                        <span>Manya Gaur</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Friends} alt = ''></img>
                        <span>Friends</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Groups} alt = ''></img>
                        <span>Groups</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Market} alt = ''></img>
                        <span>Marketplace</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Watch} alt = ''></img>
                        <span>Watch</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Memories} alt = ''></img>
                        <span>Memories</span>
                    </div>
                </div>
                <div className="menu flex flex-col gap-[20px]">
                    <span>Your shortcuts</span>
                    <div className="user flex items-center gap-[12px]">
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover' 
                        src={userImg} 
                        alt="User image">
                        </img>
                        <span>Manya Gaur</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Friends} alt = ''></img>
                        <span>Friends</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Groups} alt = ''></img>
                        <span>Groups</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Market} alt = ''></img>
                        <span>Marketplace</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Watch} alt = ''></img>
                        <span>Watch</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Memories} alt = ''></img>
                        <span>Memories</span>
                    </div>
                </div>
                <div className="menu flex flex-col gap-[20px]">
                    <span>Others</span>
                    <div className="user flex items-center gap-[12px]">
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover' 
                        src={userImg} 
                        alt="User image">
                        </img>
                        <span>Manya Gaur</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Friends} alt = ''></img>
                        <span>Friends</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Groups} alt = ''></img>
                        <span>Groups</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Market} alt = ''></img>
                        <span>Marketplace</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Watch} alt = ''></img>
                        <span>Watch</span>
                    </div>
                    <div className='item flex items-center gap-[12px]'>
                        <img 
                        className='w-[30px] h-[30px] rounded-xl object-cover'
                        src={Memories} alt = ''></img>
                        <span>Memories</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Leftbar;