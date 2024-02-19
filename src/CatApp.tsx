import { useEffect, useState } from "react";

const ENDPOINT_CAT_FACT_RANDOM = "https://catfact.ninja/fact";
const ENDPOINT_CAT_IMG_WORD = "https://cataas.com/cat/says/";

export const CatApp = () => {

  const [fact, setFact] = useState()
  const [catImg, setCatImg] = useState()

  useEffect(() => {
    fetch(ENDPOINT_CAT_FACT_RANDOM)
      .then(resp => resp.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
        const firstWord = fact.split(' ').slice(0,1).join(' ');
        setCatImg(firstWord)
        console.log(firstWord);
      })
      .catch(err => console.log("Error en la primera solicitud fetch:", err))
  }, [])

  return (
    <main className="container card">
      <h1 className="card__title">Cat App</h1>
      { fact ? (
        <p className="card__text pb-2">{fact}</p>
        ) :
        <p className="card__text pb-2">Cargando...</p>
        }
      {
        catImg ? (
        <picture>
          <img className="card__image" src={`${ENDPOINT_CAT_IMG_WORD}${catImg}`} alt={`generate image with firt word: ${catImg}`} />
        </picture>
        ) :
        <p className="card__text pb-2">Cargando...</p>
      }
      
    </main>  
  );
  
}
