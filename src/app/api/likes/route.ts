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
  const { data, error } = await supabase.rpc("increment_likes", {
    like_id: LIKE_ID,
  });

  if (error) {
    console.error("Increment error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true, count: data });
}
