document.getElementById('js-current-year').appendChild(document.createTextNode(new Date().getFullYear()));

window.onload = function () {
  document.documentElement.classList.add("is-ready");
};
if (!'pointer-events' in document.documentElement.style) {
  (function () {
    var follower, init, mouseX, mouseY, positionElement, timer;

    follower = document.getElementById('js-cursor');

    mouseX = (function (_this) {
      return function (event) {
        return event.clientX;
      };
    })(this);

    mouseY = (function (_this) {
      return function (event) {
        return event.clientY;
      };
    })(this);

    positionElement = (function (_this) {
      return function (event) {
        var mouse;
        mouse = {
          x: mouseX(event),
          y: mouseY(event)
        };
        follower.style.top = mouse.y + 'px';
        return follower.style.left = mouse.x + 'px';
      };
    })(this);

    timer = false;

    window.onmousemove = init = (function (_this) {
      return function (event) {
        var _event;
        _event = event;
        return timer = setTimeout(function () {
          return positionElement(_event);
        }, 1);
      };
    })(this);

  }).call(this);
}
