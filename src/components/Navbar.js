import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href='/'>
        <span>Home</span>
      </Link>
      <Link href='/about'>
        <span>About</span>
      </Link>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px;
            border: 1px solid black;
          }
          span {
            font-size: 24px;
            font-weight: 600;
            text-decoration: none;
            border-bottom: 2px solid #ffa530;
          }
        `}
      </style>
    </nav>
  );
}