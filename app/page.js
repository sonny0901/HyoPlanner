"use client";
import styled from "styled-components";
import Calendar from "./components/Calendar/Calendar";
import LoginButton from "./components/Auth/LoginButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #fff;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111;
`;
const TopBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 1rem 1rem 0
`;

export default function Home() {
  const router = useRouter();
  return (
    <Page>
      <TopBar>
        <Title><Link href="/">HyoPlanner</Link></Title>
        <LoginButton onClick={() => router.push("/login")} />
      </TopBar>
      <Calendar />
    </Page>
  );
}
