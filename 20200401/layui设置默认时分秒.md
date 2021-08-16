var endTime = laydate.render({
    elem: '#_endtime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:mm:ss',
    theme: 'molv',
    ready: function (date) {
        this.dateTime.hours = 23;
        this.dateTime.minutes = 59;
        this.dateTime.seconds = 59;
    },
    done: function (value, date, endDate) {
        if (value) {
            beginTime.config.max = {
                year: date.year,
                month: date.month - 1,
                date: date.date,
                hours: date.hours > 0 ? date.hours : 23,
                minutes: date.minutes > 0 ? date.minutes : 59,
                seconds: date.seconds > 0 ? date.seconds : 59
            };
        } else {
            beginTime.config.max = {
                year: 2099,
                month: 11,
                date: 31,
                hours: 0,
                minutes: 0,
                seconds: 0
            };

        }
    }
});