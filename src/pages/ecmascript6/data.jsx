const initState = {
  title: '',
  description: '',
  config: {
    grid: {
      xs: 0,
      sm: 0
    }
  },
  code: ``,
};

const codes = () => {
  return (
      [
        {
          ...initState,
          title: 'spread operator',
          code: `const east = ['Uganda', 'Kenya', 'Tanzania'];
const west = ['Nigeria', 'Cameroon', 'Ghana'];
const countries = [...east, ...west];
//output
[ 'Uganda', 'Kenya', 'Tanzania', 'Nigeria', 'Cameroon', 'Ghana' ]
`
        },
        {
          ...initState,
          title: 'Template literals',
          code: `let message = \`Hello \${ student.name } from \${ student.city }\`;
//output
Hello John Kagga from Kampala
    `,
        },
        {
          ...initState,
          title: 'Destructuring',
          code: `const points = [20, 30, 40];
const [x, y, z] = points;
//output
20 30 40


const car = { type: 'Toyota', color: 'Silver', model: 2007 };
const { type, color, model } = car;
//output
Toyota Silver 2007


let type = 'Toyota';
let color = 'Silver';
let model = 2007;
const car = { type, color, model };
//output
{ type: 'Toyota', color: 'Silver', model: 2007 }
    `,
        },
        {
          ...initState,
          title: 'conditional logic into the template',
          code: `return (
  <nav>
    <Home />
    { loggedIn && <LogoutButton /> || <LoginButton /> }
  </nav>
);
    `,
        },
        {
          ...initState,
          title: 'reduce',
          code: `const sum = (...numbers) => 
    numbers.reduce((acc, current) => acc + current, 0)

sum(1, 2, 3, 4, 5) // 15
    `,
        },
        {
          ...initState,
          title: 'getters/setters',
          code: `class Animal {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }
}

const animal = new Animal('dog')
animal.name // dog
animal.name = 'cat'
animal.name // cat
    `,
        },
        {
          ...initState,
          title: 'objeto imutável',
          code: `const paises = Object.freeze({
\tbrasil: 'Rio de Janeiro',
\teua: 'Washington',
\tportugal: 'Lisboa',
});

paises.brasil = 'Brasilia';

console.log(paises.brasil); // 'brasil' is read-only
    `,
        },
        {
          ...initState,
          title: 'Promises',
          code: `//antigo calback (callback hell)
func1(function(value1) {
  func2(value1, function(value2) {
    func3(value2, function(value3) {
      func4(value3, function(value4) {
        func5(value4, function(value5) {
          // Faz alguma coisa com o valor 5
        });
      });
    });
  });
});

//novo
func1(value1)
  .then(func2)
  .then(func3)
  .then(func4)
  .then(func5, value5 => {
    // Faz alguma coisa com o valor
});
    `,
        },
        {
          ...initState,
          title: 'Promises',
          code: `//antigo
import $ from 'jquery';
const urls = [ '/api/commits', '/api/issues/opened', '/api/issues/assigned' ];
const promises = urls.map((url) => {
  return new Promise((resolve, reject) => {
    $.ajax({ url: url })
    .done((data) => {
      resolve(data);
    });
  });
});

//novo
Promise.all(promises)
  .then((results) => {
    // Faz alguma coisa com o resultado das promises
  });
    `,
        },
        {
          ...initState,
          title: 'Generators',
          description: 'Outra forma de evitar o callback hell são os generators. Eles são funções que podem ser "pausadas" durante sua execução.',
          code: `function* capitais() {
    yield 'Pretoria';
    yield 'Brasilia';
    yield 'DC';
    yield 'Lisboa';
}

var generator = capitais();
console.log(generator.next()); // { value: Pretoria, done: false }
console.log(generator.next()); // { value: Brasilia, done: false }
console.log(generator.next()); // { value: DC done: false }
console.log(generator.next()); // { value: Lisboa, done: false }

//Generators são ideais para código assíncrono:
function* getData() {
    const api1 = yield request('http://some_api/item1');
    const dadosApi1 = JSON.parse(entry1);
    var api2 = yield request('http://some_api/item2');
    var dadosApi2 = JSON.parse(entry2);
}
    `,
        },
        {
          ...initState,
          title: 'Async e Await',
          description: 'Async e Await fazem parte do ES7 e são uma ótima forma de fazer código assíncrono:',
          code: `import request from 'request';

function getJSON(url) {
\treturn new Promise((resolve, reject) => {
\t\trequest(url, (error, response, body) => {
\t\t\tresolve(body);
\t\t});
\t});
}

async function main() {
\tconst data = await getJSON();
\tconsole.log(data); // Vai mostrar os dados da requisição
}

main();
    `,
        },
        {
          ...initState,
          title: 'ES6',
          description: 'geral',
          code: `
/** Arrow functions */\t <C onPress='{()'> this.setState({pressed: true})} />
/** Block scoping */\t let greeting = 'hi';
/** Call spread */\t Math.max(...array);
/** Classes */\t class C extends React.Component { render() { return <View />; } }
/** Constants */\t const answer = 42;
/** Destructuring */\t let {isActive, style} = this.props;
/** for...of */\t for (let num of [1, 2, 3]) {};
/** Modules */\t import React, { Component } from 'react';
/** Computed Properties */\t let key = 'abc'; let obj = {[key]: 10};
/** Object Concise Method */\t let obj = { method() { return 10; } };
/** Object Short Notation */\t let name = 'vjeux'; let obj = { name };
/** Rest Params */\t function(type, ...args) {};
/** Template Literals */\t let who = 'world'; let str = \`Hello \${ who }\`;
    `,
        },
        {
          ...initState,
          config: { grid: { xs: 6, sm: 6 } },
          img: 'https://instagram.fplu11-1.fna.fbcdn.net/v/t51.2885-15/e35/35403414_583179678744912_679236901630115840_n.jpg?_nc_ht=instagram.fplu11-1.fna.fbcdn.net&_nc_cat=100&oh=12bba3c42a873608d64c45874156fb21&oe=5E875AE5',
        },
        {
          ...initState,
          config: { grid: { xs: 6, sm: 6 } },
          img: 'https://instagram.fplu11-1.fna.fbcdn.net/v/t51.2885-15/e35/34018117_1545734145537018_5221792157253238784_n.jpg?_nc_ht=instagram.fplu11-1.fna.fbcdn.net&_nc_cat=106&oh=f8e3c90059389a98bafd1b4aa810d3d7&oe=5E8E4094',
        },
        {
          ...initState,
          config: { grid: { xs: 6, sm: 6 } },
          img: 'https://instagram.fplu11-1.fna.fbcdn.net/v/t51.2885-15/e35/22158133_122938531759084_896626671317155840_n.jpg?_nc_ht=instagram.fplu11-1.fna.fbcdn.net&_nc_cat=104&oh=0d0ef0e979671df57ddb9733fd019a2b&oe=5E76B747',
        },
        {
          ...initState,
          config: { grid: { xs: 6, sm: 6 } },
          img: 'https://instagram.fplu11-1.fna.fbcdn.net/v/t51.2885-15/e35/21985462_127578047898538_9040386132029734912_n.jpg?_nc_ht=instagram.fplu11-1.fna.fbcdn.net&_nc_cat=110&oh=d4278f2aff5567b59d6ca075bb24cd63&oe=5E7A78DF',
        },
        {
          ...initState,
          config: { grid: { xs: 6, sm: 6 } },
          img: 'https://instagram.fplu11-1.fna.fbcdn.net/v/t51.2885-15/e35/21436174_680388892160611_2969855042053472256_n.jpg?_nc_ht=instagram.fplu11-1.fna.fbcdn.net&_nc_cat=107&oh=1dfdd0fb0319fb2212bc77f9b75bf9d8&oe=5EB24F71',
        },
      ]
  );
};

export default codes;
