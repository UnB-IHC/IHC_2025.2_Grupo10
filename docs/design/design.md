hide: [navigation]

# Design

O design acessível é um dos pilares fundamentais da construção de produtos digitais inclusivos. Ele garante que a forma visual e a interação gráfica de interfaces possam ser percebidas, compreendidas e utilizadas pelo maior número possível de pessoas, independentemente de suas habilidades, limitações sensoriais ou contextos de uso.

Com base nas diretrizes da **WCAG 2.2** e nos princípios estabelecidos pela **NBR 17225:2025**, o design acessível deve considerar elementos como contraste adequado entre texto e fundo, uso coerente das cores, tamanho e espaçamento de fontes, organização hierárquica da informação, além da clareza visual de ícones, botões e elementos interativos.

Além de promover a igualdade de acesso, o design acessível melhora a experiência geral de uso, fortalece a credibilidade da marca e contribui para a conformidade com padrões internacionais e legislações de acessibilidade digital. Em síntese, projetar com acessibilidade é projetar com empatia, criando produtos digitais que comunicam, incluem e respeitam todas as pessoas.

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

## Instruções e características sensoriais

Critérios relacionados à forma como o usuário compreende o conteúdo sem depender apenas de aspectos visuais ou sensoriais.
 
 <input type="checkbox" data-level="A"> <b>Todos</b> para imagens decorativas que não têm significado. <a href="#RP1">[1]</a>  
 <input type="checkbox" data-level="AA"> <b>Instruções não devem </b> os elementos que podem receber foco devem apresentar um indicador visual claramente perceptível, assegurando que o usuário identifique onde está a interação no momento.  <a id="TEC2" href="#RP2">[2]</a>  
 <input type="checkbox" data-level="AA"> <b>Os elementos interativos devem seguir uma ordem</b> lógica e intuitiva de navegação, respeitando a hierarquia e a estrutura visual da página, sem desorientar o usuário. <a d="TEC3" href="#RP3">[3]</a>  s

## Cor e contraste

Critérios sobre o uso da cor, contraste e legibilidade visual.

<input type="checkbox" data-level="A"> A cor não deve ser o único meio de transmitir **informações**. <a id="TEC4" href="#RP4">[4]</a>  
<input type="checkbox" data-level="AA"> Texto e imagens de texto devem ter **contraste de 4,5:1**. <a id="TEC5" href="#RP5">[5]</a>  
<input type="checkbox" data-level="AAA"> **Contraste 7:1** para texto e imagens de texto. <a id="TEC6" href="#RP6">[6]</a>  
<input type="checkbox" data-level="AA"> Elementos gráficos e componentes da interface devem ter **contraste mínimo de 3:1** com o fundo. <a id="TEC7" href="#RP7">[7]</a>  
<input type="checkbox" data-level="AA"> A cor não deve ser o único meio de transmitir **informações** ou identificar ações... <a id="TEC8" href="#RP8">[8]</a>  
<input type="checkbox" data-level="AA"> Todos os componentes de interface e elementos gráficos devem possuir **contraste mínimo de 3:1**... <a id="TEC9" href="#RP9">[9]</a>  

## Texto e legibilidade

Critérios relacionados à apresentação, tamanho e espaçamento do texto.

<input type="checkbox" data-level="AA"> O texto pode ser **aumentado até 200%** sem perda de conteúdo ou funcionalidade. <a id="TEC10" href="#RP10">[10]</a>  
<input type="checkbox" data-level="AA"> Prefira **texto real** a imagens contendo texto. <a id="TEC11" href="#RP11">[11]</a>  
<input type="checkbox" data-level="AAA"> Controle de **cores, largura de linha, espaçamento** entre linhas e parágrafos. <a id="TEC12" href="#RP12">[12]</a>  
<input type="checkbox" data-level="AAA"> Imagens de texto só devem ser usadas se forem **decorativas ou essenciais**. <a id="TEC13" href="#RP13">[13]</a>  
<input type="checkbox" data-level="AA"> Alterações no **espaçamento** entre letras, palavras e linhas não devem causar perda de conteúdo. <a id="TEC14" href="#RP14">[14]</a>  
<input type="checkbox" data-level="AA"> O espaçamento vertical deve ser de pelo menos **1,5× o tamanho da fonte**, garantindo conforto visual. <a id="TEC15" href="#RP15">[15]</a>  
<input type="checkbox" data-level="AA"> O conteúdo textual deve manter **funcionalidade e legibilidade** quando ampliado em até 200%. <a id="TEC16" href="#RP16">[16]</a>  
<input type="checkbox" data-level="AA"> O conteúdo deve ser **adaptável** sem perda de informação ou rolagem bidimensional. <a id="TEC17" href="#RP17">[17]</a>  

