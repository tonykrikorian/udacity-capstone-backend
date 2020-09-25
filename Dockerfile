FROM node:10.22.1-stretch
ARG value7000
RUN mkdir /app
WORKDIR /app
ENV TOKEN $value7000
COPY package.json /app
COPY Makefile /app
RUN make install
COPY . /app
EXPOSE 80
CMD ["node","index.js"]