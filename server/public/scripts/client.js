console.log('js sourced!');

var app = angular.module('pictureApp', []);

app.controller('PictureController', ['$http', function ($http) {
    console.log('PictureController loaded!');

    const self = this;

    self.click = 0;

    //increase vote by 1
    self.count = function (image) {
        console.log('count clicked');
        
        console.log(image.image.click);

        image.image.click += 1; //change 1st image variable to another word
        // self.click += 1;
        // return self.click;
        // return image.click;
    }

    // image data
    self.images = [{
            path: 'images/sara_darren_deke_wedding.jpg',
            synopsis: "My wonderful Wife Sara and I",
            click: 0
        },
        {
            path: 'images/darren_iguana_shoulder.jpg',
            synopsis: "Charlie the Iguana",
            note: "aka 'Chucky Scales'",
            click: 0
        },
        {
            path: "images/stevie_couch.jpg",
            synopsis: "The little one - Stevie",
            click: 0
        },
        {
            path: "images/erik_walleye_sakakawea.jpg",
            synopsis: "Walleye fishing Lake Sakakawea, ND",
            click: 0
        },
        {
            path: "images/darren_brayden.jpg",
            synopsis: "My nephew Brayden",
            click: 0
        },
        {
            path: "images/cooper_closeup_bw.jpg",
            synopsis: "The fluff ball - Cooper",
            click: 0
        },
        {
            path: "images/darren_fishing_yawkey_tube.jpg",
            synopsis: "Fly fishing",
            click: 0
        },
        {
            path: "images/planes_on_ice.jpg",
            synopsis: "Too funny!",
            click: 0
        },
        {
            path: "images/stevie1.jpg",
            synopsis: "My little lady!",
            click: 0
        }
    ]

    // self.click = 0;

    // //increase vote by 1
    // self.count = function () {
    //     console.log('count clicked');

    //     self.click += 1;
    //     return self.click;
    // }
}]);

// controller for vote count on like button
app.controller('VoteControllerUp', ['$http', function ($http) {
    console.log('VoteControllerUp loaded!');
    const self = this;

    self.vote = 0;

    //increase vote by 1
    self.voteUp = function () {
        console.log('up vote clicked');

        self.vote += 1;
        return self.vote;
    }
}]);

// controller for vote count on dislike button
app.controller('VoteControllerDown', ['$http', function ($http) {
    console.log('VoteControllerDown loaded!');


    const self = this; //setting self

    self.down_vote = 0;

    //increase vote by 1
    self.voteDown = function () {
        console.log('down vote clicked');
        self.down_vote += 1;
        return self.down_vote;
    }
}]);

// controller for comment show/hide
app.controller('CommentController', ['$http', function ($http) {
    console.log('CommentController loaded!');

    const self = this; //setting self

    self.comment = [];

    //increase vote by 1
    self.submitComment = function () {
        console.log('comment controller loaded');
        self.comment += 1;
        return self.comment;
    }
}]);

