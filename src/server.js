const app = require('./app');
const port = process.env.PORT || 5000;

app.set('port', port);
app.listen(app.get('port'), ()=> {
    console.log(`Server is listening on port ${port}`);
})