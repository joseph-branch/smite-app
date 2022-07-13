FROM node:lts

WORKDIR /app

COPY package.json /app

RUN yarn install --frozen-lockfile

ENV NEXT_PUBLIC_APP_ENV dev

COPY . /app

RUN npx prisma generate

EXPOSE 3000

CMD ["yarn", "dev"]