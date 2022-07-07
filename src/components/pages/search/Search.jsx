import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [resLog, setResLog] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQwZjM0MTZjYTFiNjNmODY1NzgwMCIsImV4cCI6MTY2MjM1ODkyNCwiaWF0IjoxNjU3MTc0OTI0fQ.-RKmj5O6CIrTDq4RsQODLjP4CkPRvmGb3kEoTaJLkMo";
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/searchuser/?keyword=keyword`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  };

  const keyword = "박잼";

  console.log(url + reqPath, headers, token);

  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get(url + reqPath, {
  //       params: {
  //         query: keyword,
  //       },
  //       headers,
  //     });
  //     console.log(res);
  //   })();
  // });

  const onChange = (e) => {
    e.target.value &&
      axios
        .get(url + reqPath, {
          params: {
            query: keyword,
          },
          headers,
        })
        .then((res) => {
          setResLog(res.data);
          console.log(res.data);
        });
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <div> 검색값 : {resLog } 든게 없어서 안나오는 상태 로그상에선 계속 요청됩니다</div>
    </div>
  );
};

export default Search;
