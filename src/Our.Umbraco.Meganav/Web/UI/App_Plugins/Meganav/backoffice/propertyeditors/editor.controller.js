﻿(function () {

    "use strict";

    angular.module("umbraco")
        .controller("Our.Umbraco.Meganav.PropertyEditors.EditorController",
            function ($scope, editorService) {

                var vm = this;

                vm.items = $scope.model.value || [];

                vm.maxItems = $scope.model.config.maxItems;

                vm.treeOptions = {};

                vm.addItem = function () {
                    var item = createItem();
                    openSettings(item, function () {
                        items.push(model.value);
                    });
                };

                vm.editItem = function (item) {
                    openSettings(item, function (model) {
                        angular.extend(item, model.value);
                    });
                };

                vm.$onInit = function () {
                    $scope.$on("formSubmitting", () => {
                        $scope.model.value = vm.items;
                    });
                };

                function openSettings(item, callback) {
                    editorService.open({
                        value: angular.copy(item),
                        view: "/App_Plugins/Meganav/backoffice/dialogs/settingsDialog.html",
                        size: "small",
                        submit: function (model) {
                            if (callback) {
                                callback(model);
                            }
                            editorService.close();
                        },
                        close: function () {
                            editorService.close();
                        }
                    });
                }

                function createItem(item = {}) {
                    return {
                        name: item.name,
                        title: item.title,
                        url: item.url,
                        target: item.target,
                        icon: item.icon,
                        udi: item.udi,
                        visible: item.visible || true,
                        published: item.published || true,
                        settings: item.settings || {},
                        children: item.children || []
                    };
                }

            });

    app.requires.push("ui.tree");

})();