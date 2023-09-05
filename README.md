## DOCUMENTAÇÃO ROADROVERS

## INTRODUÇÃO

Bem-vindo à documentação do site RoadRovers. Este documento fornece informações sobre a estrutura, componentes principais e fluxos do site desenvolvido em React com TypeScript.
Acesse pelo link: ---------

## PRÉ-REQUISITOS (para rodar localmente)

Certifique-se de ter as seguintes ferramentas instaladas antes de prosseguir:
- Node.js;
- Uma IDE (vscode);

## INSTALAÇÃO

- Clone o repositório em sua máquina;
- Instale as dependências usando o comando ‘yarn’ ou ‘npm install’ no terminal gitbash do vscode;
  
## RODANDO A APLICAÇÃO

Para iniciar o servidor de desenvolvimento: ‘npm run dev’ ou ‘yarn dev’
O site estará disponível em: http://localhost:3000

## SOBRE A APLICAÇÃO

- No header podemos localizar botões de login e cadastro, e quando logado um botão para a navegação em todo o site;
  
## Home

- Uma página onde são renderizados todos os anúncios ativos, em páginas para suavizar as requisições;
-Filtro onde podemos filtrar de acordo com as marcas, modelos, cores, combustíveis, ano, quilometragem ou preço que foram registrados no banco de dados;
- A partir do card do anuncio é possível acessar tanto a página exclusiva referente ao anuncio como a página do anunciante daquele item;
  
## Pagina exclusiva do produto
- Entrar em contato com o proprietário do mesmo;
- Mais informações;
- Comentários a respeito daquele produto;
- Se logado pode comentar a respeito do produto;
- Mais fotos;
- Acesso a pagina do vendedor.
  
## Pagina do vendedor (publica)

- Acesso a todos os produtos daquele vendedor;
- Informações do mesmo;
  
## Pagina do vendedor / dashboard do vendedor (privada):

- Adicionar um novo anuncio;
- Editar/excluir um anuncio;
- Editar suas informações, ou excluir sua conta;
- Deslogar. 
