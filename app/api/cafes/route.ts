import Cafes from "@/app/models/Cafes";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { MongoError } from "mongodb";
import { redirect } from "next/navigation";

export async function GET() {
  await dbConnect();
  try {
    const cafes = await Cafes.find({});
    console.log(`${cafes}の取得に成功`);

    return NextResponse.json(cafes);
  } catch (err) {
    if (err instanceof MongoError) {
      return NextResponse.json({ error: `MongoDB: error ${err.message}` });
    } else if (err instanceof Error) {
      return NextResponse.json({ error: `Error: error ${err.message}` });
    } else {
      return NextResponse.json({ error: "原因不明のエラーです" });
    }
  }
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const data = await req.json();
    const cafe = new Cafes(data);
    console.log("データを受け取りました");
    await cafe.save(data);
  } catch (err) {
    if (err instanceof MongoError) {
      return NextResponse.json({ error: `MongoDB: error ${err.message}` });
    } else if (err instanceof Error) {
      return NextResponse.json({ error: `Error: error ${err.message}` });
    } else {
      return NextResponse.json({ error: "原因不明のエラーです" });
    }
  }
  return NextResponse.json({ message: "カフェが正常に登録されました" });
}
