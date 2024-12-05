import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { DarkModeOutlined, EmailOutlined, GridViewOutlined, NotificationsOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import user from '../../assets/user.jpg'




function Navbar(){
    return(
        <>
        <div className='navbar flex align-middle justify-items-center pl-[10px] pt-[12px] pr-[12px] h-[50px]'>
            <div className='left flex align-middle gap-[30px]'>
                <span className='text-blue-950 font-bold font-rubikRegular'>BlahBlah</span>
                <HomeRoundedIcon/>
                <DarkModeOutlined/>
                <GridViewOutlined/>
                <div className='flex align-middle gap-[10px] pb-[8px] search '>
                    <SearchRoundedIcon/>
                    <input className='border rounded-[3px] border-solid border-gray-500 px-[5px] w-[300px]' type ="text" placeholder='Search....'/>
                </div>
            </div>
            <div className='right flex align-middle gap-[20px]'>
                <PersonOutlineOutlined/>
                <EmailOutlined/>
                <NotificationsOutlined/>
                <div className='user flex align-middle gap-[10px] text-500'>
                    <img className='w-[30px] h-[30px] rounded-xl object-cover' src={user} alt = 'User image'></img>
                    <span>Manya Gaur</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar; 