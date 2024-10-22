import GoogleMapReact from "google-map-react";

import styles from "./Footer.module.css";

import Viber from "/src/assets/images/icons/socials/viber.svg";
import Instagram from "/src/assets/images/icons/socials/instagram.svg";

import GoogleMapMarker from "/src/assets/images/icons/marker.svg";

function Footer() {
  const defaultProps = {
    center: {
      lat: 52.511178301700035,
      lng: 13.404643397379552,
    },
    zoom: 18,
  };
  const Map = ({ text }) => (
    <div style={{ height: "100px" }}>
      <img src={GoogleMapMarker} width="40" />
      <strong style={{fontSize: "16px", color: "white"}}>{text}</strong>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <h3>Contact</h3>
      <div className={styles.cards}>
        <div>
            <h5>Phone</h5>
            <p>+49 30 915-88492</p>
        </div>
        <div>
            <h5>Socials</h5>
            <p>
                <a href="https://instagram.com" target="_blank"><img src={Instagram} /></a>
                <a href="https://viber.com" style={{marginLeft: "16px",}} target="_blank"><img src={Viber} /></a>
            </p>
        </div>
        <div>
            <h5>Address</h5>
            <p>Wallstraẞe 9-13, 10179 Berlin, Deutschland</p>
        </div>
        <div>
            <h5>Working Hours</h5>
            <p>24 hours a day</p>
        </div>
      </div>
      <div className={styles.map}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Map
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="ITCareerHub"
          />
        </GoogleMapReact>
      </div>
    </footer>
  );
}

export default Footer;
