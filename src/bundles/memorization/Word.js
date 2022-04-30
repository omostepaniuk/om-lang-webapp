import './Word.scss';
import { useOutletContext, useParams } from 'react-router-dom';
import React from 'react';

const Word = () => {
  const { words, settings: { isReverseDirection, showTranslation } } = useOutletContext();
  const { wordOrder } = useParams();
  const word = findWordByOrder(words, parseInt(wordOrder));

  let { word: from, translations: to } = word;
  [from, to] = isReverseDirection ? [to, [from]] : [[from], to];

  return (
    <div>
      <p className="translation-from">
        {from.map((w, i) => <React.Fragment key={i}><span>{w}</span><br/></React.Fragment>)}
      </p>
      {showTranslation &&
        <p className="translation-to">
          {to.map((w, i) => <React.Fragment key={i}><span key={i}>{w}</span><br/></React.Fragment>)}
        </p>}
    </div>
  );

  function findWordByOrder(words, wordOrder) {
    return words.find((word) => word.order === wordOrder);
  }
};

export default Word;
