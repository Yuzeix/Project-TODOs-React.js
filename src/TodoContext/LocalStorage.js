import React from 'react'

function useStorageTodo(itemName, initialValue) {

  const [item, setItem]= React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    
    setTimeout (() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        } 
        setLoading (false)
      } catch {
      setLoading(false)
      setError(true)
      }
    }, 3000);
  }, []); 
    
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  };
  
  return {
    item, 
    saveItem,
    loading,
    error,
  };
}

export { useStorageTodo} ;

/*localStorage.removeItem('TARGET_LIST_V1');

const defaultTodos = [
  { text: 'Aprender React.js', completed: false},
  { text: 'Aprender Next.js', completed: true},
  { text: 'Aprender Vite.js', completed: false},
  { text: 'Aprender Angular', completed: false},
  { text: 'Aprender NPM', completed: true},
  { text: 'Aprender Webpack.js', completed: true},
];

localStorage.setItem('TARGET_LIST_V1', JSON.stringify(defaultTodos));*/
