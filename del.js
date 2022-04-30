const {MongoClient, ObjectID} = require('mongodb');

var pname = prompt("Enter the person's name whose details you want to delete.");

MongoClient.connect('mongodb://localhost:27017/Placement', (err, client) => {
    if(err) {
        return console.log('Unable to connect');
    }

    console.log('Connected Successfully');

    const db = client.db('Placement');

    // db.collection('EDetails').deleteOne({name: 'Aniket'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('StudentDetails').findOneAndDelete({name: `${pname}`}).then((result) => {
        console.log(result);
    });

    client.close();

});
