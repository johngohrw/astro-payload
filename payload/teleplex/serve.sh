#! /bin/bash
source ${HOME}/.bashrc

cd /var/www/astro-payload/payload/teleplex
export NODE_ENV=production
pnpm start