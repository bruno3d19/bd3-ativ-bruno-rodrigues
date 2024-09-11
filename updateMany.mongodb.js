const database = 'ATIV01';

const collection = 'BD3ativ1';

use(database);

db[collection].updateMany(
    {"nome":"Bruno Santos"},{$set:{"name":"Josefh Rodrigues"}},
    {"cpf":"234.567.890-12"},{$set:{"cpf":"527.947.754-22"}},
    {"rg": "23.456.789-0"},{$set:{"rg": "90.038.832-3"}}
);