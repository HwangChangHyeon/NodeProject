const express = require('express'); // 설치한 패키지 불러오기
const path = require('path'); // 경로 설정을 정확하게 하기 위하여 path 내장 모듈 사용
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express(); // 익스프레스 app에 담기
 
app.set('port', process.env.PORT || 3000); // 서버에 port라는 속성을 3000으로 설정

app.use(morgan('dev')); // 클라이언트가 요청하는 것에 대한 정보를 알 수 있음
app.use(cookieParser()); // 쿠키를 알아서 객체로{ mycookie: 'test' } 자동으로 바꿔줌
// req.cookies 

app.use(express.json());   // 이 두개를 사용하면 아래 get 미들웨어에서 req.body.name으로 쉽게 가져올 수 있음.
app.use(express.urlencoded({extended: true})); // true면 qs, false면 querystring

app.get('/',(req, res) => { // get요청을 /로 받았을 때 응답을 아래와 같이 하기
    res.sendFile(path.join(__dirname,'index.html')); // 현재 디렉터리에 index.html 추가하기
})


app.get('/index.css',(req, res) => { // get요청을 /로 받았을 때 응답을 아래와 같이 하기
    res.sendFile(path.join(__dirname,'index.css')); // 현재 디렉터리에 index.html 추가하기
})


app.get('/index.js',(req, res) => { // get요청을 /로 받았을 때 응답을 아래와 같이 하기
    res.sendFile(path.join(__dirname,'index.js')); // 현재 디렉터리에 index.html 추가하기
})




app.use((err, req, res, next) => {  // err는 매개변수 4개 다써줘야함.(꼭 next까지)
    res.status(200).send('에러났지롱. 근데 안알려주지롱.'); // 200으로 정상적인 코드로 보낼 수 있음
})

app.listen(app.get('port'),() => { // app 동작시 포트 설정 및 콜백함수 설정
    console.log('익스프레스 서버 실행');
});