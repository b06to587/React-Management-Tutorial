const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers', (req,res)=>{
    res.send([
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
    ]);
});

app.listen(port,()=> console.log(`Listenging on port ${port}`));