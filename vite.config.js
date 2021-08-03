import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
    css: {
        modules: {
            generateScopedName: '[hash:base64:6]', // todo test safety, try iterating
        },
    },
})
