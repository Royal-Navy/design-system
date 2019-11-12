#!/usr/bin/env bash

set -uo pipefail
trap 's=$?; echo "$0: Error on line "$LINENO": $BASH_COMMAND"; exit $s' ERR
IFS=$'\n\t'

:> src/index.ts

for file in src/icons/*; do
  filename=$(basename -- "$file")
  filename_no_ext=${filename%%.*}
  echo "export {default as Icon${filename_no_ext}} from './icons/${filename_no_ext}'" >> src/index.ts
done
