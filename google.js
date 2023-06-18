const fs = require('fs');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const dotenv = require('dotenv');
dotenv.config();

const oAuth2Client = new OAuth2(
    '401922363825-0j814svtsjt4hvb1rmog42qr42ka1l3u.apps.googleusercontent.com',
    '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',
    'https://calendar.google.com/'
);

oAuth2Client.setCredentials({ refresh_token: 'http://localhost:3000' });

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

module.exports = calendar;
