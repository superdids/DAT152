var myMembers = (function() {
	return {
		members: [],
		storeMembers: function(arg) {
			this.members = arg;
		},
		getMemberById: function(id) {
			var toRet = null;
			for(var x = 0; x < this.members.length; x++) {
				if(this.members[x].memberId == id) {
					toRet = this.members[x];
					break;
				}
			}
			return toRet;
		}
	};
})();


//<table id="asdas">

//<tr id="m1"+id>
