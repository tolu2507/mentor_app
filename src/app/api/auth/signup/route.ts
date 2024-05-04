import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  return NextResponse.json([]);
}

export async function POST(request: Request, response: Response) {
  const supabase = createClient(cookies());
  const datas = await request.json();

  let { data, error } = await supabase.auth.signUp({
    email: datas.email,
    password: datas.password,
  });

  if (error) {
    return NextResponse.json({ status: error.status, error: error.message });
  }
  const res = data.user;

  return NextResponse.json({ status: 201, data: res });
}
