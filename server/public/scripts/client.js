console.log('js sourced!');

var app = angular.module('pictureApp', []);

app.controller('PictureController', ['$http', function ($http) {
    const self = this;

    self.click = 0;

    self.count = function(image) {
        console.log(self.count);
        
        image.image.click +=1;
    }

    // image data
    self.images = [{
            path: 'images/sara_darren_deke_wedding.jpg',
            synopsis: "My wonderful Wife Sara and I"
        },
        {
            path: 'images/darren_iguana_shoulder.jpg',
            synopsis: "Charlie the Iguana",
            note: "aka 'Chucky Scales'"
        },
        {
            path: "images/stevie_couch.jpg",
            synopsis: "The little one - Stevie"
        },
        {
            path: "images/erik_walleye_sakakawea.jpg",
            synopsis: "Walleye fishing Lake Sakakawea, ND"
        },
        {
            path: "images/darren_brayden.jpg",
            synopsis: "My nephew Brayden"
        },
        {
            path: "images/cooper_closeup_bw.jpg",
            synopsis: "The fluff ball - Cooper"
        },
        {
            path: "images/darren_fishing_yawkey_tube.jpg",
            synopsis: "Fly fishing"
        },
        {
            path: "images/planes_on_ice.jpg",
            synopsis: "Too funny!"
        },
        {
            path: "images/stevie1.jpg",
            synopsis: "My little lady!"
        }
    ]
}]);

app.controller('VoteControllerUp', ['$http', function ($http) {
    const self = this;

    self.vote = 0;

    //increase vote by 1
    self.voteUp = function () {
        self.vote += 1;
        return self.vote;
    }
}]);

app.controller('VoteControllerDown', ['$http', function ($http) {
    const self = this;

    self.down_vote = 0;

    //increase vote by 1
    self.voteDown = function () {
        self.down_vote += 1;
        return self.down_vote;
    }
}]);