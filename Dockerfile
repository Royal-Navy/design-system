FROM node:lts-hydrogen

ADD . /moduk-design-system
WORKDIR /moduk-design-system

RUN yarn install --frozen-lockfile

