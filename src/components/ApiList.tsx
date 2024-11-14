// ApiList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ApiList = () => {
  const { providerName } = useParams();
  const [apis, setApis] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`https://api.apis.guru/v2/${providerName}.json`)
      .then((response) => {
        setApis(Object.keys(response.data.apis));
      });
  }, [providerName]);

  return (
    <div>
      <h2>APIs for {providerName}</h2>
      <ul>
        {apis.map((api: any) => (
          <li key={api}>
            <Link to={`/details/${providerName}/${api}`}>{api}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiList;
