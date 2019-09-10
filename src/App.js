import React from 'react';
import Potato from './potato'

function Food({fav, pic}){
  return <div>
    <h3>I like {fav}</h3>
    <img src= {pic} width="200px" height="150px"/>
  </div>

  

}

const foodILike =[
  {
    name : 'kimchi',
    img : "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg"
  },
  {
    name : 'kimbab',
    img : "https://mykoreankitchen.com/wp-content/uploads/2006/10/3.-Korean-Kimbap-500x375.jpg"
  }
];

function renderFood(food){
  console.log(food);
  return <Food name={food.name} pic={food.img}/>
};


//Component html을 반환하는 함수
function App() {

  return <div>
      <h1>Hello React</h1>
      {foodILike.map(renderFood)};
      </div>
}

// 컴포넌트를 생성하여 index.html에서 출력

export default App;
