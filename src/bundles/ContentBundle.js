import React from 'react';
import  './ContentBundle.scss';
import ContentChunks from './ContentChunks';

const ContentBundle = (props) => {
  return (
    <div className={`bundle-item`}>
      <h1 className={`bundle-name`}>{props.bundle.name}</h1>
      <ContentChunks bundle={props.bundle}/>
    </div>
  )
}

export default ContentBundle;
