import Cafes from "@/app/models/Cafes";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { MongoError } from "mongodb";

//カフェの一覧を取得
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
      return NextResponse.json(
        { error: "原因不明のエラーです" },
        { status: 500 }
      );
    }
  }
}

//カフェの登録
export async function POST(req: Request) {
  await dbConnect();
  try {
    const data = await req.json();
    const cafe = new Cafes(data);
    await cafe.save(data);
  } catch (err) {
    if (err instanceof MongoError) {
      return NextResponse.json({ error: `MongoDB: error ${err.message}` });
    } else if (err instanceof Error) {
      return NextResponse.json({ error: `Error: error ${err.message}` });
    } else {
      return NextResponse.json(
        { error: "原因不明のエラーです" },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "カフェが正常に登録されました" });
}
