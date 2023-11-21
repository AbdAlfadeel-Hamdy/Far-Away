import { useState } from 'react';
import PackagingItem from './PackagingItem';
import { Item } from '../types/Item';

interface PackagingListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
}

const PackagingList: React.FC<PackagingListProps> = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems: Item[];
  // if (sortBy === 'description')
  //   sortedItems = [...items].sort(
  //     (a, b) => a.description.charCodeAt(0) - b.description.charCodeAt(0)
  //   );
  if (sortBy === 'description')
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  else if (sortBy === 'packed')
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  else sortedItems = items;

  return (
    <div className='list'>
      {sortedItems.length ? (
        <ul>
          {sortedItems.map((item) => (
            <PackagingItem
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      ) : (
        <div></div>
      )}
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackagingList;
