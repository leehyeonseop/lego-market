import React from "react";

async function test() {
  console.log("test call");
  const token = ""
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pw").value;
try {
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = "/user/login";
  const loginData = {
    user: {
      email: email,
      password: password,
    },
  };
  const res = await fetch(url + reqPath, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  const json = await res.json();
  console.log(json, "제이손입니다");
}
catch(err){
  console.log(err);
}
}

const ApiTest = () => {
  return <div></div>;
};

export default ApiTest;
