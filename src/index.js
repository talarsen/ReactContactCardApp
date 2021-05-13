import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  

<div>
<h1 className="heading">My Contacts</h1>
<App 
 name="Alex Hannold"
 img="https://pbs.twimg.com/profile_images/521729433426599937/0nntVU9L_400x400.jpeg"
 tel="+123 456 789"
 email="Solo.com"/>

<App
 name="Conrad Anker"
 img="https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/36801/large_70_Screen_Shot_2019-04-12_at_7.05.57_AM.png"
 tel="+123 456 789"
 email="mountains.com"/>


<App
 name="Lynn Hill"
 img="https://i1.sndcdn.com/artworks-PmGItQUlHGP6Cn49-a2Vtqg-t500x500.jpg"
 tel="+123 456 789"
 email="climb.com"/>
</div>,

document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