## Áudio e som

Critérios que tratam da acessibilidade para usuários com limitações auditivas.

<input type="checkbox" data-level="AAA"> Áudio com fala deve ter **som de fundo ausente ou 20 dB mais baixo**. <a id="TEC18" href="#RP18">[18]</a>

## Conteúdo interativo e foco

Critérios sobre comportamento de foco, interação com o mouse e teclado.

<input type="checkbox" data-level="AA"> O conteúdo exibido ao **passar o mouse ou dar foco** deve ser descartável e acessível. <a id="TEC19" href="#RP19">[19]</a>  
<input type="checkbox" data-level="A"> A **navegação sequencial** deve manter a lógica e o significado. <a id="TEC20" href="#RP20">[20]</a>  
<input type="checkbox" data-level="AA"> O **componente em foco** não deve ficar totalmente oculto. <a id="TEC21" href="#RP21">[21]</a>  
<input type="checkbox" data-level="AAA"> Nenhuma parte do **componente em foco** deve ser ocultada. <a id="TEC22" href="#RP22">[22]</a>  
<input type="checkbox" data-level="AAA"> O foco deve ter **contraste mínimo de 3:1** e **borda visível** (mínimo 2px). <a id="TEC23" href="#RP23">[23]</a>  

## Gestos e acionamento

Critérios sobre o uso de gestos e cliques no conteúdo.

<input type="checkbox" data-level="A"> Todas as funções devem ser operadas com **único ponteiro**, sem gestos complexos. <a id="TEC24" href="#RP24">[24]</a>  
<input type="checkbox" data-level="A"> O acionamento de eventos com ponteiro deve poder ser **cancelado ou ajustado**. <a id="TEC25" href="#RP25">[25]</a>  
<input type="checkbox" data-level="AA"> Toda imagem relevante deve possuir **texto alternativo equivalente**. <a id="TEC26" href="#RP26">[26]</a>  
<input type="checkbox" data-level="AA"> Elementos interativos devem ter **área mínima de 44×44 px**. <a id="TEC27" href="#RP27">[27]</a>  


## Referências Bibliograficas

> <a id="RP1" href="#TEC1">1.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.3.3 Características Sensoriais (Nível A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html.](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html). Acesso em: 9 Nov. 2025.

> <a id="RP2" href="#TEC2">2.</a> Associação Brasileira de Normas Técnicas (ABNT). NBR 17225: Acessibilidade Digital — Requisitos para Conteúdo na Web. Rio de Janeiro: ABNT, 2025. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.). Acesso em: 9 Nov. 2025.

> <a id="RP3" href="#TEC3">3.</a> Associação Brasileira de Normas Técnicas (ABNT). NBR 17225: Acessibilidade Digital — Requisitos para Conteúdo na Web. Rio de Janeiro: ABNT, 2025. Disponível em:  [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.). Acesso em: 9 Nov. 2025.

