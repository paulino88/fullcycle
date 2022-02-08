FROM golang:alpine AS builder

WORKDIR /app

COPY . .

RUN go build sum.go

FROM scratch

WORKDIR /app

COPY --from=builder /app .

ENTRYPOINT [ "./sum" ]