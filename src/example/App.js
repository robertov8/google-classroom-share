import React, { useState } from 'react';
import GoogleShareToClassRoom from '../index';
import './styles.css';

function App() {
  const [classroom, setClassroom] = useState({
    body: 'Example Body',
    itemType: 'announcement',
    url: 'https://developers.google.com/classroom',
    size: 50,
    title: 'Example Title',
    theme: 'dark',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setClassroom({
      body: formData.get('body'),
      itemType: formData.get('itemType'),
      url: formData.get('url'),
      size: Number(formData.get('size')),
      title: formData.get('title'),
      theme: formData.get('theme'),
    });
  };

  const renderForm = () => (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <input
          type="text"
          className="form-control"
          id="body"
          name="body"
          placeholder="Enter Body"
          defaultValue={classroom.body}
        />
      </div>

      <div className="form-group">
        <label htmlFor="itemType">itemType</label>
        <select
          className="form-control"
          id="itemType"
          name="itemType"
          defaultValue={classroom.itemType}
        >
          <option value="announcement">Announcement</option>
          <option value="assignment">Assignment</option>
          <option value="material">Material</option>
          <option value="question">Question</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="url">Url</label>
        <input
          type="url"
          className="form-control"
          id="url"
          name="url"
          placeholder="Enter url"
          defaultValue={classroom.url}
        />
      </div>

      <div className="form-group">
        <label htmlFor="size">Size</label>
        <input
          type="number"
          className="form-control"
          id="size"
          name="size"
          placeholder="Enter Size"
          defaultValue={classroom.size}
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Enter Title"
          defaultValue={classroom.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="theme">Theme</label>
        <select
          className="form-control"
          id="theme"
          name="theme"
          defaultValue={classroom.theme}
        >
          <option value="classic">Classic</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );

  return (
    <div className="pageContainer">
      <p className="h1">Google Classroom Share</p>

      <div className="container">
        <div className="row">
          <div className="col">
            {renderForm()}
          </div>

          <div className="col">
            <GoogleShareToClassRoom
              body={classroom.body}
              itemType={classroom.itemType}
              url={classroom.url}
              size={classroom.size}
              title={classroom.title}
              theme={classroom.theme}
              onShare={(type) => console.log(`GoogleShareToClassRoom:${type}`)}
              onShareComplete={() => console.log('GoogleShareToClassRoom:onShareComplete')}
              onShareStart={() => console.log('GoogleShareToClassRoom:onShareStart')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
