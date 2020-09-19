#!/bin/bash

cd `dirname $0`/..
cp -a ../java-slack-sdk/json-logs/samples/audit/. ./json/audit-api/
cp -a ../java-slack-sdk/json-logs/samples/api/. ./json/web-api/
cp -a ../java-slack-sdk/json-logs/samples/events/. ./json/events-api/
cp -a ../java-slack-sdk/json-logs/samples/rtm/. ./json/rtm-api/
cp -a ../java-slack-sdk/json-logs/samples/scim/. ./json/scim-api/
cp -a ../java-slack-sdk/json-logs/samples/app-backend/dialogs/. ./json/app-backend/dialogs/
cp -a ../java-slack-sdk/json-logs/samples/app-backend/interactive-components/. ./json/app-backend/interactive-components/
cp -a ../java-slack-sdk/json-logs/samples/app-backend/slash-commands/. ./json/app-backend/slash-commands/
cp -a ../java-slack-sdk/json-logs/samples/app-backend/views/. ./json/app-backend/views/
echo "Done!"

