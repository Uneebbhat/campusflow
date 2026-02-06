import AdminDTO from "@/app/dto/AdminDTO.dto";
import generateToken from "@/helper/generateToken";
import { hashedPassword } from "@/helper/passwordHashing";
import prisma from "@/lib/prisma";
import AdminSignupSchema from "@/schema/AdminSignupSchema.schema";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies()
    const body = await req.json()

    const { adminName, adminEmail, phoneNumber, password } = body

    const validateBody = await AdminSignupSchema.safeParse(body)
    if (validateBody.error) {
      return NextResponse.json({
        error: validateBody.error.issues[0].message,
        status: 400
      }, { status: 400 })
    }

    const existingAdmin = await prisma.admin.findUnique({
      where: {
        adminEmail
      }
    })
    if (existingAdmin) {
      return NextResponse.json({
        error: "Admin already exists",
        status: 409
      }, { status: 409 })
    }

    const hashPassword = await hashedPassword(password)

    const newAdmin = await prisma.admin.create({
      data: {
        adminName,
        adminEmail,
        phoneNumber,
        password: hashPassword,
      }
    })
    if (!newAdmin) {
      return NextResponse.json({
        error: "An unknown error occurred while creating admin",
        status: 400
      }, { status: 400 })
    }

    const token = await generateToken(newAdmin)

    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })

    const adminDTO = new AdminDTO(newAdmin)

    return NextResponse.json({
      message: "Admin created successfully",
      data: adminDTO,
      status: 201,
      token,
    }, { status: 201 })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        error: `Internal Server Error ${error.message}`,
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