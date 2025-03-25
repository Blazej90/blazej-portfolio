import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const LIKE_ID = "global";

export async function GET() {
  const { data, error } = await supabase
    .from("likes")
    .select("count")
    .eq("id", LIKE_ID)
    .maybeSingle();

  if (error) {
    console.error("GET error:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }

  return NextResponse.json({ count: data?.count ?? 0 });
}

export async function POST() {
  const { data, error } = await supabase
    .from("likes")
    .select("count")
    .eq("id", LIKE_ID)
    .maybeSingle();

  if (error) {
    console.error("Fetch count error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  if (!data) {
    const { error: insertError } = await supabase
      .from("likes")
      .insert({ id: LIKE_ID, count: 1 });

    if (insertError) {
      console.error("Insert error:", insertError);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  }

  const { error: updateError } = await supabase
    .from("likes")
    .update({ count: data.count + 1 })
    .eq("id", LIKE_ID);

  if (updateError) {
    console.error("Update error:", updateError);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
