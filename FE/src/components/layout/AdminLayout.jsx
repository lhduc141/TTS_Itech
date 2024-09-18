import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../images/utech_logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  fieldListThunk,
  getAboutUsPost,
  getCarousel,
  getCommentList,
  getCustomers,
  getInformation,
  getTeamMembers,
  getWhyUsPost,
} from "../../redux/userReducer/userThunk";
import { logoutAction } from "../../redux/adminReducer/adminReducer";
import { storage } from "../../services/storage";

const AdminLayout = () => {
  const token = useSelector((state) => state.adminReducer.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    } else {
      dispatch(fieldListThunk());
      dispatch(getWhyUsPost());
      dispatch(getAboutUsPost());
      dispatch(getCommentList());
      dispatch(getCarousel());
      dispatch(getTeamMembers());
      dispatch(getCustomers());
      dispatch(getInformation(2));
    }
  }, [dispatch, token, navigate]);

  // NavItem for customer
  const NavItemCustomer = [
    { name: "Company Information", link: "/admin/company-information" },
    { name: "Carousel", link: "/admin/carousel" },
    { name: "Feedback", link: "/admin/feedback" },
    { name: "Post", link: "/admin/post" },
    { name: "Customer", link: "/admin/customer" },
    { name: "Members", link: "/admin/member" },
    { name: "Field", link: "/admin/field" },
    { name: "Logout", link: "/auth/sign-in" },
  ];

  // Access the current location for highlighting active links
  const location = useLocation();

  const handleLogoutClick = () => {
    storage.deleteToken();
    dispatch(logoutAction());
  };

  return (
    <div className="flex h-screen w-full items-start justify-between">
      <div className="w-1/5 bg-[#021a51] h-full text-white flex flex-col justify-between">
        {/* Image and navigation items */}
        <div className="flex flex-col items-center">
          <div className="bg-white">
            <img src={logo} className="w-[80%] mx-auto my-6" alt="logo" />
          </div>
          <div className="w-full">
            {NavItemCustomer.slice(0, -1).map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`block w-full space-x-4 p-4 ${
                  location.pathname === item.link
                    ? "no-hover text-black bg-[#FFFFFF]"
                    : "text-offwhite"
                }`}
                style={{
                  transition: "ease-in-out 0.3s",
                  boxShadow:
                    location.pathname === item.link
                      ? "inset 0px 5px 30px 0px rgba(0, 0, 0, 0.35)"
                      : "none", // No shadow when it's not the active link
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Logout item */}
        <div className="w-full">
          <Link
            to="/auth/sign-in"
            onClick={handleLogoutClick}
            className="block w-full space-x-4 p-4 text-offwhite hover:text-black hover:bg-[#FFFFFF]"
            style={{ transition: "ease-in-out 0.3s" }}
          >
            Logout
          </Link>
        </div>
      </div>

      {/* This is where the child routes will be rendered */}
      <div className="w-full h-full bg-slate-200">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
