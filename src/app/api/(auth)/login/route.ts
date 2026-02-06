import AdminDTO from "@/app/dto/AdminDTO.dto";
import generateToken from "@/helper/generateToken";
import { comparePassword } from "@/helper/passwordHashing";
import prisma from "@/lib/prisma";
import AdminLoginSchema from "@/schema/AdminLoginSchema.schema";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const body = await req.json()

    const { adminEmail, password } = body

    const validateBody = await AdminLoginSchema.safeParse(body)
    if (validateBody.error) {
      return NextResponse.json({
        error: validateBody.error.issues[0].message,
        status: 400
      }, { status: 400 })
    }

    const admin = await prisma.admin.findUnique({
      where: {
        adminEmail
      }
    })
    if (!admin) {
      return NextResponse.json({
        error: "Admin not found",
        status: 404
      }, { status: 404 })
    }

    const decryptPass = await comparePassword(password, admin.password)
    if (!decryptPass) {
      return NextResponse.json({
        error: "Invalid credentials",
        status: 400
      }, { status: 400 })
    }

    const token = await generateToken(admin)
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })

    const adminDTO = new AdminDTO(admin)

    return NextResponse.json({
      message: "Admin logged in successfully",
      data: adminDTO,
      status: 200,
      token,
    }, { status: 200 })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        error: `Internal Server Error: ${error.message}`,
        status: 500
      }, { status: 500 })
    } else {
      return NextResponse.json({
        error: "An unknown error occurred",
        status: 500
      }, { status: 500 })
    }
  }
}