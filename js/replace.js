// vim:set sw=2 ts=2 sts=2 expandtab:
const replace = [
  {
    "name": "Darmaprout",
    "replaceWith": "Darmaprout"
  },
  {
    "name": "Bruno Le Prout|Bruno Lemaire",
    "replaceWith": "Bruno Le Prout"
  },
  {
    "name": "Jean Proutex",
    "replaceWith": "Jean Proutex"
  },
  {
    "name": "Emmanuel Maprout|Emmanuel Macron",
    "replaceWith": "Emmanuel Maprout"
  },
  {
    "name": "Barbara Proutili",
    "replaceWith": "Barbara Proutili"
  },
  {
    "name": "Jean-Michel Blanc-Prout",
    "replaceWith": "Jean-Michel Blanc-Prout"
  },
  {
    "name": "Marlène Schiaprout",
    "replaceWith": "Marlène Schiaprout"
  },
  {
    "name": "Élizabeth Prout|Elisabeth Borne",
    "replaceWith": "Élizabeth Prout"
  },
  {
    "name": "Éric Duprout-Moretti",
    "replaceWith": "Éric Duprout-Moretti"
  },
  {
    "name": "Gabriel Prouttal",
    "replaceWith": "Gabriel Prouttal",
  },
  {
    "name": "Jean-Prout Le Drian|Jean Yves Le Drian|Jean-Yves le Drian",
    "replaceWith": "Jean-Prout Le Drian"
  },
  {
    "name": "Agnès Proutier-Runacher",
    "replaceWith": "Agnès Proutier-Runacher"
  },
  {
    "name": "Cédric prOut|Cedric O",
    "replaceWith": "Cédric prOut"
  },
  {
    "name": "Florence Proutly",
    "replaceWith": "Florence Proutly"
  },
  {
    "name": "Proutelyne Bachelot",
    "replaceWith": "Proutelyne Bachelot"
  },
  {
    "name": "Proutivier Véran",
    "replaceWith": "Proutivier Véran"
  },
  {
    "name": "Frédérique Proutal|Frederique Vidal",
    "replaceWith": "Frédérique Proutal"
  },
  {
    "name": "Amélie de Proutalin|Amélie De Montchalin",
    "replaceWith": "Amélie de Proutalin"
  },
    {
    "name": "président|Président",
    "replaceWith": "Proutident"
  },
  {
    "name": "Franck Riester",
    "replaceWith": "Franck Prouster"
  },
  {
    "name": "Emmanuelle Wargon",
    "replaceWith": "Emmanuelle Prouton"
  },
  {
    "name": "Jean-Baptiste Djebbari",
    "replaceWith": "Jean-Baptiste Djeprouti"
  },
  {
    "name": "Olivier Dussopt",
    "replaceWith": "Olivier Duprout"
  },
  {
    "name": "Geneviève Darrieussecq",
    "replaceWith": "Geneviève Duproutsecq"
  },
  {
    "name": "Sébastien Lecornu",
    "replaceWith": "Sébastien Leproutu"
  },
  {
    "name": "Miniprout",
    "replaceWith": "miniprout"
  },
  {
    "name": "ministre|Ministre",
    "replaceWith": "Miniprout"
  }
];
/* For copy/paste
  {
    "name": "",
    "replaceWith": ""
  },
*/

// Create arrya of regexps with all above elements
const rExps = []
replace.forEach((element) => {
  rExps.push([new RegExp(element["name"]), element["replaceWith"]])
})

var textNode;
let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// Replace in title
rExps.forEach(function (rExp) {
  document.title = document.title.replace(rExp[0], rExp[1]);
});

while (textNode = walk.nextNode()) {
  rExps.forEach(function (rExp) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp[0], rExp[1]);
  });
}
