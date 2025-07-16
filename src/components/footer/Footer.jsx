import footerLogo from '../../assets/logo-footer.png'
import frame11 from '../../assets/Frame 11.png'

const Footer = () => {
    return (
        <div className='w-4/5 mx-auto mt-4'>
            <img className='my-10 mx-auto block' src={footerLogo} alt="Footer Logo" />
            <div className='grid md:grid-cols-3 justify-between'>
                <div>
                    <h3 className='text-white font-semibold'>About</h3>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Vitae, qui molestiae?
                    </p>
                </div>
                <div>
                    <h3 className='text-white font-semibold'>Quiks Links</h3>
                    <li className='text-gray-400'><a href="#">Home</a></li>
                    <li className='text-gray-400'><a href="#">About</a></li>
                    <li className='text-gray-400'><a href="#">Services</a></li>
                    <li className='text-gray-400'><a href="#">Contact</a></li>
                </div>
                <div >
                    <h3 className='text-white font-bold '>Subcribe</h3>
                    <p className='text-gray-400 '>Get the latest updates and news right in your inbox!</p>
                    <div className='flex mt-2'>
                        <input className='text-gray-400 bg-white border-1 border-gray-300  py-2 px-4 rounded-s-sm' type="email" placeholder="Enter your email!" id="" />
                        <button className='bg-center bg-cover py-2 px-4 rounded-r-md text-black font-semibold'
                        style={{backgroundImage: `url(${frame11})`}}
                        ><a href="#">Subcribe</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;