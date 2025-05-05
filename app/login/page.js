"use client";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const LoginBox = styled.div`
  width: 100%;
  padding: 40px 40px 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Grand Hotel', cursive, sans-serif;
  font-size: 44px;
  margin-bottom: 32px;
  margin-top: 8px;
  color: #111;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 8px;
  padding: 10px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background: #fafafa;
  font-size: 15px;
`;

const LoginBtn = styled.button`
  width: 100%;
  background: #4cb5f9;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  font-weight: 600;
  font-size: 16px;
  margin: 8px 0 12px 0;
`;

const Forgot = styled.a`
  color: #00376b;
  font-size: 13px;
  text-align: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

const SignupBox = styled.div`
  width: 350px;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 20px 40px;
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color: #111;
`;

const SignupLink = styled.a`
  color: #0095f6;
  font-weight: 600;
  margin-left: 4px;
  cursor: pointer;
`;

export default function LoginPage() {
  return (
    <Wrapper>
      <LoginBox>
        <Logo><Link href="/">HyoPlanner</Link></Logo>
        <Input placeholder="ID" />
        <Input type="password" placeholder="PW" />
        <LoginBtn>로그인</LoginBtn>
        <Forgot>비밀번호를 잊으셨나요?</Forgot>
      </LoginBox>
      <SignupBox>
        계정이 없으신가요?
        <SignupLink>회원가입</SignupLink>
      </SignupBox>
    </Wrapper>
  );
} 