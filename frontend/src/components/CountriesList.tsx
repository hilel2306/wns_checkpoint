import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      code
      emoji
    }
  }
`;

const CountriesList = () => {
    const { loading, error, data } = useQuery(GET_COUNTRIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className='overflow-y-auto'>
            <ul className='flex flex-col gap-4'>
                {data.countries.map((country: any, index: any) => (
                    <li className='border-2 rounded-md p-8 cursor-pointer' key={index}>
                        <Link href={`/country/${country.code}`}>  {country.name} {country.code} {country.emoji}</Link>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default CountriesList;
