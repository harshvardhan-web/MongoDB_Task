const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Placement', (err, client) => {
  if(err) {
    return console.log('Unable to connect', err);
  }

  console.log('Connected Successfully');

  const db = client.db('Placement');

  db.collection('StudentDetails').insertMany(
    [
      {
        name: 'Rahul Arora',
        doa: '10-02-13',
        gender: 'Male',
        mobile: 9876543210,
        email: 'abc@xyz.com'
      },
      {
        name: 'Ram Singh',
        doa: '10-03-21',
        gender: 'Male',
        mobile: 9876543211,
        email: 'def@xyz.com'
      },
      {
        name: 'Ramesh Bansal',
        doa: '10-04-14',
        gender: 'Male',
        mobile: 9876543212,
        email: 'ghi@xyz.com'
      },
      {
        name: 'Rajiv Gandhi',
        doa: '10-05-16',
        gender: 'Male',
        mobile: 9876543213,
        email: 'jkl@xyz.com'
      },
      {
        name: 'Raghav Sukhija',
        doa: '10-06-18',
        gender: 'Male',
        mobile: 9876543214,
        email: 'mno@xyz.com'
      },
      {
        name: 'Rohit Dimri',
        doa: '10-07-19',
        gender: 'Male',
        mobile: 9876543215,
        email: 'pqr@xyz.com'
      },
      {
        name: 'Aniket Singh',
        doa: '10-08-22',
        gender: 'Male',
        mobile: 9876543216,
        email: 'stu@xyz.com'
      },
      {
        name: 'Aryan Handa',
        doa: '10-09-21',
        gender: 'Male',
        mobile: 9876543217,
        email: 'vwx@xyz.com'
      },
      {
        name: 'Kashish Jham',
        doa: '10-10-20',
        gender: 'Male',
        mobile: 9876543218,
        email: 'yza@xyz.com'
      },
      {
        name: 'Garvit Arora',
        doa: '14-11-09',
        gender: 'Male',
        mobile: 9876543219,
        email: 'grv@xyz.com'
      },
      {
        name: 'Surjeet Singh',
        doa: '11-12-06',
        gender: 'Male',
        mobile: 9876543221,
        email: 'sur@xyz.com'
      }
    ], (err, result) => {
      if(err) {
        return console.log('Unable to find', err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2 ));
    }
  );

  client.close();
});
