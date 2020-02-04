[![Netlify Status](https://api.netlify.com/api/v1/badges/7c3d3c09-dc9d-426b-aba2-28da9fee44e3/deploy-status)](https://app.netlify.com/sites/eager-euclid-bdab76/deploys)

# DevCoach

DevCoach provides a platform for junior developers to train and improve their skills efficiently through focused support and feedback. It was built by Ben, Liam, Dom, Ola, Funmi, and Jayne for their Lambda School Labs project.

See the deployed product at [dev-coach.com](https://www.dev-coach.com). We would love to hear your feedback - you can use the chatbox in the bottom right of the screen, or message a member of the team on Slack.

Look through the documents we used to plan and organise the project here:

- [Notion Document](https://www.notion.so/EU3-QualityHub-503a434aa6b4425595d2b4fa03a1d406)

- [Trello Board](https://trello.com/b/SlF9gway/quality-hub)

# Team

Team Lead: [Benjamin Grabow](https://github.com/BenjaminGrabow) | [Oladimeji Ojo](https://github.com/ojokure)  | [Liam Sutton](https://github.com/curm90) | [Funmilayo Talabi](https://github.com/Funmi7)| [Jayne Carmichael Norrie](https://github.com/jaynecn) | [Dom Eccleston](https://github.com/domeccleston)<br>
| --- | --- | --- | --- | --- | --- |
[<img src="https://ca.slack-edge.com/T4JUEB3ME-UGG6CMVMJ-f9508210bec6-512" />](https://github.com/benjamingrabow) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULN0Q2CBC-cd4e7fdb68ec-512" />](https://github.com/ojokure) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULW2F383A-7d224505b235-512" />](https://github.com/curm90) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULVUWMC13-9917d69cee28-512" />](https://github.com/funmi7) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UF3TL8CLS-45731806fd60-512" />](https://github.com/jaynecn) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULXH09K8X-gaec6ed8a28c-512" />](https://github.com/domeccleston)
[<img src="https://github.com/favicon.ico" width="15" />](https://github.com/benjamingrabow) | [<img src="https://github.com/favicon.ico" width="15">](https://github.com/funmi7) | [<img src="https://github.com/favicon.ico" width="15" >](https://github.com/curm90) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/ojokure) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/jaynecn) | [<img src="https://github.com/favicon.ico" width="15" />](https://github.com/domeccleston)

# Table of Contents

## How to run this application

To run this project, you'll need to have Node installed on your machine. It accepts the usual scripts for a [create-react-app](https://github.com/facebook/create-react-app). You'll also need to create an environment variable for the server URL, see below for how to do this.

```
git clone https://github.com/LABS-EU3/quality_hub_frontend.git
cd quality_hub_frontend
npm i
echo "REACT_APP_BASE_URL='https://dev-coach-staging.herokuapp.com/'" > .env
npm start // starts the app on port :3000
```
Other scripts:
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Tech-Stack

This project was bootstrapped with Create-React-App and its UI was built primarily with React, with Axios for API calls, Redux for state management, Redux-Thunk for handling asynchronous actions, and Redux-Logger for debugging state changes. Routing was handled with React Router. Our styling used CSS-in-JS, primarily styled-components but with some forms making use of Material-UI components. We deployed with Netlify.


Other libraries we used:

 - Formik (form handling)
 - Yup (form validation) 
 - Stripe (payments)
 - Recharts (data visualization)
 - Pusher (instant messaging and code sharing over WebSockets)
 - Twilio-Video (WebRTC-based video chat)
 - React-Codemirror2 (extensible code editor)
 - Judge0 (remote code execution API)
 
## Backend

For information on the backend of the app, please see [here](https://github.com/LABS-EU3/quality_hub_backend).

## Contributing

If there are any features you'd like to add to this project, feel free to suggest them or submit a PR.
