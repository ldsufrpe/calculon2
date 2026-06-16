var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "calc-multiplicadores-lagrange-2",
  "level": "1",
  "url": "calc-multiplicadores-lagrange-2.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "  Leon Silva Departamento de Matemática Universidade Federal Rural de Pernambuco  Lorena Brizza Departamento de Matemática Universidade Federal Rural de Pernambuco        Nesta semana, abordaremos os multiplicadores de Lagrange, uma técnica elegante e poderosa para encontrar os extremos locais de funções sujeitas a restrições de igualdade.   "
},
{
  "id": "calc-multiplicadores-lagrange-4",
  "level": "1",
  "url": "calc-multiplicadores-lagrange-4.html",
  "type": "Seção",
  "number": "1",
  "title": "Multiplicadores de Lagrange",
  "body": " Multiplicadores de Lagrange   Estrutura    Compreender a interpretação geométrica do método dos multiplicadores de Lagrange (gradientes paralelos).    Aplicar o método dos multiplicadores de Lagrange com uma restrição para resolver problemas de otimização.    Modelar e resolver problemas de otimização aplicados em economia (função Cobb-Douglas) e geometria utilizando multiplicadores de Lagrange.    Estender o método para situações contendo duas restrições simultâneas.      Multiplicadores de Lagrange com uma Restrição   Introdução Geométrica aos Multiplicadores de Lagrange (Khan Academy)     Suponha que desejamos determinar os valores máximos ou mínimos de uma função diferenciável de duas variáveis cujos pontos estão restritos a pertencer a uma curva de nível suave de outra função, dada por . Ou seja, queremos otimizar sujeita à restrição .  Geometricamente, a ilustra a curva de restrição juntamente com diversas curvas de nível da função objetivo para diferentes valores de . Para maximizar sob a restrição, procuramos o maior valor possível de tal que a curva de nível correspondente intercepte a curva de restrição.    Interpretação geométrica do Método de Lagrange: a curva de nível de tangencia a restrição      Note na figura que esse valor de máximo ocorre precisamente quando a curva de nível de é tangente à curva de restrição . Se elas se cruzassem transversalmente, poderíamos nos mover ao longo da restrição para alcançar uma curva de nível com valor de ainda maior. No ponto de tangência , a reta tangente à curva de nível de e a reta tangente à curva de restrição coincidem. Consequentemente, as direções normais a essas curvas no ponto também devem coincidir. Como os vetores gradientes e são normais às suas respectivas curvas de nível, concluímos que eles devem ser paralelos. Algebricamente, isto significa que:   para algum escalar constante , que é chamado de multiplicador de Lagrange .   O Método dos Multiplicadores de Lagrange (Uma Restrição)  Suponha que e sejam funções diferenciáveis com sobre a curva ou superfície de restrição . Para determinar os valores de máximo e mínimo de sujeitos à restrição :    Determine todos os valores das variáveis independentes e do multiplicador de Lagrange que satisfazem o sistema:   Para funções de duas variáveis, sujeita a , o sistema em componentes é:   Para funções de três variáveis, sujeita a , o sistema em componentes é:     Calcule os valores de em todos os pontos resultantes do passo anterior. O maior valor obtido será o valor máximo de e o menor valor será o mínimo de sob a restrição.     Alternativamente (conforme apresentado por Ron Larson), podemos introduzir a função auxiliar Lagrangiana  definida por:    Para duas variáveis, sujeita a :   Para encontrar os pontos críticos de , igualamos a zero suas derivadas parciais de primeira ordem em relação a todas as variáveis:   Observe que este procedimento gera exatamente o mesmo sistema de equações .    Para três variáveis, sujeita a :   Para encontrar os pontos críticos de , igualamos a zero suas derivadas parciais de primeira ordem em relação a todas as variáveis:   Observe que este procedimento gera exatamente o mesmo sistema de equações .     Volume Máximo de Sólido Retangular   Determine o volume máximo de uma caixa retangular (sólido) no primeiro octante com faces paralelas aos planos coordenados, sabendo que o vértice oposto à origem está situado sobre o plano .    O volume da caixa com dimensões , e é a nossa função objetivo:   O ponto está restrito a pertencer ao plano no primeiro octante ( ). A restrição é dada por:   Definimos a função Lagrangiana:   Calculando as derivadas parciais de e igualando-as a zero, obtemos o sistema:   Igualando as expressões para das duas primeiras equações (com , pois queremos volume máximo):   Igualando a primeira com a terceira equação (com ):   Agora, substituímos essas relações na equação de restrição:    Substituindo de volta para obter as outras dimensões e o multiplicador de Lagrange:    Portanto, as dimensões ótimas são , e . O volume máximo é:       Determine o ponto sobre o plano que está mais próximo da origem .    Minimize a distância quadrática sujeita à restrição de pertencer ao plano .    O ponto mais próximo é .     Otimização de Produção (Modelo Cobb-Douglas)   A produção de uma fabricante é modelada pela função de Cobb-Douglas , onde representa as unidades de mão de obra e as unidades de capital. Cada unidade de mão de obra custa $150 e cada unidade de capital custa $250. O orçamento total da fábrica é de $50.000. Determine a quantidade ideal de insumos de mão de obra e capital para maximizar a produção.    A nossa função objetivo (produção) é . O custo total não pode exceder $50.000. Uma vez que queremos maximizar a produção, utilizaremos todo o orçamento. Assim, a restrição de custo é:   Montamos a Lagrangiana:   Derivando parcialmente em relação a , e e igualando a zero:   Igualando as duas expressões obtidas para :   Multiplicamos ambos os lados por para simplificar os expoentes fracionários:    Substituímos na equação de restrição orçamentária:    Determinamos a partir de :   Portanto, a combinação ótima de insumos é de 250 unidades de mão de obra e 50 unidades de capital. O nível de produção máximo alcançado sob essa restrição é:       A produção de uma empresa é modelada pela função de Cobb-Douglas , onde representa as unidades de trabalho e as unidades de capital. Cada unidade de trabalho custa $120 e cada unidade de capital custa $300. Se o orçamento total da empresa é de $60.000, determine a quantidade ideal de insumos de trabalho e capital para maximizar a produção.    Use a restrição orçamentária de igualdade e encontre o ponto crítico da Lagrangiana correspondente.    Trabalho unidades e capital unidades.      Multiplicadores de Lagrange com duas Restrições   Suponha agora que queiramos otimizar uma função de três variáveis sujeita a duas restrições da forma e . Supondo que as superfícies de restrição se interceptem em uma curva suave , queremos determinar os extremos de sobre esta curva de interseção.  Geometricamente, para que tenha um valor extremo em um ponto sobre a curva , a superfície de nível de passando por deve ser tangente à curva . Consequentemente, o vetor gradiente deve ser ortogonal à direção tangente de . Como os gradientes e também são ortogonais a , conclui-se que deve estar contido no plano gerado por e . Isto é, deve ser uma combinação linear de e :   onde e são dois multiplicadores de Lagrange escalares independentes.    O Método dos Multiplicadores de Lagrange (Duas Restrições)  Para determinar os valores extremos de uma função diferenciável sujeita às restrições e :    Encontre os valores de , , , e resolvendo o sistema de equações:     Avalie em todos os pontos encontrados. O maior valor de é o valor máximo, e o menor é o valor mínimo.     De forma equivalente (estendendo a formulação de Ron Larson), podemos introduzir a função auxiliar Lagrangiana com dois multiplicadores de Lagrange, , definida por:   Para encontrar os pontos críticos de , igualamos a zero suas derivadas parciais de primeira ordem em relação a todas as variáveis:   Observe que este procedimento gera exatamente o mesmo sistema de equações .   Extremos sobre uma Curva de Interseção   Determine os valores máximo e mínimo da função sobre a curva de interseção do plano com o cilindro .    Neste problema, temos a função objetivo sujeita às restrições:   Calculando os vetores gradientes de cada função:   O sistema de equações de Lagrange junto com as restrições é dado por:   Substituindo (da Equação 3) nas Equações 1 e 2:    Como , vemos que . Desse modo, podemos expressar e em termos de :   Substituímos estas expressões na Equação 5 (cilindro):    Temos duas situações para analisar dependendo do sinal de :    Se :   Substituímos na Equação 4 para achar :   Obtemos o ponto crítico .    Se :   Substituímos na Equação 4 para achar :   Obtemos o ponto crítico .    Agora calculamos o valor da função objetivo em cada ponto crítico:    Consequentemente, o valor máximo absoluto da função sobre a curva de interseção é e ocorre em , enquanto o valor mínimo absoluto é e ocorre em .      Encontre os valores máximo e mínimo da função sujeita às duas restrições: e .    Utilize as funções de restrição e . Com o sistema , mostre que e .    Máximo de no ponto ; Mínimo de no ponto .     Extremos em Curva de Interseção de Paraboloide e Plano   A curva de interseção do paraboloide com o plano é uma elipse. Determine os pontos nesta elipse que estão mais próximo e mais distante da origem.    Queremos encontrar os extremos da distância de um ponto na elipse até a origem. Algebricamente, é mais simples otimizar o quadrado da distância:   sujeito às restrições:   Os gradientes são:   O sistema de equações de Lagrange se escreve em componentes como:   Subtraindo a Equação 2 da Equação 1, obtemos:   Isso nos dá dois casos a considerar:    Se : da Equação 1 concluímos que . Substituindo e na Equação 3, temos . No entanto, a Equação 4 exige , gerando uma contradição. Logo, não há solução para este caso.    Se : substituímos esta relação nas Equações 4 e 5. Da Equação 4, temos . Substituindo isso e na Equação 5:   Resolvendo a equação de segundo grau pela fórmula quadrática:   Como , temos os seguintes pontos críticos:    Para , temos .  A distância quadrática à origem é (distância de ).    Para , temos .  A distância quadrática à origem é (distância de ).      Comparando os valores, concluímos que o ponto na elipse mais próximo da origem é e o ponto mais distante é .      Exercícios Propostos    Utilize os multiplicadores de Lagrange para encontrar os valores extremos (máximos e mínimos) sujeitos às restrições indicadas.     Encontre os extremos de sujeito à restrição .    Máximo de nos pontos e ; Mínimo de nos pontos e .      Determine o ponto pertencente ao plano que está mais próximo da origem .    O ponto mais próximo é .       Exercícios adicionais e aplicados.     Uma empresa possui a função de produção Cobb-Douglas , onde e são as quantidades de dois fatores produtivos. O custo unitário do primeiro fator é $2 e do segundo fator é $4. Com um orçamento total fixado em $80, qual é a quantidade ideal de cada fator para maximizar a produção?    unidades e unidades, com produção máxima de .      Encontre os valores extremos da função sujeita às duas restrições: e .    O máximo é no ponto ; O mínimo é no ponto .      "
},
{
  "id": "calc-multiplicadores-lagrange-4-2",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#calc-multiplicadores-lagrange-4-2",
  "type": "Objetivos",
  "number": "1",
  "title": "Estrutura",
  "body": " Estrutura    Compreender a interpretação geométrica do método dos multiplicadores de Lagrange (gradientes paralelos).    Aplicar o método dos multiplicadores de Lagrange com uma restrição para resolver problemas de otimização.    Modelar e resolver problemas de otimização aplicados em economia (função Cobb-Douglas) e geometria utilizando multiplicadores de Lagrange.    Estender o método para situações contendo duas restrições simultâneas.    "
},
{
  "id": "fig-video-lagrange-intro",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#fig-video-lagrange-intro",
  "type": "Figura",
  "number": "1.1",
  "title": "Introdução Geométrica aos Multiplicadores de Lagrange (Khan Academy)",
  "body": " Introdução Geométrica aos Multiplicadores de Lagrange (Khan Academy)   "
},
{
  "id": "fig-geometria-lagrange",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#fig-geometria-lagrange",
  "type": "Figura",
  "number": "1.2",
  "title": "Interpretação geométrica do Método de Lagrange: a curva de nível de <span class=\"process-math\">\\(f(x,y)\\)<\/span> tangencia a restrição <span class=\"process-math\">\\(g(x,y)=k\\)<\/span>",
  "body": " Interpretação geométrica do Método de Lagrange: a curva de nível de tangencia a restrição     "
},
{
  "id": "subsec-lagrange-uma-restricao-7",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#subsec-lagrange-uma-restricao-7",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicador de Lagrange "
},
{
  "id": "subsec-lagrange-uma-restricao-9",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#subsec-lagrange-uma-restricao-9",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrangiana "
},
{
  "id": "ex-lagrange-caixa",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#ex-lagrange-caixa",
  "type": "Exemplo",
  "number": "1.3",
  "title": "Volume Máximo de Sólido Retangular.",
  "body": " Volume Máximo de Sólido Retangular   Determine o volume máximo de uma caixa retangular (sólido) no primeiro octante com faces paralelas aos planos coordenados, sabendo que o vértice oposto à origem está situado sobre o plano .    O volume da caixa com dimensões , e é a nossa função objetivo:   O ponto está restrito a pertencer ao plano no primeiro octante ( ). A restrição é dada por:   Definimos a função Lagrangiana:   Calculando as derivadas parciais de e igualando-as a zero, obtemos o sistema:   Igualando as expressões para das duas primeiras equações (com , pois queremos volume máximo):   Igualando a primeira com a terceira equação (com ):   Agora, substituímos essas relações na equação de restrição:    Substituindo de volta para obter as outras dimensões e o multiplicador de Lagrange:    Portanto, as dimensões ótimas são , e . O volume máximo é:    "
},
{
  "id": "exec-lagrange-caixa",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#exec-lagrange-caixa",
  "type": "Exercício de Verificação",
  "number": "1.4",
  "title": "",
  "body": "  Determine o ponto sobre o plano que está mais próximo da origem .    Minimize a distância quadrática sujeita à restrição de pertencer ao plano .    O ponto mais próximo é .   "
},
{
  "id": "ex-lagrange-cobb-douglas",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#ex-lagrange-cobb-douglas",
  "type": "Exemplo",
  "number": "1.5",
  "title": "Otimização de Produção (Modelo Cobb-Douglas).",
  "body": " Otimização de Produção (Modelo Cobb-Douglas)   A produção de uma fabricante é modelada pela função de Cobb-Douglas , onde representa as unidades de mão de obra e as unidades de capital. Cada unidade de mão de obra custa $150 e cada unidade de capital custa $250. O orçamento total da fábrica é de $50.000. Determine a quantidade ideal de insumos de mão de obra e capital para maximizar a produção.    A nossa função objetivo (produção) é . O custo total não pode exceder $50.000. Uma vez que queremos maximizar a produção, utilizaremos todo o orçamento. Assim, a restrição de custo é:   Montamos a Lagrangiana:   Derivando parcialmente em relação a , e e igualando a zero:   Igualando as duas expressões obtidas para :   Multiplicamos ambos os lados por para simplificar os expoentes fracionários:    Substituímos na equação de restrição orçamentária:    Determinamos a partir de :   Portanto, a combinação ótima de insumos é de 250 unidades de mão de obra e 50 unidades de capital. O nível de produção máximo alcançado sob essa restrição é:    "
},
{
  "id": "exec-lagrange-cobb-douglas",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#exec-lagrange-cobb-douglas",
  "type": "Exercício de Verificação",
  "number": "1.6",
  "title": "",
  "body": "  A produção de uma empresa é modelada pela função de Cobb-Douglas , onde representa as unidades de trabalho e as unidades de capital. Cada unidade de trabalho custa $120 e cada unidade de capital custa $300. Se o orçamento total da empresa é de $60.000, determine a quantidade ideal de insumos de trabalho e capital para maximizar a produção.    Use a restrição orçamentária de igualdade e encontre o ponto crítico da Lagrangiana correspondente.    Trabalho unidades e capital unidades.   "
},
{
  "id": "ex-lagrange-duas-restricoes",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#ex-lagrange-duas-restricoes",
  "type": "Exemplo",
  "number": "1.7",
  "title": "Extremos sobre uma Curva de Interseção.",
  "body": " Extremos sobre uma Curva de Interseção   Determine os valores máximo e mínimo da função sobre a curva de interseção do plano com o cilindro .    Neste problema, temos a função objetivo sujeita às restrições:   Calculando os vetores gradientes de cada função:   O sistema de equações de Lagrange junto com as restrições é dado por:   Substituindo (da Equação 3) nas Equações 1 e 2:    Como , vemos que . Desse modo, podemos expressar e em termos de :   Substituímos estas expressões na Equação 5 (cilindro):    Temos duas situações para analisar dependendo do sinal de :    Se :   Substituímos na Equação 4 para achar :   Obtemos o ponto crítico .    Se :   Substituímos na Equação 4 para achar :   Obtemos o ponto crítico .    Agora calculamos o valor da função objetivo em cada ponto crítico:    Consequentemente, o valor máximo absoluto da função sobre a curva de interseção é e ocorre em , enquanto o valor mínimo absoluto é e ocorre em .   "
},
{
  "id": "exec-lagrange-duas-restricoes-1",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#exec-lagrange-duas-restricoes-1",
  "type": "Exercício de Verificação",
  "number": "1.8",
  "title": "",
  "body": "  Encontre os valores máximo e mínimo da função sujeita às duas restrições: e .    Utilize as funções de restrição e . Com o sistema , mostre que e .    Máximo de no ponto ; Mínimo de no ponto .   "
},
{
  "id": "ex-lagrange-duas-restricoes-2",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#ex-lagrange-duas-restricoes-2",
  "type": "Exemplo",
  "number": "1.9",
  "title": "Extremos em Curva de Interseção de Paraboloide e Plano.",
  "body": " Extremos em Curva de Interseção de Paraboloide e Plano   A curva de interseção do paraboloide com o plano é uma elipse. Determine os pontos nesta elipse que estão mais próximo e mais distante da origem.    Queremos encontrar os extremos da distância de um ponto na elipse até a origem. Algebricamente, é mais simples otimizar o quadrado da distância:   sujeito às restrições:   Os gradientes são:   O sistema de equações de Lagrange se escreve em componentes como:   Subtraindo a Equação 2 da Equação 1, obtemos:   Isso nos dá dois casos a considerar:    Se : da Equação 1 concluímos que . Substituindo e na Equação 3, temos . No entanto, a Equação 4 exige , gerando uma contradição. Logo, não há solução para este caso.    Se : substituímos esta relação nas Equações 4 e 5. Da Equação 4, temos . Substituindo isso e na Equação 5:   Resolvendo a equação de segundo grau pela fórmula quadrática:   Como , temos os seguintes pontos críticos:    Para , temos .  A distância quadrática à origem é (distância de ).    Para , temos .  A distância quadrática à origem é (distância de ).      Comparando os valores, concluímos que o ponto na elipse mais próximo da origem é e o ponto mais distante é .   "
},
{
  "id": "exercises-multiplicadores-lagrange-2-2",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#exercises-multiplicadores-lagrange-2-2",
  "type": "Exercício",
  "number": "1.3.1",
  "title": "",
  "body": "  Encontre os extremos de sujeito à restrição .    Máximo de nos pontos e ; Mínimo de nos pontos e .   "
},
{
  "id": "exercises-multiplicadores-lagrange-2-3",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#exercises-multiplicadores-lagrange-2-3",
  "type": "Exercício",
  "number": "1.3.2",
  "title": "",
  "body": "  Determine o ponto pertencente ao plano que está mais próximo da origem .    O ponto mais próximo é .   "
},
{
  "id": "exercises-multiplicadores-lagrange-3-2",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#exercises-multiplicadores-lagrange-3-2",
  "type": "Exercício",
  "number": "1.3.3",
  "title": "",
  "body": "  Uma empresa possui a função de produção Cobb-Douglas , onde e são as quantidades de dois fatores produtivos. O custo unitário do primeiro fator é $2 e do segundo fator é $4. Com um orçamento total fixado em $80, qual é a quantidade ideal de cada fator para maximizar a produção?    unidades e unidades, com produção máxima de .   "
},
{
  "id": "exercises-multiplicadores-lagrange-3-3",
  "level": "2",
  "url": "calc-multiplicadores-lagrange-4.html#exercises-multiplicadores-lagrange-3-3",
  "type": "Exercício",
  "number": "1.3.4",
  "title": "",
  "body": "  Encontre os valores extremos da função sujeita às duas restrições: e .    O máximo é no ponto ; O mínimo é no ponto .   "
},
{
  "id": "references-lagrange",
  "level": "1",
  "url": "references-lagrange.html",
  "type": "Referêcias",
  "number": "2",
  "title": "Referências",
  "body": " Referências  LARSON, Ron. Cálculo Aplicado. Curso Rápido.  Cengage Learning , 2011.  STEWART, James. Cálculo, Volume II.  Cengage Learning , 7ª Edição, 2013.  ANTON, Howard; BIVENS, Irl; DAVIS, Stephen. Cálculo.  Bookman , 2007.  "
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
