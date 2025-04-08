import { NextResponse } from "next/server";

// This is a fallback for any existing references to the API
// Ideally, we should be using the static content directly from the data file
export async function GET(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

// The handler function is no longer needed as we're using static content
// from the pageContents.js file
