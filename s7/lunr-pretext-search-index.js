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
  "title": "Derivadas parciais parte 2",
  "body": " Derivadas parciais parte 2   Estrutura    Identificar e a aplicar a regra da cadeia.    Derivada direcional e vetor gradiente.      Regra da Cadeia      No cálculo de uma variável, a Regra da Cadeia é utilizada para derivar funções compostas. Para funções de várias variáveis, o princípio é o mesmo, mas devemos considerar as contribuições de cada variável independente. Veremos que a Regra da Cadeia para funções de várias variáveis pode assumir diferentes formas dependendo do número de variáveis independentes e intermediárias envolvidas.    Regra da cadeia (caso 1)  Suponha que seja uma função diferenciável de e , onde e são funções diferenciáveis de . Então é uma função diferenciável de e      Se , na qual e , determine quando .    De acordo com , temos Note que quando , temos e . Portanto,        Suponha que , , . Use a regra da cadeia para encontrar e verifique o resultado expressando como uma função de .           Seja , onde e . Determine utilizando a Regra da Cadeia.    Temos que: Calculando as derivadas, obtemos:  Substituindo, resulta em:       Se , onde e , encontre .             Regra da Cadeia(caso 2)  Suponha que seja uma função diferenciável de e , onde e são funções diferenciáveis de e .       Se , na qual e , determine e .    De acordo com , temos         Supondo que , , encontre , usando a regra da cadeia.    Use a regra .           Se , onde e , determine e .    Usando a Regra da Cadeia, temos:  Calculando as derivadas parciais: Substituindo na primeira equação: Substituindo na segunda equação:       Seja , onde e . Determine e .     e      Derivada Implícita      Em muitas situações, uma variável não pode ser isolada facilmente em função de outras. A derivação implícita, já conhecida do cálculo de uma variável, pode ser estendida para funções de várias variáveis usando derivadas parciais. O Teorema da Função Implícita fornece uma fórmula direta para calcular essas derivadas sem a necessidade de isolar a variável dependente.    Teorema da função Implicita  Suponha que uma equação defina implicitamente como uma função diferenciável de . Se , então      Determine sabendo que .    A equação pode ser escrita como Logo, o nos fornece        Dado que determine usando .           Determine sabendo que .    A equação pode ser escrita como Calculando as derivadas parciais, temos:  Aplicando o Teorema da Função Implícita:       Determine para a equação .           Derivadas Direcionais      As derivadas parciais e medem a taxa de variação de uma função nas direções dos eixos e . No entanto, muitas vezes precisamos saber a taxa de variação em uma direção arbitrária. A derivada direcional generaliza as derivadas parciais, permitindo-nos calcular a taxa de variação de uma função de várias variáveis em qualquer direção especificada por um vetor unitário.    Derivada Direcional  Se é uma função diferênciável de e , então a derivada direcional na direção de qualquer vetor é      Encontre a derivada direcional se e é o vetor unitário dado pelo ângulo . Qual será o valor ?    O vetor uitario será . De acordo com temos, Dessa forma,        Seja f (x, y) = x y. Encontre e interprete com o vetor unitário            Encontre a derivada direcional de no ponto na direção do vetor .    Primeiramente, notamos que não é um vetor unitário. O seu módulo é . Assim, o vetor unitário na mesma direção e sentido é .  As derivadas parciais são:  Avaliando no ponto :  A derivada direcional é:       Determine a derivada direcional de no ponto na direção do vetor .           Vetor Gradiente      A derivada direcional pode ser expressa de forma compacta como o produto escalar entre um vetor unitário e um vetor especial formado pelas derivadas parciais da função. Esse vetor é chamado de vetor gradiente. O gradiente não apenas simplifica o cálculo das derivadas direcionais, mas também possui propriedades geométricas importantes, apontando para a direção de maior crescimento da função.    Definição  Se é uma função de duas variáveis e , então o gradiente de é a função vetorial definida por      Determine a derivada direcional da função no ponto na direção do vetor utilizando o vetor gradiente.    Primeiro, calculamos o vetor gradiente : Avaliando no ponto : Observe que não é um vetor unitário. Como , o vetor unitário na direção de é: A derivada direcional pode ser calculada como o produto escalar entre o gradiente e o vetor unitário:       Calcule o vetor gradiente de no ponto e, em seguida, utilize-o para determinar a derivada direcional de nesse ponto na direção do vetor .     e .      A definição de vetor gradiente se estende de maneira natural para funções de três variáveis. Calcule o vetor gradiente da função no ponto e determine a derivada direcional na direção do vetor .    O gradiente de uma função de três variáveis é dado por . Calculando as derivadas parciais: Avaliando no ponto : O módulo do vetor é . O vetor unitário correspondente é . A derivada direcional é:       Encontre o vetor gradiente da função no ponto .            Suponha que seja uma função diferenciável de duas ou três variáveis. O valor máximo da derivada direcional é e ocorre quando tem a mesma direção do vetor gradiente .        Se , determine a taxa de variação de no ponto na direção de a .    Em que direção tem a máxima taxa de variação? Qual é a máxima taxa de variação?      Iniciamos calculando o vetor gradiente:  O vetor unitário na direção é , logo a taxa de variação de na direção do vetor é De acordo com o Teorema , aumenta mais depressa na direção do gradiente . A taxa máxima de variação é .      Seja . Determine o valor máximo de uma derivada direcional em e o vetor unitário na direção e no sentido do qual o valor máximo ocorre.    O valor máximo ocorre na direção e no sentido de .    O valor máximo da derivada direcional é . O vetor unitário nessa direção e sentido é .      Suponha que você esteja escalando um morro cuja forma seja dada pela equação , e que você esteja no ponto de coordenadas .  Em qual direção você deve se mover inicialmente para subir o mais rápido possível?  Qual é a taxa máxima de ascensão nesse ponto?      O morro é descrito pela função . A direção de subida mais íngreme é dada pelo vetor gradiente de . Avaliando no ponto de posição : Portanto, você deve se mover na direção do vetor (que equivale à direção ). A taxa máxima de ascensão é o módulo desse gradiente:       A temperatura em uma placa metálica é dada por . Se uma formiga está na posição , em que direção ela deve andar para que a temperatura aumente o mais rápido possível?    Na direção do vetor .      Exercícios Propostos    Utilize a regra da cadeia para calcular as derivadas indicadas.     Se , onde e , determine .         Se , onde e , determine .          Encontre a derivada implícita.     Seja . Determine .          Calcule a derivada direcional e o vetor gradiente.     Encontre o vetor gradiente de no ponto .         Determine a derivada direcional de no ponto na direção do vetor .    O vetor unitário é . A derivada direcional é .       Exercícios adicionais.     Se , onde e , determine .         Encontre por derivação implícita para a equação .         Calcule o vetor gradiente de no ponto .         Qual é a taxa máxima de variação da função no ponto ?         A temperatura em um ambiente é modelada por . Se um inseto está na posição e quer esfriar o mais rápido possível (diminuir a temperatura), em que direção ele deve voar?    Na direção oposta ao gradiente: .      "
},
{
  "id": "calc-derivadas-parciais-4-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#calc-derivadas-parciais-4-2",
  "type": "Objetivos",
  "number": "1",
  "title": "Estrutura",
  "body": " Estrutura    Identificar e a aplicar a regra da cadeia.    Derivada direcional e vetor gradiente.    "
},
{
  "id": "fig-video-cadeia",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#fig-video-cadeia",
  "type": "Figura",
  "number": "1.1",
  "title": "",
  "body": "  "
},
{
  "id": "ex-cadeia-1",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-cadeia-1",
  "type": "Exemplo",
  "number": "1.2",
  "title": "",
  "body": "  Se , na qual e , determine quando .    De acordo com , temos Note que quando , temos e . Portanto,    "
},
{
  "id": "subsec-regra-cadeia-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-regra-cadeia-6",
  "type": "Exercício de Verificação",
  "number": "1.3",
  "title": "",
  "body": "  Suponha que , , . Use a regra da cadeia para encontrar e verifique o resultado expressando como uma função de .        "
},
{
  "id": "ex-cadeia-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-cadeia-2",
  "type": "Exemplo",
  "number": "1.4",
  "title": "",
  "body": "  Seja , onde e . Determine utilizando a Regra da Cadeia.    Temos que: Calculando as derivadas, obtemos:  Substituindo, resulta em:    "
},
{
  "id": "subsec-regra-cadeia-8",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-regra-cadeia-8",
  "type": "Exercício de Verificação",
  "number": "1.5",
  "title": "",
  "body": "  Se , onde e , encontre .        "
},
{
  "id": "fig-2-video-cadeia-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#fig-2-video-cadeia-2",
  "type": "Figura",
  "number": "1.6",
  "title": "",
  "body": "  "
},
{
  "id": "ex-cadeia-3",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-cadeia-3",
  "type": "Exemplo",
  "number": "1.7",
  "title": "",
  "body": "  Se , na qual e , determine e .    De acordo com , temos     "
},
{
  "id": "subsec-regra-cadeia-12",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-regra-cadeia-12",
  "type": "Exercício de Verificação",
  "number": "1.8",
  "title": "",
  "body": "  Supondo que , , encontre , usando a regra da cadeia.    Use a regra .        "
},
{
  "id": "ex-cadeia-4",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-cadeia-4",
  "type": "Exemplo",
  "number": "1.9",
  "title": "",
  "body": "  Se , onde e , determine e .    Usando a Regra da Cadeia, temos:  Calculando as derivadas parciais: Substituindo na primeira equação: Substituindo na segunda equação:    "
},
{
  "id": "subsec-regra-cadeia-14",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-regra-cadeia-14",
  "type": "Exercício de Verificação",
  "number": "1.10",
  "title": "",
  "body": "  Seja , onde e . Determine e .     e    "
},
{
  "id": "fig-2-video-implicita",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#fig-2-video-implicita",
  "type": "Figura",
  "number": "1.11",
  "title": "",
  "body": "  "
},
{
  "id": "ex-implicita-1",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-implicita-1",
  "type": "Exemplo",
  "number": "1.12",
  "title": "",
  "body": "  Determine sabendo que .    A equação pode ser escrita como Logo, o nos fornece    "
},
{
  "id": "subsec-derivada-implicita-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivada-implicita-6",
  "type": "Exercício de Verificação",
  "number": "1.13",
  "title": "",
  "body": "  Dado que determine usando .        "
},
{
  "id": "ex-implicita-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-implicita-2",
  "type": "Exemplo",
  "number": "1.14",
  "title": "",
  "body": "  Determine sabendo que .    A equação pode ser escrita como Calculando as derivadas parciais, temos:  Aplicando o Teorema da Função Implícita:    "
},
{
  "id": "subsec-derivada-implicita-8",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivada-implicita-8",
  "type": "Exercício de Verificação",
  "number": "1.15",
  "title": "",
  "body": "  Determine para a equação .        "
},
{
  "id": "fig-2-video-direcional",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#fig-2-video-direcional",
  "type": "Figura",
  "number": "1.16",
  "title": "",
  "body": "  "
},
{
  "id": "assemblage-derivada-direcional-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#assemblage-derivada-direcional-2",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivada direcional "
},
{
  "id": "ex-direcional-1",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-direcional-1",
  "type": "Exemplo",
  "number": "1.17",
  "title": "",
  "body": "  Encontre a derivada direcional se e é o vetor unitário dado pelo ângulo . Qual será o valor ?    O vetor uitario será . De acordo com temos, Dessa forma,    "
},
{
  "id": "subsec-derivadas-direcionais-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-direcionais-6",
  "type": "Exercício de Verificação",
  "number": "1.18",
  "title": "",
  "body": "  Seja f (x, y) = x y. Encontre e interprete com o vetor unitário         "
},
{
  "id": "ex-direcional-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-direcional-2",
  "type": "Exemplo",
  "number": "1.19",
  "title": "",
  "body": "  Encontre a derivada direcional de no ponto na direção do vetor .    Primeiramente, notamos que não é um vetor unitário. O seu módulo é . Assim, o vetor unitário na mesma direção e sentido é .  As derivadas parciais são:  Avaliando no ponto :  A derivada direcional é:    "
},
{
  "id": "subsec-derivadas-direcionais-8",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-derivadas-direcionais-8",
  "type": "Exercício de Verificação",
  "number": "1.20",
  "title": "",
  "body": "  Determine a derivada direcional de no ponto na direção do vetor .        "
},
{
  "id": "fig-video-vetor-gradiente",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#fig-video-vetor-gradiente",
  "type": "Figura",
  "number": "1.21",
  "title": "",
  "body": "  "
},
{
  "id": "ex-gradiente-1",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-gradiente-1",
  "type": "Exemplo",
  "number": "1.22",
  "title": "",
  "body": "  Determine a derivada direcional da função no ponto na direção do vetor utilizando o vetor gradiente.    Primeiro, calculamos o vetor gradiente : Avaliando no ponto : Observe que não é um vetor unitário. Como , o vetor unitário na direção de é: A derivada direcional pode ser calculada como o produto escalar entre o gradiente e o vetor unitário:    "
},
{
  "id": "subsec-Vetor-Gradiente-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-Vetor-Gradiente-6",
  "type": "Exercício de Verificação",
  "number": "1.23",
  "title": "",
  "body": "  Calcule o vetor gradiente de no ponto e, em seguida, utilize-o para determinar a derivada direcional de nesse ponto na direção do vetor .     e .   "
},
{
  "id": "ex-gradiente-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-gradiente-2",
  "type": "Exemplo",
  "number": "1.24",
  "title": "",
  "body": "  A definição de vetor gradiente se estende de maneira natural para funções de três variáveis. Calcule o vetor gradiente da função no ponto e determine a derivada direcional na direção do vetor .    O gradiente de uma função de três variáveis é dado por . Calculando as derivadas parciais: Avaliando no ponto : O módulo do vetor é . O vetor unitário correspondente é . A derivada direcional é:    "
},
{
  "id": "subsec-Vetor-Gradiente-8",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-Vetor-Gradiente-8",
  "type": "Exercício de Verificação",
  "number": "1.25",
  "title": "",
  "body": "  Encontre o vetor gradiente da função no ponto .        "
},
{
  "id": "thm-maxima-direcional",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#thm-maxima-direcional",
  "type": "Teorema",
  "number": "1.26",
  "title": "",
  "body": "  Suponha que seja uma função diferenciável de duas ou três variáveis. O valor máximo da derivada direcional é e ocorre quando tem a mesma direção do vetor gradiente .   "
},
{
  "id": "ex-maxima-direcional-1",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-maxima-direcional-1",
  "type": "Exemplo",
  "number": "1.27",
  "title": "",
  "body": "    Se , determine a taxa de variação de no ponto na direção de a .    Em que direção tem a máxima taxa de variação? Qual é a máxima taxa de variação?      Iniciamos calculando o vetor gradiente:  O vetor unitário na direção é , logo a taxa de variação de na direção do vetor é De acordo com o Teorema , aumenta mais depressa na direção do gradiente . A taxa máxima de variação é .   "
},
{
  "id": "subsec-regra-cadeia-20",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-regra-cadeia-20",
  "type": "Exercício de Verificação",
  "number": "1.28",
  "title": "",
  "body": "  Seja . Determine o valor máximo de uma derivada direcional em e o vetor unitário na direção e no sentido do qual o valor máximo ocorre.    O valor máximo ocorre na direção e no sentido de .    O valor máximo da derivada direcional é . O vetor unitário nessa direção e sentido é .   "
},
{
  "id": "ex-maxima-direcional-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#ex-maxima-direcional-2",
  "type": "Exemplo",
  "number": "1.29",
  "title": "",
  "body": "  Suponha que você esteja escalando um morro cuja forma seja dada pela equação , e que você esteja no ponto de coordenadas .  Em qual direção você deve se mover inicialmente para subir o mais rápido possível?  Qual é a taxa máxima de ascensão nesse ponto?      O morro é descrito pela função . A direção de subida mais íngreme é dada pelo vetor gradiente de . Avaliando no ponto de posição : Portanto, você deve se mover na direção do vetor (que equivale à direção ). A taxa máxima de ascensão é o módulo desse gradiente:    "
},
{
  "id": "subsec-regra-cadeia-22",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#subsec-regra-cadeia-22",
  "type": "Exercício de Verificação",
  "number": "1.30",
  "title": "",
  "body": "  A temperatura em uma placa metálica é dada por . Se uma formiga está na posição , em que direção ela deve andar para que a temperatura aumente o mais rápido possível?    Na direção do vetor .   "
},
{
  "id": "exercises-derivadas-parciais-2-2-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-2-2",
  "type": "Exercício",
  "number": "1.2.1",
  "title": "",
  "body": "  Se , onde e , determine .      "
},
{
  "id": "exercises-derivadas-parciais-2-2-3",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-2-3",
  "type": "Exercício",
  "number": "1.2.2",
  "title": "",
  "body": "  Se , onde e , determine .      "
},
{
  "id": "exercises-derivadas-parciais-2-3-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-3-2",
  "type": "Exercício",
  "number": "1.2.3",
  "title": "",
  "body": "  Seja . Determine .      "
},
{
  "id": "exercises-derivadas-parciais-2-4-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-4-2",
  "type": "Exercício",
  "number": "1.2.4",
  "title": "",
  "body": "  Encontre o vetor gradiente de no ponto .      "
},
{
  "id": "exercises-derivadas-parciais-2-4-3",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-4-3",
  "type": "Exercício",
  "number": "1.2.5",
  "title": "",
  "body": "  Determine a derivada direcional de no ponto na direção do vetor .    O vetor unitário é . A derivada direcional é .   "
},
{
  "id": "exercises-derivadas-parciais-2-5-2",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-5-2",
  "type": "Exercício",
  "number": "1.2.6",
  "title": "",
  "body": "  Se , onde e , determine .      "
},
{
  "id": "exercises-derivadas-parciais-2-5-3",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-5-3",
  "type": "Exercício",
  "number": "1.2.7",
  "title": "",
  "body": "  Encontre por derivação implícita para a equação .      "
},
{
  "id": "exercises-derivadas-parciais-2-5-4",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-5-4",
  "type": "Exercício",
  "number": "1.2.8",
  "title": "",
  "body": "  Calcule o vetor gradiente de no ponto .      "
},
{
  "id": "exercises-derivadas-parciais-2-5-5",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-5-5",
  "type": "Exercício",
  "number": "1.2.9",
  "title": "",
  "body": "  Qual é a taxa máxima de variação da função no ponto ?      "
},
{
  "id": "exercises-derivadas-parciais-2-5-6",
  "level": "2",
  "url": "calc-derivadas-parciais-4.html#exercises-derivadas-parciais-2-5-6",
  "type": "Exercício",
  "number": "1.2.10",
  "title": "",
  "body": "  A temperatura em um ambiente é modelada por . Se um inseto está na posição e quer esfriar o mais rápido possível (diminuir a temperatura), em que direção ele deve voar?    Na direção oposta ao gradiente: .   "
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
