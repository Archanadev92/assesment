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
      <div style={{ width: "500px", margin: "0 auto" }}>
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
          <div style={styles.label}>Description</div>
          <div style={styles.text}>
            {apiDetails[providerName]?.externalDocs?.description}
          </div>
        </div>
        <div style={styles.section}>
          <div style={styles.label}>Swagger</div>
          <div style={styles.text}>{apiDetails[providerName]?.swaggerUrl}</div>
        </div>
        <div style={styles.section}>
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
        <button style={styles.button}>Explore more APIs</button>
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
    marginBottom: "20px",
  },
  logo: {
    height: "50px",
    width: "50px",
    marginRight: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  section: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  text: {
    fontSize: "14px",
    marginBottom: "5px",
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
};

export default ApiDetails;
