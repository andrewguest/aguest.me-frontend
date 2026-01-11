# =========================
# 1. Build stage (Bun)
# =========================
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependency files first for better caching
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the SolidJS app
RUN bun run build


# =========================
# 2. Runtime stage (Caddy)
# =========================
FROM caddy:2-alpine

# Copy built assets from builder
COPY --from=builder /app/dist /srv

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose HTTP & HTTPS
EXPOSE 80 443
