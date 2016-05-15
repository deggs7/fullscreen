(function() {
  // 可用显示类型
  var ACTIONS = {
    stretchToWindow: {
      title: '全屏',
      shortcut: 49  // 1
    },
    actualSize: {
      title: '实际大小',
      shortcut: 50  // 2
    },
    fitToWindow: {
      title: '适合窗口',
      shortcut: 51  // 3
    },
    fitToWidth: {
      title: '适合窗口宽度',
      shortcut: 52  // 4
    },
    fitToHeight: {
      title: '适合窗口高度',
      shortcut: 53  // 5
    }
  };

  var SHORTCUTS = {
    ctrl_1: 'stretchToWindow',
    ctrl_2: 'actualSize',
    ctrl_3: 'fitToWindow',
    ctrl_4: 'fitToWidth',
    ctrl_5: 'fitToHeight'
  };

  function Fullscreen(selector) {
    this.selector = selector || 'body' // default
    this.viewType = 'stretchToWindow';
    // this.viewType = 'actualSize';
  };

  /*
   * 组件初始化
   */
  Fullscreen.prototype.init = function () {
    // 获取目标element 并计算实际大小
    this.el = document.querySelector(this.selector);
    this.elWidth = this.el.offsetWidth;
    this.elHeight = this.el.offsetHeight;

    this.resizeWindow();

    // 监听窗口变化
    var self = this;
    // this.lastExecution = Date.now();
    window.addEventListener('resize', function () {
      // if (Date.now() - self.lastExecution < 100) return;
      // self.lastExecution = Date.now();
      self.resizeWindow.call(self);
    }, false);


    // 监听快捷键
    // define a handler
    function doc_keyUp(e) {
      console.log(e.ctrlKey);
      console.log(e.keyCode);
      // this would test for whichever key is 40 and the ctrl key at the same time
      // if (e.ctrlKey && e.keyCode == 40) {
      //   // call your function to do the thing
      //   pauseSound();
      // }
    }
    // register the handler 
    document.addEventListener('keyup', doc_keyUp, false);

  }

  /*
   * 计算窗口大小并调整显示
   */
  Fullscreen.prototype.resizeWindow = function () {
    console.log(this);
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this[this.viewType]();
  }

  /*
   * 切换viewType类型
   */
  Fullscreen.prototype.switchViewType = function (viewType) {
    if (!(viewType === this.viewType) && ACTIONS.hasOwnProperty(viewType)) {
      this.viewType = viewType;
      this[this.viewType]();
    }
  }

  Fullscreen.prototype.stretchToWindow = function () {
    var translateX = (this.windowWidth - this.elWidth) / 2;
    var translateY = (this.windowHeight - this.elHeight) / 2;

    var scaleX = this.windowWidth / this.elWidth;
    var scaleY = this.windowHeight / this.elHeight;

    var transformValue = [
      'translate(' + translateX + 'px' + ',' + translateY + 'px' + ')',
      'scale(' + scaleX + ',' + scaleY + ')'
    ].join(' ');
    this.el.style.transform = transformValue;
    this.el.style.overflow = 'hidden';
  }

  Fullscreen.prototype.actualSize = function () {
    this.el.style.transform = '';
    this.el.style.overflow = 'auto';
  }

  Fullscreen.prototype.fitToWindow= function () {
  }

  Fullscreen.prototype.fitToWidth = function () {
  }

  Fullscreen.prototype.fitToHeight = function () {
  }


  var fs = new Fullscreen();
  fs.init();

})();


