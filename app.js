var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    // Default list of posts
    $scope.posts = [
		{title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ];

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