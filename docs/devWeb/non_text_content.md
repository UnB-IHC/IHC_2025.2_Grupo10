hide: [navigation]

# Desenvolvimento Web

 Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, verificá-la e usar as ferramentas disponíveis no mercado para testes e padronizações. Também é importante que a equipe saiba como as pessoas com deficiência usam os sítios web e aplicativos. 

## Progresso WCAG

 <div class="progress-sidebar" style="display: flex; flex-direction: row; justify-content: center; gap: 30px; margin-bottom: 30px;">
  <div style="text-align: center;">
    <h3>Nível A</h3>
    <canvas id="graficoA" width="150" height="150"></canvas>
  </div>
  <div style="text-align: center;">
    <h3>Nível AA</h3>
    <canvas id="graficoAA" width="150" height="150"></canvas>
  </div>
  <div style="text-align: center;">
    <h3>Nível AAA</h3>
    <canvas id="graficoAAA" width="150" height="150"></canvas>
  </div>
 </div>

## Imagens
 <input type="checkbox" data-level="A"> Todas as <b>imagens, ícones e gráficos</b> devem conter um texto alternativo (`alt`) que descreva seu conteúdo. <a href="#RP1">[1]</a>  

 <input type="checkbox" data-level="A"> Use <b>`alt=""`</b> em imagens meramente decorativas, sem informação relevante. <a href="#RP1">[1]</a>  

 <input type="checkbox" data-level="A"> Adicione uma <b>descrição textual no `alt`</b> sempre que a imagem contiver texto visível. <a href="#RP1">[1]</a>  

## Vídeos
 <input type="checkbox" data-level="A"> Inclua <b>legendas sincronizadas</b> para todo conteúdo de áudio em vídeos. <a href="#RP2">[2]</a>  

 <input type="checkbox" data-level="AAA"> Evite <b>animações ou vídeos com flashes</b> que possam causar desconforto ou convulsões. <a href="#RP3">[3]</a>  

## Controles
 <input type="checkbox" data-level="A"> Certifique-se de que todos os <b>links possuem `href`</b> válido. <a href="#RP4">[4]</a>  

 <input type="checkbox" data-level="AA"> Os <b>links devem ser claramente visíveis</b>, por exemplo, com sublinhado. <a href="#RP5">[5]</a>  

 <input type="checkbox" data-level="A"> Garanta que <b>botões e campos exibam foco</b> ao serem selecionados. <a href="#RP6">[6]</a>  

 <input type="checkbox" data-level="A"> Defina corretamente o <b>atributo `type="button"`</b> nos botões. <a href="#RP4">[4]</a>  

 <input type="checkbox" data-level="A"> Adicione um <b>link para pular diretamente ao conteúdo principal</b> (“skip link”). <a href="#RP7">[7]</a>  

 <input type="checkbox" data-level="AA"> Informe o usuário quando um <b>link abrir em nova aba ou janela</b>. <a href="#RP8">[8]</a>  

## Formulário
 <input type="checkbox" data-level="A"> Cada <b>campo de formulário</b> deve ter um `label` descritivo. <a href="#RP9">[9]</a>  

 <input type="checkbox" data-level="A"> Utilize <b>`<fieldset>` e `<legend>`</b> para organizar grupos de campos relacionados. <a href="#RP4">[4]</a>  

 <input type="checkbox" data-level="AA"> Ative o <b>`autocomplete`</b> para facilitar o preenchimento de dados. <a href="#RP10">[10]</a>  

 <input type="checkbox" data-level="A"> Mostre <b>mensagens de erro acima do formulário</b> para melhor visibilidade. <a href="#RP11">[11]</a>  

 <input type="checkbox" data-level="AA"> Use <b>`aria-describedby`</b> para associar campos às mensagens de ajuda ou erro. <a href="#RP11">[11]</a>  

 <input type="checkbox" data-level="AAA"> Forneça <b>mensagens de erro audíveis</b> para usuários com deficiência visual. <a href="#RP5">[5]</a>  

## Mídia
 <input type="checkbox" data-level="A"> Desative o <b>`autoplay`</b> em vídeos e áudios. <a href="#RP12">[12]</a>  

 <input type="checkbox" data-level="A"> Especifique o <b>`type`</b> correto em botões e entradas. <a href="#RP4">[4]</a>  

 <input type="checkbox" data-level="AA"> Permita que o usuário <b>pause ou controle</b> todas as mídias. <a href="#RP13">[13]</a>  

 <input type="checkbox" data-level="AAA"> Ofereça uma <b>transcrição textual</b> para todo conteúdo em áudio. <a href="#RP1">[1]</a>  

## Semântica
 <input type="checkbox" data-level="A"> Utilize <b>elementos HTML nativos</b> sempre que possível.  

 <input type="checkbox" data-level="A"> Mantenha um <b>fluxo lógico e coerente</b> na leitura da página.  

 <input type="checkbox" data-level="AA"> Escreva <b>descrições claras e compreensíveis</b>.  

 <input type="checkbox" data-level="A"> Use a <b>semântica correta</b> dos elementos para representar o conteúdo.  

 <input type="checkbox" data-level="AA"> Empregue <b>rótulos curtos e objetivos</b> para facilitar a leitura.  

