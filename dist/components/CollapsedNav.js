"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CollapsedNav = _ref => {
  let {
    setShowCollapsedNav,
    menuIcon,
    iconHeight,
    iconWidth
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "collapsed-nav"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "nav menu",
    className: "nav-item",
    src: menuIcon,
    onClick: () => setShowCollapsedNav(false),
    height: iconHeight,
    width: iconWidth
  }), children);
};

var _default = CollapsedNav;
exports.default = _default;