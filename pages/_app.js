import Layout from '../components/Layout';
import '../styles/globals.css';

// 전역 컨포넌트
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <span>hello</span> */}
    </Layout>
  );
}

/* 
<style jsx global>{`
a {
  color: #fff;
}
h1 {
  color: red;
}
`}</style> */
