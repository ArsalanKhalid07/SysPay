import React from 'react';
import "./ThemeHeading.scss";


interface ThemeHeadingProps {
    text: string;
  }
  
const ThemeHeading: React.FC<ThemeHeadingProps> = ({text}) => {
  return (
    <div className='theme-heading'>
        {text}
    </div>
  )
}

export default ThemeHeading