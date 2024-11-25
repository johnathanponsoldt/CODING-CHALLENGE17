import React, { useState, useEffect } from 'react';
import Tour from 'Tour';

const Gallery = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchTours = async () => {
          try {
            const response = await fetch('https://course-api.com/react-tours-project');
            if (!response.ok) throw new Error('Failed to fetch tours');
            const data = await response.json();
            setTours(data);
            setLoading(false);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
        fetchTours();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    const removeTour = (id) => {
      setTours(tours.filter(tour => tour.id !== id));
    };
};      