## Texto
 <input type="checkbox" data-level="A"> <b>Evite inserir texto dentro de imagens</b>; prefira texto real.  

 <input type="checkbox" data-level="AA"> Permita <b>ampliar o texto até 200%</b> sem perda de legibilidade.  

 <input type="checkbox" data-level="AA"> Use <b>tamanhos de fonte ajustáveis</b>, sem valores fixos.  

## Teclado
 <input type="checkbox" data-level="A"> Todas as funções devem ser <b>acessíveis pelo teclado</b>.  

 <input type="checkbox" data-level="AA"> Ações com <b>mouseover</b> também devem funcionar com o teclado.  

 <input type="checkbox" data-level="A"> O <b>foco do teclado</b> deve ser sempre visível e consistente.  

 <input type="checkbox" data-level="AA"> Configure corretamente as pseudo-classes <b>`:hover` e `:focus`</b>.  

 <input type="checkbox" data-level="A"> Garanta que os <b>atalhos com TAB</b> percorrem todos os elementos interativos.  

 <input type="checkbox" data-level="A"> O <b>primeiro item da navegação</b> deve levar ao conteúdo principal.  

## Título
 <input type="checkbox" data-level="AA"> Mantenha uma <b>hierarquia lógica</b> entre os títulos (h1, h2, h3...). <a href="#RP17">[17]</a>  

 <input type="checkbox" data-level="AA"> Utilize as tags <b>h1–h3</b> conforme a importância do conteúdo. <a href="#RP17">[17]</a>  

 <input type="checkbox" data-level="AA"> <b>Evite pular níveis</b> na hierarquia de cabeçalhos.  

 <input type="checkbox" data-level="A"> Garanta que <b>cada página tenha um h1 descritivo</b> e único. <a href="#RP17">[17]</a>  

## Dispositivo Móvel
 <input type="checkbox" data-level="AAA"> Permita a <b>rotação da tela</b> entre modos retrato e paisagem. <a href="#RP14">[14]</a>  

 <input type="checkbox" data-level="AA"> Evite a <b>rolagem horizontal</b> em dispositivos móveis. <a href="#RP16">[16]</a>  

 <input type="checkbox" data-level="AAA"> Garanta uma <b>interação fácil e precisa por toque</b>. <a href="#RP18">[18]</a>  

 <input type="checkbox" data-level="AA"> Deixe <b>espaço adequado entre botões e links</b> para evitar toques acidentais. <a href="#RP7">[7]</a>  


 # Referência Bibliográfica

 > <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). Acesso em: 9 mai. 2024.  
 > <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.2.2 Captions (Prerecorded) (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html). Acesso em: 9 mai. 2024.  
 > <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 mai. 2024.  
 > <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.3.1 Info and Relationships (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). Acesso em: 9 mai. 2024.  
 > <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 mai. 2024.  
 > <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html). Acesso em: 9 mai. 2024.  
 > <a id="RP7" href="#TEC7">7.</a> WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html). Acesso em: 9 mai. 2024.  
 > <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. G201 – Giving users advanced warning when opening a new window. Disponível em: [https://www.w3.org/WAI/WCAG22/Techniques/general/G201](https://www.w3.org/WAI/WCAG22/Techniques/general/G201). Acesso em: 9 mai. 2024.  
 > <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 3.2.2 On Input (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/on-input.html](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html). Acesso em: 9 mai. 2024.  
 > <a id="RP10" href="#TEC10">10.</a> WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html). Acesso em: 9 mai. 2024.  
 > <a id="RP11" href="#TEC11">11.</a> WCAG 2.2 Understanding Docs. SC 3.3.1 Error Identification (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html). Acesso em: 9 mai. 2024.  
 > <a id="RP12" href="#TEC12">12.</a> WCAG 2.2 Understanding Docs. SC 1.4.2 Audio Control (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html). Acesso em: 9 mai. 2024.  
 > <a id="RP13" href="#TEC13">13.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html). Acesso em: 9 mai. 2024.  
 > <a id="RP14" href="#TEC14">14.</a> WCAG 2.2 Understanding Docs. SC 1.3.4 Orientation (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/orientation.html](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html). Acesso em: 9 mai. 2024.  
 > <a id="RP15" href="#TEC15">15.</a> WCAG 2.2 Understanding Docs. SC 4.1.1 Parsing. Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/parsing.html](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html). Acesso em: 9 mai. 2024.  
 > <a id="RP16" href="#TEC16">16.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 mai. 2024.  
 > <a id="RP17" href="#TEC17">17.</a> WCAG 2.2 Understanding Docs. SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html). Acesso em: 9 mai. 2024.  
 > <a id="RP18" href="#TEC18">18.</a> WCAG 2.2 Understanding Docs. SC 2.5.5 Target Size (Enhanced) (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html). Acesso em: 9 mai. 2024.  
 > <a id="RP19" href="#TEC19">19.</a> Guia de Boas Práticas para Acessibilidade Digital. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 mai. 2024.  

 ---

# Bibliografia

 > DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. *Guia de Boas Práticas para Acessibilidade Digital*. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 mai. 2024.
