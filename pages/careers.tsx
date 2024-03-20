import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: 'https://thepotcastproductions.notion.site/Hiring-3a9f64f8c693463ab4557287dd0d85b8?pvs=4',
      permanent: true, // Set to true if this is a permanent redirect
    },
  };
};

const CareersPage = () => {
  return null; // The component doesn't need to render anything
};

export default CareersPage;
