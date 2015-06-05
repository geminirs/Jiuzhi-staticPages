angular.module('users', ['ionic'])

.controller('userCtrl', function($scope, $stateParams){
	$scope.users = [{
		name: 'enno',
		fullname: 'Enno Zhong',
		email: 'enno.zhong@software.dell.com'
	}, {
		name: 'katherine',
		fullname: 'Katherine Mao',
		email: 'katherine.mao@software.dell.com'
	}, {
		name: 'suying',
		fullname: 'Suying Wu',
		email: 'suying.wu@software.dell.com'
	}, {
		name: 'wedy',
		fullname: 'Wedy Yu',
		email: 'wedy.yu@software.dell.com'
	}]

	//$stateParams.userName = userName;
});
