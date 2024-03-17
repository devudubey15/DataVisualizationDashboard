import axios from "axios";
import React, { useState, useEffect } from "react";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import ChartComponent from "../ChartComponent/ChartComponent";

import "./Dashboard.css";

const Dashboard = () => {
  
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regions, setRegions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const [selectedSector, setSelectedSector] = useState("");
  const [sectors, setSectors] = useState([]);

  const [selectedTopic, setSelectedTopic] = useState("");
  const [topics, setTopics] = useState([]);

  const [selectedPestle, setSelectedPestle] = useState("");
  const [pestle, setPestle] = useState([]);

  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [datum, setDatum] = useState([]);
  const [insights, setInsights] = useState([]);

 

  const handleRegionSelect = (value) => {
    setSelectedRegion(value);
    setSelectedCountry("");
  };

  const handleCountrySelect = (value) => {
    setSelectedCountry(value);
  };

  const handlePestleSelect = (value) => { setSelectedPestle(value); };

  const handleSectorSelect = (value) => {
    setSelectedSector(value);
  };

  const handleTopicSelect = (value) => {
    setSelectedTopic(value);
  };

  const applyFilters = async () => {
    setIsLoading(true);
    const response = await axios.get("http://localhost:4000/api/data");
    const data = response.data;
    setDatum(datum);
    console.log(
      "Applied filters:",
      selectedRegion,
      selectedCountry,
      selectedSector,
      selectedTopic
    );
    
    const chartData1 = data.filter(
      (e) =>
        e.region === selectedRegion &&
        e.country === selectedCountry &&
        e.sector === selectedSector &&
        e.topic === selectedTopic&&
        e.pestle === selectedPestle
    );
    console.log(chartData1);
    setInsights(chartData1);
    const demo = {
      labels: chartData1.map((item) => item.insight),
      datasets: [
        {
          label: "Intensity",
          data: chartData1.map((item)=>item.intensity),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Likelihood",
          data: chartData1.map((item)=>item.likelihood),
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Relevance",
          data: chartData1.map((item)=>item.relevance),
          backgroundColor: "rgba(67, 100, 235, 0.2)",
          borderColor: "rgba(67, 100, 235, 1)",
          borderWidth: 1,
        },
        // {
        //   label: "Year",
        //   data: chartData1.end_year - chartData1.start_year,
        //   backgroundColor: "rgba(75, 192, 192, 0.2)",
        //   borderColor: "rgba(75, 192, 192, 1)",
        //   borderWidth: 1,
        // },
      ],
    };
    setChartData(demo);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetch=async ()=>{
     
      const response = await axios.get("http://localhost:4000/api/data");
      const data = response.data;
      
      const uniqueRegions = [...new Set(data.map((item) => item.region))];
      setRegions(uniqueRegions);

      const uniqueCountries = [...new Set(data.map((item) => item.country))];
      setCountries(uniqueCountries);

      const uniqueSectors = [...new Set(data.map((item) => item.sector))];
      setSectors(uniqueSectors);

      const uniqueTopics = [...new Set(data.map((item) => item.topic))];
      setTopics(uniqueTopics);

      const uniquePestle = [...new Set(data.map((item) => item.pestle))];
      setPestle(uniquePestle);

      setDatum(data);
     


    }
    fetch();
  }, []);

  return (
    <div className="dashboard">
      <h1 >Dashboard</h1>
      <div className="filters">
        <DropdownFilter
          name="Regions"
          options={regions}
          selectedOption={selectedRegion}
          onSelect={handleRegionSelect}
        />
        <DropdownFilter
          name = "Countries"
          options={countries}
          selectedOption={selectedCountry}
          onSelect={handleCountrySelect}
        />
        <DropdownFilter
          name= "Sectors"
          options={sectors}
          selectedOption={selectedSector}
          onSelect={handleSectorSelect}
        />
        <DropdownFilter
          name="Topics"
          options={topics}
          selectedOption={selectedTopic}
          onSelect={handleTopicSelect}
        />
        <DropdownFilter
          name= "Pestle"
          options={pestle}
          selectedOption={selectedPestle}
          onSelect={handlePestleSelect}
        />
        <button onClick={applyFilters}>Apply Filters</button>
      </div>
      <div className="chart-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ChartComponent chartData={chartData} />
        )}
      </div>
      <div className="insights-container">
      

        <ul>
        <h2>Insights</h2>
          {insights.map((item) => (
            
            <li key={item._id}>
              
              <h3>{item.title}</h3>
              <p>Published: {item.published}</p>
              <p>Source: {item.source}</p>
              <p>Start Year: {item.start_year}</p>
              <p>End Year: {item.end_year}</p>
              <p>Impact: {item.impact}</p>
              <p>Added: {item.added}</p>
              <p>Pestle: {item.pestle}</p>
              <p>URL: <a href={item.url} target="_blank">{item.url}</a></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
