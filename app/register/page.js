"use client";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;

const RegisterBox = styled.div`
  width: 350px;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 40px 40px 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 8px;
  padding: 10px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background: #fafafa;
  font-size: 15px;
  color: #111;
`;

const RegisterBtn = styled.button`
  width: 100%;
  background: #4cb5f9;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  font-weight: 600;
  font-size: 16px;
  margin: 8px 0 12px 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #3897f0;
  }
`;

const Message = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "error"
})`
  color: ${({ error }) => (error ? "#e74c3c" : "#27ae60")};
  font-size: 14px;
  margin-bottom: 8px;
  min-height: 18px;
`;

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("회원가입이 완료되었습니다! 로그인 해주세요.");
        setEmail(""); setPassword(""); setName("");
      } else {
        setMessage(data.error || "회원가입 실패");
        setError(true);
      }
    } catch {
      setMessage("서버 오류가 발생했습니다.");
      setError(true);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <RegisterBox>
        <Title>회원가입</Title>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="이름 (선택)"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Message error={error}>{message}</Message>
          <RegisterBtn type="submit" disabled={loading}>{loading ? "가입 중..." : "회원가입"}</RegisterBtn>
        </form>
      </RegisterBox>
    </Wrapper>
  );
} 