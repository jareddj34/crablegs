import { useState, useEffect } from 'react';

export default function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/api/calendar')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setEvents(data);
                } else {
                    console.error('Data is not an array', data);
                }
            })
            .catch(error => console.error('Fetch operation failed', error));
    }, []);

    return (
        <div>
            {Array.isArray(events) && events.map((event, index) => (
                <div key={index}>
                    <h2>{event.summary}</h2>
                    <p>Start time: {event.start.dateTime || event.start.date}</p>
                    <p>End time: {event.end.dateTime || event.end.date}</p>
                </div>
            ))}
        </div>
    );
}
