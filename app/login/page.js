"use client";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;

const LoginBox = styled.div`
  width: 350px;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
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
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #3897f0;
  }
`;

const Or = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 16px 0 12px 0;
  color: #888;
  font-size: 13px;
  font-weight: 500;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: #dbdbdb;
`;

const FacebookBtn = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #385185;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  cursor: pointer;
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
`;

const SignupLink = styled.a`
  color: #0095f6;
  font-weight: 600;
  margin-left: 4px;
  cursor: pointer;
`;

const Message = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "error"
})`
  color: ${({ error }) => (error ? "#e74c3c" : "#27ae60")};
  font-size: 14px;
  margin-bottom: 8px;
  min-height: 18px;
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('hyoplanner_user', JSON.stringify(data.user));
        router.push("/");
      } else {
        setMessage(data.error || "로그인 실패");
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
      <LoginBox>
        <Logo>Instagram</Logo>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Input
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
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
          <LoginBtn type="submit" disabled={loading}>{loading ? "로그인 중..." : "로그인"}</LoginBtn>
          <Message error={error}>{message}</Message>
        </form>
        <Or>
          <Line />
          <span style={{ margin: '0 16px' }}>또는</span>
          <Line />
        </Or>
        <FacebookBtn>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" alt="facebook" width={18} height={18} />
          Facebook으로 로그인
        </FacebookBtn>
        <Forgot>비밀번호를 잊으셨나요?</Forgot>
      </LoginBox>
      <SignupBox>
        계정이 없으신가요?
        <SignupLink href="/register">가입하기</SignupLink>
      </SignupBox>
    </Wrapper>
  );
} 