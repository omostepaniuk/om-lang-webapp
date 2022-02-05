import React from 'react';
import './ContentChunks.scss';
import { Link, useOutletContext } from 'react-router-dom';

const ContentChunks = () => {
  const bundle = useOutletContext();

  return <>
    {bundle?.chunks?.length
      ?
      <ul className="chunks-list">
        {
          bundle.chunks.map(chunk => (
            <li className="chunk-list-item" key={chunk.order.toString()}>
              <Link to={`${chunk.order}`}>Chunk - {chunk.order.toString()}</Link>
            </li>
          ))
        }
      </ul>
      : null
    }
  </>
}

export default ContentChunks;