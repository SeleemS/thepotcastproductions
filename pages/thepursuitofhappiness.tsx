import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: 'https://noteforms.com/forms/the-w-panel-e0nvrr',
      permanent: true, // Set to true if this is a permanent redirect
    },
  };
};

const CareersPage = () => {
  return null; // The component doesn't need to render anything
};

export default CareersPage;
