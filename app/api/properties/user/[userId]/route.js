import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/user/:userId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const userId = params.userId;

    if (!userId) {
      return new Response("User ID is required", { status: 400 });
    }

    const properties = await Property.find({ owner: userId });

    return Response.json(properties);
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
