import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  let items: string[] = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>{' '}
      </Alert>
      <Button color="primary" onClick={() => console.log("Click")}>Click Me!</Button>
    </div>
  );
}

export default App;
