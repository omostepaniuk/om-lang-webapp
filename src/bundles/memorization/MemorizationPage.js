import './MemorizationPage.scss';
import React, { useState } from 'react';
import { useParams, Link, Outlet, useOutletContext } from 'react-router-dom';
import { isDefined } from '../../utils/utils';
import ToggleButton from '../../shared/toggle-button/ToggleButton';
import { getValue, setValue } from '../../utils/local-storage.utils';

const MemorizationPage = () => {
  const bundle = useOutletContext();
  const [direction, setDirection] = useState(getTranslationDirection(bundle.name, bundle.direction));
  const [showTranslation, setShowTranslation] = useState(false);
  let { chunkOrder, wordOrder } = useParams();

  const chunk = findChunk(bundle, chunkOrder);
  const isWordScreen = isDefined(wordOrder);

  chunkOrder = parseInt(chunkOrder);
  wordOrder = wordOrder ? parseInt(wordOrder) : wordOrder;

  return (
    <>
      {!!chunk && (
        <div className={'chunk-container'}>
          <div className={'top-section'}>
            <h2 className={'words-count'}>Words: {chunk.words.length}</h2>
            <div className={'translation-direction-switch'}>
              {/* TODO - hardcoded direction settings, to be replaced by data-driven approach */}
              <ToggleButton
                left={{ label: 'ES-EN', value: 'ES-EN' }}
                right={{ label: 'EN-ES', value: 'EN-ES' }}
                value={direction}
                onChange={direction => setTranslationDirection(bundle.name, direction)}/>
            </div>
          </div>
          <div className="middle-section">
            {/* TODO hardcoded comparison against concrete lang pair */}
            <Outlet context={{ words: chunk.words, settings: { isReverseDirection: direction !== 'ES-EN', showTranslation } }} />
          </div>
          <div className="bottom-section">
            {isWordScreen ? (
              <>
                {wordOrder > 1 && (
                  <Button type={'link'} buttonStyle={'secondaryOutline'}
                          title={'Previous'} toLink={`words/${wordOrder - 1}`}/>
                )}
                <Button type={'button'} buttonStyle={'primary'}
                        title={showTranslation ? 'Hide' : 'Show'}
                        onClick={() => setShowTranslation(!showTranslation)}/>

                {wordOrder < chunk.words.length && (
                  <Button type={'link'} buttonStyle={'secondaryOutline'}
                          title={'Next'} toLink={`words/${wordOrder + 1}`}/>
                )}
              </>
            ) : (
              <Link to={`./words/${chunk.words[0].order}`}>PROCEED</Link>
            )}
          </div>
        </div>
      )}
    </>
  );

  function findChunk(bundle, chunkOrder) {
    let chunk = null;
    if (bundle.chunks) {
      chunk = bundle.chunks.find((chunk) => `${chunk.order}` === chunkOrder);
    }

    return chunk;
  }

  function setTranslationDirection(bundleName, direction) {
    const value = getValue(bundleName);
    value.direction = direction;

    setValue(bundleName, value);
    setDirection(direction);
  }

  function getTranslationDirection(bundleName, defaultDirection) {
    return getValue(bundleName).direction || defaultDirection;
  }
};

export default MemorizationPage;
