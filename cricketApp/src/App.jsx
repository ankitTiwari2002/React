import { useEffect } from 'react';

function App() {

  const fetchData =async()=>{
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/7607';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06ee23581fmsh38640baa6fcd32ep13f31ajsn304bef6afd39',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

useEffect(()=>{
  fetchData();
},[])

  return (
    <>
      
    </>
  )
}

export default App
