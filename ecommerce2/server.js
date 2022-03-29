const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const db = mysql.createConnection({
    host: 'slappys-db.cd4lkocxt6wa.us-east-1.rds.amazonaws.com',
    user: "admin",
    password: "y5PQizjCmKdeKvJDdDZQ",
    database: "Slappys"

})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql Connected')
});

const app = express();
app.use(express.json());
app.use(cors());

app.get('/products', (req, res) => {
    db.query('SELECT * FROM Slappys.skateboards',
        (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send(results)


        })
})


app.listen('4000', () => {
    console.log("server started on port 4000");
})