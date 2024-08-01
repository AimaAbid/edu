// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./PerformanceDashboard.css";

// export default function PerformanceDashboard(){
//   const [points, setPoints] = useState(0);
//   const [badges, setBadges] = useState([]);
//   var userId=localStorage.getItem('userId');

//   useEffect(() => {
//     axios.get(`http://localhost:8000/quiz/points/${userId}`).then(response => {
//       setPoints(response.data.points);
//     });
//     axios.get(`http://localhost:8000/quiz/badges/${userId}`).then(response => {
//       setBadges(response.data.badges);
//     });
//   }, [userId]);

//   return (
//     <div>
//      <div className="course-heading">Performance Dashboard</div>
     
//       <div className="container">
//       <p>Points: {points}</p>
//       {badges.map((badge, index) => (
        
       
//        <div>{badge}</div>
//      ))}
//       </div>
      
       
      
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./PerformanceDashboard.css";
import Rookie from "./badges/Rookie.png";
import Traveller from "./badges/Traveller.jpg";
import Adventurer from "./badges/adventurer.jpg";
import Trailblazer from "./badges/trailblazer.jpg"

export default function PerformanceDashboard() {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchPointsAndBadges = async () => {
      try {
        const pointsResponse = await axios.get(`http://localhost:8000/quiz/points/${userId}`);
        setPoints(pointsResponse.data.points);
        
        const badgesResponse = await axios.get(`http://localhost:8000/quiz/badges/${userId}`);
        setBadges(badgesResponse.data.badges);
      } catch (error) {
        console.error('Error fetching points and badges:', error);
      }
    };

    fetchPointsAndBadges();
  }, [userId]);

  const badgeImages = {
    "Rookie": Rookie,
    "Traveller": Traveller,
    "Trail Blazer": Adventurer,
    "Adventurer": Trailblazer
  };

  return (
    <div>
      <div className="course-heading">Performance Dashboard</div>
      <div className="container">
        <p className='normal-heading'>Points: {points}</p>
        <div className="badges-container">
          {badges.length > 0 ? (
            badges.map((badge, index) => (
              <div key={index} className="badge">
                <img src={badgeImages[badge]} className='badge-image' alt={badge} />
                <div>{badge}</div>
              </div>
            ))
          ) : (
            <p>No badges earned yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

