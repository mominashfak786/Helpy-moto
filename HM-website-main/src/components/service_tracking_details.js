import React, { useEffect, useState } from "react";
import "../styles/service_tracking_details.css";


import Popup from './Popup_service';


function Tracker() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => { setIsOpen(!isOpen); }



 

  useEffect(() => {
    if (localStorage.getItem("cart") != null) {
      let val = JSON.parse(localStorage.getItem("cart"));
      console.log("val", val);
      console.log(typeof val);
  
    }
  }, []);


  return (
    <div className="track_all" style={{ textAlign: "center" }}>
      <div className="track_home" >
        <h1>What to track your progress ?</h1>
        <br />
        <div className="track_home_list" style={{ marginLeft: '10%' }}>
          <div className="track_home_list_item">
            <div className="track_number1"><span>1</span></div>
            <div id="track_line_track"></div>

            <div className="track_number2 ">
              <h2 >Service Booked</h2>
              <p className="track_track_button">For more details      <button onClick={togglePopup}>Click here</button>            </p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfExYWW4_10Mar0AjL6gWh8J3PLFhkEtYTQ&usqp=CA" className="abc" alt="car"></img>
            </div>

          </div>
          <div className="track_home_list_item">
            <div className="track_number1"><span>2</span></div>
            <div className="track_number2 ">
              <h2 >Assigning respective mechanic and workshop</h2>
              <p className="track_track_button">For more details <button>Click here</button></p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRhBOO3b4oWdoHSCQfuSNLqQSUZXXRq1rKA&usqp=CAU" className="abc" alt="car"></img>
            </div>

          </div>
          <div className="track_home_list_item">
            <div className="track_number1"><span>3</span></div>
            <div className="track_number2 ">
              <h2 > Pick-up to your shared location</h2>
              <p className="track_track_button">For more details <button>Click here</button></p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b7opqE0SaYvh4uSFSlYGBUzE3IK-3ft5Kg&usqp=CAU" className="abc" alt="car"></img>
            </div>

          </div>
          <div className="track_home_list_item">
            <div className="track_number1"><span>4</span></div>
            <div className="track_number2 ">
              <h2 >Taking vehicle from shared location to workshop</h2>
              <p className="track_track_button">For more details <button>Click here</button></p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC_EKqi6nfYHZ6m_gbwTd_Rysc536qv455Q&usqp=CAU" className="abc" alt="car"></img>
            </div>

          </div>
          <div className="track_home_list_item">
            <div className="track_number1"><span>5</span></div>

            <div className="track_number2 ">
              <h2 >Service in progress</h2>
              <p className="track_track_button">For more details <button>Click here</button></p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfExYWW4_10Mar0AjL6gWh8J3PLFhkEtYTQ&usqp=CA" className="abc" alt="car"></img>
            </div>

          </div>
          <div className="track_home_list_item">
            <div className="track_number1"><span>6</span></div>
            <div className="track_number2 ">
              <h2 >Service successfully completed </h2>
              <p className="track_track_button">For more details <button>Click here</button></p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRhBOO3b4oWdoHSCQfuSNLqQSUZXXRq1rKA&usqp=CAU" className="abc" alt="car"></img>
            </div>

          </div>
          <div className="track_home_list_item">
            <div className="track_number1"><span>7</span></div>
            <div className="track_number2 ">
              <h2 >Drop date and time</h2>
              <p className="track_track_button">For more details <button>Click here</button></p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b7opqE0SaYvh4uSFSlYGBUzE3IK-3ft5Kg&usqp=CAU" className="abc" alt="car"></img>
            </div>

          </div>
          <div className="track_home_list_item">
            <div className="track_number1"><span>8</span></div>
            <div className="track_number2 ">
              <h2 >Vehicle delivery to shared location</h2>
              <p className="track_track_button">For more details <button>Click here</button></p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC_EKqi6nfYHZ6m_gbwTd_Rysc536qv455Q&usqp=CAU" className="abc" alt="car"></img>
            </div>

          </div>
          <div className="track_home_list_item">
            <div className="track_number1"><span>9</span></div>
            <div className="track_number2 ">
              <h2 >Successfully delivered</h2>
              <p className="track_track_button">For more details <button>Click here</button></p>
            </div>
            <div className="track_number3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC_EKqi6nfYHZ6m_gbwTd_Rysc536qv455Q&usqp=CAU" className="abc" alt="car"></img>
            </div>

          </div>
          {isOpen && <Popup
            content={<>
              <br /><br />
              <div style={{}} className="des_outer_container">
           
                <div >
                  <h2>Service Booked</h2>
                  <br />
           




                </div>
              </div>
            </>}
            handleClose={togglePopup} />}

        </div>
      </div>
    </div>
  );
}

export default Tracker;