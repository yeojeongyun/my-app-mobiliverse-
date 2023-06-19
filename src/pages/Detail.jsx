import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const PROXY_URL = "http://localhost:3001/proxy";
const API_URL =
  "http://openapi.nfrdi.re.kr/openapi/service/OceanProblemService/getOceanproblemInfoServiceJellyfishOccurrenceSpot?ServiceKey=bNw8VK8ZV6saXPYRIuR22jUu%2BfuE2OeAaFN2icqov4cmgDP85r9vD6Xl7WI2QHTdRbVKYHyvigW0dnLGHmcgbw%3D%3D&numOfRows=3";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);

      const response = await axios.get(PROXY_URL, {
        params: {
          url: API_URL,
        },
      });

      setData(response.data.response.body.items.item);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div className="App">
      {data.map((item) => (
        <p key={item.jel_4Desc}>해파리 출현지역: {item.jel_4Desc}</p>
      ))}
    </div>
  );
}

export default App;
