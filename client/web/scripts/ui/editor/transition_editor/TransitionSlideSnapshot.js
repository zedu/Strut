// Generated by CoffeeScript 1.2.1-pre
/*
@author Matt Crinklaw-Vogt
*/

define(["../components/ThreeDRotableComponentView", "../Templates", "../raster/SlideDrawer", "css!../res/css/TransitionSlideSnapshot.css"], function(ThreeDComponentView, Templates, SlideDrawer, empty) {
  return ThreeDComponentView.extend({
    className: "component transitionSlideSnapshot",
    events: function() {
      var parentEvents;
      parentEvents = ThreeDComponentView.prototype.events();
      return _.extend(parentEvents, {
        "click": "clicked"
      });
    },
    initialize: function() {
      return ThreeDComponentView.prototype.initialize.apply(this, arguments);
    },
    remove: function() {
      ThreeDComponentView.prototype.remove.call(this, true);
      if (this.slideDrawer != null) this.slideDrawer.dispose();
      return this.model.set("selected", false);
    },
    clicked: function() {
      ThreeDComponentView.prototype.clicked.apply(this, arguments);
      return this.model.set("active", true);
    },
    render: function() {
      var g2d,
        _this = this;
      ThreeDComponentView.prototype.render.apply(this, arguments);
      if (this.slideDrawer != null) this.slideDrawer.dispose();
      g2d = this.$el.find("canvas")[0].getContext("2d");
      this.slideDrawer = new SlideDrawer(this.model, g2d);
      this.slideDrawer.repaint();
      this.$el.css({
        left: this.model.get("x"),
        top: this.model.get("y")
      });
      this.$el.find(".smartspinner[data-name='depth']").spinit({
        callback: function(val) {
          return _this.model.set("z", -val);
        },
        mask: "Depth",
        height: 22,
        width: 45,
        min: -9000,
        max: 9000,
        stepInc: 125,
        initValue: this.model.get("z")
      });
      this.$el.find(".smartspinner[data-name='scale']").spinit({
        callback: function(val) {
          return _this.model.set("impScale", val);
        },
        mask: "Scale",
        min: 1,
        max: 10,
        height: 22,
        width: 45,
        initValue: this.model.get("impScale")
      });
      return this.$el;
    },
    __getTemplate: function() {
      return Templates.TransitionSlideSnapshot;
    },
    constructor: function TransitionSlideSnapshot() {
			ThreeDComponentView.prototype.constructor.apply(this, arguments);
		}
  });
});