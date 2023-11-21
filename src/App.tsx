import { useState } from 'react';
import { Logo, Form, PackagingList, Stats } from './components';
import { Item } from './types/Item';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = confirm('Are you sure you want to delete all items?');
    if (confirmed) setItems([]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
