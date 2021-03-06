// TODO: get rid of these.  Context buttons should be added
// based on available capabilities...
define(['./AddSlideButton', 'lang'],
function(AddSlideButton, lang) {
	'use strict';

	function NewSlideMenuItem(editorModel) {
		this.$el = $('<li><a data-option="addSlide">' + lang.add_slide + '</a></li>');
		this.$el.click(function() {
			editorModel.addSlide();
		});
	}

	NewSlideMenuItem.prototype.render = function() {
		return this;
	};

	var service = {
		createButtons: function(editorModel, wellMenuModel) {
			var result = [];

			result.push(new AddSlideButton(editorModel, wellMenuModel));

			return result;
		},

		createMenuItems: function(editorModel) {
			return [new NewSlideMenuItem(editorModel)];
		}
	};

	return {
		initialize: function(registry) {
			registry.register({
				interfaces: ['strut.WellContextButtonProvider', 'strut.LogoMenuItemProvider']
			}, service);
		}
	}
});
