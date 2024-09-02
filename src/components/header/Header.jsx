import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex justify-between p-4 bg-blue-200 uppercase">
      <div className="text-blue-900 font-bold">Codes for tomorrow</div>
      <div className="flex gap-2 text-blue-900 ">
        <Link to="/">Home</Link>
        <Link to="about">About Us</Link>
        <Link to="contact">Contact Us</Link>
      </div>
      <div className=" font-bold text-blue-900">
        <Link to='login'>signup/login</Link>
      </div>
    </div>
  );
}

export default Header;
