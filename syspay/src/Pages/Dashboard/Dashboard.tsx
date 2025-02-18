import { Grid } from "@mui/material";
import exportIcon from "../../Assets/Svgs/icon-export.svg";
import ThemeHeading from "../../GlobalComponents/ThemeHeading/ThemeHeading";
import SalesCard from "../../GlobalComponents/ThemeHeading/SalesCard/SalesCard";
import iconSales from "../../Assets/Svgs/Sales/icon-sales.svg";
import VisitorInsightsCard from "../../Components/VisitorInsights/VisitorInsightsCard";
import TotalRevenueCard from "../../Components/TotalRevenue/TotalRevenueCard";
import CardLayoutComponent from "../../GlobalComponents/CardLayout/CardLayoutComponent";
import iconSlide from "../../Assets/Svgs/Cards/icon-slide.svg";
import iconSlideTwo from "../../Assets/Svgs/Cards/icon-slide-2.svg";
import TargetRealityGraph from "../../Components/TargetReality/TargetRealityGraph";
import LineGraph  from "../../Components/LinesGraph/LineGraphComponent";
import iconReal from "../../Assets/Svgs/Cards/icon-real.svg";
import iconTarget from "../../Assets/Svgs/Cards/icon-target.svg";
import TopProductComponent from "../../Components/TopProduct/TopProductComponent";
import MapComponent from "../../Components/Map/MapComponent";
import iconDotBlue from "../../Assets/Svgs/Cards/icon-dot-blue.svg";
import iconDotGreen from "../../Assets/Svgs/Cards/icon-dot-green.svg";
import iconOrders from "../../Assets/Svgs/Cards/icon-orders.svg";
import iconPin from "../../Assets/Svgs/Cards/icon-pin.svg";
import iconUser from "../../Assets/Svgs/Cards/icon-user.svg";
import "./Dashboard.scss";
import ServiceLevelComponent from "../../Components/ServiveLevel/ServiceLevelComponent";


const Dashboard = () => {

  const cardList = [
    {
      cardColor:"#FFE2E5",
      cardIcon:iconSales,
      cardIconBg:"#FA5A7D",
      cardText:"Total Sales",
      cardPrice:"$1k",
      cardPercentage:"+8%"
    },
    {
      cardColor:"#FFF4DE",
      cardIcon:iconOrders,
      cardIconBg:"#FF947A",
      cardText:"Total Order",
      cardPrice:"300",
      cardPercentage:"+5%"
    },
    {
      cardColor:"#DCFCE7",
      cardIcon:iconPin,
      cardIconBg:"#3CD856",
      cardText:"Product Sold",
      cardPrice:"5",
      cardPercentage:"+1.2%"
    },
    {
      cardColor:"#F3E8FF",
      cardIcon:iconUser,
      cardIconBg:"#BF83FF",
      cardText:"New Customers",
      cardPrice:"8",
      cardPercentage:"0.5%"
    }
  ]
  return (
    <div className="dashboardPage">
      <section className="section_1">
      <Grid container spacing={3}>
        <Grid item  xs={12} lg={12} xl={7}>
            <div className="sales">
                <div className="sales-content">
                    <div>
                        <ThemeHeading text="Today’s Sales" />
                        <h4>Sales Summery</h4>
                    </div>
                    <button>
                      <img src={exportIcon} alt="export"/>
                      Export
                    </button>
                </div>
                <div className="sales-cards">
                  {
                    cardList.map((val,i)=>{
                      return (
                          <div className="card-item">
                            <SalesCard 
                                cardColor={val.cardColor}
                                cardIcon={val.cardIcon}
                                cardIconBg={val.cardIconBg}
                                cardText={val.cardText}
                                cardPrice={val.cardPrice}
                                cardPercentage={val.cardPercentage}
                             />
                          </div>
                      )
                    })
                  }
                   
                </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={12} xl={5}>
            <div className="visitorInsights">
              <ThemeHeading text="Visitor Insights" />
              <VisitorInsightsCard />
              <div className="visitorLable">
                  <p><span className="loyal"></span>Loyal Customers</p>
                  <p><span className="new"></span>New Customers</p>
                  <p><span className="unique"></span>Unique Customers</p>

              </div>
            </div>
        </Grid>
      </Grid>
      </section>
      <section className="section_2">
        <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={6} xl={5}>
                <div className="totalRevenue"> 
                  <ThemeHeading text="Total Revenue" />
                  <TotalRevenueCard />
                  <div className="totalRevenueLable">
                  <p><span className="loyal"></span>Online Sales</p>
                  <p><span className="new"></span>Offline Sales</p>
              </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={6} xl={4}>
                <div className="customerSatisfaction">
                    <CardLayoutComponent 
                      headingText="Customer Satisfaction"
                      leftIcon={iconSlide}
                      leftText="Last Month"
                      leftPrice="$3,004"
                      rightPrice="$4,504"
                      rightText="This Month"
                      rightIcon={iconSlideTwo}
                     >
                      <LineGraph />
                     </CardLayoutComponent>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={12} xl={3}>
                  <div className="targetReality">
                      <ThemeHeading text="Target vs Reality" />
                      <TargetRealityGraph />
                      <div className="targetRealityContent TRC--1">
                          <div className="icon">
                              <img src={iconReal} alt="reality" />
                          </div>
                          <div className="text">
                              <h4>Reality Sales</h4>
                              <h6>Global</h6>
                          </div>
                          <div className="ratio">
                              8.823
                          </div>
                      </div>
                      <div className="targetRealityContent TRC--2">
                          <div className="icon">
                            <img src={iconTarget} alt="target" />
                          </div>
                          <div className="text">
                              <h4>Target Sales</h4>
                              <h6>Commercial</h6>
                          </div>
                          <div className="ratio">
                               12.122
                          </div>
                      </div>
                  </div>
              </Grid>
        </Grid>
      
      </section>
      <section className="section_3">
          <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={6} xl={5}>
                    <div className="topProductBox">
                        <ThemeHeading text="Top Products" />
                        <TopProductComponent />
                    </div>
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={4}>
                    <div className="mappingCountry">
                      <ThemeHeading text="Sales Mapping by Country" />
                      <MapComponent />
                    </div>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={3}>
                    <div className="volumeServices">
                      <CardLayoutComponent 
                          headingText="Volume vs Service Level"
                          leftIcon={iconDotBlue}
                          leftText="Volume"
                          leftPrice="1,135"
                          rightPrice="635"
                          rightText="Services"
                          rightIcon={iconDotGreen}
                      >
                          <ServiceLevelComponent />
                      </CardLayoutComponent>
                    </div>
                </Grid>
          </Grid> 
      </section>
    </div>
  )
}

export default Dashboard