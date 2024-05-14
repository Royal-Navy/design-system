#!/bin/bash

set -u

set +e
output=$(pnpm audit --json)
result=$?
set -e

if [ $result -eq 0 ]; then
	# everything is fine
	exit 0
fi

if [ -f pnpm-audit-known-issues ] && echo "$output" | grep auditAdvisory | diff -q pnpm-audit-known-issues - > /dev/null 2>&1; then
	echo
	echo Ignorning known vulnerabilities
	exit 0
fi

echo
echo Security vulnerabilities were found that were not ignored
echo
echo Check to see if these vulnerabilities apply to production
echo and/or if they have fixes available. If they do not have
echo fixes and they do not apply to production, you may ignore them
echo
echo To ignore these vulnerabilities, run:
echo
echo "pnpm audit --json | grep auditAdvisory > pnpm-audit-known-issues"
echo
echo and commit the pnpm-audit-known-issues file
echo
exit "$result"
