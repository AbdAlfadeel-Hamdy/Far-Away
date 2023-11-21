import { Item } from '../types/Item';

interface PackagingItemProps {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const PackagingItem: React.FC<PackagingItemProps> = ({
  item,
  onDeleteItem,
  onToggleItem,
}) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default PackagingItem;
