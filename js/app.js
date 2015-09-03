(function(){ 
	var app = angular.module('store',[] );
	
	app.controller('StoreController', function(){
		this.products=gems;
	});
	
	app.controller('PanelController', function(){
		this.tab= 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		};
	});
	
	var gems= [
		{
			name:"dod",
			price:2.95,
			description:'...',
			canPurchase:true,
			soldOut:false
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