import GoogleMapReact from "google-map-react";

import styles from "./Footer.module.css";

function Footer() {
  const defaultProps = {
    center: {
      lat: 52.511178301700035,
      lng: 13.404643397379552,
    },
    zoom: 18,
  };
  const AnyReactComponent = ({ text }) => (
    <div style={{ height: "100px" }}>{text}</div>
  );

  return (
    <footer className={styles.footer}>
      <h3>Contact</h3>
      <div className={styles.map}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
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
