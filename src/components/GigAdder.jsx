import { useState } from "react";
import { db } from "../config/firebase";

function GigAdder() {
  const [newGigName, setNewGigName] = useState("");
  const [newGigVenue, setNewGigVenue] = useState("");
  const [newGigLocation, setNewGigLocation] = useState("");
  const [newGigDate, setNewGigDate] = useState(0);
  const [newGigDescription, setNewGigDescription] = useState("");
  const [newGigMoreInfoUrl, setNewGigMoreInfoUrl] = useState("");
  const [newGigBuyTicketsUrl, setNewGigBuyTicketsUrl] = useState("");
  const [newGigImgUrl, setNewGigImgUrl] = useState("");

  return (
    <div className="GigAdder">
      <div>
        <input
          placeholder="Name..."
          onChange={(e) => setNewGigName(e.target.value)}
        />
        <input
          placeholder="Venue..."
          onChange={(e) => setNewGigVenue(e.target.value)}
        />
        <input
          placeholder="Location..."
          onChange={(e) => setNewGigLocation(e.target.value)}
        />
        <input
          placeholder="Date..."
          onChange={(e) => setNewGigDate(Number(e.target.value))}
        />
        <input
          placeholder="Desciption..."
          onChange={(e) => setNewGigDescription(e.target.value)}
        />
        <input
          placeholder="More Info URL..."
          onChange={(e) => setNewGigMoreInfoUrl(e.target.value)}
        />
        <input
          placeholder="Buy Tickets URL..."
          onChange={(e) => setNewGigBuyTicketsUrl(e.target.value)}
        />
        <input
          placeholder="Image URL..."
          onChange={(e) => setNewGigImgUrl(e.target.value)}
        />
      <button>Submit Gig</button>
      </div>
    </div>
  );
}

export default GigAdder;
