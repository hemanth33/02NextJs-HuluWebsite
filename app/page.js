import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "@/utils/requests";

export default async function Home() {

 const data =await getData();
  return (
    <div>
      <Header />
      <Nav />
      <Results results={data.props.results} />
    </div>
  );
};

async function getData() {

  const urlToFetch = requests.fetchTrending.url;

  // const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${urlToFetch}`).then(
    (res) => res.json()
  );

  return {
    props: {
      results: JSON.parse(JSON.stringify(request.results)),
    },
  };
}


