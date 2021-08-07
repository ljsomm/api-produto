const app = require('./src/app')();

app.listen(app.get('port'), ()=>{
    console.log("Rodando na http://localhost:" + app.get('port'));
});