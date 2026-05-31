# ---- Build stage ----
FROM oven/bun:1 AS build
WORKDIR /app

# Arguments
ARG VITE_API_URL

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

RUN rm -rf node_modules && bun install --frozen-lockfile --production

# ---- Runtime stage ----
FROM oven/bun:1-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

USER bun

EXPOSE 3000
CMD ["bun", "build/index.js"]