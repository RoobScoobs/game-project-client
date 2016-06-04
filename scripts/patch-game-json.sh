curl "http://tic-tac-toe.wdibos.com/games/id" \
    --include \
    --request PATCH \
    --header "Authorization: Token token"="da0b38d8593996660d24f10213e4771b" \
    --data-urlencode "game[cell][index]"=0 \
    --data-urlencode "game[cell][value]"="x" \
    --data-urlencode "game[over]"=false \
