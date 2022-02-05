import './Word.scss';
import { useOutletContext, useParams } from 'react-router-dom';

const Word = () => {
  const words = useOutletContext();
  const { wordOrder } = useParams();
  const word = findWordByOrder(words, parseInt(wordOrder));

  return <div>
    <p className="translation-from">{word.word}</p>
  </div>

  function findWordByOrder(words, wordOrder) {
    return words.find(word => word.order === wordOrder);
  }
}

export default Word;