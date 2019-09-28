#!/usr/bin/env bash

cat src/tampermonkey.headers.ts > index.user.js
cat out/build.js >> index.user.js
