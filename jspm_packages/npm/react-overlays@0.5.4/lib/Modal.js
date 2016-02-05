/* */ 
'use strict';
exports.__esModule = true;
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _warning = require('warning');
var _warning2 = _interopRequireDefault(_warning);
var _reactPropTypesLibMountable = require('react-prop-types/lib/mountable');
var _reactPropTypesLibMountable2 = _interopRequireDefault(_reactPropTypesLibMountable);
var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');
var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
var _Portal = require('./Portal');
var _Portal2 = _interopRequireDefault(_Portal);
var _ModalManager = require('./ModalManager');
var _ModalManager2 = _interopRequireDefault(_ModalManager);
var _utilsOwnerDocument = require('./utils/ownerDocument');
var _utilsOwnerDocument2 = _interopRequireDefault(_utilsOwnerDocument);
var _utilsAddEventListener = require('./utils/addEventListener');
var _utilsAddEventListener2 = _interopRequireDefault(_utilsAddEventListener);
var _utilsAddFocusListener = require('./utils/addFocusListener');
var _utilsAddFocusListener2 = _interopRequireDefault(_utilsAddFocusListener);
var _domHelpersUtilInDOM = require('dom-helpers/util/inDOM');
var _domHelpersUtilInDOM2 = _interopRequireDefault(_domHelpersUtilInDOM);
var _domHelpersActiveElement = require('dom-helpers/activeElement');
var _domHelpersActiveElement2 = _interopRequireDefault(_domHelpersActiveElement);
var _domHelpersQueryContains = require('dom-helpers/query/contains');
var _domHelpersQueryContains2 = _interopRequireDefault(_domHelpersQueryContains);
var _utilsGetContainer = require('./utils/getContainer');
var _utilsGetContainer2 = _interopRequireDefault(_utilsGetContainer);
var modalManager = new _ModalManager2['default']();
var Modal = _react2['default'].createClass({
  displayName: 'Modal',
  propTypes: _extends({}, _Portal2['default'].propTypes, {
    container: _react2['default'].PropTypes.oneOfType([_reactPropTypesLibMountable2['default'], _react2['default'].PropTypes.func]),
    onShow: _react2['default'].PropTypes.func,
    onHide: _react2['default'].PropTypes.func,
    backdrop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['static'])]),
    onEscapeKeyUp: _react2['default'].PropTypes.func,
    onBackdropClick: _react2['default'].PropTypes.func,
    backdropStyle: _react2['default'].PropTypes.object,
    backdropClassName: _react2['default'].PropTypes.string,
    containerClassName: _react2['default'].PropTypes.string,
    keyboard: _react2['default'].PropTypes.bool,
    transition: _reactPropTypesLibElementType2['default'],
    dialogTransitionTimeout: _react2['default'].PropTypes.number,
    backdropTransitionTimeout: _react2['default'].PropTypes.number,
    autoFocus: _react2['default'].PropTypes.bool,
    enforceFocus: _react2['default'].PropTypes.bool
  }),
  getDefaultProps: function getDefaultProps() {
    var noop = function noop() {};
    return {
      show: false,
      backdrop: true,
      keyboard: true,
      autoFocus: true,
      enforceFocus: true,
      onHide: noop
    };
  },
  getInitialState: function getInitialState() {
    return {exited: !this.props.show};
  },
  render: function render() {
    var _this = this;
    var _props = this.props;
    var children = _props.children;
    var Transition = _props.transition;
    var backdrop = _props.backdrop;
    var dialogTransitionTimeout = _props.dialogTransitionTimeout;
    var props = _objectWithoutProperties(_props, ['children', 'transition', 'backdrop', 'dialogTransitionTimeout']);
    var onExit = props.onExit;
    var onExiting = props.onExiting;
    var onEnter = props.onEnter;
    var onEntering = props.onEntering;
    var onEntered = props.onEntered;
    var show = !!props.show;
    var dialog = _react2['default'].Children.only(this.props.children);
    var setMountNode = function setMountNode(ref) {
      return _this.mountNode = !ref || ref.getMountNode();
    };
    var mountModal = show || Transition && !this.state.exited;
    if (!mountModal) {
      return null;
    }
    var _dialog$props = dialog.props;
    var role = _dialog$props.role;
    var tabIndex = _dialog$props.tabIndex;
    if (role === undefined || tabIndex === undefined) {
      dialog = _react.cloneElement(dialog, {
        role: role === undefined ? 'document' : role,
        tabIndex: tabIndex == null ? '-1' : tabIndex
      });
    }
    if (Transition) {
      dialog = _react2['default'].createElement(Transition, {
        transitionAppear: true,
        unmountOnExit: true,
        'in': show,
        timeout: dialogTransitionTimeout,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, dialog);
    }
    return _react2['default'].createElement(_Portal2['default'], {
      ref: setMountNode,
      container: props.container
    }, _react2['default'].createElement('div', {
      ref: 'modal',
      role: props.role || 'dialog',
      style: props.style,
      className: props.className
    }, backdrop && this.renderBackdrop(), dialog));
  },
  renderBackdrop: function renderBackdrop() {
    var _props2 = this.props;
    var Transition = _props2.transition;
    var backdropTransitionTimeout = _props2.backdropTransitionTimeout;
    var backdrop = _react2['default'].createElement('div', {
      ref: 'backdrop',
      style: this.props.backdropStyle,
      className: this.props.backdropClassName,
      onClick: this.handleBackdropClick
    });
    if (Transition) {
      backdrop = _react2['default'].createElement(Transition, {
        transitionAppear: true,
        'in': this.props.show,
        timeout: backdropTransitionTimeout
      }, backdrop);
    }
    return backdrop;
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({exited: false});
    } else if (!nextProps.transition) {
      this.setState({exited: true});
    }
  },
  componentWillUpdate: function componentWillUpdate(nextProps) {
    if (nextProps.show) {
      this.checkForFocus();
    }
  },
  componentDidMount: function componentDidMount() {
    if (this.props.show) {
      this.onShow();
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var transition = this.props.transition;
    if (prevProps.show && !this.props.show && !transition) {
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    var _props3 = this.props;
    var show = _props3.show;
    var transition = _props3.transition;
    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  },
  onShow: function onShow() {
    var doc = _utilsOwnerDocument2['default'](this);
    var container = _utilsGetContainer2['default'](this.props.container, doc.body);
    modalManager.add(this, container, this.props.containerClassName);
    this._onDocumentKeyupListener = _utilsAddEventListener2['default'](doc, 'keyup', this.handleDocumentKeyUp);
    this._onFocusinListener = _utilsAddFocusListener2['default'](this.enforceFocus);
    this.focus();
  },
  onHide: function onHide() {
    modalManager.remove(this);
    this._onDocumentKeyupListener.remove();
    this._onFocusinListener.remove();
    this.restoreLastFocus();
  },
  handleHidden: function handleHidden() {
    this.setState({exited: true});
    this.onHide();
    if (this.props.onExited) {
      var _props4;
      (_props4 = this.props).onExited.apply(_props4, arguments);
    }
  },
  handleBackdropClick: function handleBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    if (this.props.onBackdropClick) {
      this.props.onBackdropClick(e);
    }
    if (this.props.backdrop === true) {
      this.props.onHide();
    }
  },
  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
    if (this.props.keyboard && e.keyCode === 27 && this.isTopModal()) {
      if (this.props.onEscapeKeyUp) {
        this.props.onEscapeKeyUp(e);
      }
      this.props.onHide();
    }
  },
  checkForFocus: function checkForFocus() {
    if (_domHelpersUtilInDOM2['default']) {
      this.lastFocus = _domHelpersActiveElement2['default']();
    }
  },
  focus: function focus() {
    var autoFocus = this.props.autoFocus;
    var modalContent = this.getDialogElement();
    var current = _domHelpersActiveElement2['default'](_utilsOwnerDocument2['default'](this));
    var focusInModal = current && _domHelpersQueryContains2['default'](modalContent, current);
    if (modalContent && autoFocus && !focusInModal) {
      this.lastFocus = current;
      if (!modalContent.hasAttribute('tabIndex')) {
        modalContent.setAttribute('tabIndex', -1);
        _warning2['default'](false, 'The modal content node does not accept focus. ' + 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
      }
      modalContent.focus();
    }
  },
  restoreLastFocus: function restoreLastFocus() {
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  },
  enforceFocus: function enforceFocus() {
    var enforceFocus = this.props.enforceFocus;
    if (!enforceFocus || !this.isMounted() || !this.isTopModal()) {
      return;
    }
    var active = _domHelpersActiveElement2['default'](_utilsOwnerDocument2['default'](this));
    var modal = this.getDialogElement();
    if (modal && modal !== active && !_domHelpersQueryContains2['default'](modal, active)) {
      modal.focus();
    }
  },
  getDialogElement: function getDialogElement() {
    var node = this.refs.modal;
    return node && node.lastChild;
  },
  isTopModal: function isTopModal() {
    return modalManager.isTopModal(this);
  }
});
Modal.manager = modalManager;
exports['default'] = Modal;
module.exports = exports['default'];
