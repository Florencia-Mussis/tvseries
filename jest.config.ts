const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testEnvironment: 'jsdom', // Asegura que Jest use el entorno de navegador
}

module.exports = createJestConfig(customJestConfig)
