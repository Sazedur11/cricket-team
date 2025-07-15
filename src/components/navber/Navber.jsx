
import logo from '../../assets/logo.png'
import { HiCurrencyDollar } from "react-icons/hi";

const Navber = () => {
    return (
        <div className='flex justify-between items-center my-6'>
            <img className='w-14 h-14' src={logo} alt="Logo" />
            <div>
                <ul className='flex gap-4 text-gray-500'>
                    <li>Home</li>
                    <li>Fixtures</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                    <div className='flex items-center text-black border-1 border-gray-300 rounded-xl px-2'>
                        <li className='font-bold'>0 Coin</li>
                        <span className='text-yellow-600'><HiCurrencyDollar></HiCurrencyDollar></span>
                    </div>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navber;