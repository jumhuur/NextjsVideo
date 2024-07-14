import { NextResponse } from "next/server";
export const POST = async (req: any, { params }) => {
  const { Id } = params;
  try {
    const Videos = await fetch(
      `https://dev.vdocipher.com/api/videos/${Id}/otp`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Apisecret ${process.env.TOKEN_ID}`,
        },
      }
    );

    const data = await Videos.json();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (Error: any) {
    return new NextResponse(Error.message, { status: 400 });
  }
};
