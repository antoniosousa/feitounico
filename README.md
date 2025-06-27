# Passos para clonar o projeto pela primeira vez

criar o ambiente virtural do python:
```bash
python -m venv .venv
```

ativar o ambiente virtual:
```bash
.venv\Scripts\activate
```

instalar todas as dependências do projeto:
```bash
python -m pip install -r requirements.txt
```

será preciso criar/atualizar o banco de dados:
```bash
python manage.py makemigrations
```

depois aplicar as migrações, que é criar tabelas
```
python manage.py migrate
```

# Passos para programar no dia a dia
quado for preciso criar um novo app
```bash
python manage.py startapp <nome do app> apps/<nome do app>
```
- Obs.: tem que criar a pasta com o <nome do app> antes do comando

depois do app criado, temos que modificar o arquivo apps.py dentro da pasta do app criado e modificar `name = 'core'` para `name = 'apps.core'`

feito os ajustes em app.py é preciso adicionar o app criado no settins.py na variável `INSTALLED_APPS` no final, assim: 
```python
'apps.core',
```

para executar o projeto
```bash
python manage.py runserver
```