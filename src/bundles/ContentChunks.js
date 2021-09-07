import React from 'react';
import './ContentChunks.scss';
import { Link } from 'react-router-dom';

const ContentChunks = (props) => {
  const chunks = props.chunks.map(chunk => (
    <li className="chunk-list-item" key={chunk.order.toString()}>
      <Link to={`./${chunk.order}`}>Chunk - {chunk.order.toString()}</Link>
    </li>
  ));

  return <ul className="chunks-list">{chunks}</ul>;
}

export default ContentChunks;