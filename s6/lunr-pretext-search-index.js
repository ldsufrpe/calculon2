var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "calc-derivadas-parciais-2",
  "level": "1",
  "url": "calc-derivadas-parciais-2.html",
  "type": "Pré-textual",
  "number": "",
  "title": "Pré-textual",
  "body": "  Leon Silva Departamento de Matemática Universidade Federal Rural de Pernanbuco  Lorena Brizza Departamento de Matemática Universidade Federal Rural de Pernanbuco        Aqui faremos um resumo das atividades da semana.   "
},
{
  "id": "calc-derivadas-parciais-4",
  "level": "1",
  "url": "calc-derivadas-parciais-4.html",
  "type": "Seção",
  "number": "1",
  "title": "Funções de mais de uma variável e Derivadas parciais",
  "body": " Funções de mais de uma variável e Derivadas parciais   Estrutura    Conceito de funções de duas o mais variáveis.    Calcular derivadas parciais de primeira ordem.    Calcular derivadas parciais de segunda ordem.      Funções com duas e três variáveis   Funções com duas e três variáveis     A notação para uma função de duas ou mais variáveis é similar àquela para uma função de uma única variável. Vejamos dois exemplos:    (função de duas variáveis).     (função de três variáveis).        Seja um conjunto de pares ordenados de números reais. Se a cada par ordenado em corresponder um único número real , então é chamada de função de duas variáveis ( e ). O conjunto é o domínio de , e o conjunto correspondente de valores de é a imagem de . As funções de três, quatro ou mais variáveis são definidas de maneira semelhante.      Para a função de duas variáveis calcule .           Para a função de duas variáveis calcule .            Domínio e Imagem de Funções de Duas Variáveis   Domínio e Imagem      Determine o domínio e a imagem da função .    Como nenhuma restrição foi dada, pressupõe-se que o domínio seja o conjunto de todos os pontos para os quais a equação definidora faça sentido. A quantidade no interior do radical deve ser não negativa:  Assim, o domínio é o conjunto de todos os pontos que se localizam sobre ou dentro do círculo centrado na origem com raio . Como a raiz quadrada não pode ser negativa e o valor máximo dentro da raiz ocorre quando (resultando em ), a imagem de é o conjunto . O gráfico desta função é a metade superior de uma esfera (um hemisfério).      Determine o domínio e a imagem da função .    O valor dentro da raiz quadrada deve ser maior ou igual a zero.    Domínio: . Imagem: .      Limite de Funções de Duas Variáveis   Limite de Funções de Duas Variáveis     O conceito de limite no plano (para funções de duas variáveis) é uma extensão natural do limite de uma única variável. Dizemos que o limite de quando se aproxima de é se o valor de se aproxima de para todos os pontos suficientemente próximos de , independentemente do caminho escolhido. Para funções contínuas (como polinômios e funções racionais bem comportadas no ponto), o limite pode ser calculado por simples substituição.     Calcule o limite: .    Como se trata de um polinômio em duas variáveis, a função é contínua em todo o plano. Assim, podemos calcular o limite pela substituição direta dos valores e :       Calcule .    Verifique se o denominador se anula no ponto . Se não, use a substituição direta.         Abaixo estão alguns exemplos clássicos de como demonstrar a não existência de limites na origem através do teste de múltiplos caminhos.   Aproximação pelos eixos coordenados   Mostre que o limite não existe na origem para a função:     Para provar que o limite não existe, avaliamos a aproximação por dois caminhos:   Aproximando pelo eixo (onde ): o limite se torna     Aproximando pelo eixo (onde ): o limite se torna    Como a função tende a valores diferentes dependendo do caminho escolhido, o limite geral não existe.   Caminhos de aproximação ao longo dos eixos coordenados          Mostre que o limite não existe na origem para a função:     Calcule os limites aproximando-se pelo eixo ( ) e, em seguida, pelo eixo ( ).    O limite ao longo do eixo é , enquanto ao longo do eixo é . Como os limites são diferentes, o limite geral não existe.     Aproximação por retas genéricas   Verifique a existência do limite na origem para a função:     Os limites ao longo dos eixos coordenados dão o mesmo resultado ( ). Para verificar a existência do limite, nos aproximamos da origem por qualquer reta que passe pela origem da forma : O limite depende estritamente do coeficiente angular . Por exemplo:   Aproximando-se pela reta ( ), o valor do limite é .    Aproximando-se pela reta ( ), o valor do limite é .   Como o limite varia conforme a inclinação da reta escolhida, o limite não existe na origem.   Caminhos de aproximação por retas genéricas          Verifique a existência do limite na origem para a função:     Aproxime-se da origem usando caminhos retilíneos da forma .    O limite ao longo de qualquer reta é dado por . Como este valor varia com a inclinação , o limite não existe.     A armadilha das retas (Aproximação por curvas)   Investigue a existência do limite na origem para a função:     Se tentarmos calcular o limite nos aproximando por qualquer reta que passe pela origem (da forma ), teremos: Como é uma constante, quando , o numerador tende a zero e o denominador tende a , resultando em um limite igual a . O mesmo ocorre se nos aproximarmos pelo eixo (onde ).  No entanto, a definição de limite de duas variáveis exige que o valor seja o mesmo por qualquer caminho possível, o que inclui curvas. Vamos testar a aproximação pela parábola : Como a aproximação por retas resulta em e a aproximação pela parábola resulta em , os valores são distintos. Portanto, o limite não existe na origem, mesmo que todas as retas sugiram o contrário.   Caminhos de aproximação por retas e pela parábola          Investigue a existência do limite na origem para a função:     Aproxime-se por retas da forma e depois pela parábola .    Ao longo de qualquer reta o limite é , mas ao longo de o limite é . Portanto, o limite geral não existe.      Gráficos e Curvas de Nível   Gráficos     Uma função de duas variáveis pode ser representada graficamente como uma superfície no espaço, fazendo . Para auxiliar a visualização, frequentemente utilizamos mapas de contorno, que são formados por curvas de nível . Cada curva de nível representa a interseção da superfície com um plano (onde é uma constante).     A função de produção de Cobb-Douglas é utilizada em economia para representar o número de unidades produzidas por quantidades variáveis de mão de obra e de capital. Assuma que represente o número de unidades de mão de obra e o número de unidades de capital. Então, o nível de produção é modelado por .  Um fabricante estima que sua produção pode ser modelada por , em que a mão de obra é medida em pessoas-hora e o capital em milhares de dólares.  Qual é o nível de produção quando e ?  Qual é o nível de produção quando e ?        Quando e , o nível de produção é:   Quando e , o nível de produção é:   Observe que quando as quantidades de mão de obra e capital são dobradas, o nível de produção também dobra! As curvas de nível desta função representariam diferentes combinações de mão de obra e capital que geram a mesma quantidade de produção.      Utilize a função de produção de Cobb-Douglas para determinar o nível de produção quando e . Em seguida, determine para e . Qual variável possui maior influência sobre a produção?    Basta substituir os valores na função e usar uma calculadora. Lembre-se que o expoente de é maior que o expoente de .     e . A mão de obra ( ) tem maior influência.      Derivadas Parciais   Derivadas Parciais     Derivadas parciais de uma função de duas variáveis  Se , então as primeiras derivadas parciais (ou derivadas parciais de primeira ordem ) de em relação a e são as funções e , definidas da seguinte forma:     De fato, se igualdade nos diz que para encontrar a derivada parcial de em relação a , considere constante e então derive na variável : A igualdade nos diz que para encontrar a derivada parcial de em relação a , considere constante e então derive na variável :     Se determine , .    Para encontrar , consideramos constante e derivamos em relação a :   Para encontrar , consideramos constante e derivamos em relação a :       Para , determine , .           Notação para derivada parcial de primeira ordem  Para as derivadas parciais podem ser denotadas por:       Determine ass derivadas parciais de primeira ordem de e calcule cada uma delas em .    Para realizar a derivada parcial em relação a usando a Regra do Produto: Quando aplicamos em temos: Derivada parcial em relação a : . Quando aplicamos em temos:      Funções de três variáveis  O conceito de derivada parcial estende-se naturalmente para funções de três ou mais variáveis, sendo uma extensão direta da definição para duas variáveis com os limites das equações e . A notação utilizada para representar essas derivadas segue o padrão da apresentada anteriormente.  Para uma função de três variáveis , existem três derivadas parciais de primeira ordem. Para calcular cada uma delas, mantemos duas variáveis como constantes e derivamos em relação à terceira:  Se , suas derivadas parciais de primeira ordem são:   Derivada em relação a (mantendo e constantes):     Derivada em relação a (mantendo e constantes):     Derivada em relação a (mantendo e constantes):         Determine as três derivadas parciais da função .    Mantendo e constantes, usamos a Regra do Produto para obter a derivada parcial em relação a : .  Mantendo e constantes, obtém-se a derivada parcial em relação a : .  Mantendo e constantes, obtém-se a derivada parcial em relação a : .      Determine as três derivadas parciais da função .             Interpretação Geométrica das Derivadas Parciais   Interpretação Geométrica das Derivadas Parciais     Assim como a derivada de uma função de uma variável representa a inclinação da reta tangente à curva, as derivadas parciais têm uma interpretação geométrica semelhante.  O gráfico de uma função é uma superfície no espaço. Se mantivermos constante (por exemplo, ), a equação representa a curva resultante da interseção da superfície com o plano vertical . A derivada parcial calculada no ponto representa a inclinação da reta tangente a essa curva no plano da direção .  De forma análoga, se mantivermos constante (por exemplo, ), a equação é uma curva de interseção com o plano vertical . Neste caso, a derivada parcial no ponto nos dá a inclinação da reta tangente à superfície na direção .     Derivadas parciais de ordem superior   Interpretação Geométrica das Derivadas Parciais     Derivadas de ordem superior ( segunda, terceira ordem etc.) são denotadas pela ordem na qual ocorre a derivação. Por exemplo, há quatro modos diferentes de determinar uma segunda de- rivada parcial de .    Notação para derivadas parciais de segunda ordem  Há quatro maneiras de calcular uma segunda derivada parcial de :    : derive duas vezes em relação a .     : derive duas vezes em relação a .     : derive primeiro em relação a e depois em relação a .     : derive primeiro em relação a e depois em relação a .        Determine as segundas derivadas parciais de e determine o valor de .    Comece determinando as primeiras derivadas parciais. Em seguida, a derivação em relação a e produz Portanto, o valor de no ponto é       Determine as segundas derivadas parciais de .                 Seja . Determine                  Determine as derivadas parciais de primeira ordem da função.                                   "
},
{
  "id": "calc-derivadas-parciais-4-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#calc-derivadas-parciais-4-2",
  "type": "Objetivos",
  "number": "1",
  "title": "Estrutura",
  "body": " Estrutura    Conceito de funções de duas o mais variáveis.    Calcular derivadas parciais de primeira ordem.    Calcular derivadas parciais de segunda ordem.    "
},
{
  "id": "subsec-funcoes-duas-tres-variaveis-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-funcoes-duas-tres-variaveis-2",
  "type": "Figura",
  "number": "1.1",
  "title": "Funções com duas e três variáveis",
  "body": " Funções com duas e três variáveis   "
},
{
  "id": "def-funcoes-duas-tres",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#def-funcoes-duas-tres",
  "type": "Definição",
  "number": "1.2",
  "title": "",
  "body": "  Seja um conjunto de pares ordenados de números reais. Se a cada par ordenado em corresponder um único número real , então é chamada de função de duas variáveis ( e ). O conjunto é o domínio de , e o conjunto correspondente de valores de é a imagem de . As funções de três, quatro ou mais variáveis são definidas de maneira semelhante.   "
},
{
  "id": "subsec-funcoes-duas-tres-variaveis-5",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-funcoes-duas-tres-variaveis-5",
  "type": "Exemplo",
  "number": "1.3",
  "title": "",
  "body": "  Para a função de duas variáveis calcule .        "
},
{
  "id": "subsec-funcoes-duas-tres-variaveis-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-funcoes-duas-tres-variaveis-6",
  "type": "Exemplo",
  "number": "1.4",
  "title": "",
  "body": "  Para a função de duas variáveis calcule .        "
},
{
  "id": "subsec-dominio-imagem-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-dominio-imagem-2",
  "type": "Figura",
  "number": "1.5",
  "title": "Domínio e Imagem",
  "body": " Domínio e Imagem   "
},
{
  "id": "subsec-dominio-imagem-3",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-dominio-imagem-3",
  "type": "Exemplo",
  "number": "1.6",
  "title": "",
  "body": "  Determine o domínio e a imagem da função .    Como nenhuma restrição foi dada, pressupõe-se que o domínio seja o conjunto de todos os pontos para os quais a equação definidora faça sentido. A quantidade no interior do radical deve ser não negativa:  Assim, o domínio é o conjunto de todos os pontos que se localizam sobre ou dentro do círculo centrado na origem com raio . Como a raiz quadrada não pode ser negativa e o valor máximo dentro da raiz ocorre quando (resultando em ), a imagem de é o conjunto . O gráfico desta função é a metade superior de uma esfera (um hemisfério).   "
},
{
  "id": "subsec-dominio-imagem-4",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-dominio-imagem-4",
  "type": "Exercício de Verificação",
  "number": "1.7",
  "title": "",
  "body": "  Determine o domínio e a imagem da função .    O valor dentro da raiz quadrada deve ser maior ou igual a zero.    Domínio: . Imagem: .   "
},
{
  "id": "subsec-limite-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-2",
  "type": "Figura",
  "number": "1.8",
  "title": "Limite de Funções de Duas Variáveis",
  "body": " Limite de Funções de Duas Variáveis   "
},
{
  "id": "subsec-limite-4",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-4",
  "type": "Exemplo",
  "number": "1.9",
  "title": "",
  "body": "  Calcule o limite: .    Como se trata de um polinômio em duas variáveis, a função é contínua em todo o plano. Assim, podemos calcular o limite pela substituição direta dos valores e :    "
},
{
  "id": "subsec-limite-5",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-5",
  "type": "Exercício de Verificação",
  "number": "1.10",
  "title": "",
  "body": "  Calcule .    Verifique se o denominador se anula no ponto . Se não, use a substituição direta.        "
},
{
  "id": "subsec-limite-7",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-7",
  "type": "Exemplo",
  "number": "1.11",
  "title": "Aproximação pelos eixos coordenados.",
  "body": " Aproximação pelos eixos coordenados   Mostre que o limite não existe na origem para a função:     Para provar que o limite não existe, avaliamos a aproximação por dois caminhos:   Aproximando pelo eixo (onde ): o limite se torna     Aproximando pelo eixo (onde ): o limite se torna    Como a função tende a valores diferentes dependendo do caminho escolhido, o limite geral não existe.   Caminhos de aproximação ao longo dos eixos coordenados       "
},
{
  "id": "subsec-limite-8",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-8",
  "type": "Exercício de Verificação",
  "number": "1.13",
  "title": "",
  "body": "  Mostre que o limite não existe na origem para a função:     Calcule os limites aproximando-se pelo eixo ( ) e, em seguida, pelo eixo ( ).    O limite ao longo do eixo é , enquanto ao longo do eixo é . Como os limites são diferentes, o limite geral não existe.   "
},
{
  "id": "subsec-limite-9",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-9",
  "type": "Exemplo",
  "number": "1.14",
  "title": "Aproximação por retas genéricas.",
  "body": " Aproximação por retas genéricas   Verifique a existência do limite na origem para a função:     Os limites ao longo dos eixos coordenados dão o mesmo resultado ( ). Para verificar a existência do limite, nos aproximamos da origem por qualquer reta que passe pela origem da forma : O limite depende estritamente do coeficiente angular . Por exemplo:   Aproximando-se pela reta ( ), o valor do limite é .    Aproximando-se pela reta ( ), o valor do limite é .   Como o limite varia conforme a inclinação da reta escolhida, o limite não existe na origem.   Caminhos de aproximação por retas genéricas       "
},
{
  "id": "subsec-limite-10",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-10",
  "type": "Exercício de Verificação",
  "number": "1.16",
  "title": "",
  "body": "  Verifique a existência do limite na origem para a função:     Aproxime-se da origem usando caminhos retilíneos da forma .    O limite ao longo de qualquer reta é dado por . Como este valor varia com a inclinação , o limite não existe.   "
},
{
  "id": "subsec-limite-11",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-11",
  "type": "Exemplo",
  "number": "1.17",
  "title": "A armadilha das retas (Aproximação por curvas).",
  "body": " A armadilha das retas (Aproximação por curvas)   Investigue a existência do limite na origem para a função:     Se tentarmos calcular o limite nos aproximando por qualquer reta que passe pela origem (da forma ), teremos: Como é uma constante, quando , o numerador tende a zero e o denominador tende a , resultando em um limite igual a . O mesmo ocorre se nos aproximarmos pelo eixo (onde ).  No entanto, a definição de limite de duas variáveis exige que o valor seja o mesmo por qualquer caminho possível, o que inclui curvas. Vamos testar a aproximação pela parábola : Como a aproximação por retas resulta em e a aproximação pela parábola resulta em , os valores são distintos. Portanto, o limite não existe na origem, mesmo que todas as retas sugiram o contrário.   Caminhos de aproximação por retas e pela parábola       "
},
{
  "id": "subsec-limite-12",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-limite-12",
  "type": "Exercício de Verificação",
  "number": "1.19",
  "title": "",
  "body": "  Investigue a existência do limite na origem para a função:     Aproxime-se por retas da forma e depois pela parábola .    Ao longo de qualquer reta o limite é , mas ao longo de o limite é . Portanto, o limite geral não existe.   "
},
{
  "id": "subsec-graficos-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-graficos-2",
  "type": "Figura",
  "number": "1.20",
  "title": "Gráficos",
  "body": " Gráficos   "
},
{
  "id": "subsec-graficos-3-1",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-graficos-3-1",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "curvas de nível "
},
{
  "id": "subsec-graficos-4",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-graficos-4",
  "type": "Exemplo",
  "number": "1.21",
  "title": "",
  "body": "  A função de produção de Cobb-Douglas é utilizada em economia para representar o número de unidades produzidas por quantidades variáveis de mão de obra e de capital. Assuma que represente o número de unidades de mão de obra e o número de unidades de capital. Então, o nível de produção é modelado por .  Um fabricante estima que sua produção pode ser modelada por , em que a mão de obra é medida em pessoas-hora e o capital em milhares de dólares.  Qual é o nível de produção quando e ?  Qual é o nível de produção quando e ?        Quando e , o nível de produção é:   Quando e , o nível de produção é:   Observe que quando as quantidades de mão de obra e capital são dobradas, o nível de produção também dobra! As curvas de nível desta função representariam diferentes combinações de mão de obra e capital que geram a mesma quantidade de produção.   "
},
{
  "id": "subsec-graficos-5",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-graficos-5",
  "type": "Exercício de Verificação",
  "number": "1.22",
  "title": "",
  "body": "  Utilize a função de produção de Cobb-Douglas para determinar o nível de produção quando e . Em seguida, determine para e . Qual variável possui maior influência sobre a produção?    Basta substituir os valores na função e usar uma calculadora. Lembre-se que o expoente de é maior que o expoente de .     e . A mão de obra ( ) tem maior influência.   "
},
{
  "id": "subsec-derivadas-parciais-2-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-2-2",
  "type": "Figura",
  "number": "1.23",
  "title": "Derivadas Parciais",
  "body": " Derivadas Parciais   "
},
{
  "id": "assemblage-parciais-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#assemblage-parciais-2",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "primeiras derivadas parciais derivadas parciais de primeira ordem "
},
{
  "id": "subsec-derivadas-parciais-2-5",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-2-5",
  "type": "Exemplo",
  "number": "1.24",
  "title": "",
  "body": "  Se determine , .    Para encontrar , consideramos constante e derivamos em relação a :   Para encontrar , consideramos constante e derivamos em relação a :    "
},
{
  "id": "subsec-derivadas-parciais-2-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-2-6",
  "type": "Exercício de Verificação",
  "number": "1.25",
  "title": "",
  "body": "  Para , determine , .         "
},
{
  "id": "subsec-derivadas-parciais-2-8",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-2-8",
  "type": "Exemplo",
  "number": "1.26",
  "title": "",
  "body": "  Determine ass derivadas parciais de primeira ordem de e calcule cada uma delas em .    Para realizar a derivada parcial em relação a usando a Regra do Produto: Quando aplicamos em temos: Derivada parcial em relação a : . Quando aplicamos em temos:    "
},
{
  "id": "subsec-derivadas-parciais-2-10",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-2-10",
  "type": "Exemplo",
  "number": "1.27",
  "title": "",
  "body": "  Determine as três derivadas parciais da função .    Mantendo e constantes, usamos a Regra do Produto para obter a derivada parcial em relação a : .  Mantendo e constantes, obtém-se a derivada parcial em relação a : .  Mantendo e constantes, obtém-se a derivada parcial em relação a : .   "
},
{
  "id": "subsec-derivadas-parciais-2-11",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-2-11",
  "type": "Exercício de Verificação",
  "number": "1.28",
  "title": "",
  "body": "  Determine as três derivadas parciais da função .          "
},
{
  "id": "subsec-Interpretacao-Geo-DP-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-Interpretacao-Geo-DP-2",
  "type": "Figura",
  "number": "1.29",
  "title": "Interpretação Geométrica das Derivadas Parciais",
  "body": " Interpretação Geométrica das Derivadas Parciais   "
},
{
  "id": "subsec-derivadas-parciais-ordem-superior-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-ordem-superior-2",
  "type": "Figura",
  "number": "1.30",
  "title": "Interpretação Geométrica das Derivadas Parciais",
  "body": " Interpretação Geométrica das Derivadas Parciais   "
},
{
  "id": "subsec-derivadas-parciais-ordem-superior-5",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-ordem-superior-5",
  "type": "Exemplo",
  "number": "1.31",
  "title": "",
  "body": "  Determine as segundas derivadas parciais de e determine o valor de .    Comece determinando as primeiras derivadas parciais. Em seguida, a derivação em relação a e produz Portanto, o valor de no ponto é    "
},
{
  "id": "subsec-derivadas-parciais-ordem-superior-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-parciais-ordem-superior-6",
  "type": "Exercício de Verificação",
  "number": "1.32",
  "title": "",
  "body": "  Determine as segundas derivadas parciais de .            "
},
{
  "id": "exercises-log-integral-1-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-1-2",
  "type": "Exercício",
  "number": "1.8.1",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-1-3",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-1-3",
  "type": "Exercício",
  "number": "1.8.2",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-1-4",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-1-4",
  "type": "Exercício",
  "number": "1.8.3",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-1-5",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-1-5",
  "type": "Exercício",
  "number": "1.8.4",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-2",
  "type": "Exercício",
  "number": "1.8.5",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-3",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-3",
  "type": "Exercício",
  "number": "1.8.6",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-4",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-4",
  "type": "Exercício",
  "number": "1.8.7",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-5",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-5",
  "type": "Exercício",
  "number": "1.8.8",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-6",
  "type": "Exercício",
  "number": "1.8.9",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-7",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-7",
  "type": "Exercício",
  "number": "1.8.10",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-8",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-8",
  "type": "Exercício",
  "number": "1.8.11",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-9",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-9",
  "type": "Exercício",
  "number": "1.8.12",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-10",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-10",
  "type": "Exercício",
  "number": "1.8.13",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-log-integral-2-11",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-log-integral-2-11",
  "type": "Exercício",
  "number": "1.8.14",
  "title": "",
  "body": "  "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "Referêcias",
  "number": "2",
  "title": "Referências",
  "body": " Referências  LARSON, Ron. Cálculo Aplicado. Cursos Rápido.  Cengage Learning , 2011.  ANTON, Howard; BIVENS, Irl; DAVIS, Stephen. Cálculo.  Bookman , 2007.  HUGHES, Hallet et al. Cálculo de uma variável.  LTC , 2004.  Stewart, James. Cálculo, Volume I.  Cengage Learning , 2013.  SILVA, Leon; SANTOS, Marcelo; Machado, Ricardo. Elementos de Computação Matemática com SageMath.  SBM , 2019.  "
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
