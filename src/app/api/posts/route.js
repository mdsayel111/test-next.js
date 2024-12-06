import { NextRequest, NextResponse } from "next/server";

//  function name will be req method name like GET, POST, PUT, DELETE
// api path will be http://localhost:3000/api/posts
// we can connect database like mongoDB
export const GET = async (req) => {
  console.log(req);
  return NextResponse.json({ massage: "hellow next js" });
};

export const PUT = async () => {};

export const POST = async () => {
  return NextResponse.json({ massage: "hellow next js" });
};
