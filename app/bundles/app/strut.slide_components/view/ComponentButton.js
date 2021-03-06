define(['libs/backbone'],
function(Backbone) {
	'use strict';
	return Backbone.View.extend({
		className: 'btn btn-plast',
		tagName: 'a',

		events: {
			'click': '_clicked'
		},

		initialize: function() {
			this.$el.attr('data-compType', this.options.componentType);
		},

		_clicked: function() {
			this.options.editorModel.addComponent(this.options.componentType);
		},

		render: function() {
			this.$el.html('<i class="' + this.options.icon + ' icon-white"></i>' + this.options.name);
			return this;
		},

		constructor: function ComponentButton() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
	});
});