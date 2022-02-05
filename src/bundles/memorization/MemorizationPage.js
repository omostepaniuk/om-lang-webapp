import './MemorizationPage.scss'
import React from 'react';
import { useParams, Link, Outlet, useOutletContext } from 'react-router-dom';
import { isDefined } from '../../utils/utils';

const MemorizationPage = () => {
  const bundle = useOutletContext();
  let { chunkOrder, wordOrder } = useParams();

  const chunk = findChunk(bundle, chunkOrder);
  const isWordScreen = isDefined(wordOrder);

  chunkOrder = parseInt(chunkOrder);
  wordOrder = wordOrder ? parseInt(wordOrder) : wordOrder;

  return <>
    {!!chunk &&
      <div className={'chunk-container'}>
        <div className={'top-section'}>
          <h2 className={'words-count'}>Words: {chunk.words.length}</h2>
        </div>
        <div className="middle-section">
          <Outlet context={chunk.words}/>
        </div>
        <div className="bottom-section">
          {isWordScreen
            ?
              <>
                {wordOrder > 1 &&
                  <Link to={`words/${wordOrder - 1}`} className={'button button-left'}>Previous</Link>}
                {wordOrder < chunk.words.length &&
                  <Link to={`words/${wordOrder + 1}`} className={'button button-right'}>Next</Link>}
              </>
            : <Link to={`./words/${chunk.words[0].order}`}>PROCEED</Link>
          }
        </div>
      </div>
    }
  </>

  function findChunk(bundle, chunkOrder) {
    let chunk = null;
    if (bundle.chunks) {
      chunk = bundle.chunks.find(chunk => `${chunk.order}` === chunkOrder);
    }

    return chunk;
  }
}

export default MemorizationPage;
