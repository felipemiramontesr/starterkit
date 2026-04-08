import { readFileSync } from 'fs'

const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf8').trim()

// Semantic versioning exact format V[X].[Y].[Z]_[description]
const commitRE = /^V\d+\.\d+\.\d+_[a-zA-Z0-9_-]+$/

if (!commitRE.test(msg)) {
  console.error('')
  console.error('❌ ERROR: Formato de commit inválido. Estándar "Grado Militar" violado.')
  console.error('El mensaje debe coincidir exactamente con: Vx.y.z_descripcion_tecnica')
  console.error('Mensaje actual detectado: "' + msg + '"')
  console.error('')
  console.error('[INFO] Para solucionar esto, no uses "git commit" directamente.')
  console.error('Apóyate en las tuberías NPM automatizadas que hemos creado:')
  console.error('  npm run commit:patch "arregla_bugs"')
  console.error('  npm run commit:minor "agrega_boton"')
  console.error('  npm run commit:major "lanzamiento_produccion"')
  console.error('')
  process.exit(1)
}
