FROM golang:alpine AS builder

WORKDIR /go

COPY ./hello.go .

RUN go build hello.go

FROM scratch

WORKDIR /go

COPY --from=builder /go .

ENTRYPOINT [ "./hello" ]
