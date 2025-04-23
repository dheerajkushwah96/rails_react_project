#!/bin/bash

# Use json-to-zod to generate a Zod schema from a JSON schema, (resolving refs
# with json-refs), and format with Prettier. All are devDependencies of the
# root TypeScript project.
#
# Refer to the lib's README for more on JSON schema refs:
# - https://github.com/StefanTerdell/json-schema-to-zod#readme
# and
# - https://json-schema.org/understanding-json-schema/structuring#dollarref
#
# We are so far using JSON Schema Draft 4 features, though json-schema-to-zod
# supports up to Draft 7.
#
# Usage: Run `npm run json-to-zod` with a source JSON schema file, followed by
# a destination Zod output file.
#
# Example:
# npm run json-to-zod config/json_schemas/release_form/form_schema.json app/frontend/components/release-form/zod-schema.ts
#
# WARN: Generated Zod schemas should not be edited by hand, because doing so
# can create differences between the JSON and Zod schemas.
#
# NOTE: Files ending in '*zod-schema.ts' are eslint-ignored.

set -euo pipefail

json-refs resolve "$1" | json-schema-to-zod | prettier --parser typescript >"$2"

warning="// WARN: This file was generated from $1,\n// by script\/json_to_zod.sh.\n// DO NOT EDIT."
sed -i "1i ${warning}" "$2"
sed -i "\$a ${warning}" "$2"

echo "OK"
