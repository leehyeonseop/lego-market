import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [resLog, setResLog] = useState([]);
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQwZjM0MTZjYTFiNjNmODY1NzgwMCIsImV4cCI6MTY2MjM1ODkyNCwiaWF0IjoxNjU3MTc0OTI0fQ.-RKmj5O6CIrTDq4RsQODLjP4CkPRvmGb3kEoTaJLkMo";
    const url = "https://mandarin.api.weniv.co.kr";
    const reqPath = `/user/searchuser/`;
    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
    };

    // const keyword = "kkingkkang";
    // const keyword = "박잼";

    console.log(url + reqPath, headers, token);

    useEffect(() => {
        (async () => {
            const res = await axios.get(url + reqPath, {
                params: {
                    keyword: keyword,
                },
                headers,
            });
            console.log(res);
        })();
    },[keyword]);

    const onChange = (e) => {
      setKeyword(e.target.value)
    };

    return (
        <div>
            <input type="text" onChange={onChange} />
            <div>
                검색값 : {resLog}
            </div>
        </div>
    );
};

export default Search;
