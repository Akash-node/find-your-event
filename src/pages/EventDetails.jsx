import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, DollarSign, ArrowLeft } from 'lucide-react';
import techConference from '../assets/tech-conference.jpg';
import musicConcert from '../assets/music-concert.jpg';
import artWorkshop from '../assets/art-workshop.jpg';
import './EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock event data - in real app this would come from API
  const events = [
    {
      id: 1,
      title: "Tech Innovation Conference 2024",
      description: "Join industry leaders and innovators for a full day of cutting-edge technology discussions, networking opportunities, and hands-on workshops. This conference will cover the latest trends in AI, blockchain, cloud computing, and emerging technologies that are shaping the future of business.",
      image: techConference,
      venue: "Convention Center, Downtown",
      price: 150,
      capacity: 500,
      availableSeats: 120,
      date: "March 15, 2024",
      category: "Technology",
      agenda: [
        "9:00 AM - Registration & Networking",
        "10:00 AM - Keynote: Future of AI",
        "11:30 AM - Panel: Blockchain Revolution",
        "1:00 PM - Lunch & Networking",
        "2:30 PM - Workshop: Cloud Computing",
        "4:00 PM - Startup Pitch Session",
        "5:30 PM - Closing Remarks"
      ]
    },
    {
      id: 2,
      title: "Summer Music Festival",
      description: "Experience an unforgettable musical journey with top artists from around the world. This outdoor festival features multiple stages, diverse genres, food vendors, and interactive experiences for music lovers of all ages.",
      image: musicConcert,
      venue: "Central Park Amphitheater",
      price: 75,
      capacity: 2000,
      availableSeats: 850,
      date: "June 20, 2024",
      category: "Music",
      agenda: [
        "12:00 PM - Gates Open",
        "1:00 PM - Local Artists Showcase",
        "3:00 PM - Indie Rock Performances",
        "5:00 PM - Food & Beverage Break",
        "6:30 PM - Electronic Music Sets",
        "8:00 PM - Headliner Performance",
        "10:00 PM - After Party"
      ]
    },
    {
      id: 3,
      title: "Digital Art Workshop",
      description: "Learn the fundamentals of digital art creation using industry-standard software and techniques. This hands-on workshop is perfect for beginners and intermediate artists looking to expand their digital skillset.",
      image: artWorkshop,
      venue: "Creative Studios",
      price: 89,
      capacity: 30,
      availableSeats: 12,
      date: "April 8, 2024",
      category: "Art",
      agenda: [
        "9:00 AM - Introduction to Digital Tools",
        "10:30 AM - Basic Drawing Techniques",
        "12:00 PM - Lunch Break",
        "1:00 PM - Advanced Illustration",
        "3:00 PM - Portfolio Review",
        "4:30 PM - Q&A Session"
      ]
    }
  ];

  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="event-details-page">
        <div className="event-details-container">
          <h1>Event not found</h1>
          <button onClick={() => navigate('/events')} className="back-btn">
            <ArrowLeft size={20} />
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const getAvailabilityStatus = (available, capacity) => {
    const percentage = (available / capacity) * 100;
    if (percentage > 50) return 'high';
    if (percentage > 20) return 'medium';
    return 'low';
  };

  return (
    <div className="event-details-page">
      <div className="event-details-container">
        <button onClick={() => navigate('/events')} className="back-btn">
          <ArrowLeft size={20} />
          Back to Events
        </button>

        <div className="event-details-hero">
          <div className="event-hero-image">
            <img src={event.image} alt={event.title} />
            <div className="event-hero-category">{event.category}</div>
          </div>
          
          <div className="event-hero-content">
            <h1 className="event-details-title">{event.title}</h1>
            
            <div className="event-details-meta">
              <div className="event-meta-item">
                <Calendar className="meta-icon" />
                <span>{event.date}</span>
              </div>
              
              <div className="event-meta-item">
                <MapPin className="meta-icon" />
                <span>{event.venue}</span>
              </div>
              
              <div className="event-meta-item">
                <DollarSign className="meta-icon" />
                <span>${event.price}</span>
              </div>
              
              <div className="event-meta-item">
                <Users className="meta-icon" />
                <span>{event.capacity} capacity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="event-details-content">
          <div className="event-description-section">
            <h2 className="section-title">About This Event</h2>
            <p className="event-description">{event.description}</p>
          </div>

          <div className="event-agenda-section">
            <h2 className="section-title">Event Agenda</h2>
            <div className="agenda-list">
              {event.agenda.map((item, index) => (
                <div key={index} className="agenda-item">
                  <div className="agenda-time">{item.split(' - ')[0]}</div>
                  <div className="agenda-activity">{item.split(' - ')[1]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="event-booking-section">
            <div className="availability-section">
              <h3 className="availability-title">Seat Availability</h3>
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

            <div className="pricing-section">
              <div className="price-display">
                <span className="price-label">Ticket Price</span>
                <span className="price-amount">${event.price}</span>
              </div>
              
              <button className="register-btn">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;