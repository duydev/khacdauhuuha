import Head from 'next/head';
import withLayout from '../utils/withLayout';
import Layout from '../components/Layout';

function Home() {
  return <div className="homepage">Hello World</div>;
}

export default withLayout(Layout, Home);
