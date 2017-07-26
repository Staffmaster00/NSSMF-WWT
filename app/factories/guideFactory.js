'use strict';

travelApp.factory('GuideFactory', function($q, $http) {
    let getGuides = () => {
        console.log("getGuides called");
        return $q( (resolve, reject) => {
            $http.get('./data/guides.json')
                .then( (guides) => {
                    resolve(guides);
                })
                .catch( (err) => {
                    reject(err);
                });
        });
    };

    return {getGuides};
});