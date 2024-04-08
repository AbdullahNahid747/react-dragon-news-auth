import { FaGoogle, FaGithub,  FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>

      {/* 1st Div */}

      <div className=" p-4 space-y-3 mb-6">
        <h2 className=" text-3xl items-start">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      {/* 2nd Div */}

      <div className=" p-4 mb-6">
        <h2 className=" text-3xl mb-4">Find Us On</h2>
        <a className=" p-4 flex text-lg items-center border rounded-t-lg">
            <FaFacebookF className=" mr-3"></FaFacebookF>
            <span>Facebook</span>
        </a>
        <a className=" p-4 flex text-lg items-center border-x">
            <FaTwitter className=" mr-3"></FaTwitter>
            <span>Twitter</span>
        </a>
        <a className=" p-4 flex text-lg items-center border rounded-b-lg">
            <FaInstagram className=" mr-3"></ FaInstagram>
            <span>Instagram</span>
        </a>
      </div>

      {/* 3rd Div */}

      <div className=" p-4 space-y-3 mb-6">
      <h2 className=" text-3xl mb-4">Q Zone</h2>
      <img src={qZone1} alt="" />
      <img src={qZone2} alt="" />
      <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
