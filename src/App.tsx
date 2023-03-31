import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent} from 'react';
import logo from './logo.svg';
import './App.css';

interface User {
  id: number,
  username: string,
}

type fibFunc=(n: number) => number;

const fib : fibFunc =(n) => {
  if(n<2) return n;

  return fib(n-1) + fib(n-2);
}

const myNum: number = 10;
function App() {

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[] | null>(null);

  //
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  // handles side effects -> mount -> unmount -> remount
  //when something changes something else could happen
  useEffect(() => {
    console.log('mounting')
    console.log('Users: ',users)
  }, [users])

  /*
  useCallback - memoize while event
   */
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => setCount(prev => prev+1), []);

  //useMemo - memoizes the value.
  const result = useMemo(() => fib(myNum),[myNum]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;
