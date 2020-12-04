---
title: Polytox
image: "polytox.png"
summary: Un outil robuste pour modéliser la qualité de l’air de polluants atmosphériques à l’échelle d’une agglomération, d’une vallée, d’une région. 
---

POLYTOX est un logiciel de modélisation de la dispersion de polluants atmosphériques, développé au sein de la SEDE et adapté à l’échelle de l'agglomération ou d'une région. Sa mise en œuvre rapide et sa prise en compte d’un très grand nombre de sources diverses permettent des applications variées, pour des études d’impact sur l’environnement ou dans le cadre de stratégies d'assainissement. 

Il s'agit d'un logiciel de type multiboîte (eulérien) non stationnaire, où la concentration des polluants est uniforme par boîte. Pour résoudre les équations d'advection/diffusion, POLYTOX suit la méthode "particle in cell" selon laquelle la vitesse de diffusion n'est pas dépendante du gradient de concentration mais est déterminée en fonction de l'état de turbulence de l'atmosphère. Cette méthode permet de simplifier les équations d'advection/diffusion et de résoudre un système à différences finies. Elle a l'avantage de s'appliquer à des cas non stationnaires sans vent où le transport de masse n'est dû qu'aux vitesses d'échange entre boîtes, ce que ne peut faire un modèle gaussien.

Le modèle intègre les conditions météorologiques d’un lieu à partir des mesures au sol. Il peut également intégrer des résultats de modèles de champs de vent. 

Il prend en compte la topographie locale qui influence ces champs de vent. Il permet de distinguer des occupations de sols hétérogènes et des profils de vents particuliers, comme des directions de vent changeant avec l’altitude. 
 
POLYTOX est adapté à des polluants stables; il  tient également compte de l'oxydation du NO en NO2 et des poussières fines secondaires créées par conglomérat de composés organiques volatils. Il ne n'est pas adapté à des polluants secondaires découlant d'une chimie complexes, dont l'ozone.

POLYTOX est un outil d’aide à la décision. 
- Il permet d’anticiper les impacts sur l’environnement dans le cadre d’un projet routier, urbanistique, d’assainissement de la qualité de l’air.
- Il permet d’évaluer la contribution du projet à la pollution ambiante.
- Il permet de répondre à la règlementation en vigueur et d’estimer l’adéquation d’un projet à une démarche d’assainissement de la qualité de l’air.

POLYTOX s’applique à
- des plans de mesures d’assainissement (stratégies d’assainissement, plans OPair)
- des projets d’urbanisme, développements de quartiers, zones industrielles et artisanales
- des projets de grandes industries, usines de traitement des déchets…
des sites aéroportuaires…
