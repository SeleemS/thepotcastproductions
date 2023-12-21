import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: 'https://potcast-careers.notion.site/Job-Board-c0c376a3672e4b2591d57c134a8e96de',
      permanent: false, // set to true if this is a permanent redirect
    },
  };
};

const CareersPage = () => {
  return null; // The component doesn't need to render anything
};

export default CareersPage;
