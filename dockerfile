FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package* .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm","start"]