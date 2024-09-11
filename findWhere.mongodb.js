const database = 'ATIV01';

const collection = 'BD3ativ1';

use(database);

db[collection].find(
                        {"cpf":"123.456.789-00"},
                        {"codigo_aluno":0}
                    );