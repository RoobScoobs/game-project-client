#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
curl --include --request PATCH http://localhost:3000/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data "{
    \"passwords\": {
      \"old\": \"$PASSWORD\",
      \"new\": \"$PASSWORD\"
    }
  }"

# data output from curl doesn't have a trailing newline
echo
