var app = angular.module('flapperNews', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});
	$urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function() {
	var o = {
		posts: []
	};
	return o;
}])

app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
    // Default list of posts
	$scope.posts = posts.posts;

    // Add a new post to the list of posts
    $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') {
			return;
		}
		$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
		$scope.title = '';
		$scope.link = '';
    };

    // Upvote a post
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
    };
}]);
