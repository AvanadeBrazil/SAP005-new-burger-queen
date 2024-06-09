import React from 'react';
import { NextPage } from 'next';
import MainApp from '../components/MainApp/MainApp';
import reportWebVitals from '../reportWebVitals';

const IndexPage: NextPage = () => {
  return (
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  );
};

export default IndexPage;
reportWebVitals(console.log);
