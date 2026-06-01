#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log("Beunec AAP Skills Runner");

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(`
Available Commands:
  npx beunec-agentic-annotation-protocol aap-code [--system-instruction]
  npx beunec-agentic-annotation-protocol aap-research [--system-instruction]
  npx beunec-agentic-annotation-protocol aap-generative-chat [--system-instruction]
  npx beunec-agentic-annotation-protocol aap-legal [--system-instruction]
  npx beunec-agentic-annotation-protocol aap-finance [--system-instruction]
  `);
  process.exit(0);
}

// Add logic to route to different skills if needed