> <a id="RP4" href="#TEC4">4.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.1 Uso da Cor (Nível A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Nov. 2025.

> <a id="RP5" href="#TEC5">5.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.3 Contraste (Mínimo) (Nível AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Acesso em: 9 Nov. 2025.

> <a id="RP6" href="#TEC6">6.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.6 Contraste (Aprimorado) (Nível AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html). Acesso em: 9 Nov. 2025.

> <a id="RP7" href="#TEC7">7.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.11 Contraste Não Textual (Nível AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Acesso em: 9 Nov. 2025.

> <a id="RP8" href="#TEC8">8.</a> Associação Brasileira de Normas Técnicas (ABNT). NBR 17225: Acessibilidade Digital — Requisitos para Conteúdo na Web. Rio de Janeiro: ABNT, 2025. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.). Acesso em: 9 Nov. 2025.

> <a id="RP9" href="#TEC9">9.</a> Associação Brasileira de Normas Técnicas (ABNT). NBR 17225: Acessibilidade Digital — Requisitos para Conteúdo na Web. Rio de Janeiro: ABNT, 2025. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.). Acesso em: 9 Nov. 2025.

> <a id="RP10" href="#TEC10">10.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.4 Redimensionar Texto (Nível AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html.](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html.). Acesso em: 9 Nov. 2025.

> <a id="RP11" href="#TEC11">11.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.5 Imagens de Texto (Nível AA). Disponível em:  [https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html). Acesso em: 9 Nov. 2025.

> <a id="RP12" href="#TEC12">12.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.8 Apresentação Visual (Nível AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html). Acesso em: 9 Nov. 2025.

> <a id="RP13" href="#TEC13">13.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.9 Imagens de Texto (Sem Exceção) (Nível AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html). Acesso em: 9 Nov. 2025.

> <a id="RP14" href="#TEC14">14.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.12 Espaçamento do Texto (Nível AA). Disponível em: Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html.](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html). Acesso em: 9 Nov. 2025.

> <a id="RP15" href="#TEC15">15.</a> Associação Brasileira de Normas Técnicas (ABNT). NBR 17225: Acessibilidade Digital — Requisitos para Conteúdo na Web. Rio de Janeiro: ABNT, 2025. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.). Acesso em: 9 Nov. 2025.

> <a id="RP16" href="#TEC16">16.</a> Associação Brasileira de Normas Técnicas (ABNT). NBR 17225: Acessibilidade Digital — Requisitos para Conteúdo na Web. Rio de Janeiro: ABNT, 2025. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.). Acesso em: 9 Nov. 2025.

> <a id="RP17" href="#TEC17">17.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.10 Refluxo (Reflow) (Nível AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Nov. 2025.

> <a id="RP18" href="#TEC18">18.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.7 Áudio de Fundo Baixo ou Inexistente (Nível AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html](https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html). Acesso em: 9 Nov. 2025. Acesso em: 9 Nov. 2025.

> <a id="RP19" href="#TEC19">19.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 1.4.13 Conteúdo ao Passar o Cursor ou ao Focar (Nível AA). Disponível em:  Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html). Acesso em: 9 Nov. 2025.

> <a id="RP20" href="#TEC20">20.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.4.3 Ordem de Foco (Nível A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html). Acesso em: 9 Nov. 2025.

> <a id="RP21" href="#TEC21">21.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.4.11 Foco Não Obstruído (Mínimo) (Nível AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html). Acesso em: 9 Nov. 2025.

> <a id="RP22" href="#TEC22">22.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.4.12 Foco Não Obstruído (Aprimorado) (Nível AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html). Acesso em: 9 Nov. 2025.

> <a id="RP23" href="#TEC23">23.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.4.13 Aparência do Foco (Nível AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html). Acesso em: 9 Nov. 2025.

> <a id="RP24" href="#TEC24">24.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.5.1 Gestos de Acionamento (Nível A). Disponível em:  [https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html). Acesso em: 9 Nov. 2025.

> <a id="RP25" href="#TEC25">25.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. CS 2.5.2 Cancelamento de Acionamento (Nível A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html). Acesso em: 9 Nov. 2025.

> <a id="RP26" href="#TEC26">26.</a> Associação Brasileira de Normas Técnicas (ABNT). NBR 17225: Acessibilidade Digital — Requisitos para Conteúdo na Web. Rio de Janeiro: ABNT, 2025. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.). Acesso em: 9 Nov. 2025.

> <a id="RP27" href="#TEC27">27.</a> Associação Brasileira de Normas Técnicas (ABNT). NBR 17225: Acessibilidade Digital — Requisitos para Conteúdo na Web. Rio de Janeiro: ABNT, 2025. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf.). Acesso em: 9 Nov. 2025.

## Bibliografia

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Nov. 2025.