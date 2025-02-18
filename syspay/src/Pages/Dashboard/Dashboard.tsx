import { Grid } from "@mui/material";
import exportIcon from "../../Assets/Svgs/icon-export.svg";
import ThemeHeading from "../../GlobalComponents/ThemeHeading/ThemeHeading";
import SalesCard from "../../GlobalComponents/ThemeHeading/SalesCard/SalesCard";
import iconSales from "../../Assets/Svgs/Sales/icon-sales.svg";
import VisitorInsightsCard from "../../Components/VisitorInsights/VisitorInsightsCard";
import TotalRevenueCard from "../../Components/TotalRevenue/TotalRevenueCard";
import CardLayoutComponent from "../../GlobalComponents/CardLayout/CardLayoutComponent";
import iconSlide from "../../Assets/Svgs/Cards/icon-slide.svg";
import LineGraph  from "../../Components/LinesGraph/LineGraphComponent";
import "./Dashboard.scss";


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
      cardIcon:iconSales,
      cardIconBg:"#FF947A",
      cardText:"Total Order",
      cardPrice:"300",
      cardPercentage:"+5%"
    },
    {
      cardColor:"#DCFCE7",
      cardIcon:iconSales,
      cardIconBg:"#3CD856",
      cardText:"Product Sold",
      cardPrice:"5",
      cardPercentage:"+1.2%"
    },
    {
      cardColor:"#F3E8FF",
      cardIcon:iconSales,
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
        <Grid item xs={8}>
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
        <Grid item xs={4}>
            <div className="visitorInsights">
              <ThemeHeading text="Visitor Insights" />
              <VisitorInsightsCard />
              <div className="visitorLable">
                  <p><span className="loyal"></span>Loyal Customers</p>
                  <p><span className="new"></span>New Customers</p>

              </div>
            </div>
        </Grid>
      </Grid>
      </section>
      <section className="section_2">
        <Grid container spacing={3}>
              <Grid item xs={6}>
                <div className="totalRevenue"> 
                  <ThemeHeading text="Total Revenue" />
                  <TotalRevenueCard />
                  <div className="totalRevenueLable">
                  <p><span className="loyal"></span>Online Sales</p>
                  <p><span className="new"></span>Offline Sales</p>
              </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="customerSatisfaction">
                    <CardLayoutComponent 
                      headingText="Customer Satisfaction"
                      leftIcon={iconSlide}
                      leftText="Last Month"
                      leftPrice="$3,004"
                      rightPrice="$4,504"
                      rightText="This Month"
                      rightIcon={iconSlide}
                     >
                      <LineGraph />
                     </CardLayoutComponent>
                </div>
              </Grid>
              <Grid item xs={3}>
                
              </Grid>
        </Grid>
      
      </section>
    </div>
  )
}

export default Dashboard