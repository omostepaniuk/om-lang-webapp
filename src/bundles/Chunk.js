import './Chunk.scss'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Chunk = (props) => {
  const { bundleName: bundleSlug, chunkOrder } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [chunk, setChunk] = useState(null);

  useEffect(() => {
    setChunk(findChunk(props.bundles, bundleSlug, chunkOrder));
    setIsLoading(!props.bundles);
  }, [props.bundles]);

  if (isLoading) {
    return <div>Loading Chunk...</div>
  } else if (!chunk) {
    return <div>No Chunk with a given id was found for a given bundle</div>
  }

  return (
    <div>
      <h1 className={'bundle-title'}>{chunk.bundle}</h1>
      <h2 className={'words-count'}>Words: {chunk.chunk.words.length}</h2>
    </div>
  )

  function findChunk(bundles, bundleSlug, chunkOrder) {
    let chunk = null;
    if (bundles) {
      const bundle = bundles.find(bundle => bundle.slug === bundleSlug);
      if (bundle) {
        chunk = {
          bundle: bundle.name,
          chunk: bundle.chunks.find(chunk => `${chunk.order}` === chunkOrder)
        };
      }
    }

    return chunk;
  }
}

export default Chunk;
