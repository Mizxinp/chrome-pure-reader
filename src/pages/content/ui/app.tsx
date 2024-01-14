import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('content view loaded1');
  }, []);

  return null;
  // return <div className="">content view</div>;
}
