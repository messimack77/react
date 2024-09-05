import './App.css';
  
function App(props) {

    const user = {
      name:'John',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      age:25
    }
    
    const products = [
      { title: 'Cabbage', id: 1 },
      { title: 'Garlic', id: 2 },
      { title: 'Apple', id: 3 },
    ];


   
    
const listItems = products.filter(product => 
  product.title.endsWith('c'))
  .map(product => 
    <li key={product.id}>
      
      {product.title}
    </li>
    )




  return(
    <div className='container'>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      {listItems}
    </div>
  );
}

export default App;
