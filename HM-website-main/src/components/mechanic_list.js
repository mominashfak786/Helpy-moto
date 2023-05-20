import React, { useState, useEffect } from "react";
import "../styles/mechanic_list.css";
import Popup from "./Popup";
import User from "../assets/download.png";

const initialData = { mechanicId: "", customerId: "" };
const Mechanic_list = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isaccepted, setIsaccepted] = useState(false);
  const [mechdata, setmechdata] = useState([]);
  const [index, setindex] = useState(0);
  const [mechSubmitData, setmechSubmitData] = useState(initialData);

  const togglePopup = () => {
    if (mechdata && mechdata[index] && mechdata[index].mechanicUid) {
      setIsOpen(!isOpen);
    }
  };
  
  const closepop = () => {
    setIsaccepted(!isaccepted);
  };

  const submithandler = (e) => {
    e.preventDefault();

    fetch(
      "https://service-provider-apis.onrender.com/api/v1/ticket/mechanic/create",
      {
        method: "POST",
        headers: {
          Authentication: `Bearer ${undefined}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mechSubmitData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Request");
        }
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  };
 
  

  // const handleClick = () => {

  //     alert("button is clicked");

  // };

  useEffect(() => {
    fetch("https://service-provider-apis.onrender.com/api/v1/mechanics", {
      method: "GET",
      headers: {
        Authentication: `Bearer ${undefined}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("this is data", data);
        setmechdata(data.mechanic);
      })
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  });

  return (
    <div style={{ textAlign: "center" }}>
      {isOpen && (
        <div class="popup-container">
          <div class="close-button" onClick={togglePopup}>
            Close
          </div>
          <div className="d-flex mt-4  align-items-center justify-content-evenly">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <h3>
              {" "}
              <b className="">{mechdata[index].fullName}</b>
            </h3>
          </div>
          <div class="address-container">
            <b>ABC Apartment, Himalayat nagar, Hyderabad, Telangana.</b>
            <div class="vehicle-number-plate">Mahindra bike Vehicle No-ABPXXXX</div>
          </div>
          <b>Description of the problem:-</b>
          <div class="popup-description">
          

            <p>
              While driving through the streets, my tyres just went flat. Need
              help to fix it soon as I have to go for a road trip.
            </p>
          </div>

          <button
            class="popup-submit-button"
            onClick={(e) => {
              setIsOpen(!isOpen);
              setmechSubmitData({
                mechanicId: mechdata[index].mechanicUid,
                customerid: " ",
              });
              console.clear();
              console.log(mechSubmitData);
              alert("Your request is submitted");
            }}
          >
            Submit
          </button>
        </div>
      )}

      {isaccepted && (
        <div class="success-container">
          <div class="close-button" onClick={togglePopup}>
            Close
          </div>
          <h1>
            <b>Your Request has been accepted</b>
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            class="bi bi-check2-circle"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
        </div>
      )}
      <br />

      <div class="card-container">
        {mechdata.map((d, i) => (
          <div class="card">
            <div class="image">
              <img src={User} alt="" />
            </div>
            <div class="details">
              <h4>
                <b>Name: </b>
                {d.fullName}
              </h4>
              <h4>
                <b>ID: </b>
                {d.mechanicUid}
              </h4>
              <h4>
                <b>Email: </b>
                {d.email}
              </h4>
              <h4>
                <b>Mobile: </b>
                {d.phoneNo}
              </h4>
              <h4>
                <button
                  type="button"
                  class="button"
                  onClick={() => togglePopup(i)}
                >
                  Hire Now
                </button>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mechanic_list;
