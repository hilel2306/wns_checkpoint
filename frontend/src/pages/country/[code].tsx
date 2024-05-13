import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";



const GET_COUNTRY = gql`
    query Countries($code: String!){
      country(code: $code) {
        name
        continent {
          name
        }
        emoji
      }
  }
`;


const Country = () => {
  const router = useRouter();
  const { code } = router.query


  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { country } = data

  return (
    <div className="flex justify-center items-center h-screen">
      <div className='flex flex-col items-center border-2 rounded-md p-8' >
        <p> {country.emoji}</p>
        <p>Name: {country.name} {country.code}</p>
        <p>Continent {country.continent.name}</p>

      </div>
    </div>
  )
}




export default Country