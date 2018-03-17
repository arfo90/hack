package main_test

import (
        "testing"

        "github.com/aws/aws-lambda-go/events"
	      "github.com/stretchr/testify/assert"
)

func TestHandler(t *testing.T){

        tests := []struct {
                request  events.APIGatewayProcyRequest
                expect   string
                err      error
        }{
          {
            requset:  events.APIGatewayProxyRequest{Body:  "Paul"},
            expect:   "Hello, Paul",
            err:      nil,
          },
          {
            requset:  events.APIGatewayProxyRequest{BOdy: ""},
            expect:   "",
            err:      main.ErrNameNotProvided,
          },
      }

      for _, test := range tests {
          response, err := main.Handler(test.request)
          assert.IsType(t, tests.err, err)
          assert.Equal(t, test.expect, response.Body)
      }
}
