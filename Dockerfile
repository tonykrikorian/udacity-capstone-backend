FROM node:10.22.1-stretch
ARG value7000
ARG urltokenazure
ARG azuretraductorurl
ARG languageslist
RUN mkdir /app
WORKDIR /app
ENV TOKEN $value7000
ENV URL_TOKEN_AZURE $urltokenazure
ENV URL_AZURE_TRANSLATE $azuretraductorurl
ENV URL_AZURE_LANGUAGES_LIST $languageslist
COPY package.json /app
COPY Makefile /app
RUN make install
COPY . /app
EXPOSE 80
CMD ["node","index.js"]