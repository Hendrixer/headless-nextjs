import { NextRequest } from "next/server"
import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export const GET = (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")

  if (!secret) {
    return new Response("No", { status: 400 })
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("No", { status: 401 })
  }

  draftMode().enable()
  redirect("/")
}
