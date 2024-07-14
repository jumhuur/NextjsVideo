import { NextResponse } from "next/server";
export const POST = async () => {
  try {
    const Videos = await fetch(
      "https://dev.vdocipher.com/api/videos/3f7b315eeb824f6cb4552e692b437345/otp",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Apisecret ${process.env.TOKEN_ID}`,
        },
      }
    );

    const data = await Videos.json();
    console.log(data);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (Error: any) {
    return new NextResponse(Error.message, { status: 400 });
  }
};
