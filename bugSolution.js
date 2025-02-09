// bug.js
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const handleDeepLink = (event) => {
      setDeepLink(event.url);
    };

    Linking.addEventListener('url', handleDeepLink);
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  useEffect(() => {
    const getInitialUrl = async () => {
      let initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        setDeepLink(initialUrl);
      }
    };
    getInitialUrl();
  }, []);

  return (
    <View>
      {deepLink ? <Text>Deep Link: {deepLink}</Text> : <Text>No Deep Link</Text>}
    </View>
  );
};

export default App;

// bugSolution.js
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const handleDeepLink = (event) => {
      // Use a more robust way to check if the event is a deeplink, add specific deeplink check
      if (event.url.startsWith('your-app-scheme')) {
        setDeepLink(event.url);
      }
    };

    Linking.addEventListener('url', handleDeepLink);
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  useEffect(() => {
    const getInitialUrl = async () => {
      let initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        setDeepLink(initialUrl);
      }
    };
    getInitialUrl();
  }, []);

  return (
    <View>
      {deepLink ? <Text>Deep Link: {deepLink}</Text> : <Text>No Deep Link</Text>}
    </View>
  );
};

export default App;