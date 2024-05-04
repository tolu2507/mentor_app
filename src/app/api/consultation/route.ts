import { NextResponse } from "next/server";
import { ConsultationTypes } from "../types";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(response: Response) {
  const supabase = createClient(cookies());
  try {
    let { data: Consultation, error } = await supabase
      .from("Consultation")
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
  const datas = await request.json();
  let dataToBeInserted: ConsultationTypes = {
    name: datas.name,
    email: datas.email,
    consultation_type: datas.consultation_type,
    consultation_date: datas.consultation_date,
    minutes: datas.minutes,
    price: +datas.price,
    additional_information: datas.additional_information,
    mentor_name: datas.mentor_name,
  };
  try {
    const { data, error } = await supabase
      .from("Consultation")
      .insert([dataToBeInserted])
        .select();
      
    if (error) {
      return NextResponse.json({
        status: 401,
        error: error.message,
        hint: error.hint,
      });
    }
    return NextResponse.json({ status: 201, data: data[0] });
  } catch (error) {
    return NextResponse.json({ status: 404, error: error });
  }
}
