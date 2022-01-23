import React from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import ContentChunks from './ContentChunks';
import Chunk from './Chunk';
import './ContentBundle.scss';

const ContentBundle = (props) => {
  const { bundleName } = useParams();

  let bundle = null;
  if (props.bundles?.length ?? false) {
    bundle = props.bundles.find(bundle => bundle.slug === bundleName);
  }

  return <>
    {!!bundle
      ?
      <div className={`bundle-item`}>
        <h1 className={`bundle-name`}>{bundle.name}</h1>
        <Routes>
          <Route path={":chunkOrder"} element={<Chunk chunks={bundle?.chunks}/>}/>
          <Route index element={<ContentChunks chunks={bundle?.chunks}/>}/>
        </Routes>
      </div>
      : null
    }
  </>
}

export default ContentBundle;
