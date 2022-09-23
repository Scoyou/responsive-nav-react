"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useWindowDimensions;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = (0, _react.useState)(getWindowDimensions());
  (0, _react.useEffect)(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}