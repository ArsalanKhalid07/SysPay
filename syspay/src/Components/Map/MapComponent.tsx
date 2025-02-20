import React from 'react'
import WorldMap from "react-world-map";
import "./MapComponent.scss";

const MapComponent = () => {
  const [selected, onSelect] = React.useState('na');
  return (
    <div className='mapComponent'>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8683884.862372776!2d63.70814906429829!3d30.265978487838094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e1!3m2!1sen!2s!4v1739903800416!5m2!1sen!2s"  height="250"   loading="lazy" title='map' ></iframe> */}
        <WorldMap selected={ selected } onSelect={ onSelect } />
    </div>
  )
}

export default MapComponent