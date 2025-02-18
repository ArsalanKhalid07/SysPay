import { Link } from "react-router";
import Logo  from "../../Assets/Svgs/logo.svg";
import iconDashboard from "../../Assets/Svgs/icon-dashboard.svg";
import iconLeader from "../../Assets/Svgs/icon-leader.svg";
import iconOrder from "../../Assets/Svgs/icon-order.svg";
import iconProduct from "../../Assets/Svgs/icon-product.svg";
import iconSales from "../../Assets/Svgs/icon-sales.svg";
import iconMessage from "../../Assets/Svgs/icon-message.svg";
import iconSetting from "../../Assets/Svgs/icon-setting.svg";
import iconLogout from "../../Assets/Svgs/icon-logout.svg";
import iconPro from "../../Assets/Svgs/icon-pro.svg";
import iconGlobal from "../../Assets/Svgs/icon-global.svg";
import { useLocation } from "react-router";
import "./Navigation.scss";

 const Navigation = () => {

    const list = [
        {
            icon:iconDashboard,
            text:"Dashboard",
            link:"/"
        },
        {
            icon:iconLeader,
            text:"Leaderboard",
            link:"/leaderboard"
        },
        {
            icon:iconOrder,
            text:"order",
            link:"/order"
        },
        {
            icon:iconProduct,
            text:"Products",
            link:"/products"
        },
        {
            icon:iconSales,
            text:"Sales Report",
            link:"/sales"
        },
        {
            icon:iconMessage,
            text:"Messages",
            link:"/message"
        },
        {
            icon:iconSetting,
            text:"Settings",
            link:"/setting"
        },
        {
            icon:iconLogout,
            text:"Sign Out",
            link:"/logout"
        },

    ]
    const navigate = useLocation();
    console.log("idid",navigate)
  return (
    <div className='themeNavigation'>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <nav>
            {list.map((val,i) => {
                return (<Link to={val.link} className={`list  ${navigate.pathname === val.link ? "list--Active" : "list--Inactive"}`}>
                    <span className="content">
                        <img src={val.icon} alt="dashboard" />
                        <span>{val.text}</span>
                    </span>
                </Link>)
            })}
        </nav>
        <div className="proFeatures">
            <img id="pro-bg" src={iconPro} alt="pro" />
            <div className="text-pro">
                <div className="img">
                  <img  src={iconGlobal} alt="gloabl"/>
                </div>
                <p>Get access to all <span>features</span></p>
                <button>Get Pro</button>
            </div>
        </div>
    </div>
  )
}

export default Navigation;