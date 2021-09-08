import React from 'react';
import './ContentChunks.scss';
import { Link, useLocation } from 'react-router-dom';

const ContentChunks = (props) => {
  const location = useLocation();
  const chunkBaseUrl = `${location.pathname}/${props.bundle.slug}`;

  const chunks = props.bundle.chunks.map(chunk => (
    <li className="chunk-list-item" key={chunk.order.toString()}>
      <Link to={`${chunkBaseUrl}/chunks/${chunk.order}`}>Chunk - {chunk.order.toString()}</Link>
    </li>
  ));

  return <ul className="chunks-list">{chunks}</ul>;
}

export default ContentChunks;