/**
 * Created by bot.su on 2017/4/11.
 */


//var logger = require('pomelo-logger').getLogger('bearcat-treasures', 'ActionManagerService');
//var Queue = require('pomelo-collection').queue;

module.exports = {
    //opts : {},
    //limit : 10000,
    ////The map used to abort or cancel action, it's a two level map, first leven key is type, second leven is id
    //actionMap : {},
    ////The action queue, default size is 10000, all action in the action queue will excute in the FIFO order
    //actionQueue : new Queue(10000),
    //
    //
    ///**
    // * Add action
    // * @param {Object} action  The action to add, the order will be preserved
    // */
    //addAction : function(action) {
    //	if (action.singleton) {
    //		this.abortAction(action.type, action.id);
    //	}
    //
    //	this.actionMap[action.type] = this.actionMap[action.type] || {};
    //
    //	this.actionMap[action.type][action.id] = action;
    //
    //	return this.actionQueue.push(action);
    //},
    //
    ///**
    // * abort an action, the action will be canceled and not excute
    // * @param {String} type Given type of the action
    // * @param {String} id The action id
    // */
    //abortAction : function(type, id) {
    //	if (!this.actionMap[type] || !this.actionMap[type][id]) {
    //		return;
    //	}
    //
    //	this.actionMap[type][id].aborted = true;
    //	delete this.actionMap[type][id];
    //},
    //
    ///**
    // * Abort all action by given id, it will find all action type
    // */
    //abortAllAction : function(id) {
    //	for (var type in this.actionMap) {
    //		if (!!this.actionMap[type][id])
    //			this.actionMap[type][id].aborted = true;
    //	}
    //},
    //
    ///**
    // * Update all action
    // * @api public
    // */
    //update : function() {
    //	var length = this.actionQueue.length;
    //
    //	for (var i = 0; i < length; i++) {
    //		var action = this.actionQueue.pop();
    //
    //		if (action.aborted) {
    //			continue;
    //		}
    //
    //		action.update();
    //		if (!action.finished) {
    //			this.actionQueue.push(action);
    //		} else {
    //			delete this.actionMap[action.type][action.id];
    //		}
    //	}
    //},
};
