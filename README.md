# Dash
Readvocab is an instant messaging realtime chat room app.

Dash is an instant messaging chat room app.

## Table of Contents
* [Features](#features)
* [Tech stack](#tech-stack)
* [Run locally](#run-locally)

## Features
- Login with email + password, or OAuth with google, plus the ability to sign in as a guest.
- Send messages that are shown with the user profile picture, the users name and the date at which the message was sent
  - The date is formatted similarly to Discords style, with times used for the current day + yesterday, else the date is displayed in a dd/mm/yyyy format.
- Light + Dark mode
- Responsive design

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
