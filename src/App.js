import React from 'react';

import GoogleShareToClassRoom from './lib/GoogleShareToClassRoom';

function App() {
  return (
    <GoogleShareToClassRoom
      body="Example Body"
      itemType="assignment"
      url="https://developers.google.com/classroom"
      size={50}
      title="Example Title"
      theme="light"
      onShareComplete={() => console.log('GoogleShareToClassRoom:onShareComplete')}
      onShareStart={() => console.log('GoogleShareToClassRoom:onShareStart')}
    />
  );
}

export default App;
