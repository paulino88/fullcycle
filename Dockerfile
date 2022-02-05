FROM golang:alpine AS builder

WORKDIR /app

COPY ./cicdgithub/* .

RUN go build math.go

FROM scratch

WORKDIR /app

COPY --from=builder /app .

ENTRYPOINT [ "./math" ]