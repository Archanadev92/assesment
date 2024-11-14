/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ApiDetails = () => {
  const { providerName } = useParams();
  const [apiDetails, setApiDetails] = useState<any>({});

  useEffect(() => {
    axios
      .get(`https://api.apis.guru/v2/amazonaws.com.json`)
      .then((response) => {
        setApiDetails(response.data.apis);
      });
  }, [providerName]);

  if (!apiDetails) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <div >
        <div style={styles.header}>
          <img
            src={apiDetails[providerName]?.info["x-logo"]["url"]}
            alt="logo"
            style={styles.logo}
          />
          <div style={styles.title}>
            {apiDetails[providerName]?.info?.title}
          </div>
        </div>
        <div style={styles.section}>
        <div style={styles.undersection}>
          <div style={styles.label}>Description</div>
          <div style={styles.text}>
            {apiDetails[providerName]?.externalDocs?.description}
          </div>
        </div>
        <div style={styles.undersection}>
          <div style={styles.label}>Swagger</div>
          <div style={styles.text}>{apiDetails[providerName]?.swaggerUrl}</div>
        </div>
        <div>
        </div>
          <div style={styles.label}>Contact</div>
          <div style={styles.text}>
            Email: {apiDetails[providerName]?.info?.contact?.email}
          </div>
          <div style={styles.text}>
            Name: {apiDetails[providerName]?.info?.contact.name}
          </div>
          <div style={styles.text}>
            Url: {apiDetails[providerName]?.info?.contact.url}
          </div>
        </div>
        <div style={styles.buttoncontainer}>
        <button style={styles.button}>Explore more APIs</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#2d5e7d",
    color: "#ffffff",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    width: "100vw",
    height: "100vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
   
    
  },
  logo: {
    height: "60px",
    width: "60px",
    marginRight: "10px",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  section: {
    marginTop:"30px",
    marginBottom: "30px",
    marginLeft: "250px",
    
  },
  undersection:{
    marginBottom:"50px"

  },
  label: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#4eaef2", // Matches button color in screenshot
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    
    
  },
  buttoncontainer:{
    marginLeft:"700px",
    marginTop:"150px"
  }
};

export default ApiDetails;
