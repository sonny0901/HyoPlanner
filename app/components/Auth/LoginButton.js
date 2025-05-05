import styled from "styled-components";

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
  return <StyledLoginButton onClick={onClick}>로그인</StyledLoginButton>;
} 