const moment = require('moment');
moment.locale('zh-cn'); 

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();