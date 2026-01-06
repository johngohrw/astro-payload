#! /bin/bash
source ${HOME}/.bashrc

cd /var/www/astro-payload/payload-instance/payload/cogue
export NODE_ENV=production
pnpm start