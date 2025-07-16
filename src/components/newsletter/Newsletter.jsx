import framNWS from '../../assets/FrameNWS.png'
import frame11 from '../../assets/Frame 11.png'

const Newsletter = () => {
    return (
        <div className="w-3/5 mx-auto p-4 -mt-80 border-2 border-gray-300 rounded-xl">
            <div className=' bg-cover bg-center p-10 rounded-xl' style={{ backgroundImage: `url(${framNWS})` }}>
                <h2 className='text-2xl text-black font-bold text-center'>Subcribe to our Newsletter</h2>
                <p className='text-gray-400 text-center my-4'>Get the latest updates and news right in your inbox!</p>
                <div className='flex justify-center'>
                    <input className='text-gray-400 border-1 border-gray-300 py-2 px-4 rounded-sm' type="email" placeholder="Enter your email!" id="" />
                    <button className='bg-center bg-cover py-2 px-4 ml-4 rounded-md text-black font-semibold'
                        style={{backgroundImage: `url(${frame11})`}}
                    ><a href="#">Subcribe</a></button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;