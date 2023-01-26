import Map from "./components/Map";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Create a async fetchData function
    const fetchData = async () => {
      // Set loading to true
      setLoading(true)
      // Set res const to the retch response
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      // Set the data const to the data
      const { events } = await res.json()


      setEventData(events)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="app">
      <Header />
      {loading ? <h1 className="loading">Loading...</h1> : <Map eventData={eventData} />}
    </div>
  );
}

export default App;
