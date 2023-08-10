import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
export default function BlogPost() {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center m-5">
        <div className="absolute bg-pink rounded-full h-[25rem] w-[25rem] ml-28"></div>
        <div className=" mt-32 z-10 flex justify-center">
          <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
            Tenniscore trend
          </h1>
        </div>
      </div>
      <p className="">
        In case you haven't noticed preppy athleisure is everywhere right now.
        Quickly coined "tenniscore," the latest street style trend is the
        perfect mix of modern-day fashion and nostalgia. In line with fashion's
        current throwback obsession, tenniscore combines modern athleisure with
        the vintage country club aesthetic. Marked by mini skirts, cable knit
        sweaters, loafers, and tube socks (all of course in white) it's an
        effortless style marriage of fashion and athletics. Undoubtedly,
        tenniscore is poised to take over this fall. With influencers and
        supermodels alike sporting the street style trend. And of course,
        vintage fanatic Bella Hadid caught on. The supermodel was recently
        spotted in New York sporting an ultra-chic Burberry mini skirt, sweater,
        and loafers, completing the look with stark white tube socks. Yet it
        hasn't just been celebrity street style, the designers themselves are
        catching wind. Most recently, Miu Miu brought their A-game to New York's
        grassy courts at the West Side Tennis Club, promoting their latest
        tennis-inspired line. It seems the latest vintage sportswear trend is
        here to stay. Here, L'OFFICIEL rounds up preppy tenniscore looks to
        channel this season.
      </p>
      <Footer></Footer>
    </div>
  );
}
