import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-10 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">Car Catelog</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="feul" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-warpper">
              {allCars.map((car)=>(<CarCard key={car} car={car}/>))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h3 className="text-black font-bold text-xl">
              Opps, There is no result !
            </h3>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
