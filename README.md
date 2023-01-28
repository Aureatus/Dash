# Dash
Readvocab is an instant messaging realtime chat room app.

Dash is an instant messaging chat room app.

## Table of Contents
* [Features](#features)
* [Known Issues](#known-issues)
* [Tech stack](#tech-stack)
* [Run locally](#run-locally)

## Features
- Login with email + password, or OAuth with google, plus the ability to sign in as a guest.
- Send messages that are shown with the user profile picture, the users name and the date at which the message was sent
  - Messages are checked for profanity using the censor-sensor npm package. It doesn't stop common profanity, but will stop messages which contain slurs or sexual terms to the best of it's ability.
  - The date is formatted similarly to Discords style, with times used for the current day + yesterday, else the date is displayed in a dd/mm/yyyy format.
- Light + Dark mode
- Responsive design

## Known Issues

- Flicker on page refresh if you are using the dark theme.
- Styling for messages on desktop has a large unneeded gap.

## Tech Stack

React, TypeScript, Styled Components, Firebase, vite.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Aureatus/Dash.git
```

Go to the project directory

```bash
  cd Dash
```

Install dependencies

```bash
  npm install
```

Provide environment variables for VITE_apiKey, VITE_projectId, VITE_messagingSenderid, VITE_appId and VITE_authDomain to be used to initialize firebase app.

Start the server

```bash
  vite
```
