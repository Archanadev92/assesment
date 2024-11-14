import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Sidebar.css";

const Sidebar = () => {
  const [providers, setProviders] = useState<string[]>([]);
  const [providersDetails, setProvidersDetails] = useState<any>({});
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.apis.guru/v2/amazonaws.com.json")
      .then((response) => {
        setProviders(Object.keys(response.data.apis));
        setProvidersDetails(response.data.apis);
      })
      .catch((error) => console.error("Error fetching providers:", error));
  }, []);

  const handleProviderClick = (provider: string) => {
    navigate(`/details/${provider}`);
  };

  const toggleAccordion = (provider: string) => {
    setOpenAccordion(openAccordion === provider ? null : provider);
  };
  console.log("check response ", providersDetails);

  return (
    <div className="sidebar-wrapper">
      <h2>Select Provider</h2>
      <ul className="provider-list">
        {providers.map((provider: string) => (
          <li
            key={provider}
            className={`provider-item ${openAccordion === provider ? "open" : ""}`}
            onClick={() => toggleAccordion(provider)}
          >
            <div>
              <div className="provider-header">{provider}</div>
              {openAccordion === provider && (
                <div className="provider-content">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "10px",
                    }}
                    onClick={() => handleProviderClick(provider)}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <img
                        src={providersDetails[provider]?.info["x-logo"]["url"]}
                        alt="logo"
                        height="20px"
                        width="20px"
                      />
                    </div>
                    <div>
                      {providersDetails[provider]?.externalDocs?.description}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
