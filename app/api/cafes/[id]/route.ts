import Cafes from "@/app/models/Cafes";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        const cafes = await Cafes.find({});
        console.log(`${cafes}の取得に成功`);
        
        return NextResponse.json(cafes);   
    } catch (err: any) {
        return NextResponse.json({ error: err.message })
    }

}