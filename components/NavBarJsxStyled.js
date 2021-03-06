import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  // styled jsx
  //.active {color: ${props.color};}
  return (
    <nav>
      <Link href='/'>
        <a className={router.pathname === '/' && 'active'}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={router.pathname === '/about' && 'active'}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }

        a {
          text-decoration: none;
          font-size: 20px;
        }

        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
