import { Storage } from "@google-cloud/storage";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

//画像のアップロード処理
export async function POST(req: Request) {
  try {
    const storage = new Storage({
      projectId: process.env.PROJECT_ID,
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    });

    const bucketName = process.env.BUCKET_NAME! ?? "";
    const bucket = storage.bucket(bucketName);
    const { fileType } = await req.json();
    if (!fileType) {
      return NextResponse.json(
        { success: false, error: "Missing fileType" },
        { status: 400 }
      );
    }

    //ファイル名を生成
    const fileName = `uploads/${uuidv4()}.${fileType.split("/")[1]}`;
    const file = bucket.file(fileName);

    // 署名付きURLを発行（5分有効）
    const [url] = await file.getSignedUrl({
      version: "v4",
      action: "write",
      expires: Date.now() + 5 * 60 * 1000,
      contentType: fileType,
    });
    return NextResponse.json({ success: true, url, fileName });
  } catch (error) {
    console.error("Error generating signed URL:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
