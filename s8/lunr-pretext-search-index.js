var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "calc-extremos-duas-variaveis-2",
  "level": "1",
  "url": "calc-extremos-duas-variaveis-2.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "  Leon Silva Departamento de Matemática Universidade Federal Rural de Pernanbuco  Lorena Brizza Departamento de Matemática Universidade Federal Rural de Pernanbuco        Aqui faremos um resumo das atividades da semana sobre extremos de funções de duas variáveis e suas aplicações em otimização.   "
},
{
  "id": "calc-extremos-duas-variaveis-4",
  "level": "1",
  "url": "calc-extremos-duas-variaveis-4.html",
  "type": "Seção",
  "number": "1",
  "title": "Extremos de funções de duas variáveis",
  "body": " Extremos de funções de duas variáveis   Estrutura    Compreender os extremos relativos de funções de duas variáveis.    Utilizar o Teste de Primeiras Derivadas Parciais para determinar os extremos relativos de funções de duas variáveis.    Utilizar o Teste de Segundas Derivadas Parciais para determinar os extremos relativos de funções de duas variáveis.    Utilizar extremos relativos para responder questões sobre situações da vida real.      Extremos Relativos e Pontos de Sela   Introdução a Extremos Locais e Pontos de Sela     Como no cálculo de uma única variável, nas funções de duas variáveis é necessário distinguir entre extremos relativos e absolutos. Dizemos que uma função de duas variáveis possui um extremo relativo (ou local) em um ponto se o valor da função nesse ponto for maior ou igual (máximo relativo) ou menor ou igual (mínimo relativo) a todos os valores da função em uma pequena região circular centrada no ponto.     Suponha que seja uma função definida em uma região que contém .    A função possui um máximo relativo em se houver uma região circular com centro em tal que para todo em .    A função possui um mínimo relativo em se houver uma região circular com centro em tal que para todo em .      Dizer que possui um máximo relativo em significa que o ponto é pelo menos tão alto quanto todos os pontos próximos no gráfico da superfície . De modo similar, possui um mínimo relativo em se for pelo menos tão baixo quanto todos os pontos vizinhos no gráfico.  Por outro lado, o valor de máximo absoluto de uma função em uma região é o maior valor assumido por ela em toda a região. Por exemplo, a função apresenta um gráfico em formato de paraboloide voltado para baixo, conforme ilustrado na . Note que o vértice está posicionado exatamente na origem , destacando-se visualmente como o ponto mais alto da superfície. Desse modo, o valor é o máximo absoluto de em todo o plano . Um mínimo absoluto de em uma região é definido de maneira semelhante (como o ponto mais baixo de uma superfície).   Gráfico do paraboloide com o ponto de máximo absoluto na origem        Teste de Primeiras Derivadas Parciais e Pontos Críticos   Identificação de Pontos Críticos     Para localizar os extremos relativos de uma função de duas variáveis, empregamos um procedimento similar ao teste da primeira derivada utilizado para funções de uma única variável: procuramos por pontos onde o plano tangente ao gráfico é horizontal ou onde a derivada não existe.    Teste das Primeiras Derivadas Parciais para Extremos Relativos  Se possui um extremo relativo em em uma região aberta no plano e as primeiras derivadas parciais de existem em , então:     Um ponto na região aberta é chamado de ponto crítico de se:    e ; ou    uma das primeiras derivadas parciais ou não for definida em .      Como ocorre para funções de uma única variável, os pontos críticos de uma função de duas variáveis nem sempre resultam em extremos relativos. Por exemplo, consideremos a função exibida na . O ponto é um ponto crítico desta superfície, mas o ponto correspondente na superfície não é um extremo local. Se nos aproximarmos da origem ao longo do eixo (onde ), a função assume valores da forma , fazendo com que a origem se comporte como um ponto de máximo relativo. Contudo, se nos aproximarmos ao longo do eixo (onde ), a função assume valores , fazendo com que a origem se comporte como um ponto de mínimo relativo. Tais pontos, que possuem o formato característico de uma sela de montaria, são chamados pontos de sela da função.   Gráfico da sela com ponto de sela destacado na origem        Determine os extremos relativos de .    Começamos determinando as primeiras derivadas parciais de :  Como essas derivadas parciais são definidas para todos os pontos do plano , os únicos pontos críticos são aqueles para os quais ambas as primeiras derivadas parciais são zero. Igualando-as a zero, obtemos o seguinte sistema de equações lineares:  Portanto, o ponto é o único ponto crítico de . Calculando o valor da função neste ponto:  Pela análise algébrica da função, reescrevendo-a completando os quadrados: Como os termos quadráticos são sempre não negativos, vemos que para todo par . Assim, a função possui apenas um extremo relativo, que é o mínimo relativo de valor no ponto crítico .      Determine os extremos relativos da função .    Calcule as primeiras derivadas parciais de , iguale-as a zero para determinar o ponto crítico e complete os quadrados para verificar seu comportamento.    Mínimo relativo de no ponto crítico .      Determine os extremos relativos de .    Começamos determinando as primeiras derivadas parciais de utilizando a Regra da Cadeia:  Essas derivadas parciais são definidas para todos os pontos no plano , exceto no ponto . Portanto, o ponto é um ponto crítico de (do tipo onde as derivadas parciais não são definidas).  Como a quantidade sob a raiz cúbica é positiva para todos os valores de , temos que para todo ponto diferente da origem. Como na origem , este ponto crítico resulta em um máximo relativo de valor em .      Determine os extremos relativos da função .    Diferencie a função e encontre onde as primeiras derivadas parciais de primeira ordem se anulam.    Máximo relativo de no ponto crítico .      Teste das Segundas Derivadas Parciais   O Teste da Segunda Derivada Parcial     Para funções mais complexas, onde as análises gráficas ou o método de completar quadrados não são fáceis de aplicar, utilizamos um teste analítico baseado nas derivadas parciais de segunda ordem.    Teste das Segundas Derivadas Parciais para Extremos Relativos  Suponha que possua segundas derivadas parciais contínuas em uma região aberta que contenha , para o qual e .  Para testar os extremos relativos de , considere a quantidade discriminante dada por:    Se e , então possui um mínimo relativo em .    Se e , então possui um máximo relativo em .    Se , então é um ponto de sela .    O teste não fornece nenhuma informação se .    Atenção: Observe no Teste das Segundas Derivadas Parciais que se , então e devem possuir obrigatoriamente o mesmo sinal. Assim, pode-se substituir por nas duas primeiras partes do teste.    Classificação de Ponto Crítico   Determine e classifique os extremos relativos de .    Primeiro, encontramos os pontos críticos calculando e igualando a zero as primeiras derivadas parciais:  Assim, o único ponto crítico da função é .  Agora, aplicamos o Teste das Segundas Derivadas Parciais. Calculamos as derivadas de segunda ordem:  Calculamos a quantidade discriminante :  Como e , concluímos que a função possui um mínimo relativo no ponto . O valor do mínimo relativo é:      Determine os extremos relativos e os pontos de sela de .    Começamos determinando os pontos críticos de . Calculamos as primeiras derivadas parciais:  Como as derivadas parciais estão definidas para todos os pontos no plano , igualamo-las a zero para achar os pontos críticos:  Substituindo na segunda equação, temos: Substituindo esses valores de volta em , obtemos os três pontos críticos:  Para classificar os pontos, calculamos as derivadas parciais de segunda ordem: A quantidade discriminante é:  Classificamos cada ponto crítico avaliando e :    Para o ponto : temos . Logo, é um ponto de sela .    Para o ponto : temos e . Logo, a função possui um máximo relativo de valor no ponto .    Para o ponto : temos e . Logo, a função possui um máximo relativo de valor no ponto .        Determine os extremos relativos e pontos de sela de .    Calcule as derivadas parciais e encontre o único ponto crítico. Em seguida, utilize o discriminante para classificar.    Ponto de sela na origem com valor de .      Aplicações de Extremos (Otimização)   Os problemas de otimização no mundo real envolvem a maximização ou minimização de uma função de duas variáveis modelando lucro, custo, volume ou área.    Determinação do Lucro Máximo   Uma empresa fabrica dois produtos substitutos cujas funções de demanda são dadas por: em que e são os preços por unidade (em dólares) e e são os números de unidades vendidas. Os custos de produção de cada produto são, respectivamente, e por unidade. Determine os preços que resultarão em lucro máximo.    As funções de custo total e de receita total são formuladas da seguinte maneira:  Escrevendo o custo total em termos dos preços substituindo e :  Escrevendo a receita total:  Obtemos assim a função de lucro total :  O lucro máximo ocorre quando as derivadas parciais de primeira ordem em relação a e são zero:  Resolvendo esse sistema linear simultaneamente: da primeira equação temos . Substituindo na segunda: E então: Como as segundas derivadas parciais são , e , temos: Portanto, o ponto crítico representa de fato um máximo relativo. Assim, os preços de venda que maximizam o lucro são e , resultando em um lucro total máximo de .      Determine os preços que resultarão em lucro máximo para os produtos do Exemplo 4 se os custos de produção unitários passarem a ser para o produto 1 e para o produto 2.    Substitua os novos custos na equação de custo, recalcule a expressão do lucro e resolva o novo sistema linear gerado pelas derivadas de primeira ordem.    Preços ótimos: e .     Determinação de um Volume Máximo   Considere todos os sólidos retangulares possíveis localizados no primeiro octante que estejam apoiados sobre o plano com um vértice na origem e o vértice oposto no plano . Dentre todos esses sólidos, determine aquele que possui o maior volume.    O vértice oposto localiza-se no plano dado por . Isolando a variável , expressamos a altura do sólido em termos de e :  O volume do sólido retangular é dado por . Substituindo na equação, temos:  Para determinar os pontos críticos, igualamos as primeiras derivadas parciais a zero:  Desconsiderando as soluções triviais onde as dimensões são zero ( ou ), resolvemos o sistema:  Substituindo na segunda equação simplificada: Substituindo o valor de : Assim, o sólido que maximiza o volume possui as dimensões , e , gerando um volume máximo de unidades de volume.      Exercícios Propostos    Examine os extremos relativos e pontos de sela da função .    Mínimo relativo de no ponto crítico .      Examine os extremos relativos e pontos de sela da função .    Mínimo relativo de no ponto crítico .      Examine os extremos relativos e pontos de sela da função .    Mínimo relativo de no ponto crítico .      Examine os extremos relativos e pontos de sela da função clássica .    Ponto de sela na origem com valor e mínimo relativo de no ponto crítico .      Determine os extremos relativos da função .    Máximo relativo de no ponto crítico .      Determine três números positivos , e cuja soma é e cujo produto é máximo.    Os números são , e , gerando o produto máximo de .      A receita total semanal estimada de uma loja que comercializa dois modelos de aparadores de grama é modelada por , em que e são os preços unitários de venda de cada modelo. Determine os preços que maximizam a receita total semanal.    Preços ótimos de venda: e .      Um fabricante produz um engradado de madeira para armazenamento que possui a parte superior aberta (sem tampa). O volume de cada engradado é de pés cúbicos. Os custos com o material são de por pé quadrado para a base do engradado e de por pé quadrado para as laterais. Determine as dimensões que minimizam o custo de cada engradado e calcule o valor desse custo mínimo.    Dimensões da base: ; altura: . Custo mínimo: .     "
},
{
  "id": "calc-extremos-duas-variaveis-4-2",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#calc-extremos-duas-variaveis-4-2",
  "type": "Objetivos",
  "number": "1",
  "title": "Estrutura",
  "body": " Estrutura    Compreender os extremos relativos de funções de duas variáveis.    Utilizar o Teste de Primeiras Derivadas Parciais para determinar os extremos relativos de funções de duas variáveis.    Utilizar o Teste de Segundas Derivadas Parciais para determinar os extremos relativos de funções de duas variáveis.    Utilizar extremos relativos para responder questões sobre situações da vida real.    "
},
{
  "id": "fig-video-pontos-sela",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#fig-video-pontos-sela",
  "type": "Figura",
  "number": "1.1",
  "title": "Introdução a Extremos Locais e Pontos de Sela",
  "body": " Introdução a Extremos Locais e Pontos de Sela   "
},
{
  "id": "def-extremos-relativos",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#def-extremos-relativos",
  "type": "Definição",
  "number": "1.2",
  "title": "",
  "body": "  Suponha que seja uma função definida em uma região que contém .    A função possui um máximo relativo em se houver uma região circular com centro em tal que para todo em .    A função possui um mínimo relativo em se houver uma região circular com centro em tal que para todo em .     "
},
{
  "id": "subsec-def-extremos-6",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#subsec-def-extremos-6",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "máximo absoluto máximo absoluto mínimo absoluto "
},
{
  "id": "fig-paraboloide-maximo-absoluto",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#fig-paraboloide-maximo-absoluto",
  "type": "Figura",
  "number": "1.3",
  "title": "Gráfico do paraboloide <span class=\"process-math\">\\(f(x, y) = -(x^2 + y^2)\\)<\/span> com o ponto de máximo absoluto na origem",
  "body": " Gráfico do paraboloide com o ponto de máximo absoluto na origem     "
},
{
  "id": "fig-video-pontos-criticos",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#fig-video-pontos-criticos",
  "type": "Figura",
  "number": "1.4",
  "title": "Identificação de Pontos Críticos",
  "body": " Identificação de Pontos Críticos   "
},
{
  "id": "def-ponto-critico",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#def-ponto-critico",
  "type": "Definição",
  "number": "1.5",
  "title": "",
  "body": "  Um ponto na região aberta é chamado de ponto crítico de se:    e ; ou    uma das primeiras derivadas parciais ou não for definida em .     "
},
{
  "id": "subsec-teste-primeiras-derivadas-6",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#subsec-teste-primeiras-derivadas-6",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "pontos de sela "
},
{
  "id": "fig-ponto-sela",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#fig-ponto-sela",
  "type": "Figura",
  "number": "1.6",
  "title": "Gráfico da sela <span class=\"process-math\">\\(f(x, y) = y^2 - x^2\\)<\/span> com ponto de sela destacado na origem",
  "body": " Gráfico da sela com ponto de sela destacado na origem     "
},
{
  "id": "ex-extremos-1",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#ex-extremos-1",
  "type": "Exemplo",
  "number": "1.7",
  "title": "",
  "body": "  Determine os extremos relativos de .    Começamos determinando as primeiras derivadas parciais de :  Como essas derivadas parciais são definidas para todos os pontos do plano , os únicos pontos críticos são aqueles para os quais ambas as primeiras derivadas parciais são zero. Igualando-as a zero, obtemos o seguinte sistema de equações lineares:  Portanto, o ponto é o único ponto crítico de . Calculando o valor da função neste ponto:  Pela análise algébrica da função, reescrevendo-a completando os quadrados: Como os termos quadráticos são sempre não negativos, vemos que para todo par . Assim, a função possui apenas um extremo relativo, que é o mínimo relativo de valor no ponto crítico .   "
},
{
  "id": "exec-extremos-1",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exec-extremos-1",
  "type": "Exercício de Verificação",
  "number": "1.8",
  "title": "",
  "body": "  Determine os extremos relativos da função .    Calcule as primeiras derivadas parciais de , iguale-as a zero para determinar o ponto crítico e complete os quadrados para verificar seu comportamento.    Mínimo relativo de no ponto crítico .   "
},
{
  "id": "ex-extremos-2",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#ex-extremos-2",
  "type": "Exemplo",
  "number": "1.9",
  "title": "",
  "body": "  Determine os extremos relativos de .    Começamos determinando as primeiras derivadas parciais de utilizando a Regra da Cadeia:  Essas derivadas parciais são definidas para todos os pontos no plano , exceto no ponto . Portanto, o ponto é um ponto crítico de (do tipo onde as derivadas parciais não são definidas).  Como a quantidade sob a raiz cúbica é positiva para todos os valores de , temos que para todo ponto diferente da origem. Como na origem , este ponto crítico resulta em um máximo relativo de valor em .   "
},
{
  "id": "exec-extremos-2",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exec-extremos-2",
  "type": "Exercício de Verificação",
  "number": "1.10",
  "title": "",
  "body": "  Determine os extremos relativos da função .    Diferencie a função e encontre onde as primeiras derivadas parciais de primeira ordem se anulam.    Máximo relativo de no ponto crítico .   "
},
{
  "id": "fig-video-segunda-derivada",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#fig-video-segunda-derivada",
  "type": "Figura",
  "number": "1.11",
  "title": "O Teste da Segunda Derivada Parcial",
  "body": " O Teste da Segunda Derivada Parcial   "
},
{
  "id": "assemblage-segundas-derivadas-3",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#assemblage-segundas-derivadas-3",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "mínimo relativo máximo relativo ponto de sela "
},
{
  "id": "ex-extremos-simples",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#ex-extremos-simples",
  "type": "Exemplo",
  "number": "1.12",
  "title": "Classificação de Ponto Crítico.",
  "body": " Classificação de Ponto Crítico   Determine e classifique os extremos relativos de .    Primeiro, encontramos os pontos críticos calculando e igualando a zero as primeiras derivadas parciais:  Assim, o único ponto crítico da função é .  Agora, aplicamos o Teste das Segundas Derivadas Parciais. Calculamos as derivadas de segunda ordem:  Calculamos a quantidade discriminante :  Como e , concluímos que a função possui um mínimo relativo no ponto . O valor do mínimo relativo é:   "
},
{
  "id": "ex-extremos-3",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#ex-extremos-3",
  "type": "Exemplo",
  "number": "1.13",
  "title": "",
  "body": "  Determine os extremos relativos e os pontos de sela de .    Começamos determinando os pontos críticos de . Calculamos as primeiras derivadas parciais:  Como as derivadas parciais estão definidas para todos os pontos no plano , igualamo-las a zero para achar os pontos críticos:  Substituindo na segunda equação, temos: Substituindo esses valores de volta em , obtemos os três pontos críticos:  Para classificar os pontos, calculamos as derivadas parciais de segunda ordem: A quantidade discriminante é:  Classificamos cada ponto crítico avaliando e :    Para o ponto : temos . Logo, é um ponto de sela .    Para o ponto : temos e . Logo, a função possui um máximo relativo de valor no ponto .    Para o ponto : temos e . Logo, a função possui um máximo relativo de valor no ponto .     "
},
{
  "id": "exec-extremos-3",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exec-extremos-3",
  "type": "Exercício de Verificação",
  "number": "1.14",
  "title": "",
  "body": "  Determine os extremos relativos e pontos de sela de .    Calcule as derivadas parciais e encontre o único ponto crítico. Em seguida, utilize o discriminante para classificar.    Ponto de sela na origem com valor de .   "
},
{
  "id": "ex-otimizacao-4",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#ex-otimizacao-4",
  "type": "Exemplo",
  "number": "1.15",
  "title": "Determinação do Lucro Máximo.",
  "body": " Determinação do Lucro Máximo   Uma empresa fabrica dois produtos substitutos cujas funções de demanda são dadas por: em que e são os preços por unidade (em dólares) e e são os números de unidades vendidas. Os custos de produção de cada produto são, respectivamente, e por unidade. Determine os preços que resultarão em lucro máximo.    As funções de custo total e de receita total são formuladas da seguinte maneira:  Escrevendo o custo total em termos dos preços substituindo e :  Escrevendo a receita total:  Obtemos assim a função de lucro total :  O lucro máximo ocorre quando as derivadas parciais de primeira ordem em relação a e são zero:  Resolvendo esse sistema linear simultaneamente: da primeira equação temos . Substituindo na segunda: E então: Como as segundas derivadas parciais são , e , temos: Portanto, o ponto crítico representa de fato um máximo relativo. Assim, os preços de venda que maximizam o lucro são e , resultando em um lucro total máximo de .   "
},
{
  "id": "exec-otimizacao-4",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exec-otimizacao-4",
  "type": "Exercício de Verificação",
  "number": "1.16",
  "title": "",
  "body": "  Determine os preços que resultarão em lucro máximo para os produtos do Exemplo 4 se os custos de produção unitários passarem a ser para o produto 1 e para o produto 2.    Substitua os novos custos na equação de custo, recalcule a expressão do lucro e resolva o novo sistema linear gerado pelas derivadas de primeira ordem.    Preços ótimos: e .   "
},
{
  "id": "ex-otimizacao-5",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#ex-otimizacao-5",
  "type": "Exemplo",
  "number": "1.17",
  "title": "Determinação de um Volume Máximo.",
  "body": " Determinação de um Volume Máximo   Considere todos os sólidos retangulares possíveis localizados no primeiro octante que estejam apoiados sobre o plano com um vértice na origem e o vértice oposto no plano . Dentre todos esses sólidos, determine aquele que possui o maior volume.    O vértice oposto localiza-se no plano dado por . Isolando a variável , expressamos a altura do sólido em termos de e :  O volume do sólido retangular é dado por . Substituindo na equação, temos:  Para determinar os pontos críticos, igualamos as primeiras derivadas parciais a zero:  Desconsiderando as soluções triviais onde as dimensões são zero ( ou ), resolvemos o sistema:  Substituindo na segunda equação simplificada: Substituindo o valor de : Assim, o sólido que maximiza o volume possui as dimensões , e , gerando um volume máximo de unidades de volume.   "
},
{
  "id": "exercises-extremos-funcoes-2",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exercises-extremos-funcoes-2",
  "type": "Exercício",
  "number": "1.5.1",
  "title": "",
  "body": "  Examine os extremos relativos e pontos de sela da função .    Mínimo relativo de no ponto crítico .   "
},
{
  "id": "exercises-extremos-funcoes-3",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exercises-extremos-funcoes-3",
  "type": "Exercício",
  "number": "1.5.2",
  "title": "",
  "body": "  Examine os extremos relativos e pontos de sela da função .    Mínimo relativo de no ponto crítico .   "
},
{
  "id": "exercises-extremos-funcoes-4",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exercises-extremos-funcoes-4",
  "type": "Exercício",
  "number": "1.5.3",
  "title": "",
  "body": "  Examine os extremos relativos e pontos de sela da função .    Mínimo relativo de no ponto crítico .   "
},
{
  "id": "exercises-extremos-funcoes-5",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exercises-extremos-funcoes-5",
  "type": "Exercício",
  "number": "1.5.4",
  "title": "",
  "body": "  Examine os extremos relativos e pontos de sela da função clássica .    Ponto de sela na origem com valor e mínimo relativo de no ponto crítico .   "
},
{
  "id": "exercises-extremos-funcoes-6",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exercises-extremos-funcoes-6",
  "type": "Exercício",
  "number": "1.5.5",
  "title": "",
  "body": "  Determine os extremos relativos da função .    Máximo relativo de no ponto crítico .   "
},
{
  "id": "exercises-extremos-funcoes-7",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exercises-extremos-funcoes-7",
  "type": "Exercício",
  "number": "1.5.6",
  "title": "",
  "body": "  Determine três números positivos , e cuja soma é e cujo produto é máximo.    Os números são , e , gerando o produto máximo de .   "
},
{
  "id": "exercises-extremos-funcoes-8",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exercises-extremos-funcoes-8",
  "type": "Exercício",
  "number": "1.5.7",
  "title": "",
  "body": "  A receita total semanal estimada de uma loja que comercializa dois modelos de aparadores de grama é modelada por , em que e são os preços unitários de venda de cada modelo. Determine os preços que maximizam a receita total semanal.    Preços ótimos de venda: e .   "
},
{
  "id": "exercises-extremos-funcoes-9",
  "level": "2",
  "url": "calc-extremos-duas-variaveis-4.html#exercises-extremos-funcoes-9",
  "type": "Exercício",
  "number": "1.5.8",
  "title": "",
  "body": "  Um fabricante produz um engradado de madeira para armazenamento que possui a parte superior aberta (sem tampa). O volume de cada engradado é de pés cúbicos. Os custos com o material são de por pé quadrado para a base do engradado e de por pé quadrado para as laterais. Determine as dimensões que minimizam o custo de cada engradado e calcule o valor desse custo mínimo.    Dimensões da base: ; altura: . Custo mínimo: .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
