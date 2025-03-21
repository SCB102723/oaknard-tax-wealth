"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _alertRole = _interopRequireDefault(require("./literal/alertRole"));
var _alertdialogRole = _interopRequireDefault(require("./literal/alertdialogRole"));
var _applicationRole = _interopRequireDefault(require("./literal/applicationRole"));
var _articleRole = _interopRequireDefault(require("./literal/articleRole"));
var _bannerRole = _interopRequireDefault(require("./literal/bannerRole"));
var _blockquoteRole = _interopRequireDefault(require("./literal/blockquoteRole"));
var _buttonRole = _interopRequireDefault(require("./literal/buttonRole"));
var _captionRole = _interopRequireDefault(require("./literal/captionRole"));
var _cellRole = _interopRequireDefault(require("./literal/cellRole"));
var _checkboxRole = _interopRequireDefault(require("./literal/checkboxRole"));
var _codeRole = _interopRequireDefault(require("./literal/codeRole"));
var _columnheaderRole = _interopRequireDefault(require("./literal/columnheaderRole"));
var _comboboxRole = _interopRequireDefault(require("./literal/comboboxRole"));
var _complementaryRole = _interopRequireDefault(require("./literal/complementaryRole"));
var _contentinfoRole = _interopRequireDefault(require("./literal/contentinfoRole"));
var _definitionRole = _interopRequireDefault(require("./literal/definitionRole"));
var _deletionRole = _interopRequireDefault(require("./literal/deletionRole"));
var _dialogRole = _interopRequireDefault(require("./literal/dialogRole"));
var _directoryRole = _interopRequireDefault(require("./literal/directoryRole"));
var _documentRole = _interopRequireDefault(require("./literal/documentRole"));
var _emphasisRole = _interopRequireDefault(require("./literal/emphasisRole"));
var _feedRole = _interopRequireDefault(require("./literal/feedRole"));
var _figureRole = _interopRequireDefault(require("./literal/figureRole"));
var _formRole = _interopRequireDefault(require("./literal/formRole"));
var _genericRole = _interopRequireDefault(require("./literal/genericRole"));
var _gridRole = _interopRequireDefault(require("./literal/gridRole"));
var _gridcellRole = _interopRequireDefault(require("./literal/gridcellRole"));
var _groupRole = _interopRequireDefault(require("./literal/groupRole"));
var _headingRole = _interopRequireDefault(require("./literal/headingRole"));
var _imgRole = _interopRequireDefault(require("./literal/imgRole"));
var _insertionRole = _interopRequireDefault(require("./literal/insertionRole"));
var _linkRole = _interopRequireDefault(require("./literal/linkRole"));
var _listRole = _interopRequireDefault(require("./literal/listRole"));
var _listboxRole = _interopRequireDefault(require("./literal/listboxRole"));
var _listitemRole = _interopRequireDefault(require("./literal/listitemRole"));
var _logRole = _interopRequireDefault(require("./literal/logRole"));
var _mainRole = _interopRequireDefault(require("./literal/mainRole"));
var _markRole = _interopRequireDefault(require("./literal/markRole"));
var _marqueeRole = _interopRequireDefault(require("./literal/marqueeRole"));
var _mathRole = _interopRequireDefault(require("./literal/mathRole"));
var _menuRole = _interopRequireDefault(require("./literal/menuRole"));
var _menubarRole = _interopRequireDefault(require("./literal/menubarRole"));
var _menuitemRole = _interopRequireDefault(require("./literal/menuitemRole"));
var _menuitemcheckboxRole = _interopRequireDefault(require("./literal/menuitemcheckboxRole"));
var _menuitemradioRole = _interopRequireDefault(require("./literal/menuitemradioRole"));
var _meterRole = _interopRequireDefault(require("./literal/meterRole"));
var _navigationRole = _interopRequireDefault(require("./literal/navigationRole"));
var _noneRole = _interopRequireDefault(require("./literal/noneRole"));
var _noteRole = _interopRequireDefault(require("./literal/noteRole"));
var _optionRole = _interopRequireDefault(require("./literal/optionRole"));
var _paragraphRole = _interopRequireDefault(require("./literal/paragraphRole"));
var _presentationRole = _interopRequireDefault(require("./literal/presentationRole"));
var _progressbarRole = _interopRequireDefault(require("./literal/progressbarRole"));
var _radioRole = _interopRequireDefault(require("./literal/radioRole"));
var _radiogroupRole = _interopRequireDefault(require("./literal/radiogroupRole"));
var _regionRole = _interopRequireDefault(require("./literal/regionRole"));
var _rowRole = _interopRequireDefault(require("./literal/rowRole"));
var _rowgroupRole = _interopRequireDefault(require("./literal/rowgroupRole"));
var _rowheaderRole = _interopRequireDefault(require("./literal/rowheaderRole"));
var _scrollbarRole = _interopRequireDefault(require("./literal/scrollbarRole"));
var _searchRole = _interopRequireDefault(require("./literal/searchRole"));
var _searchboxRole = _interopRequireDefault(require("./literal/searchboxRole"));
var _separatorRole = _interopRequireDefault(require("./literal/separatorRole"));
var _sliderRole = _interopRequireDefault(require("./literal/sliderRole"));
var _spinbuttonRole = _interopRequireDefault(require("./literal/spinbuttonRole"));
var _statusRole = _interopRequireDefault(require("./literal/statusRole"));
var _strongRole = _interopRequireDefault(require("./literal/strongRole"));
var _subscriptRole = _interopRequireDefault(require("./literal/subscriptRole"));
var _superscriptRole = _interopRequireDefault(require("./literal/superscriptRole"));
var _switchRole = _interopRequireDefault(require("./literal/switchRole"));
var _tabRole = _interopRequireDefault(require("./literal/tabRole"));
var _tableRole = _interopRequireDefault(require("./literal/tableRole"));
var _tablistRole = _interopRequireDefault(require("./literal/tablistRole"));
var _tabpanelRole = _interopRequireDefault(require("./literal/tabpanelRole"));
var _termRole = _interopRequireDefault(require("./literal/termRole"));
var _textboxRole = _interopRequireDefault(require("./literal/textboxRole"));
var _timeRole = _interopRequireDefault(require("./literal/timeRole"));
var _timerRole = _interopRequireDefault(require("./literal/timerRole"));
var _toolbarRole = _interopRequireDefault(require("./literal/toolbarRole"));
var _tooltipRole = _interopRequireDefault(require("./literal/tooltipRole"));
var _treeRole = _interopRequireDefault(require("./literal/treeRole"));
var _treegridRole = _interopRequireDefault(require("./literal/treegridRole"));
var _treeitemRole = _interopRequireDefault(require("./literal/treeitemRole"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var ariaLiteralRoles = [['alert', _alertRole.default], ['alertdialog', _alertdialogRole.default], ['application', _applicationRole.default], ['article', _articleRole.default], ['banner', _bannerRole.default], ['blockquote', _blockquoteRole.default], ['button', _buttonRole.default], ['caption', _captionRole.default], ['cell', _cellRole.default], ['checkbox', _checkboxRole.default], ['code', _codeRole.default], ['columnheader', _columnheaderRole.default], ['combobox', _comboboxRole.default], ['complementary', _complementaryRole.default], ['contentinfo', _contentinfoRole.default], ['definition', _definitionRole.default], ['deletion', _deletionRole.default], ['dialog', _dialogRole.default], ['directory', _directoryRole.default], ['document', _documentRole.default], ['emphasis', _emphasisRole.default], ['feed', _feedRole.default], ['figure', _figureRole.default], ['form', _formRole.default], ['generic', _genericRole.default], ['grid', _gridRole.default], ['gridcell', _gridcellRole.default], ['group', _groupRole.default], ['heading', _headingRole.default], ['img', _imgRole.default], ['insertion', _insertionRole.default], ['link', _linkRole.default], ['list', _listRole.default], ['listbox', _listboxRole.default], ['listitem', _listitemRole.default], ['log', _logRole.default], ['main', _mainRole.default], ['mark', _markRole.default], ['marquee', _marqueeRole.default], ['math', _mathRole.default], ['menu', _menuRole.default], ['menubar', _menubarRole.default], ['menuitem', _menuitemRole.default], ['menuitemcheckbox', _menuitemcheckboxRole.default], ['menuitemradio', _menuitemradioRole.default], ['meter', _meterRole.default], ['navigation', _navigationRole.default], ['none', _noneRole.default], ['note', _noteRole.default], ['option', _optionRole.default], ['paragraph', _paragraphRole.default], ['presentation', _presentationRole.default], ['progressbar', _progressbarRole.default], ['radio', _radioRole.default], ['radiogroup', _radiogroupRole.default], ['region', _regionRole.default], ['row', _rowRole.default], ['rowgroup', _rowgroupRole.default], ['rowheader', _rowheaderRole.default], ['scrollbar', _scrollbarRole.default], ['search', _searchRole.default], ['searchbox', _searchboxRole.default], ['separator', _separatorRole.default], ['slider', _sliderRole.default], ['spinbutton', _spinbuttonRole.default], ['status', _statusRole.default], ['strong', _strongRole.default], ['subscript', _subscriptRole.default], ['superscript', _superscriptRole.default], ['switch', _switchRole.default], ['tab', _tabRole.default], ['table', _tableRole.default], ['tablist', _tablistRole.default], ['tabpanel', _tabpanelRole.default], ['term', _termRole.default], ['textbox', _textboxRole.default], ['time', _timeRole.default], ['timer', _timerRole.default], ['toolbar', _toolbarRole.default], ['tooltip', _tooltipRole.default], ['tree', _treeRole.default], ['treegrid', _treegridRole.default], ['treeitem', _treeitemRole.default]];
var _default = exports.default = ariaLiteralRoles;