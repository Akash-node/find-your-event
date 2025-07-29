import { Calendar, MapPin, Users, DollarSign } from 'lucide-react';
import techConference from '../../assets/tech-conference.jpg';
import musicConcert from '../../assets/music-concert.jpg';
import artWorkshop from '../../assets/art-workshop.jpg';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Innovation Conference 2024",
      image: techConference,
      venue: "Convention Center, Downtown",
      price: 150,
      capacity: 500,
      availableSeats: 120,
      date: "March 15, 2024",
      category: "Technology"
    },
    {
      id: 2,
      title: "Summer Music Festival",
      image: musicConcert,
      venue: "Central Park Amphitheater",
      price: 75,
      capacity: 2000,
      availableSeats: 850,
      date: "June 20, 2024",
      category: "Music"
    },
    {
      id: 3,
      title: "Digital Art Workshop",
      image: artWorkshop,
      venue: "Creative Studios",
      price: 89,
      capacity: 30,
      availableSeats: 12,
      date: "April 8, 2024",
      category: "Art"
    },
    {
      id: 4,
      title: "Business Networking Gala",
      image: techConference,
      venue: "Grand Hotel Ballroom",
      price: 200,
      capacity: 300,
      availableSeats: 75,
      date: "May 12, 2024",
      category: "Business"
    },
    {
      id: 5,
      title: "Food & Wine Tasting",
      image: artWorkshop,
      venue: "Riverside Restaurant",
      price: 120,
      capacity: 80,
      availableSeats: 25,
      date: "July 3, 2024",
      category: "Food"
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      image: musicConcert,
      venue: "Innovation Hub",
      price: 50,
      capacity: 200,
      availableSeats: 95,
      date: "August 18, 2024",
      category: "Business"
    }
  ];

  const getAvailabilityStatus = (available, capacity) => {
    const percentage = (available / capacity) * 100;
    if (percentage > 50) return 'high';
    if (percentage > 20) return 'medium';
    return 'low';
  };

  return (
    <div className="events-section">
      <div className="events-container">
        <div className="events-header">
          <h2 className="events-title">Featured Events</h2>
          <p className="events-subtitle">Discover amazing events happening near you</p>
        </div>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-category">{event.category}</div>
              </div>
              
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                
                <div className="event-details">
                  <div className="event-detail">
                    <Calendar className="detail-icon" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="event-detail">
                    <MapPin className="detail-icon" />
                    <span>{event.venue}</span>
                  </div>
                  
                  <div className="event-detail">
                    <DollarSign className="detail-icon" />
                    <span>${event.price}</span>
                  </div>
                  
                  <div className="event-detail">
                    <Users className="detail-icon" />
                    <span>{event.capacity} capacity</span>
                  </div>
                </div>
                
                <div className="event-availability">
                  <div className={`availability-indicator ${getAvailabilityStatus(event.availableSeats, event.capacity)}`}>
                    <span className="seats-available">{event.availableSeats} seats available</span>
                    <div className="availability-bar">
                      <div 
                        className="availability-fill"
                        style={{ width: `${(event.availableSeats / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <button className="register-btn">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;