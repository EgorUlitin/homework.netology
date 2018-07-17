'use strict';

const MessageHistory = ({ list = [] }) => {
  if(list.length === 0) return null;

  return (
    <ul>
      {list.map(item => 
        item.type === "response" ? (<Response from={item.from} message={item} />) : 
        item.type === "message" ? (<Message from={item.from} message={item} />) :
        item.type === "typing" ? (<Typing from={item.from} message={item} />) :
        null
      )}
    </ul>
  );
};