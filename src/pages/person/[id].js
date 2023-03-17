import { useRouter } from 'next/router';

export default function Detail({ data }) {
  console.log(data)
  return (
    <>
      <div className='container'>
        <img src={data.squareImage} />
        <h2>{data.name}</h2>
        <span>Networth: {Math.floor(data.netWorth)} Billion</span>
        <h3>Country :{data.country} </h3>
        <h3>Industry :{data.industries}</h3>
        <p>{data.bio}</p>
      </div>
      <div className='container2'>
        <h1>Financial Assets</h1>
        <div className='financial'>
          {data.financialAssets.map((value) => (
            <div className='financial_desc' key={value.id}>
              <span>Ticker: {value?.ticker}</span>
              <span>Shares: {value.sharePrice}</span>
              <span>
                {value.currentPrice
                  ? `Excesie Price :  ${Math.floor(value.currentPrice)}`
                  : null}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding: 20px;
          background-color: darkgray;
          margin-bottom: 50px;
        }
        .container img {
          width: 250px;
          height: 250px;
           {
            /* background-position: center center;
          background-size: cover; */
          }
        }
        .container h2 {
          font-size: 20px;
          font-weight: 600;
          padding: 10px 0;
        }
        .container h3 {
          margin-top: 5px;
        }
        .container p {
          margin-top: 5px;
          line-height: 20px;
        }
        .container2 {
          margin: 0 auto;
          width: 700px;
          padding: 20px;
          background-color: darkgray;
        }
        .container2 h1 {
          font-size: 20px;
          font-weight: 600;
          padding: 10px 0;
        }
        .financial {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .financial_desc {
          display: flex;
          flex-direction: column;
          border: 1px solid black;
          padding: 5px;
        }
        .financial_desc span{
          padding: 3px 0;
          font-size: 12px;
        }
      `}</style>
    </>
  );
}
export async function getServerSideProps({ query: { id } }) {
  const data = await (await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)).json()
    return {
      props: {
        data:data
      }
    }
}

