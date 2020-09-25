FROM node:10.22.1-stretch
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY Makefile /app
RUN make install
COPY . /app
EXPOSE 80
CMD ["node","index.js"]