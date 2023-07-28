import SearchBar  from '@/components/SearchBar'
import CustomFliter from '@/components/CustomFliter'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-10 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='font-extrabold text-4xl'>Car Catelog</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className='home__filters'>
          <SearchBar/>
          <div className='home__filter-container'>
            <CustomFliter title="feul"/>
            <CustomFliter title="year"/>
          </div>
        </div>
      </div>
    </main>
  )
}
