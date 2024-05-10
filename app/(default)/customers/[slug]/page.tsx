export const metadata = {
  title: "Customer Post - Stellar",
  description: "Page description",
}

import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import Illustration from "@/public/images/page-illustration.svg"
import CustomerBadge from "@/public/images/customer-badge.svg"
import Particles from "@/components/particles"
import RelatedPosts from "./related-posts"
import { getCusomterPost, getCustomerPostsSlugs } from "@/content/queries"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const data = await getCustomerPostsSlugs()

  return data.customerPostCollection.items.map((post) => ({
    slug: post.slug,
  }))
}

export default async function CustomerSingle({ params }) {
  const data = await getCusomterPost(params.slug)
  const post = data.customerPostCollection.items[0]

  if (!post) {
    notFound()
  }

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div
        className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={1440}
          height={427}
          alt="Page Illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
          <div className="md:flex md:justify-between">
            {/* Page content */}
            <div className="md:grow pb-12 md:pb-20">
              <div className="max-w-3xl">
                <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
                  <div className="mb-4">
                    <Link
                      className="inline-flex text-sm font-medium text-purple-500 group"
                      href="/customers"
                    >
                      <span className="tracking-normal group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">
                        &lt;-
                      </span>{" "}
                      Go Back
                    </Link>
                  </div>

                  <header>
                    <h1 className="h2 inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                      {post.title}
                    </h1>
                    <div className="text-sm flex items-center space-x-4 mb-8">
                      <img
                        className="rounded-full"
                        src="../images/customer-avatar-03.jpg"
                        width="32"
                        height="32"
                        alt="Customer Avatar 03"
                      />
                      <div>
                        <div className="text-slate-300 font-medium">
                          Becky Taylor
                        </div>
                        <div className="text-slate-500">
                          Product Marketing Manager
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* Post content */}
                  <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
                    {documentToReactComponents(post.body.json)}
                  </div>
                </article>

                <RelatedPosts />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:w-64 lg:w-80 md:shrink-0 md:pt-[3.75rem] lg:pt-0 pb-12 md:pb-20">
              <div className="sticky top-6 md:pl-6 lg:pl-10">
                {/* Sidebar content */}
                <div className="space-y-6">
                  {/* Widget */}
                  <div className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800">
                    <div className="px-5 py-6">
                      <div className="mb-5">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={CustomerBadge}
                            width={64}
                            height={64}
                            alt="Customer badge"
                          />
                          <div className="text-lg font-semibold text-slate-100">
                            Airbnb Inc.
                          </div>
                        </div>
                      </div>
                      <ul className="text-sm">
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Location</span>
                          <span className="text-slate-300 font-medium">
                            San Francisco
                          </span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Website</span>
                          <a
                            className="text-purple-500 font-medium flex items-center space-x-1"
                            href="#0"
                          >
                            <span>airbnb.com</span>
                            <svg
                              className="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="9"
                            >
                              <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Industry</span>
                          <span className="text-slate-300 font-medium">
                            Hospitality
                          </span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Product</span>
                          <span className="text-slate-300 font-medium">
                            Stellar X
                          </span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Impact</span>
                          <span className="text-slate-300 font-medium">
                            +7% new hosts
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
