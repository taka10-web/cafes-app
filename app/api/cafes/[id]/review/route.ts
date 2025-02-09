import Review from "@/app/models/Review";
import dbConnect from "@/lib/dbConnect";
import Cafes from "@/app/models/Cafes";
import { NextRequest, NextResponse } from "next/server";
import { MongoError } from "mongodb";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const { id } = await params;

    const cafe = await Cafes.findById(id);
    const data = await req.json();

    const review = new Review(data);
    cafe.reviews.push(review);
    await review.save();
    await cafe.save();
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
  return NextResponse.json({ message: "レビューが正常に登録されました" });
}
