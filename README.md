# WebAble

<div align="center">
<img src="docs/imagens/logo.png" alt="Logo" style="width: 300px">
</div>


## Introdução

O WebAble é um projeto desenvolvido durante a disciplina de Interação Humano-Computador (IHC), ministrada pela professora Rejane Maria da Costa Figueiredo na Universidade de Brasília (UnB), ao longo do semestre 2025.2.

Este repositório tem como propósito disponibilizar um checklist prático de acessibilidade digital, reunindo diretrizes e boas práticas para diferentes áreas de projeto, incluindo:
desenvolvimento web, design, geração de conteúdo e gestão de projetos.

O projeto também busca promover a conscientização sobre acessibilidade no desenvolvimento de soluções digitais, utilizando como base as normas e padrões mais atuais.


## Importância e Público-Alvo

A acessibilidade digital é um direito garantido pela Lei Brasileira de Inclusão (13.146/2015) e um princípio essencial da usabilidade e inclusão social.

Implementar esses critérios não é apenas uma exigência legal, mas também uma atitude ética e responsável que amplia o acesso à informação e promove a equidade digital.

Os critérios aplicados beneficiam:

- Pessoas que navegam apenas com teclado (mobilidade reduzida);

- Pessoas que utilizam leitores de tela (cegos ou com baixa visão);

- Pessoas com deficiência cognitiva, que precisam de orientação clara e rótulos compreensíveis;

- Todos os usuários, já que uma interface previsível e estruturada melhora a experiência geral.

## Checklist

O material reúne itens de verificação (checklist) com base nas principais referências normativas e diretrizes de acessibilidade digital, incluindo:

- WCAG 2.2: Diretrizes de Acessibilidade para Conteúdo Web

- ABNT NBR 17225:2023: Norma brasileira de acessibilidade digital

- Guia de Boas Práticas para Acessibilidade Digital: Publicado pelo Governo do Brasil

Além disso, o WebAble conta com recursos que facilitam o uso e a compreensão dos critérios:

- Checkboxes interativos com persistência local (os dados permanecem no navegador)

- Gráficos de conformidade que mostram o progresso em cada nível de acessibilidade (A, AA e AAA)

- Seleção de ferramentas de apoio para avaliação e validação da acessibilidade

##  Como Executar o Projeto Localmente
Caso queira ver ou editar a documentação localmente:


### Pré-requisitos
- Python 3.6 ou superior
- pip (gerenciador de pacotes do Python)


### Clone este repositório:
   ```bash
   git clone https://github.com/UnB-IHC/IHC_2025.2_Grupo10.git
   cd IHC_2025.2_Grupo10

# Acesse a pasta do projeto
cd repositorio
   ```


### Instalação
   ```bash
# Instale o MkDocs
pip install mkdocs
```


### Configure o Ambiente Virtual (Recomendado)
 ```bash
# Crie um ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# No Windows:
venv\Scripts\activate
# No macOS/Linux:
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt
```


### Adicionar uma nova página:
1. Crie um novo arquivo .md na pasta docs/
2. Adicione ao menu no mkdocs.yml


### Visualize as Alterações Localmente
 ```bash
# Execute o servidor local
mkdocs serve

# Acesse no navegador:
# http://localhost:8000
```


### Deploy para Produção após o push
 ```bash
# Faça deploy para GitHub Pages
mkdocs gh-deploy
```
## **Equipe**

<table>
  <tr>
    <td align="center"><a href="https://github.com/GuilhermeOliveira1327"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/185217197?v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Oliveira</b></sub></a><br />
    <td align="center"><a href="https://github.com/Samuel-A-Santos"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/117104826?v=4" width="100px;" alt=""/><br /><sub><b>Samuel Santos</b></sub></a><br />
    <td align="center"><a href="https://github.com/Kael-web7"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/197663705?v=4" width="100px;" alt=""/><br /><sub><b>Miquéias Ezequiel</b></sub></a><br />
    <td align="center"><a href="https://github.com/pedroG0"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/169565377?v=4" width="100px;" alt=""/><br /><sub><b>Pedro Gomes</b></sub></a><br />
    <td align="center"><a href="https://github.com/LuGit00"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/166548910?v=4" width="100px;" alt=""/><br /><sub><b>Luciano Alves</b></sub></a><br />
  </tr>
</table>

##

## Deploy
O site está disponível a seguir: [Clique aqui](https://unb-ihc.github.io/IHC_2025.2_Grupo10/)

## **Licença**

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](https://github.com/UnB-IHC/IHC_2025.2_Grupo10?tab=License-1-ov-file) para detalhes.
