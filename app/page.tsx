import GridOptions from "@/app/components/GridOptions";


export default function Home() {
  return (
    <main className="">
      <div className="gap-6 m-6 grid grid-cols-1 grid-flow-row-dense md:grid-col-4">
        <GridOptions
          title="Sweet gifts for less."
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full  "
        />

        <GridOptions
          title="Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          className="bg-green-200 col-span-2 row-span-2"
        />

        <GridOptions
          title="Shop Home"
          image="https://links.papareact.com/szu"
          className="bg-pink-200 row-span-2"
        />

        <GridOptions
          title="Shop Electronics"
          image="https://links.papareact.com/n7r"
          className="bg-gray-200 h-64"
        />

        <GridOptions
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-maroon-200 h-64 col-span-2"
        />

     

        <GridOptions
          title="All you need for MatchDay"
          image="https://links.papareact.com/m8e"
          className="bg-neutral-200 h-64 row-span-2 col-span-2"
        />
        <GridOptions
          title="Shop Gadgets"
          image="https://links.papareact.com/gs1"
          className="bg-orange-300 h-64"
        />

        <GridOptions
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-rose-100 h-64"
        />

        <GridOptions
          title="Shop Sport"
          image="https://links.papareact.com/sq2"
          className="bg-slate-100 h-64"
        />

        <GridOptions
          title="Enjoy Free Shipping"
          image="https://links.papareact.com/9fh"
          className="bg-slate-200 h-64 "
        />

        <GridOptions
          title="Flash Deals."
          image="https://links.papareact.com/qx7"
          className="bg-maroon-200 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
