import React from 'react';
// import { useQuery } from '@apollo/client';



// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="bg-yellow-500 justify-center text-center opacity-70 col-12 col-md-10 mb-3 p-3"
          
        >
          More words
        </div>
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            "Something"            
           )} */}
        </div>
      </div>
    </main>
  );
};

export default Home;
