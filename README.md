# event-platform

# Anotações

CMS = Content Management System 

O CMS tradicional, como o wordpress, traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (Temas), já p Headless CMS (GraphCMS) fornece um painel ADMIN (dados fornecidos através de uma API REST ou GraphQL) e o React que consome essa API do CMS

Sintaxe do GraphCMS:

Query: buscar dados
Mutation: criar, alterar ou deletar

Exemplo: 

query{
    Lessons{
        data
    }
}

