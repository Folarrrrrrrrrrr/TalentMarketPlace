import { NextResponse } from "next/server";
import { mockJobs } from "@/app/lib/mockJobs";

export async function GET() {
  return NextResponse.json({ jobs: mockJobs });
}
