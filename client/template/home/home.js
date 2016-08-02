import _ from 'lodash';
// let _ = require('lodash');

Template.home.events({
    'click .npmtest'(event, instance){
       let val=([4, 2, 8, 6]);

        alert(_.sum(val));

        let x="1234";
        alert(_.isString(x));
        
        let y="Yiman Kaing";
        alert(_.isString(x));
        // console.log(_.isNumber('hello'));

    }
});
