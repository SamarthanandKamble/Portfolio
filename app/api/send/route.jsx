import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  console.log("Form Data request:", request);
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    console.log("body:", body);
    const { email, name, message, phone, subject } = body;
    const { data } = resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "samarthanandkamble1002@gmail.com",
      subject: "Hello World",
      html: `<div><h1>Name:${name} , Email:${email}</h1>
      <p>${message}</p></div>`,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.error({ error });
  }
}
