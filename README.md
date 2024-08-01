# superfreteAutomationTest
Automação de testes e2e superfrete em cypress.

# Como realizar o download do projeto via repositório.

 `OPCIONAL`

Criar um repositório em sua máquina local com o título do projeto, realizar o comando de clone dentro do repositório criado.
​
# Pré-requisitos para executar o projeto em sua máquina local.
 `ESSENCIAL`
​
Possuir o Node.JS
Atentar para qual você usa em sua máquina local e verificar qual versão listada abaixo você precisa possuir do NodeJS;
​
- | MacOS -> A partir da versão 10.9 (somente x64) |
- | Linux -> Ubuntu (A partir da 12.04), Fedora (A partir da 2.1), Debian (A partir da 8.0 somente x64)|
- | Windows -> A partir da versão 7.0|
​

Caso não tenha ainda o NodeJS em sua máquina, acessar o link do site abaixo ou executar os comandos referente ao seu sistema operacional.
​
Link -> https://nodejs.org/en/
```bash
 #Linux
$ sudo apt-get install -y nodejs
​
#Windows
  npm install OpenJS.NodeJS.LTS
​
#macOS
  brew install node@18
​
```
`ESSENCIAL`
​

Ao clonar o projeto e acessá-lo via terminal, deve-se realizar a instalação do cypress novamente para que seja possível executar os comandos via terminal.
​
```bash
 npm install cypress
```
Qualquer dúvida acessar o link da doc de instalação -> https://docs.cypress.io/guides/getting-started/installing-cypress
​​

 # Execução dos testes
​
## 1.Execução do teste via navegador
​
Após todos os requisitos acima preenchidos para execução do projeto de automação, segue os comandos para execução dos testes via terminal:


* Execução por ambiente em QA

```bash
npx cypress open --env environmentName=qa
```
* Execução por ambiente em Sandbox

```bash
npx cypress open --env environmentName=homolog

* Execução por ambiente padrão

```bash
npx cypress open
```
Os comandos acima abrirá o navegador apresentando o layout do cypress onde escolheremos a opção E2E Testing.
​
​
## 2.Execução dos testes em modo Headless
​
É o teste via terminal que será executado após os testes via navegador estarem finalizados. O teste headless nos fornecerá evidências como screenshots e vídeos sobre os testes executados.
Existem duas formas de executar o comando de teste headless;
​
1. Comando via terminal solicitando a execução de todos os testes contidos na pasta E2E:
​
```bash
npx cypress run
```
2. Comando via terminal solicitando a execução somente o arquivo de teste informado:
​
```bash
npx cypress run --spec "caminho do arquivo" --env environmentName="ambiente"