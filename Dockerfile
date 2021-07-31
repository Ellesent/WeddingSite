# base image
FROM node:11.6.0
# working directory
WORKDIR /app
# add binaries to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /app/
COPY package-lock.json /app/
COPY public/ app/public
COPY tsconfig.json /app/
RUN npm install
# copy app files and build
COPY . /app
RUN npm run build
# start app
CMD [ "npm", "start" ]