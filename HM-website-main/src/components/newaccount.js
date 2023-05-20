import React, { useState } from "react";
import "../styles/newaccount.css";
import { Link } from 'react-router-dom'
const initialData = { firstName: "", lastName: "", phoneNo: "", email: "", password: "" }
const Newaccount = () => {
  const [data, setData] = useState(initialData);
  const [email, setemail] = useState('');
  const [isValidemail, setIsValidemail] = useState(false);
  const [password, setpassword] = useState('');
  const [isValidpassword, setIsValidpassword] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [isValidfirstname, setIsValidfirstname] = useState(false);
  const [lastname, setlastname] = useState('');
  const [isValidlastname, setIsValidlastname] = useState(false);
  const [mobile, setmobile] = useState('');
  const [isValidmobile, setIsValidmobile] = useState(false);
  const [confirmpassword, setconfirmpassword] = useState('');
  const [isValidconfirmpassword, setIsValidconfirmpassword] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();
    if (isValidemail && isValidpassword && isValidfirstname && isValidlastname && isValidmobile && password === confirmpassword ) {
      console.log('successsfully submitted: ', data);

      fetch("https://service-provider-apis.onrender.com/api/v1/user/signup", {
        method: "POST",
        headers: {
          Authentication: `Bearer ${undefined}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error Request");
          }
          console.log(response)
          return response.json();
        })
        .then((json) => console.log(json))
        .catch((error) => console.log(error));

    } else {
      console.log('Invalid  ', data);
      // alert("Enter Valid Authentications, current authentications are invalid.")
    }

  }




  return (
    <div className="containerup">
      <form className="formup" action='#!' method='post'>
        <p className="titleup">Registeration Form </p>
        {/* <p className="messageup">Signup now and get full access to our app. </p> */}
        <div className="flex">
          <label>
            <input
              required
              placeholder="Firstname"
              type="text"
              className="input"
              name="firstName"
              value={firstname}
              onChange={e => {
                setfirstname(e.target.value)
                const regex = /^[a-zA-Z]+$/;

                setIsValidfirstname(e.target.value.length >= 3 && regex.test(e.target.value));
                setData({ email: email, password: password, firstName: e.target.value, lastName: lastname, phoneNo: mobile})
              }}
            />

          </label>
          <label>
            <input
              required
              placeholder="Lastname"
              type="text"
              className="input"
              name="lastName"
              value={lastname}
              onChange={e => {
                setlastname(e.target.value)
                const regex = /^[a-zA-Z]+$/;
                setIsValidlastname(e.target.value.length >= 3 && regex.test(e.target.value));
                setData({ email: email, password: password, firstName: firstname, lastName: e.target.value, phoneNo: mobile})
              }}
            />
          </label>
        </div>
        <label>
          <input
            required
            placeholder="mobile No"
            type="text"
            className="input"
            name="phoneNo"
            value={mobile}
            onChange={e => {
              setmobile(e.target.value)
              const regex = /^[7-9][0-9]{9}$/;
              setIsValidmobile(regex.test(e.target.value));
              setData({ email: email, password: password, firstName: firstname, lastName: lastname, phoneNo: e.target.value})
            }}
          />

        </label>
        <label>
          <input
            required
            placeholder="Email"
            type="email"
            className="input"
            name="email"
            value={email}
            onChange={e => {
              setemail(e.target.value)
              const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              setIsValidemail(regex.test(e.target.value));
              setData({ email: e.target.value, password: password, firstName: firstname, lastName: lastname, phoneNo: mobile})
            }}
          />

        </label>
        <label>
          <input
            required
            placeholder="Password"
            type="password"
            className="input"
            name="password"
            value={password}
            onChange={e => {
              setpassword(e.target.value)
              const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
              setIsValidpassword(regex.test(e.target.value));
              setData({ email: email, password: e.target.value, firstName: firstname, lastName: lastname, phoneNo: mobile})
            }}
          />
          
        </label>
        <label>
          <input
            required
            placeholder="Confirm password"
            type="password"
            className="input"
            value={confirmpassword}

            onChange={e => {
              setconfirmpassword(e.target.value)
              const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
              setIsValidconfirmpassword(regex.test(e.target.value));
              setData({ email: email, password: password, firstName: firstname, lastName: lastname, phoneNo: mobile})
            }}
          />

        </label>
        <button className="submitup" type='button' onClick={submithandler}>Submit</button>
        <p className="signin">
          Already have an acount ? <Link to="/LoginPage">Signin</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Newaccount;
