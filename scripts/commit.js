import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const type = process.argv[2] // 'patch', 'minor', 'major'
const description = process.argv[3]

if (!['patch', 'minor', 'major'].includes(type) || !description) {
  console.error('Uso incorrecto. Ejecuta uno de los siguientes:')
  console.error('npm run commit:patch "descripcion_breve"')
  console.error('npm run commit:minor "cambio_caracteristica"')
  console.error('npm run commit:major "version_final"')
  process.exit(1)
}

// Check description format
if (!/^[a-zA-Z0-9_-]+$/.test(description)) {
  console.error('❌ La descripción no debe contener espacios ni caracteres especiales.')
  console.error('Usa guiones o barras bajas: ej. "ajuste_navbar"')
  process.exit(1)
}

console.log(`[1/3] Calculando nueva versión SemVer (${type})...`)
// Increment version but do not create a git tag automatically
execSync(`npm version ${type} --no-git-tag-version`, { stdio: 'pipe' })

// Get the new version
const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const version = packageJson.version
const commitMessage = `V${version}_${description}`

console.log(`[2/3] Version generada: V${version}`)
console.log(`[3/3] Registrando operaciones bajo la firma: ${commitMessage}...`)

try {
  // Add all changes to staging
  execSync('git add .', { stdio: 'inherit' })
  // Commit with the strict message
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' })
  console.log(
    `\n✅ Operación exitosa. ${commitMessage} consolidado en el historial local.\nEjecuta 'git push' para desplegar a Hostinger vía Actions.`
  )
} catch (error) {
  console.error(
    '\n❌ Operación Git fallida. ¿Hay cambios reales para comitear? Revisa que tu código no contenga errores detectados por el Lint / TypeScript en la barrera pre-commit.'
  )
  process.exit(1)
}
