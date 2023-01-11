import { BsShieldFillCheck } from "react-icons/bs";
import {BiSearchAlt2} from "react-icons/bi";
import{RiHeart2Fill} from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center mt-5 ${color}`}>
      {icon}
    </div>
      <div className="ml-5 flex flex-col flex-1 ">
            <h1 className="text-white mt-2 text-lg">{title}</h1>
            <p className="text-white mt-2 text-sm md:w-9/12"> {subtitle}</p>
      </div>
    </div>
);



const Services = () => (
    <div className="flex w-full flex-col md:flex-row justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col md:justify-start md:items-start justify-center" >
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            Services that we
            <br />
            continue to improve
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>
  
        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security gurantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="We guarantee the security of your assets"
          />
          <ServiceCard
            color="bg-[#8945f8]"
            title="Best Exchange Rate"
            icon={<BiSearchAlt2 fontSize={21} className="text-white" />}
            subtitle="We guarantee the security of your assets"
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fast Transaction"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="We guarantee the security of your assets"
          />
         
        </div>
      </div>
    </div>
  );
  
export default Services;