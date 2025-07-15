
import headerBG from '../../assets/header_bg.png';
import banner from '../../assets/banner-main.png'

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-cover bg-center rounded-xl p-10 "
            style={{ backgroundImage: `url(${headerBG})` }}>
            <img className='' src={banner} alt="Banner image" />
            <h1 className='text-3xl font-bold text-white my-3'>Assemble Your Ultimate Dream 11 Football Team</h1>
            <p className='text-gray-400 text-xl'>Beyond Boundaries Beyond Limits</p>
            <button className='bg-lime-400 rounded-sm font-bold px-2 py-1 mt-4'>Claim Free Credit</button>
        </div>
    );
};

export default Header;