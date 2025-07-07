import React from "react";
/*
1. Nima bu Class Component?
React’ning eski (lekin hali ishlatiladigan) sintaksisi.
Hozir zamonaviy React’da ko‘pincha Function Component va Hooks ishlatiladi.
Ammo Class Component ham hali ham ishlatiladi, ayniqsa eski loyihalarda.

Muhim qismlar:
1. constructor → Dastlabki sozlash joyi
2. state va setState → Ma’lumot saqlash va o‘zgartirish
3. props → Tashqaridan ma’lumot olish
4. Life cycle → Komponent hayot bosqichlari


| Element              | Vazifasi                         |
| -------------------- | -------------------------------- |
| constructor          | Boshlang‘ich sozlash             |
| state                | Komponent ichida ma’lumot        |
| setState             | Ma’lumotni yangilash             |
| props                | Tashqaridan ma’lumot olish       |
| componentDidMount    | Komponent chiqqanda ishlaydi     |
| componentDidUpdate   | Komponent yangilanganda ishlaydi |
| componentWillUnmount | Komponent o‘chirganda ishlaydi   |

*/

const App = () => {
  // construktor
  class MyComponent extends React.Component {
    constructor(props) {
      super(props); // propsni to‘g‘ri uzatish uchun
      this.state = { count: 0 }; // boshlang‘ich state
    }
  }

  // state setState
  class MComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }

  // props
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  // Foydalanish:
  <Welcome name="Diyor" />;

  // life cycle
  class Component extends React.Component {
    componentDidMount() {
      console.log("Komponent sahifaga chiqdi");
    }

    componentDidUpdate() {
      console.log("Komponent yangilandi");
    }

    componentWillUnmount() {
      console.log("Komponent o‘chirilmoqda");
    }

    render() {
      return <h1>Hello World</h1>;
    }
  }

  return <div>App</div>;
};

export default App;
