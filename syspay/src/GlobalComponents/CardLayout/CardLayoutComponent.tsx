import React from 'react';
import "./CardLayoutComponent.scss";
import ThemeHeading from '../ThemeHeading/ThemeHeading';

interface CardLayoutComponentProps {
  headingText: string,
  children: any,
  leftIcon: string,
  leftText: string,
  leftPrice: string,

}
const CardLayoutComponent: React.FC<CardLayoutComponentProps> = ({headingText,children,leftIcon,leftText,leftPrice}) => {
  return (
    <div className='themeCardLayout'>
        <ThemeHeading text={headingText} />
        {children}
        <div className='cardLayout--footer'>
            <div className='left cardLayoutbox'>
              <div className='text'>
                  <img/>
                  <p>{leftText}</p>
              </div>
              <h4>{leftPrice}</h4>
            </div>
            <hr className='sperator'></hr>
            <div className='right cardLayoutbox'>
              <div className='text'>
                  <img/>
                  <p>{leftText}</p>
              </div>
              <h4>{leftPrice}</h4>
            </div>
        </div>
    </div>
  )
}

export default CardLayoutComponent