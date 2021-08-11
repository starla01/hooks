import { useEffect } from 'react';

export default function useSearch({strText, setListItems, history}) {
  const uri = `https://api.mercadolibre.com/sites/MLA/search?q=:${strText}&limit=12`;

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if(strText !== '') {
        fetch(uri, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        })
        .then((res) => res.json())
        .then((res) => {
          setListItems(res.results);
          res.results && history.push(`/items?search=${strText}`);
        })
      }
    }, 2000);
    return () => {
      clearTimeout(delaySearch);
    }
  }, [strText, history, setListItems, uri])
}
