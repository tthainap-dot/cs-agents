#!/usr/bin/env node
import { serve } from '../index.js';

const [, , cmd] = process.argv;

if (cmd === 'serve') {
  serve().catch((err) => {
    console.error('Erro ao subir o servidor cs-agents MCP:', err);
    process.exit(1);
  });
} else {
  console.log('Uso: cs-agents serve');
  process.exit(cmd ? 1 : 0);
}
