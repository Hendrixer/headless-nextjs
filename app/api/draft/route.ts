// import { getArticle } from "@/lib/api"
import { draftMode } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")
  // const slug = searchParams.get("slug")

  if (!secret) {
    return new Response("Missing parameters", { status: 400 })
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 })
  }

  // const article = await getArticle(slug)

  // if (!article) {
  //   return new Response("Article not found", { status: 404 })
  // }

  draftMode().enable()
  console.log("draft")
  redirect(`/`)
}
