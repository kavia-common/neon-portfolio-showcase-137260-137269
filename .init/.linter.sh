#!/bin/bash
cd /home/kavia/workspace/code-generation/neon-portfolio-showcase-137260-137269/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

