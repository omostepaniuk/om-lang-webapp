import './Chunk.scss'
import React from 'react';
import { useParams } from 'react-router-dom';

const Chunk = (props) => {
  const { chunkOrder } = useParams();
  const { chunks } = props;
  const chunk = findChunk(chunks, chunkOrder);

  return <>
    {!!chunk &&
      <div className={'chunk-container'}>
        <div className={'top-section'}>
          <h2 className={'words-count'}>Words: {chunk.words.length}</h2>
        </div>
        <div className="middle-section">

        </div>
        <div className="bottom-section">
          <button className={'button button-left'}>Previous</button>
          <button className={'button button-right'}>Next</button>
        </div>
      </div>
    }
  </>

  function findChunk(chunks, chunkOrder) {
    let chunk = null;
    if (chunks) {
      chunk = chunks.find(chunk => `${chunk.order}` === chunkOrder);
    }

    return chunk;
  }
}

export default Chunk;
