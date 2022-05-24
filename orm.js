const SequelizeAuto = require('sequelize-auto');
const config = require('./config/config.json');
const auto = new SequelizeAuto(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        port: config.development.port,
        dialect: config.development.dialect,
    //noAlias: true // as 별칭 미설정 여부
    }
);
auto.run((err)=>{
if(err) throw err;
})

/* 
출처: https://inpa.tistory.com/entry/ORM-📚-시퀄라이즈-자동-생성-sequelize-auto-모듈-사용하기 [👨‍💻 Dev Scroll]
*/
