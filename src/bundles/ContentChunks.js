import React from 'react';
import './ContentChunks.scss';
import { Link } from 'react-router-dom';

const ContentChunks = (props) => {
  return <>
    {props?.chunks?.length
      ?
      <ul className="chunks-list">
        {
          props.chunks.map(chunk => (
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