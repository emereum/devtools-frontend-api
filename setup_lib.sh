#!/bin/bash

# See: https://chromium.googlesource.com/devtools/devtools-frontend/+/refs/heads/chromium/3965/README.md#:~:text=To%20only%20build%20DevTools%20frontend,to%20the%20original%20unminified%20source.
# Artifacts can be found in lib/devtools-frontend/out/Default/gen/front_end
git submodule init
script_dir=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
export PATH="${script_dir}/lib/depot_tools:${PATH}"
pushd lib
gclient config https://chromium.googlesource.com/devtools/devtools-frontend --unmanaged
cd devtools-frontend
gclient sync
gn gen out/Default
autoninja -C out/Default
popd

