// Extrae los datos del db_seed_v01.js a JSON limpios por dominio.
// Evalúa el JS real (mediante require con ayuda) y exporta cada colección.
const fs = require('fs');
const path = require('path');

const SEED = path.resolve('data/db_seed_v01.js');
let src = fs.readFileSync(SEED, 'utf8');

// El seed define `const DB = {...}` sin export y usa DB.x.push(). 
// Lo envolvemos en un sandbox y capturamos el DB final.
const sandbox = `global.__DB__ = undefined;
${src}
module.exports = DB;`;

const tmp = path.resolve(process.cwd(), '_extract_tmp.cjs');
fs.writeFileSync(tmp, sandbox);
const DB = require(tmp);
fs.unlinkSync(tmp);

const TOTAL = {
  persons: DB.persons.length,
  orgs: DB.orgs.length,
  videos: DB.videos.length,
  claims: DB.claims.length,
  events: DB.events.length,
  sources: DB.sources.length,
  rels: DB.rels.length,
  conflicts: DB.conflicts ? DB.conflicts.length : 0,
};
console.log('COLLECTIONS:', JSON.stringify(TOTAL, null, 1));

const outDir = path.resolve('data/json');
fs.mkdirSync(outDir, { recursive: true });

// Escribimos un JSON por dominio
const targets = {
  'personas': DB.persons,
  'organizaciones': DB.orgs,
  'videos': DB.videos,
  'afirmaciones': DB.claims,
  'eventos': DB.events,
  'fuentes': DB.sources,
  'relaciones': DB.rels,
  'conflictos': DB.conflicts || [],
};

for (const [name, arr] of Object.entries(targets)) {
  const file = path.join(outDir, `${name}.json`);
  fs.writeFileSync(file, JSON.stringify(arr, null, 1));
  const kb = Math.round(fs.statSync(file).size / 1024);
  console.log(`  ✔ ${name}.json  (${arr.length} entradas, ${kb} KB)`);
}

// Verificación: no hay datos perdidos por campos
console.log('\nVERIFICACION DE CAMPOS (contra el DB real):');
const sample = {
  persona: DB.persons[0] ? Object.keys(DB.persons[0]) : [],
  org: DB.orgs[0] ? Object.keys(DB.orgs[0]) : [],
  claim: DB.claims[0] ? Object.keys(DB.claims[0]) : [],
  rel: DB.rels[0] ? Object.keys(DB.rels[0]) : [],
};
for (const [k,v] of Object.entries(sample)) console.log(`  ${k}: ${v.join(', ')}`);