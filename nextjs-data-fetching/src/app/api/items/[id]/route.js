import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
export async function GET(req,{params}) {
    const p=await params;
    const data = await dbConnect("users").findOne({ _id: new ObjectId(p.id) });
  return Response.json({ data })
}

export async function DELETE(req,params) {
    const p=await params;
   const data = await dbConnect("users").deleteOne({ _id: new ObjectId(p.id) });
  return Response.json({ params:p })
}

export async function PATCH(req,{params}) {
    const p=await params;
    const postedData = await req.json();
   const filteredData = {_id: new ObjectId(p.id) };
   const data = await dbConnect("users").updateOne(filteredData,{$set:{ ...postedData}}, {upsert: true});
   return Response.json({ data })
}