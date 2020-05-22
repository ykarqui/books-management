# To install dependencies at the beginning
$ npm install

# To install dependencies while developing
$ npm install morgan express

# To run with nodemon
$ npm run dev

# To run test cases
$ npm run test

# To issue the following problem
[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached
- Try the following command
$ echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p