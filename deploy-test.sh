npm run build
ssh stephen@43.247.184.53 -p 52919 "cd /var/www/xk-portal ; rm -rf *"
scp  -P 52919 -r  ./dist/* stephen@43.247.184.53:/var/www/txcode

