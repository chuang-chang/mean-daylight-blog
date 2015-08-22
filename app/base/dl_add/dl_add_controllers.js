'use strict';

define(['angular','markeditor'/*,'validate'*/], function(angular,markeditor){
	// var editor = new UE.ui.Editor();
    return angular.module('dl_add.dl_add_controllers', ['base.service'])
	.controller('dladdctrl',['$rootScope','$scope','$http','$location','$window','$filter','$compile','Restful',
		function($rootScope,$scope,$http, $location, $window, $filter,$compile,Restful){
		$scope.$on("$viewContentLoaded",function(){
			$("#addsth .item").tab();
			$("#ismine").checkbox();
			$("#blogtags").dropdown();
			$("#blogtype").dropdown();
			$("#lifetype").dropdown();
			$("#lifesubtype").dropdown();
			$("#ismine").on('change',function(){
				$scope.$apply(function(){
					$scope.blog.ismine = !$scope.blog.ismine;
				})
			});
			$("#lifesubtype").on('change',function(){
				var v = $(this).val();
				$scope.$apply(function(){
					$scope.life.subtype = v;
				})
			});
			console.log("1")
			$("#add_wpreface").markdown({autofocus:true,savable:false,resize:'horizontal'});
			$("#add_wlife").markdown({autofocus:false,savable:false})
			// UE.delEditor("add_wpreface");
			// UE.getEditor("add_wpreface");
			// UE.getEditor("add_wlife");
			// UE.getEditor("add_wlife");
		});
		$scope.tags = function(e){
            var tagdom = $("#tags");
            if(e.keyCode == 32){
            	var val = $scope.tagstr;
                var a = $('<a class="ui label transition visible" data-value="'+val.split(" ")[0]+'">'+val.split(" ")[0]+'<i class="delete icon"></i></a>');
                tagdom.append(a);
                $scope.tagstr = "";
                $(e.target).css("padding-left",a[0].offsetWidth+50);
            }
            $scope.life.tags = [];
            tagdom.find("a.ui.label").each(function(){
            	$scope.life.tags.push($(this).attr("data-value"));
            })
        }
        $("#tags").delegate("a.ui.label .delete","click",function(){
        	var t = $(this).parent();
        	for(var i =0;i<$scope.life.tags.length;i++){
        		if(t.attr("data-value")==$scope.life.tags[i]){
        			$scope.life.tags.splice(i,1);
        			t.remove();
        			break;
        		}
        	}
        });
		$scope.restore = function(){
			$scope.blog = {ismine:true,type:'tech'};
			$scope.life = {subtype:'pic-word',type:'life'};
		};	
		$scope.restore();
		$scope.addblog = function(e){
			console.log($scope.blog)
			$scope.blog["tags"] = $(e.target).serializeObject().tags;
			$scope.blog["content"] = $(e.target).serializeObject().content;			
			$http.post("/api/tech",$scope.blog).success(function(data){
				$scope.restore();
			});
		}

		$scope.add_life = function(e){
			var datas =$(e.target).serializeObject();
			for(var d in datas){
				$scope.life[d] = datas[d];
			}
			// b["content"] = $(e.target).serializeObject().content;
			// console.log(b)
			$http.post("/api/tech",$scope.life).success(function(data){
				console.log(data)
			});
		}
    }])
});            