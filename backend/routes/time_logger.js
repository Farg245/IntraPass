// middleware that transform the date format to a

const {
  date_format,
  date_greater_or_equal,
  weird_date_format,
} = require("./date_functions");

const time_logger = (req, res, next) => {
  RequestTimestamp = date_format(new Date());

  PeriodFrom = weird_date_format(req.params.date_from);
  PeriodTo = weird_date_format(req.params.date_to);

  // console.log(RequestTimestamp, PeriodFrom, PeriodTo);
  next();
};

module.exports = time_logger;
