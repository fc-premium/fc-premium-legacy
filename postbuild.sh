#!/usr/bin/env bash

cat fc-module-handler/tampermonkey.headers.ts > index.user.js
cat out/build.js >> index.user.js
