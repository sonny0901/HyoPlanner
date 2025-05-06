import { NextResponse } from "next/server";
import { connectDB } from "../db";
import User from "../user.model";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "이메일과 비밀번호는 필수입니다." }, { status: 400 });
    }
    await connectDB();
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "이미 가입된 이메일입니다." }, { status: 409 });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed, name });
    return NextResponse.json({ success: true, user: { email: user.email, name: user.name, createdAt: user.createdAt } });
  } catch (e) {
    return NextResponse.json({ error: "회원가입 중 오류가 발생했습니다." }, { status: 500 });
  }
} 