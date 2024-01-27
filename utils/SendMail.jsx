"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const SendMail = async (formData) => {
  console.log("form data:", formData);
  const resend = new Resend("re_8Rkfuqya_92vHCss4VS5vVNYFKZo2DuUu");
  try {
    const { data } = resend.emails.send({
      from: "onboarding@resend.dev",
      to: "samarthanandkamble1002@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>third email</strong>!</p>",
    });
    console.log("data:", data);
    return NextResponse.json({ data });
  } catch (error) {
    console.warn(error?.message);
    return NextResponse.error({ error });
  }
};

export default SendMail;
