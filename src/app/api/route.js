// app/api/photos/route.js (ou route.ts)

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_API_KEY,
	api_secret: process.env.NEXT_PUBLIC_API_SECRET,
});


export async function GET() {
	console.log(cloudinary.config());
	try {
		const result = await cloudinary.search
			.expression("folder:photos/*")
			.sort_by("public_id", "desc")
			.with_field("context")
			.max_results(100)
			.execute();

		const orderedPhotos = {};

		result.resources.forEach((element) => {
			const folder = element.asset_folder.split("/")[1];
			orderedPhotos[folder] = orderedPhotos[folder] || [];
			orderedPhotos[folder].push(element);
		});

		return NextResponse.json(orderedPhotos, {
			status: 200,
		});
	} catch (err) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
