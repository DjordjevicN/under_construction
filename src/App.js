import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const result = await axios.get(
        "https://api.lazydesignerexcuses.com/random"
      );
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="content">
        <h1 className="title">Website is down</h1>
        <div className="excuse">
          <h3>
            <span>{`Excuse : `}</span>
            {data.Excuse}
          </h3>
        </div>
        <button onClick={getData}>New excuse</button>
      </div>
    </div>
  );
}

export default App;
