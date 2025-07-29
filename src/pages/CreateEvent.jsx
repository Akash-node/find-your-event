import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, DollarSign, FileText, Image } from 'lucide-react';
import './CreateEvent.css';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    venue: '',
    price: '',
    capacity: '',
    availableSeats: '',
    date: '',
    category: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Event created:', formData);
    
    // For demo purposes, just navigate back to events
    alert('Event created successfully!');
    navigate('/events');
  };

  return (
    <div className="create-event-page">
      <div className="create-event-container">
        <div className="create-event-header">
          <h1 className="create-event-title">Create New Event</h1>
          <p className="create-event-subtitle">Fill in the details to create an amazing event</p>
        </div>

        <form onSubmit={handleSubmit} className="create-event-form">
          <div className="form-grid">
            <div className="form-section">
              <h2 className="section-title">Event Information</h2>
              
              <div className="form-group">
                <label className="form-label">
                  <FileText className="label-icon" />
                  Event Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter event title"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FileText className="label-icon" />
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Describe your event in detail"
                  rows="4"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Calendar className="label-icon" />
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FileText className="label-icon" />
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Technology">Technology</option>
                  <option value="Music">Music</option>
                  <option value="Art">Art</option>
                  <option value="Business">Business</option>
                  <option value="Food">Food</option>
                  <option value="Sports">Sports</option>
                  <option value="Education">Education</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h2 className="section-title">Event Details</h2>
              
              <div className="form-group">
                <label className="form-label">
                  <MapPin className="label-icon" />
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter venue location"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <DollarSign className="label-icon" />
                  Ticket Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="0"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Users className="label-icon" />
                  Total Capacity
                </label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="0"
                  min="1"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Users className="label-icon" />
                  Available Seats
                </label>
                <input
                  type="number"
                  name="availableSeats"
                  value={formData.availableSeats}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="0"
                  min="0"
                  max={formData.capacity || undefined}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Image className="label-icon" />
                  Event Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageUpload}
                  className="form-file-input"
                  accept="image/*"
                />
                <div className="file-input-note">
                  Upload an image for your event (optional)
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/events')}
              className="cancel-btn"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="create-btn"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;