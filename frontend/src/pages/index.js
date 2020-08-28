import Head from 'next/head';
import withLayout from '../utils/withLayout';
import Layout from '../components/Layout';

function Home() {
  return (
    <div className="homepage">
      <img
        src="/images/business-card.jpg"
        alt="Business card"
        style={{ width: '100%', padding: '25px 0' }}
      />
    </div>
  );
}

export default withLayout(Layout, Home);
