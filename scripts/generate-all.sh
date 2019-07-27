#!/bin/bash
npm i -g quicktype
./scripts/generate-ts-app-backend-types.rb && \
  ./scripts/generate-ts-events-api-types.rb && \
  ./scripts/generate-ts-rtm-api-types.rb && \
  ./scripts/generate-ts-web-api-types.rb


