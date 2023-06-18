import calendar from '../../google';

export default async function handler(req, res) {
  calendar.events.list(
    {
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    },
    (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return res.status(400).send(err);
      }
      const events = response.data.items;
      return res.status(200).send(events);
    }
  );
}
