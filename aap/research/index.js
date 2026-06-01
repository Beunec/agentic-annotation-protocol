#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const isLLM = args.includes('--system-instruction');
const folder = isLLM ? 'LLM SYSTEM INSTRUCTIONS' : 'AGENTIC AWARENESS INPUT PROMPT';
const filePath = path.join(__dirname, '..', '..', folder, 'research_agenticannotation.md');

try {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`\n\x1b[36m=== BEUNEC AAP: RESEARCH ANNOTATION (${isLLM ? 'SYSTEM INSTRUCTION' : 'INPUT PROMPT'}) ===\x1b[0m\n`);
  console.log(content);
} catch (error) {
  console.error(`Error reading ${filePath}:`, error.message);
}