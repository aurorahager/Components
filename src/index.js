import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCar';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        time="Today at 4:45PM"
        text="Great post, Jenny!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        time="Today at 2:00AM"
        text="I disagree! This article is very misleading!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        time="Yesterday at 5:20PM"
        text="Alex is salty. Awesome article!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
