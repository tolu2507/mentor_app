import { NextResponse } from "next/server";
import { MessagesTypes } from "../types";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(response: Response) {
  const supabase = createClient(cookies());
  try {
    let { data: Consultation, error } = await supabase
      .from("Messages")
      .select("*");

    if (error) {
      return NextResponse.json(error);
    }
    return NextResponse.json(Consultation);
  } catch (error) {
    return NextResponse.json({ status: 404, error: error });
  }
}

export async function POST(request: Request, response: Response) {
  const supabase = createClient(cookies());
  const datas: MessagesTypes = await request.json();
  let dataToBeInserted = {
    name: datas.name,
    email: datas.email,
    message_description: datas.description,
    subject: datas.subject,
  };
  try {
    const { data, error } = await supabase
      .from("Messages")
      .insert([dataToBeInserted])
      .select();

    if (error) {
      console.log("these are the messages error ", error);
      return NextResponse.json({
        status: 401,
        error: error.message,
        hint: error.hint,
      });
    }
    console.log("these are the messages ", data);
    return NextResponse.json({ status: 201, data: data[0] });
  } catch (error) {
    return NextResponse.json({ status: 404, error: error });
  }
}
