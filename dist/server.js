"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _task = _interopRequireDefault(require("./routes/task.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
/**ROUTES */

/**SETTINGS */
app.set('port', process.env.PORT || 3000);
/**MIDDLEWARES */

app.use(_express["default"].json());
/**ROUUTES */

app.use(_index["default"]);
app.use('/tasks', _task["default"]);
var _default = app;
exports["default"] = _default;