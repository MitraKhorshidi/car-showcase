import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constans";
import ShowMore from "@/components/ShowMore";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    model: searchParams.model || "",
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });

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
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
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
