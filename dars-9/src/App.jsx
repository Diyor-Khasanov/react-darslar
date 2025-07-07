import React from "react";
// State Management nima?
// State management bu → butun ilova bo‘yicha ma’lumotlarni boshqarish.

// React’da ma’lumot faqat bir joyda bo‘lib, boshqa komponentlarga oson uzatish kerak bo‘lsa, biz state management ishlatamiz.


// 1. useReducer – Katta statelarni boshqarish
// useReducer bu useState ga o‘xshaydi, lekin murakkab statelar uchun.
// Redux ga juda o‘xshash, lekin faqat React ichida.

// 2. useContext – Global State
// React Context bu butun ilovada ma’lumot ulashish uchun qulay vosita.
// Redux’siz global ma’lumot boshqarish mumkin.

// | Tushuncha  | Nima Uchun?                            | Misol                  |
// | ---------- | -------------------------------------- | ---------------------- |
// | useReducer | Murakkab holatni boshqarish            | Counter, Shopping Cart |
// | useContext | Global holat, umumiy ma’lumot ulashish | Theme, Language, Auth  |
// | dispatch   | Buyruq yuborish                        | increment, decrement   |
// | Provider   | Barcha joyga ma’lumot tarqatish        | ThemeProvider          |


const App = () => {

  // 1.useReducer strukturasi

  // const [state, dispatch] = useReducer(reducer, initialState);
  // state - bu hozirgi ma'lumot
  // disoatch - bu ma'lumotni o'zgartish uchun funksiya
  // reducer - bu funksiya, u state ni o'zgartiradi
  // initialState - bu boshlang'ich ma'lumot
  // ---------------------------------

  // 2.useContext strukturasi
  const MyContext = React.createContext();

  // 

  return <div>App</div>;
};

export default App;
