export default function about() {
  return (
    <div>
      <h1>About US</h1>
      <p>
        Welcome to the officaial explorer for The New York Times Best Seller
        list expolore
      </p>
      <p>We hope you enjoy your stay!</p>
      <style jsx>
        {`
          div {
            width: 70%;
            height: 130px;
            margin: 0 auto;
            box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
            padding: 20px;
          }
          h1 {
            font-size: 32px;
            font-weight: 600;
            margin-bottom: 20px;
          }

          p {
            line-height: 25px;
          }
        `}
      </style>
    </div>
  );
}
