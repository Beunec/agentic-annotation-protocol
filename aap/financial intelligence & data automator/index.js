#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const isLLM = args.includes('--system-instruction');
const folder = isLLM ? 'LLM SYSTEM INSTRUCTIONS' : 'AGENTIC AWARENESS INPUT PROMPT';
const filePath = path.join(__dirname, '..', '..', folder, 'financial_intelligence_data_automator_agenticannotation.md');

try {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`\n\x1b[36m=== BEUNEC AAP: FINANCIAL INTELLIGENCE ANNOTATION (${isLLM ? 'SYSTEM INSTRUCTION' : 'INPUT PROMPT'}) ===\x1b[0m\n`);
  console.log(content);
} catch (error) {
  console.error(`Error reading ${filePath}:`, error.message);
}