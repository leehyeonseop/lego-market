import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
    const [resLog, setResLog] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const url = "https://mandarin.api.weniv.co.kr";
    const url2 = "http://146.56.183.55:3000";
    const reqPath = `/user`;
    const reqPath2 = `/user/accountnamevalid`;  //계정확인
    const reqPath3 = `/user/login`;

    const userId = {
      user : {
        "accountname" : "bigfile57"
      }
    }
    const accountInfo = {
        "user" : {
          "email" : "test13@test.com",
          "password" : "123123"
        }
      }
    
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    //   "Content-type": "application/json",
    // };

    const headers = {
      "Content-type": "application/json",
    };
    console.log(url + reqPath);

    useEffect(() => {
        (async () => {
            const res = await axios.get(url + reqPath);
            console.log(res);
            setResLog(res)
        })();
    },[]);
    console.log(url + reqPath2);
    useEffect(() => {
      (async () => {
          const res2 = await axios.post(url + reqPath2, userId);
          console.log(res2);
      })();
  },[]);
    useEffect(() => {
      (async () => {
          const res3 = await axios.post(url + reqPath3, accountInfo);
          console.log(res3);
      })();
  },[]);
    useEffect(() => {
      (async () => {
          const res4 = await axios.post(url + reqPath3, headers,accountInfo);
          console.log(res4);
      })();
  },[]);

    return (
        <div>
          api 데이터 실험용 페이지 입니다.
        </div>
    );
};

export default Test;
