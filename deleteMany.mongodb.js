const database = 'ATIV01';

const collection = 'BD3ativ1';

use(database);

db[collection].deleteMany(
    {"nome": "Carla Oliveira"}
)
