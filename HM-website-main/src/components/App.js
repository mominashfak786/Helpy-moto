import React from 'react'
import '../styles/App.css'

// import mobile from "../assets/mobile.jpeg";
// import hr from "../assets/24.jpg";
import img1 from "../assets/images.jpg";
import img2 from "../assets/images.png";
import app2 from "../assets/app2.jpeg";
import app from "../assets/app.jpeg";
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import styled from "styled-components";
const Hr = styled.hr`
width: 20%;
text-align: left;
margin-left: 0;
height: 5px;
background-color: red;
`;

const App = () => {
  return (
    <div class="helpymoto-container">
      {/* <div class="helpymoto-title">
    <h1>Download HelpyMoto App</h1>
  </div>
  <div class="helpymoto-content">
    <div class="helpymoto-image">
      <img src={mobile} alt="mobile" />
    </div>
    <div class="helpymoto-text">
      <p>Choose and book a seamless car service experience and get upto Rs 750 off with the HelpyMoto App</p>
      <div class="helpymoto-buttons">
        <img src={img1} alt="mobile" />
        <img src={img2} alt="mobile" />
      </div>
    </div>
  </div> */}
      {/* App part */}
      <div>
      <Hr></Hr>

        <Row style={{ Width: "100%" }}>
          <Col> <div>
            <img alt ="app mobile" src={app} style={{ borderRadius: "30px", boxShadow: "4px 4px 4px 4px rgb(0,0,0,0.2)", height: "50%", width: "83%", border: "2px solid  black" }} />
          </div>
          </Col>
          <Col >
            <div style={{}}>
              <div style={{ textAlign: '', fontSize: '50px', fontWeight: 'bolder', color: "black" }}>
                <p> Download HelpyMoto App</p>
                <br></br>

                <div style={{ display: "flex", padding: '5px' }}>
                  <div>
                    <img alt ="app mobile" src={img1} style={{ height: '50px', cursor: 'pointer', margin: '0px 50px' }} />
                  </div>
                  <div>
                    <img alt ="app mobile" src={img2} style={{ height: '53px', cursor: 'pointer' }} />
                  </div>
                </div>
                <br></br>
                <p style={{ fontSize: '20px', color: 'GrayText' }}>
                  Choose and book a seamless car service experience and get upto Rs 750 off with the HelpyMoto App</p>
              </div>
            </div>
          </Col>

          <Col> <div >
            <img alt ="app mobile" src={app2} style={{ borderRadius: "30px", boxShadow: "4px 4px 4px 4px rgb(0,0,0,0.2)", height: "96%", width: "83%", border: "2px solid  black" }} />
          </div>
          </Col>
        </Row>

        <Hr></Hr>




  
      </div>
    </div>

  )
}

export default App