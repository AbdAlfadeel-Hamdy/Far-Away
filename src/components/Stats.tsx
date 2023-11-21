import { Item } from '../types/Item';

interface StatsProps {
  items: Item[];
}

const Stats: React.FC<StatsProps> = ({ items }) => {
  const numItems = items.length;
  if (numItems === 0)
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {numItems === numPacked
          ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${numItems} items on your list, and you already packed
      ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
