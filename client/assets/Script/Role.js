/**
 * Created by bot.su on 2017/5/1.
 * ��Ϸ��ɫ��
 */
var UserInfo = require("UserInfo");
var CukeSpine = require("CukeSpine");


cc.Class({
    extends: cc.Component,
    properties: {},


    //��ʼ����ɫ
    init: function (data) {
        this._data=data;


        var node = new cc.Node();
        this._spine = node.addComponent(CukeSpine);
        this._spine.init("spine/spineboy");
        this._spine.setAnimation(0,"walk",true);
        this._spine.setMixEx('walk','run',0.2);
        this.node.addChild(node);
    },


    //����location
    setLocation:function(x,y){
        this._data={x:UserInfo._x,y:UserInfo._y};
    }
});
