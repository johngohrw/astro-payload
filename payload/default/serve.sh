#! /bin/bash
source ${HOME}/.bashrc

cd /var/www/astro-payload/payload-instance
export NODE_ENV=production
pnpm start