import React, { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    time: '',
    venue: '',
    image: null,
    whatsappLink: '',
  });
  const [comment, setComment] = useState('');

  const addEvent = () => {
    if (newEvent.title && newEvent.description && newEvent.time && newEvent.venue && newEvent.whatsappLink) {
      setEvents([...events, { ...newEvent, likes: 0, dislikes: 0, comments: [] }]);
      setNewEvent({ title: '', description: '', time: '', venue: '', image: null, whatsappLink: '' });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent({ ...newEvent, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const likeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].likes += 1;
    setEvents(updatedEvents);
  };

  const dislikeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].dislikes += 1;
    setEvents(updatedEvents);
  };

  const addComment = (index) => {
    if (comment) {
      const updatedEvents = [...events];
      updatedEvents[index].comments.push(comment);
      setEvents(updatedEvents);
      setComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 text-white flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Community Events</h1>

        {/* New Event Form */}
        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg mb-10 w-full">
          <h2 className="text-2xl font-semibold mb-6">Add a New Event</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none"
            />
            <textarea
              placeholder="Event Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none h-32"
            />
            <input
              type="datetime-local"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Event Venue"
              value={newEvent.venue}
              onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none"
            />
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none"
            />
            <input
              type="url"
              placeholder="WhatsApp Group Link"
              value={newEvent.whatsappLink}
              onChange={(e) => setNewEvent({ ...newEvent, whatsappLink: e.target.value })}
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none"
            />
            <button onClick={addEvent} className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">
              Add Event
            </button>
          </div>
        </div>

        {/* Event List in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.length === 0 ? (
            <p className="text-center text-white text-lg">No events yet. Add an event!</p>
          ) : (
            events.map((event, index) => (
              <div key={index} className="bg-Zinc-800 text-white p-6 rounded-lg shadow-lg">
                {event.image && (
                  <img src={event.image} alt={event.title} className="mb-4 w-full h-48 object-cover rounded-lg" />
                )}
                <h2 className="text-2xl text-white font-bold mb-2">{event.title}</h2>
                <p className="mb-4 text-white">{event.description}</p>
                <p className="mb-2">
                  <strong>Time:</strong> {new Date(event.time).toLocaleString()}
                </p>
                <p className="mb-4">
                  <strong>Venue:</strong> {event.venue}
                </p>
                {event.whatsappLink && (
                  <a
                    href={event.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mb-4 inline-block"
                  >
                    Join WhatsApp Group
                  </a>
                )}
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => likeEvent(index)}
                    className="flex items-center bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    👍 {event.likes}
                  </button>
                  <button
                    onClick={() => dislikeEvent(index)}
                    className="flex items-center bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    👎 {event.dislikes}
                  </button>
                </div>

                {/* Comment Section */}
                <div>
                  <h3 className="text-lg font-bold mb-2">Comments:</h3>
                  {event.comments.length === 0 ? (
                    <p>No comments yet.</p>
                  ) : (
                    <ul className="list-disc ml-6 space-y-1">
                      {event.comments.map((comment, idx) => (
                        <li key={idx}>{comment}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      placeholder="Add a comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="flex-grow p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none"
                    />
                    <button
                      onClick={() => addComment(index)}
                      className="ml-2 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Add Comment
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
