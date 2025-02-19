import React from 'react'
import iconSales from  "../../../Assets/Svgs/Sales/icon-sales.svg";
import "./SalesCard.scss";

interface SalesCardProps {
    cardColor?: string,
    cardIcon?:any,
    cardIconBg?:string,
    cardText?: string,
    cardPrice?: string,
    cardPercentage?:string
}

const SalesCard: React.FC<SalesCardProps>= ({cardColor="#F9FAFB",cardIcon=iconSales,cardIconBg="#FA5A7D",cardPrice="$20",cardText="Total Sales",cardPercentage="+8%"}) => {
  return (
    <div className='salesCard' style={{backgroundColor:cardColor}}>
        <div className='salesCard--icon' style={{backgroundColor:cardIconBg}}>
            <img src={cardIcon} alt='card' />
        </div>
        <div className='salesCard--price'>
                {cardPrice}
        </div>
        <div className='salesCard--text'>
            {cardText}
        </div>
        <div className='salesCard--percent'>
            {cardPercentage} from yesterday
        </div>
    </div>
  )
}

export default SalesCard