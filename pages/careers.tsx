import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: 'https://www.notion.so/potcast-careers/33bcf74995e242b3a2456b2f58f1a184?v=4832f153258e413bb5823583d9bca47d',
      permanent: false, // set to true if this is a permanent redirect
    },
  };
};

const CareersPage = () => {
  return null; // The component doesn't need to render anything
};

export default CareersPage;
