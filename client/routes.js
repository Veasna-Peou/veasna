FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'home'});
    }
    });
FlowRouter.route('/about', {
    name: 'about',
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'about'});
    }
});
FlowRouter.route('/contact', {
    name: 'contact',
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'contact'});
    }
});
FlowRouter.route('/staff', {
    name: 'staff',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staff'});
    }
});

FlowRouter.route('/staffInsert', {
    name: 'staffInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staffInsert'});
    }
});

FlowRouter.route('/staffUpdate/:id', {
    name: 'staffUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staffUpdate'});
    },
});
// Item
FlowRouter.route('/item', {
    name: 'item',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'item'});
    }
});
//Insert
FlowRouter.route('/itemInsert', {
    name: 'itemInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'itemInsert'});
    }
});
//Update
FlowRouter.route('/itemUpdate/:id', {
    name: 'itemUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'itemUpdate'});
    }
});

// Manager
FlowRouter.route('/manager', {
    name: 'manager',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'manager'});
    }
});
//Insert
FlowRouter.route('/managerInsert', {
    name: 'managerInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'managerInsert'});
    }
});
//Update
FlowRouter.route('/managerUpdate/:id', {
    name: 'managerUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'managerUpdate'});
    }
});