# base image
FROM node:16.8.0
# working directory
WORKDIR /app
# add binaries to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /app/
COPY package-lock.json /app/
COPY public/ app/public
RUN npm install
# copy app files and build
COPY . /app
RUN npm run build
# start app
CMD [ "npm", "start" ]