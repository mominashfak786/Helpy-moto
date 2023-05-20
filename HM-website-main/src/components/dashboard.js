import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch("https://service-provider-apis.onrender.com/api/v1/ticket/mechanic/create", {
            method: "GET",
            headers: {
                Authentication: `Bearer ${undefined}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("this is dashborad data", data);
                setdata(data);
            })
            .then((json) => console.log(json))
            .catch((error) => console.log(error));

    });
    return (
        <div>dashboard




            {data.map((d, i) =>

                <div class="listing-item">
                    <figure class="image">
           

                        <div class="listing">
                            <h4><b>Name : </b>{d.customerId}</h4>
                            <h4><b>ID : </b>{d.mechanicId}</h4>
                            
                        </div>




                    </figure>

                </div>




            )}
        </div>
    )
}

export default Dashboard