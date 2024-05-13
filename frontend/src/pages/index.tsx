import AddCountryForm from "@/components/AddCountryForm";
import CountriesList from "@/components/CountriesList";


export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center  h-screen">
      <AddCountryForm />
      <CountriesList />
    </div>
  )


    ;
}
