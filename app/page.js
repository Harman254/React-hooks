'use client'
import { useEffect, useReducer, useRef,  } from "react";


export const metadata = {
  title: 'Harmans home',
  description: 'Harmans brand',
}
//   const[count, setCount] = useState(0)

// const handleIncrease = () => {
//   setCount((prev) => prev + 1)
// }

// const handleReset = () => {
//   setCount((prev) => prev = 0);
// }

// const handleDecrease = () => {
//   setCount((prev) => prev - 1)
// }

// const [time, setTime] = useState(0)

// useEffect(()=>{
//   setInterval(()=>{
//     setTime((prev) => prev + 1)
//   }, 1000)
// }, [])
export default function Home() {
  const initialState = {
    name: '',
    email: '',
  };

  const reducer = (state, action) => {
    return {
      ...state,
      ...action,
    };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleNameChange = (event) => {
    dispatch({ name: event.target.value });
  };

  const handleEmailChange = (event) => {
    dispatch({ email: event.target.value });
  };

  useEffect(()=>{
    nameInputRef.current.focus()
  
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', nameInputRef.current.value);
    console.log('Email:', emailInputRef.current.value);
    dispatch({ name: '', email: '' });
    nameInputRef.current.focus();
    
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-slate-500 rounded-lg p-8 shadow-md">
        <h1 className="text-2xl font-semibold mb-4">User Information</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-1">Name</label>
          <input
            required
            ref={nameInputRef}
            type="text"
            className="w-full p-2 border border-gray-300  text-gray-700 rounded focus:outline-none focus:border-blue-500"
            value={state.name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-1">Email</label>
          <input
            required
            ref={emailInputRef}
            type="text"
            className="w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-blue-500"
            value={state.email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <p className="text-md text-gray-600 font-bold">Name: {state.name}</p>
          <p className="text-md text-gray-600 font-bold">Email: {state.email}</p>
        </div>
          <button type="submit" className="p-3 rounded-md bg-blue-900 text-white w-full" onClick={handleFormSubmit}>Submit</button>
      </div>
    </div>
  );
}






    

    {/* <p className="text-white font-bold">Counter: {count}</p> */}

    {/* <div className="font-xl font-bold bg-slate-700 text-white"> Timer: {time} </div> */}
     

      {/* <div className="flex mr-3">
      <button onClick={handleIncrease} className="px-4 py-3 rounded-md bg-blue-500 text-white w-30">increase</button>
      <button onClick={handleReset} className="px-4 py-3 rounded-md bg-blue-500 w-30 text-white">Reset</button>
     <button onClick={handleDecrease}className="px-4 rounded-md w-30 py-3 bg-blue-500 text-white">Decrease</button>
      </div> */}