"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _useWindowDimensions = _interopRequireDefault(require("../hooks/useWindowDimensions"));

require("../styles/index.css");

var _CollapsedNav = _interopRequireDefault(require("./CollapsedNav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Navbar = _ref => {
  let {
    navTitle,
    menuIcon,
    iconHeight,
    iconWidth
  } = _ref;
  const [colorChange, setColorchange] = (0, _react.useState)(false);
  const [showCollapsedNav, setShowCollapsedNav] = (0, _react.useState)(false);
  const {
    width
  } = (0, _useWindowDimensions.default)();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: colorChange ? "navbar colorChange" : "navbar"
  }, showCollapsedNav && /*#__PURE__*/_react.default.createElement(_CollapsedNav.default, {
    setShowCollapsedNav: setShowCollapsedNav
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    className: "nav-title"
  }, navTitle), width < 600 ? /*#__PURE__*/_react.default.createElement("img", {
    alt: "nav menu",
    className: "nav-item",
    src: menuIcon,
    onClick: () => setShowCollapsedNav(true),
    height: iconHeight,
    width: iconWidth
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children));
};

var _default = Navbar;
exports.default = _default;