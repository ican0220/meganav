﻿(function () {

    "use strict";

    angular.module("umbraco")
        .component("meganavPreview", {
            bindings: {
                item: "="
            },
            templateUrl: "/App_Plugins/Meganav/backoffice/components/meganavPreview.html",
            controllerAs: "vm"
        });

})();