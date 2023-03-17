import Seo from '@/components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Detail() {
  const router = useRouter()
  const {name} = router.query || []

  const [book, setBook] = useState()
    useEffect(() => {
      (async () => {
        const { results } = await (
          await fetch(
            `https://books-api.nomadcoders.workers.dev/list?name=${name}`
          )
        ).json();
        setBook(results);
      })();
    }, [book]);

  return (
    <div>
      <Seo title={book?.display_name} />
      {!book && <h4>Loading...</h4>}
      <h1>{book?.display_name}</h1>
      <div className='book-title'>
        {book?.books?.map((book) => (
          <div key={book?.rank} className='book-box'>
            <img alt={book?.description} src={book?.book_image} />
            <h3>{book?.title}</h3>
            <h4>{book?.author}</h4>
            <Link href={book?.amazon_product_url}>
              <div className='book-link'>
                <span>Buy now →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        h1 {
          font-size: 32px;
          font-weight: 600;
          text-align: center;
          margin-top: 50px;
        }
        .book-title {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          box-sizing: border-box;
        }
        .book-box {
          box-sizing: border-box;
           {
            /* width: 370px;
          height: 590px; */
          }
        }
        .book-title img {
          width: 200px;
          height: 280px;
          background-position: center center;
          background-size: cover;
          margin-top: 20px;
          padding: 20px;
        }
        h3 {
          font-size: 24px;
          font-weight: 600;
          padding: 5px 0 0 20px;
        }
        h4 {
          font-size: 14px;
          color: blueviolet;
          padding: 5px 0 0 21px;
        }
        .book-link {
          margin: 20px;
          padding: 20px;
          border: 1px solid black;
        }
      `}</style>
    </div>
  );
}
