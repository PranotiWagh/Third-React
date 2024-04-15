import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Fetchdata = () => {
  let [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users") //Return a promise
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      });
  }, []);

  console.log(userData);

  return (
    <>
      <h1>UserData</h1>
      {userData.map((data) => {
        return (
          <Fragment key={data.id}>
            <p>{data.login}</p>
            <p>{data.type}</p>
            <img src={data.avatar_url} alt={data.login} />
          </Fragment>
        );
      })}
    </>
  );
};

export default Fetchdata;
