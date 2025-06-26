# Passos para clonar o projeto pela primeira vez
criar o ambiente virtural do python
`python -m venv .venv`

ativar o ambiente virtual
`.venv\Scripts\activate`

instalar todas as dependências do projeto
`python -m pip install -r requirements.txt`

# Passos para programar no dia a dia
para criar um novo app
`python manage.py startapp <nome do app> apps/<nome do app>`
Obs.: tem que criar a pasta com o <nome do app> antes do comando

depois do app criado, temos que modificar o arquivo apps.py dentro da pasta do app criado e modificar `name = 'core'` para `name = 'apps.core'`

depois do app criado tem que configurar adicionando o app criado no settins.py na variável `INSTALLED_APPS` no final, assim:
`'apps.core',`

para executar o projeto
`python manage.py runserver`