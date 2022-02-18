# Flexbox

### flex-direction
Définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes :

- row : Les éléments sont disposés dans la même direction que le texte.
- row-reverse : Les éléments sont disposés dans la direction opposée au texte.
- column : Les éléments sont disposés de haut en bas.
- column-reverse : Les éléments sont disposés de bas en haut.

### flex-wrap
Indique si les éléments flexibles sont contraints à être disposés sur une seule ligne ou s'ils peuvent être affichés sur plusieurs lignes avec un retour automatique.
exemple : flex-flow: *flex-direction flex-wrap*

Les deux propriétés flex-direction et flex-wrap sont utilisées tellement souvent ensembles que le raccourci flex-flow a été créé pour les combiner.

### justify-content
Aligne les éléments horizontalement et accepte les valeurs suivantes :

- flex-start : Les éléments s'alignent au côté gauche du conteneur.
- flex-end : Les éléments s'alignent au côté droit du conteneur.
- center : Les éléments s'alignent au centre du conteneur.
- space-between : Les éléments s'affichent avec un espace égal entre eux.
- space-around : Les éléments s'affichent avec un espacement égal à l'entour d'eux.

### align-items
Aligne les éléments verticalement et accepte les valeurs suivantes :

- flex-start : Les éléments s'alignent au haut du conteneur.
- flex-end : Les éléments s'alignent au bas du conteneur.
- center : Les éléments s'alignent au centre vertical du conteneur.
- baseline : Les éléments s'alignent à la ligne de base du conteneur.
- stretch : Les éléments sont étirés pour s'adapter au conteneur.

### order
Permet de disposer les éléments au sein de groupes ordinaux. Cela signifie que chaque élément reçoit un entier qui représente le numéro d'un groupe. Les éléments sont ensuite placés visuellement dans l'ordre qui correspond à cet entier, les éléments avec les numéros les plus petits étant placés en premiers. Si plusieurs éléments possèdent le même coefficient, les éléments de ce groupe sont alors ordonnés en suivant l'ordre du document source entre eux.

### align-self
S'applique sur des éléments individuels. Cette propriété accepte les **mêmes valeurs que align-items**, mais s'applique seulement à l'élément ciblé.
Accepte les valeurs suivantes :

- nowrap : Tous les éléments sont tenus sur une seule ligne.
- wrap : Les éléments s'enveloppent sur plusieurs lignes au besoin.
- wrap-reverse : Les éléments s'enveloppent sur plusieurs lignes dans l'ordre inversé.

### align-content
Définir comment plusieurs lignes sont espacées de l'une à l'autre. Cette propriété prend les valeurs suivantes :

- flex-start : Les lignes sont amassées dans le haut du conteneur.
- flex-end: Les lignes sont amassées dans le bas du conteneur.
- center : Les lignes sont amassées dans le centre vertical du conteneur.
- space-between : Les lignes s'affichent avec un espace égal entre eux.
- space-around : Les lignes s'affichent avec un espace égal autour d'eux.
- stretch : Les lignes sont étirées pour s'adapter au conteneur.

Ceci peut être déroutant, mais **align-content** détermine l'espace entre les lignes, alors que **align-items** détermine comment les éléments dans leur ensemble sont alignées à l'intérieur du conteneur. Quand il n'y a qu'une seule ligne, **align-content** n'a aucun effet.