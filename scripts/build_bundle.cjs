// build_bundle.cjs — Lee los JSON de data/json/ y genera data_bundle.js
// (var DB = {...}) para que la app funcione con doble clic sin servidor.
const fs = require('fs');
const path = require('path');

const inDir = path.resolve('data/json');
const OUT_APP = path.resolve('docs/04_prototipo/v2/data.js'); // bundle para v2
const bundles = [
  ['persons','personas.json'],
  ['orgs','organizaciones.json'],
  ['videos','videos.json'],
  ['claims','afirmaciones.json'],
  ['events','eventos.json'],
  ['sources','fuentes.json'],
  ['rels','relaciones.json'],
  ['conflicts','conflictos.json'],
];

fs.mkdirSync(path.dirname(OUT_APP), {recursive:true});
let lines = ['// GENERADO por scripts/build_bundle.cjs — NO editar a mano.', '// Editar los JSON en data/json/ y re-ejecutar.', 'var DB = { persons:[], orgs:[], videos:[], claims:[], events:[], sources:[], rels:[], conflicts:[] };'];
for (const [key,file] of bundles) {
  const p = path.join(inDir, file);
  if (!fs.existsSync(p)) { console.log('  (skip) falta', file); continue; }
  const arr = JSON.parse(fs.readFileSync(p,'utf-8'));
  const jsonStr = JSON.stringify(arr).replace(/</g,'\\u003c');
  lines.push(`DB.${key} = ${jsonStr};`);
}
// metadatos de custodia
lines.push(`DB.meta = { exported: "${new Date().toISOString().slice(0,10)}", video_total_disco: 300, pistas_total: 240 };`);
fs.writeFileSync(OUT_APP, lines.join('\n'));
console.log('Bundle generado:', OUT_APP);
console.log('Tamaño:', Math.round(fs.statSync(OUT_APP).size/1024), 'KB');