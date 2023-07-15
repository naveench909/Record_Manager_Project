import React, { useEffect } from "react";
import { useState } from "react";
import Sidepane from "./Sidepane";
import Toppane from "./Toppane";
import "./App.css";
import TableSection from "./TableView/TableSection";
import axios from "axios";
function App() {
  const [selectedDivisions, setSelectedDivisions] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const [backendResponse, setBackendResponse] = useState(null);

  // const handleOptionChange = (option) => {
  //   setSelectedOption(option);

  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "https://api.npoint.io/22a4849cb57b3342441f"
        );
        setBackendResponse(response.data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {backendResponse !== null && (
        <div className="app-container">
          <div className="left-sidebar">
            <Sidepane
              filterOptionsArray={backendResponse.Filter}
              selectedDivisions={selectedDivisions}
              setSelectedDivisions={setSelectedDivisions}
            />
          </div>

          <div className="main-container">
            <div className="top-section">
              <Toppane
                columnOptions={backendResponse.TableColumn}
                sortOptions={backendResponse.Sort}
              />
            </div>

            <div className="table-section">
              <TableSection />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
