import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h1>No Tours</h1>
          <div className="title-underline"></div>
        </div>
        <button className="btn" onClick={() => fetchTours()}>
          refresh list
        </button>
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h1>tours</h1>
        <div className="title-underline"></div>
      </div>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
