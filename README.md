# google-classroom-share

<a><img alt="npm" src="https://img.shields.io/npm/v/google-classroom-share?&style=flat-square"></a>
<a><img alt="node-current" src="https://img.shields.io/node/v/google-classroom-share?style=flat-square"></a>
<a><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/robertov8/google-classroom-share?style=flat-square"></a>
<a><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/google-classroom?style=flat-square"></a>
<a><img alt="npm" src="https://img.shields.io/npm/dm/google-classroom"></a>
<a><img alt="GitHub issues" src="https://img.shields.io/github/issues/robertov8/google-classroom"></a>
<a><img alt="NPM" src="https://img.shields.io/npm/l/google-classroom"></a>
<a><img alt="GitHub stars" src="https://img.shields.io/github/stars/robertov8/google-classroom?style=flat-square"></a>

You can add and customize the Classroom share button to meet the needs of your 
website, such as modifying the button size and load technique. By adding the Classroom
share button to your website, you allow your users to share your content to their 
classes and drive traffic to your site.

# Install 
```
yarn add google-classroom-share react-load-script
```

# Demo
![](./assets/sharebutton.gif)
https://developers.google.com/classroom/guides/sharebutton


# Usage
```javascript
import React from 'react';

import GoogleShareToClassRoom from '../index';

function App() {
  return (
    <GoogleShareToClassRoom
      body="Example Body"
      itemType="assignment"
      url="https://developers.google.com/classroom"
      size={50}
      title="Example Title"
      theme="light"
      onShare={(type) => console.log(`GoogleShareToClassRoom:${type}`)}
      onShareComplete={() => console.log('GoogleShareToClassRoom:onShareComplete')}
      onShareStart={() => console.log('GoogleShareToClassRoom:onShareStart')}
    />
  );
}

export default App;
```

## Props
| Prop            |  Type    | Description
| --------------- | -------- | -----------
| body            | String   | Sets the item body text to share to Classroom.
| itemType        | String   | "announcement, assignment, material, question" This will automatically show the creation dialog after the user first selects a course (or immediately if courseid is also specified).
| url             | String   | Sets the URL to share to Classroom. If you set this attribute by using gapi.sharetoclassroom.render, you should not escape the URL.
| size            | Number   | Sets the size in pixels of the share button. If the size is omitted, the button uses 32.
| title           | String   | Sets the item title to share to Classroom.
| theme           | String   | Sets the button icon for the selected theme.
| onShare         | String   | If specified, sets the name of a function is called when the share dialog opens and user finishes sharing your link.
| onShareComplete | Function | If specified, sets the name of a function is called when the user finishes sharing your link.
| onShareStart    | Function | If specified, sets the name of a function is called when the share dialog opens. 
