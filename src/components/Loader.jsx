import {loader} from "../assets";

const Loader = ({title}) => (
  <div className="flex flex-col w-full items-center justify-center">
    <img src={loader} alt="Loading..." className="w-32 h-32 object-contain"/>
    <h1 className="font-bold text-white text-2xl mt-2">{title || "Loading..."}</h1>
  </div>
);

export default Loader;
