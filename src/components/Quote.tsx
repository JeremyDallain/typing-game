import { useQuery } from "react-query";

const fetchQuote = async () => {
  return fetch('https://api.kanye.rest').then(async (res) => res.json());
};

export const Quote = () => {

  const queryKey = ["quotes"]
  const { data, isLoading, isError } = useQuery(queryKey, fetchQuote)
  console.log(data);
  


  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data && <p>{data.quote}</p>}
    </>
  )
}
