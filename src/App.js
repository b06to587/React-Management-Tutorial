import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '910222',
  'gender':'여자',
  'job': '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '토르',
  'birthday' : '930510',
  'gender':'남자',
  'job': '신'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '아이언맨',
  'birthday' : '840312',
  'gender':'남자',
  'job': '프로그래머'
}
]

function App() {
  return (
    <div>
    {
      customers.map(c=>{
        return (
          <Customer
            key = {c.id}
            id = {c.id}
            image = {c.image}
            name = {c.name}
            gender = {c.gender}
            job = {c.job}
          />
        )
      })
    }
  </div>
  );
}

export default App;
