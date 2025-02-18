import React, { ReactComponentElement } from 'react';
import iconSlide from "../../Assets/Svgs/Cards/icon-slide.svg"
import "./CardLayoutComponent.scss";
import ThemeHeading from '../ThemeHeading/ThemeHeading';

interface CardLayoutComponentProps {
  headingText?: string,
  children?: any ,
  leftIcon?: any,
  leftText?: string,
  leftPrice?: string,
  rightIcon?: any,
  rightText?: string,
  rightPrice?: string,

}
const CardLayoutComponent: React.FC<CardLayoutComponentProps> = ({headingText="heading",children,leftIcon={iconSlide},leftText,leftPrice,rightIcon={iconSlide},rightText,rightPrice}) => {
  return (
    <div className='themeCardLayout'>
        <div className='cardLayout--header'>
          <ThemeHeading text={headingText} />
        </div>
        <div className='cardLayout--content'>
            {children}
        </div>
        <div className='cardLayout--footer'>
            <div className='left cardLayoutbox'>
            <img src={leftIcon} alt='left icon'/>
              <div className='text'>
                  <h4>{leftText}</h4>
                  <h6>{leftPrice}</h6>
              </div>
             
            </div>
            <hr className='sperator'></hr>
            <div className='right cardLayoutbox'>
            <img src={rightIcon} alt='right icon'/>
              <div className='text'>
                  <h4>{rightText}</h4>
                  <h6>{rightPrice}</h6>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default CardLayoutComponent