import React, { useState } from "react";
import Button from "../ui/Button";
import ImageSelect from "../ui/ImageSelect";
import Input from "../ui/Input";
import ProfileImage from "../ui/ProfileImage";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 30px 34px;
`;

const EmailPwWrapper = styled.div`
    display: ${(props) => (props.emailPwCheck ? "none" : "block")};
`;

const ProfileWrapper = styled.div`
    display: ${(props) => (props.emailPwCheck ? "block" : "none")};
`;

const H1 = styled.h1`
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin-bottom: ${(props) => props.marginBottom}px;
`;

const P = styled.p`
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 30px;
`;

const StyledImageSelect = styled(ImageSelect)`
    position: absolute;
    bottom: 0;
    right: 0;
`;

const PictureWrapper = styled.div`
    width: 110px;
    height: 110px;
    position: relative;
    margin: 0 auto;
    margin-bottom: 30px;
`;
function JoinPage() {
    const [imgSrc, setImgSrc] = useState([]);
    const [emailPwCheck, setEmailPwCheck] = useState(false);

    const [state, setState] = useState({
        email: "",
        pw: "",
        username: "",
        accountId: "",
        intro: "",
    });

    const handleAccount = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    async function checkEmailValid(email) {
        const url = "https://mandarin.api.weniv.co.kr/user/emailvalid";
        const reqData = {
            user: {
                email: email,
            },
        };
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(reqData),
            });
            const json = await res.json();
            console.log(json);
            const reqMsg = json.message;
            console.log(reqMsg === "이미 가입된 이메일 주소 입니다.", reqMsg);
            if (reqMsg === "이미 가입된 이메일 주소 입니다.") {
                return false;
            } else {
                return true;
            }
        } catch (error) {}
    }

    async function checkPasswordValid(password) {
        //password가 6글자 이상인경우에 true반환
        return true;
    }

    const checkValid = async () => {
        if (state.email.length < 1) {
            alert("이메일입력");
            return;
        }

        if (state.pw.length < 1) {
            alert("패스워드도 입력");
            return;
        }

        const emailCheckedResult = await checkEmailValid(state.email);
        const passwordCheckedResult = await checkPasswordValid(state.pw);

        if (emailCheckedResult && passwordCheckedResult) {
            setEmailPwCheck(true);
        }
    };

    async function checkAccountIdValid(id) {
        const url = "https://mandarin.api.weniv.co.kr/user/accountnamevalid";
        if (id === "") {
            return false;
        }
        const reqData = {
            user: {
                accountname: state.accountId,
            },
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(reqData),
        });
        const json = await res.json();

        if (json.message === "사용 가능한 계정ID 입니다.") {
            return true;
        }
        return false;
    }

    async function join() {
        const url = "https://mandarin.api.weniv.co.kr/user";
        const checkedIdResult = await checkAccountIdValid(state.accountId);
        console.log("checkedIdResult : ", checkedIdResult);

        if (checkedIdResult) {
            const reqData = {
                user: {
                    username: state.username,
                    email: state.email,
                    password: state.pw,
                    accountname: state.accountId,
                    intro: state.intro,
                    image: imgSrc.toString(),
                },
            };

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(reqData),
            });

            console.log("reqData : ", reqData);

            const json = await res.json();
            console.log(json);
        }
    }

    return (
        <Wrapper>
            <EmailPwWrapper emailPwCheck={emailPwCheck}>
                <H1 marginBottom={40}>이메일로 회원가입</H1>
                <Input
                    name="email"
                    onChange={handleAccount}
                    label="이메일"
                    placeholder="이메일 주소를 입력해 주세요."
                    marginBottom={16}
                />
                <Input
                    name="pw"
                    type="password"
                    onChange={handleAccount}
                    label="비밀번호"
                    placeholder="비밀번호를 설정해 주세요."
                    marginBottom={30}
                />
                <Button content="다음" onClick={checkValid} />
            </EmailPwWrapper>

            <ProfileWrapper emailPwCheck={emailPwCheck}>
                <H1 marginBottom={12}>프로필 설정</H1>
                <P>나중에 언제든지 변경할 수 있습니다.</P>
                <PictureWrapper>
                    <ProfileImage width="110px" imgSrc={imgSrc} />
                    <StyledImageSelect setImgSrc={setImgSrc} />
                </PictureWrapper>
                <Input
                    name="username"
                    onChange={handleAccount}
                    label="사용자 이름"
                    placeholder="2~10자 이내여야 합니다."
                    marginBottom={16}
                />
                <Input
                    name="accountId"
                    onChange={handleAccount}
                    label="계정 ID"
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                    marginBottom={16}
                />
                <Input
                    name="intro"
                    onChange={handleAccount}
                    label="소개"
                    placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                    marginBottom={30}
                />
                <Button onClick={join} content="감귤마켓 시작하기" />
            </ProfileWrapper>
        </Wrapper>
    );
}

export default JoinPage;
