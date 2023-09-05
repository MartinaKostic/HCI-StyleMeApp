import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";

const getData = async (id: any) => {
  const response = await fetch(`http://localhost:3003/blogs/${id}`);
  return response.json();
};

export default async function BlogPost({ params }: Params) {
  const blog = await getData(params.slug);

  console.log(blog);

  return (
    <div className="min-h-screen">
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="flex justify-center m-5">
        <div className=" mt-32 z-10 grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              {blog.title}
            </h1>
          </div>
          <div className="col-start-2 col-span-2">
            <p className="text-center mt-10"> {blog.intro}</p>
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
          <ol className="list-decimal font-semibold pl-6">
            <li className="mb-4 ">
              <p className="text-xl font-semibold">{blog.content[1].point}</p>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
              </p>
              {/* You can also include images within each point */}
              {/* <img
                src="/path/to/your/image.jpg"
                alt="Point 1 Image"
                className="mt-4"
              /> */}
            </li>
            {/* Repeat the structure for points 2 to 5 */}
            <li className="mb-4 ">
              <p className="text-xl font-semibold">
                Describe your second styling point here.
              </p>
              <p className="text-base font-normal">
                {blog.content[1].description}
              </p>
              {/* Image for Point 2 */}
            </li>
            {/* Repeat for points  to 5 */}
            <li className="mb-4 ">
              <p className="text-xl font-semibold">
                Describe your second styling point here.
              </p>
              {/* Image for Point 2 */}
            </li>
            <li className="mb-4 ">
              <p className="text-xl font-semibold">
                Describe your second styling point here.
              </p>
              {/* Image for Point 2 */}
            </li>
          </ol>
        </section>

        {/* Conclusion
          <section>
            <h2 className="text-3xl font-semibold">Conclusion</h2>
            <p>
              Summarize the key takeaways from your blog post and encourage
              readers to take action or explore related content.
            </p>
          </section> */}
      </div>
      <Footer></Footer>
    </div>
  );
}
