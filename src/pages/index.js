import { fetchBooks } from '@/api';
import Seo from '@/components/Seo';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function index() {
  const [data, setData] = useState()
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(' https://books-api.nomadcoders.workers.dev/lists')
      ).json();
      setData(results);
    })();
  }, [data]);

  return (
    <>
      <Seo title='Home' />
      <div className='container'>
        <h1>The New York Times Best Seller Explorer</h1>
        {!data && <h4>Loading...</h4>}
        <div className='book-list'>
          {data?.map((book) => (
            <Link
              href={{
                pathname: '/list/${book.list_name_encoded}',
                query: { name: book?.list_name_encoded },
              }}
              key={book?.list_name}>
              <div className='book-name'>{book?.display_name} → </div>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 80%;
          margin: 0 auto;
          box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
          padding: 30px;
        }
        h1 {
          font-size: 48px;
        }
        .book-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 30px;          
        }
        .book-name{
          border: 1px solid black;
          padding: 20px;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}
