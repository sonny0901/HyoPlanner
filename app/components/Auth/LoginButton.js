"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledLoginButton = styled.button`
  padding: 8px 20px;
  border-radius: 24px;
  border: 1px solid #eee;
  background: #fff;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  color: #111;
`;

export default function LoginButton({ onClick }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('hyoplanner_user'));
    const onStorage = () => setLoggedIn(!!localStorage.getItem('hyoplanner_user'));
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleClick = () => {
    if (loggedIn) {
      localStorage.removeItem('hyoplanner_user');
      window.location.reload();
    } else {
      onClick && onClick();
    }
  };

  return <StyledLoginButton onClick={handleClick}>{loggedIn ? '로그아웃' : '로그인'}</StyledLoginButton>;
} 