import Header from "@/components/Header/Header";
import { Portfolio } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
    method: "GET",
  });

  const { portfolio }: { portfolio: Portfolio | null } = await res.json();

  if (!portfolio) throw new Error("Portfolio content missing!!!");

  return (
    <div className="duration-400 flex w-[100%] flex-col bg-primary text-secondary transition-colors delay-150">
      <Header portfolio={portfolio} />
      {/* <div className="flex h-[100%]"> */}
        <div id="ham-nav-wrapper" className="flex"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
          nunc nisl. Donec facilisis varius eros efficitur commodo. Nulla
          laoreet lorem at blandit pellentesque. Morbi erat ligula, maximus eget
          scelerisque quis, mattis sed nunc. Pellentesque accumsan sapien justo,
          eu fringilla tellus imperdiet vitae. Ut eget elementum magna. Sed
          congue sollicitudin volutpat. Fusce convallis ligula et laoreet
          condimentum. Etiam volutpat neque at odio mollis, et condimentum
          turpis pharetra. Curabitur convallis velit sed velit tincidunt, eget
          imperdiet quam feugiat. Fusce vulputate leo erat, id eleifend urna
          suscipit sed. Sed porttitor neque vitae dolor dictum, vel commodo
          neque porttitor. Vivamus non elit vitae dui commodo volutpat a vel
          erat. Donec volutpat risus eget libero eleifend rhoncus. Donec
          convallis ex eu justo laoreet, non condimentum massa mollis. Morbi eu
          felis tincidunt orci eleifend mattis et sit amet eros. Maecenas ut
          lectus sit amet diam ultricies condimentum nec a leo. Praesent rhoncus
          mattis porttitor. Suspendisse velit leo, feugiat vel purus in,
          condimentum convallis mauris. Aenean tristique mollis finibus. Donec
          arcu nisi, viverra sit amet lacus sed, vulputate iaculis diam.
          Pellentesque ac dui nec nisl blandit gravida id sed erat. Ut varius
          felis libero. Curabitur ac justo ex. Nunc malesuada sem pulvinar,
          consequat nisi id, pellentesque neque. Pellentesque molestie nunc
          facilisis elit posuere, vel laoreet dolor tristique. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Duis posuere orci ut tempus ornare. Cras gravida ex in neque
          feugiat interdum. Pellentesque rhoncus augue nec accumsan iaculis.
          Pellentesque vehicula felis vitae interdum molestie. Fusce a magna
          lorem. Sed malesuada, odio in condimentum porttitor, ipsum lorem
          dignissim velit, ut sodales enim sapien eget erat. Nunc mollis diam
          vitae sem ullamcorper, ut euismod metus aliquam. In hac habitasse
          platea dictumst. Donec tempus mi sollicitudin enim faucibus egestas.
          Nunc neque lacus, vestibulum vel pharetra eget, tempor tempus nunc.
          Nunc pretium nulla nibh, eget fringilla dolor cursus non. Duis
          accumsan lorem ut ligula venenatis tincidunt. Fusce eu eleifend
          sapien. Suspendisse vestibulum sapien eros, vel vehicula mi pretium
          sed. Integer gravida dictum leo a hendrerit. Sed venenatis ligula quis
          lorem scelerisque maximus. Fusce efficitur placerat mi a luctus. Sed
          at ex lorem. Nunc venenatis pretium risus, vel feugiat nisi feugiat
          nec. Pellentesque mattis varius tincidunt. Ut sodales finibus tempor.
        </p>
      {/* </div> */}
    </div>
  );
}
