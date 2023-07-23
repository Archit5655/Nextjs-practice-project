// import { connect } from "mongoose"
import connect from "@/app/utils/db";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();
  const handlepassword = await bcrypt.hash(password, 5);

  const newuser = new User({
    name,
    email,
    password: handlepassword,
  });
  try {
    await newuser.save();

    return new NextResponse("USer has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
