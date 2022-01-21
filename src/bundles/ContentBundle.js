import React from 'react';
import './ContentBundle.scss';
import ContentChunks from './ContentChunks';
import { useParams } from 'react-router-dom';

const ContentBundle = (props) => {
  let params = useParams();
  const { bundleName } = params;

  let content;
  if (props.bundles?.length ?? false) {
    const bundle = props.bundles.find(bundle => bundle.slug === bundleName);
    content =
      <div className={`bundle-item`}>
        <h1 className={`bundle-name`}>{bundle.name}</h1>
        <ContentChunks chunks={bundle.chunks}/>
      </div>
  } else {
    content = null;
  }

  return content;
}

export default ContentBundle;
