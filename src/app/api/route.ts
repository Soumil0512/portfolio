import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import { Portfolio } from "@/types";
import {
  createOrUpdatePortfolio,
  getPortfolio,
} from "@/services/portfolio.services";
import { headers } from "next/headers";

export async function GET() {
  const headerList = await headers();
  const authorization = headerList.get("Authorization");
  if (authorization !== process.env.AUTHORIZATION) {
    return NextResponse.json({ isSuccess: false, msg: "Authorization failed" });
  }

  await connectToDB();

  const portfolio = await getPortfolio();

  return NextResponse.json({ isSuccess: true, portfolio });
}

export async function POST(req: NextRequest) {
  const headerList = await headers();
  const authorization = headerList.get("Authorization");
  if (authorization !== process.env.AUTHORIZATION) {
    return NextResponse.json({ isSuccess: false, msg: "Authorization failed" });
  }

  await connectToDB();

  const portfolioBody: Portfolio = await req.json();

  const portfolio = await createOrUpdatePortfolio(portfolioBody);

  return NextResponse.json({ isSuccess: true, portfolio });
}
