import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import { Portfolio } from "@/types";
import {
  createOrUpdatePortfolio,
  getPortfolio,
} from "@/services/portfolio.services";

export async function GET() {
  await connectToDB();

  const portfolio = await getPortfolio();

  console.log("--------In GET Request----------");

  return NextResponse.json({ portfolio });
}

export async function POST(req: NextRequest) {
  await connectToDB();

  const portfolioBody: Portfolio = await req.json();

  const portfolio = await createOrUpdatePortfolio(portfolioBody);

  return NextResponse.json({ isSuccess: true, portfolio });
}
