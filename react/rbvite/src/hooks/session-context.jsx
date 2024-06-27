import { createContext, useContext, useState } from "react";

const SessionContext = createContext();

const useSession = () => useContext(SessionContext);

// mock
const SampleSession = {
  loginUser: { id: 1, name: "Hong", age: 33 },
  // loginUser: null,
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

// arr.reduce( (acc,a) => acc + a )
// dispatch({type: 'login', payload {name: 'Hong'}})
const reducer = (session,action) => {
  const {type, payload{id, name},} = 
  switch (type) {
  case logout:
    return {...session, loginUser: null};
  case login:
    return {...session, loginUser: {id: 1, age: 33, name: payload}}
  
  case 'addItem' : 
    return 

  }}; 



const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(SampleSession);

  // const logout = () => setSession({ ...session, loginUser: null });

  // const login = (name) => {
  //   const id = 1;
  //   const age = 33;
  //   const x = {
  //     ...session,
  //     loginUser: { ...session.loginUser, id, name, age },
  //   };
  //   setSession(x);
  dispatchEvent({type: 'login', })

};

  const removeItem = (itemId) => {
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)],
    });
  };

  const addItem = (addingItem) => {
    // const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
    // const { name, price } = addingItem;
    // const item = { id: id + 1, name, price };
    // console.log("🚀  id:", id);
    // setSession({ ...session, cart: [...session.cart, item] });
    dispatchEvent({type: 'addItem', payload:{addingItem}}),[]
  };

  const saveItem = (editingItem) => {
    const { id, name, price } = editingItem;
    const foundItem = session.cart.find((item) => item.id === id);
    foundItem.name = name;
    foundItem.price = price;
    setSession({ ...session });

    // setSession({
    //   ...session,
    //   cart: [
    //     ...session.cart.map((item) => (item.id === id ? editingItem : item)),
    //   ],
    // });
  };
  return (
    <SessionContext.Provider
      value={{ session, login, logout, removeItem, addItem, saveItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { SessionProvider, useSession };
