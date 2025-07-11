import { create } from "zustand";
import { devtools } from 'zustand/middleware';
// import { immer } from 'zustand/middleware/immer';
// import { persist } from 'zustand/middleware';
// immer
// const useCart = create(immer((set) => ({
//   cart: [],
//   addToCart: (product) =>
//     set((state) => {
//       state.cart.push(product);
//     }),
// })));
// persist

// const useUserStore = create(persist(
//   (set) => ({
//     user: null,
//     setUser: (u) => set({ user: u }),
//   }),
//   { name: 'user-storage' }
// ));

// counter project with devtools
const useStore = create(devtools((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
})));



function App() {
  const { count, inc, dec } = useStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
    </div>
  );
}

export default App;

