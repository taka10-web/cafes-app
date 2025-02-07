import Cafes from "@/app/models/Cafes";
import dbConnect from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const { id } = await params;

    const cafe = await Cafes.findById(id).populate("reviews");
    console.log(cafe);

    console.log(`${cafe}の取得に成功`);
    if (!cafe) {
      return NextResponse.json(
        { error: "カフェが見つかりません" },
        { status: 404 }
      );
    }
    return NextResponse.json(cafe);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
