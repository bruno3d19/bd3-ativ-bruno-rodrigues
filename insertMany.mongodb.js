const database = 'ATIV01';

const collection = 'BD3ativ1';

use(database);

db[collection].insertMany(
    [
        {
            "codigo_aluno": "A001",
            "codigo_turma": "T001",
            "nome": "Ana Silva",
            "cpf": "123.456.789-00",
            "rg": "12.345.678-9",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 91234-5678",
            "email": "ana.silva@example.com",
            "data_nascimento": "2005-01-15"
          },
          {
            "codigo_aluno": "A002",
            "codigo_turma": "T001",
            "nome": "Bruno Santos",
            "cpf": "234.567.890-12",
            "rg": "23.456.789-0",
            "telefone_aluno": "(11) 97654-3210",
            "telefone_responsavel": "(11) 92345-6789",
            "email": "bruno.santos@example.com",
            "data_nascimento": "2004-02-20"
          },
          {
            "codigo_aluno": "A003",
            "codigo_turma": "T002",
            "nome": "Carla Oliveira",
            "cpf": "345.678.901-23",
            "rg": "34.567.890-1",
            "telefone_aluno": "(21) 96543-2109",
            "telefone_responsavel": "(21) 93456-7890",
            "email": "carla.oliveira@example.com",
            "data_nascimento": "2005-03-25"
          },
          {
            "codigo_aluno": "A004",
            "codigo_turma": "T002",
            "nome": "Daniel Costa",
            "cpf": "456.789.012-34",
            "rg": "45.678.901-2",
            "telefone_aluno": "(21) 95432-1098",
            "telefone_responsavel": "(21) 94567-8901",
            "email": "daniel.costa@example.com",
            "data_nascimento": "2004-04-30"
          },
          {
            "codigo_aluno": "A005",
            "codigo_turma": "T003",
            "nome": "Eduarda Lima",
            "cpf": "567.890.123-45",
            "rg": "56.789.012-3",
            "telefone_aluno": "(31) 94321-0987",
            "telefone_responsavel": "(31) 95678-9012",
            "email": "eduarda.lima@example.com",
            "data_nascimento": "2005-05-10"
          },
          {
            "codigo_aluno": "A006",
            "codigo_turma": "T003",
            "nome": "Felipe Almeida",
            "cpf": "678.901.234-56",
            "rg": "67.890.123-4",
            "telefone_aluno": "(31) 93210-9876",
            "telefone_responsavel": "(31) 96789-0123",
            "email": "felipe.almeida@example.com",
            "data_nascimento": "2004-06-15"
          },
          {
            "codigo_aluno": "A007",
            "codigo_turma": "T004",
            "nome": "Gabriela Martins",
            "cpf": "789.012.345-67",
            "rg": "78.901.234-5",
            "telefone_aluno": "(41) 92109-8765",
            "telefone_responsavel": "(41) 97890-1234",
            "email": "gabriela.martins@example.com",
            "data_nascimento": "2005-07-20"
          },
          {
            "codigo_aluno": "A008",
            "codigo_turma": "T004",
            "nome": "Henrique Souza",
            "cpf": "890.123.456-78",
            "rg": "89.012.345-6",
            "telefone_aluno": "(41) 91098-7654",
            "telefone_responsavel": "(41) 98901-2345",
            "email": "henrique.souza@example.com",
            "data_nascimento": "2004-08-25"
          },
          {
            "codigo_aluno": "A009",
            "codigo_turma": "T005",
            "nome": "Isabela Ferreira",
            "cpf": "901.234.567-89",
            "rg": "90.123.456-7",
            "telefone_aluno": "(51) 92087-6543",
            "telefone_responsavel": "(51) 99321-4567",
            "email": "isabela.ferreira@example.com",
            "data_nascimento": "2005-09-30"
          },
          {
            "codigo_aluno": "A010",
            "codigo_turma": "T005",
            "nome": "João Pedro Lima",
            "cpf": "012.345.678-90",
            "rg": "01.234.567-8",
            "telefone_aluno": "(51) 93076-5432",
            "telefone_responsavel": "(51) 98765-4321",
            "email": "joao.pedro.lima@example.com",
            "data_nascimento": "2004-10-05"
          }
    ]
)