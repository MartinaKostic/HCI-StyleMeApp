import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function BlogPost({ params }: Params) {
  return (
    <div>
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="flex justify-center m-5">
        <div className=" mt-32 z-10 grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              {params.slug}
            </h1>
          </div>
          <div className="col-start-2 col-span-2">
            <p className="text-center mt-10">INTRO</p>
            <div className="h-72 w-128 relative col-start-6 col-span-4">
              PICTURE
              <Image
                src="/kat.jpg"
                alt="blog_image"
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Blog content */}
      <div className="container mx-auto py-8">
        {/* Blog points */}
        <section className="mb-8">
          <ol className="list-decimal pl-6">
            <li className="mb-4">
              <p>Point 1: Describe your first styling point here.</p>
              {/* You can also include images within each point */}
              {/* <img
                src="/path/to/your/image.jpg"
                alt="Point 1 Image"
                className="mt-4"
              /> */}
            </li>
            {/* Repeat the structure for points 2 to 5 */}
            <li className="mb-4">
              <p>Point 2: Describe your second styling point here.</p>
              {/* Image for Point 2 */}
            </li>
            {/* Repeat for points 3 to 5 */}
          </ol>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-semibold">Conclusion</h2>
          <p>
            Summarize the key takeaways from your blog post and encourage
            readers to take action or explore related content.
          </p>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
