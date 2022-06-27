import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  //console.log(router);

  /* // inline style css, 조건부 css
  return (
    <nav>
      <Link href='/'>
        <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a>
      </Link>
      <Link href='/about'>
        <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>
          About
        </a>
      </Link>
    </nav>
  ); */

  //  module style css , 상시 + 조건문 css 삽입 👉 2가지 방법
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a
          className={` ${styles.link} ${
            router.pathname === '/' && styles.active
          }`}
        >
          Home
        </a>
      </Link>
      <Link href='/about'>
        <a
          className={[
            styles.link,
            router.pathname === '/about' && styles.active,
          ].join(' ')}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
