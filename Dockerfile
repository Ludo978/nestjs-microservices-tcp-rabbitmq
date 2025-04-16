# --- Build Stage ---
FROM node:22-alpine AS builder

ARG service_name

ENV NODE_ENV=production

WORKDIR /app

COPY ./services/$service_name /app
COPY libs /app/libs

RUN yarn install --frozen-lockfile
RUN yarn build

# --- Production Stage ---
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production


COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/dist /app/dist

EXPOSE 3000

CMD ["yarn", "start:prod"]
