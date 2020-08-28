import Head from 'next/head';
import withLayout from '../utils/withLayout';
import Layout from '../components/Layout';

function Demo() {
  return <div className="demo">Page Demo</div>;
}

export default withLayout(Layout, Demo);
