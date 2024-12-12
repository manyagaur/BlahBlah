import React from 'react'
import frens from '../../assets/frens.jpg'
import user2_dp from '../../assets/user2.jpg'


function Posts() {
    const posts = [
        {
            id: 1,
            name: "Penelope Clearwaters",
            img: frens,
            dp: user2_dp,
            caption: "Me with my friends, sharing endless laughs and creating unforgettable memories. Here’s to moments that make life so much brighter. Let’s cherish every second of this amazing journey together! 🎉❤️"
        },
        {
            id: 2,
            name: "Penelope Clearwaters",
            img: frens,
            dp: user2_dp,
            caption: "Surrounded by the best company, every moment feels like a beautiful celebration of love, joy, and togetherness. These people are my anchor, my energy, and my greatest source of happiness. 💕✨"
        },
        {
            id: 3,
            name: "Penelope Clearwaters",
            img: frens,
            dp: user2_dp,
            caption: "There’s nothing quite like the magic of making memories with your closest friends. From heartfelt conversations to uncontrollable laughter, these are the moments that fill my heart with pure gratitude. 🌟"
        },
        {
            id: 4,
            name: "Penelope Clearwaters",
            img: frens,
            dp: user2_dp,
            caption: "When the squad comes together, it’s a symphony of fun, laughter, and love. Here’s to the nights we’ll never forget and the friends we’ll always treasure. Cheers to making life extraordinary! 🔥🌈"
        },
        {
            id: 5,
            name: "Penelope Clearwaters",
            img: frens,
            dp: user2_dp,
            caption: "True friendship is a gift that keeps on giving, filling our lives with moments of joy, support, and unconditional love. Here’s to celebrating this bond every single day! 🌸💖"
        },
        {
            id: 6,
            name: "Penelope Clearwaters",
            img: frens,
            dp: user2_dp,
            caption: "Pictures can capture the beauty of a moment, but the people in them give life its meaning. These friendships are my greatest treasure, and I’m so grateful for every shared smile and laugh. 🌟❤️"
        },
        {
            id: 7,
            name: "Penelope Clearwaters",
            img: frens,
            dp: user2_dp,
            caption: "In a world full of chaos, having people who bring you peace, laughter, and love is the ultimate blessing. These moments are proof that life is best lived surrounded by those who matter most. 🌈💫"
        }
    ];

return(
    <>
    <div className="posts">
    {posts.map(post =>

        (  
        <div className=" post w-[1000px] flex-1 border-r-[10px] relative">
            <div className='grid grid-cols-12'>
                <div className='col-span-8 flex gap-[20px]'>
                    <img  className = 'h-[40px] w-[40px] rounded-3xl' src = {post.dp}></img>
                    <span className="font-semibold ">{post.name}</span>
                </div>
                <div className='col-span-4'></div>
            </div>
            <br></br>
            <span className=" ml-[40px] flex items-center justify-center">{post.caption}</span>
            <img className="mx-10 mb-10 h-full object-cover rounded-lg border"  src={post.img} alt=""></img>
             
            </div>
        
    ))}
    </div>
    </>
)
}

export default Posts;