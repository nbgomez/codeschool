(function(){
	var app = angular.module('store',['store-products'] );

	app.controller('StoreController', ['$http', function($http){
		var store = this;
		
		this.products=[];
		
		$http.get('/products.json' ).success( function(data){
			store.products = data;			
		});
		
		//$http({method: 'Options', url:'path to resource.json' } );
		
	}]);

	app.controller('PanelController', function(){
		this.tab= 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		};
	});
	app.controller( 'ReviewController', function () {
		this.review = {};

		this.addReview = function ( product ){
			product.reviews.push( this.review );
      this.review = {};
		};
	});
	
	

	var gems= [
		{
			name:"dod",
			price:2.95,
			description:'...',
			canPurchase:true,
			soldOut:false,
			reviews: [
				{
					stars:5,
					body: "I love this product",
					author: "nbg@n.com"
				},
				{
					stars:1,
					body: "This product sucks",
					author: "nbg@n.com"
				}
			]
		},
		{
			name:"DOD",
			price:2.,
			description:'.......',
			canPurchase:true,
			soldOut:false,
			reviews: [
				{
					stars:4,
					body: "I love this product",
					author: "nbg@n.com"
				},
				{
					stars:2,
					body: "This product sucks",
					author: "nbg@n.com"
				}
			]
		}
	]

})();
