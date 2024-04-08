import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className=''>
            <img className=' mx-auto' src={logo} alt="Logo" />
            <p>Journalism Without Fear or Favour</p>
            <p className=' text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;