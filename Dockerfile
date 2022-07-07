FROM node:16 As base

WORKDIR /usr/src/app

RUN npm set audit false

# COPY package.json /usr/src/app/package.json
# RUN npm install

COPY . /usr/src/app

#
FROM base AS dev

# ARG NODE_ENV=develop

# CMD ["npm", "start"]

#
FROM base AS test

ENV NODE_ENV=test

FROM dev AS preReleaseBuild

ENV NODE_ENV=production
# RUN npm run build

FROM nginx:1.16-alpine AS release

COPY --chown=0:0 --from=preReleaseBuild /usr/src/app/dist /usr/share/nginx/html
COPY --chown=0:0 --from=preReleaseBuild /usr/src/app/_infra/nginx/default.conf /etc/nginx/conf.d/default.conf
