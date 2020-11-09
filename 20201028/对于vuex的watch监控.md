import {mapMutations,mapGetters,mapState} from 'vuex'
export default{
	computed:{
		...mapState({
			book: 'book'
		}),
		...mapGetter({
			getBook,'getBook'
		})
	},
	//两者监控方式不同
	watch:{
		'$store.state.book':function(newVal,oldVal){
		},
		getBook:function(newVal,oldVal){
		}
	}
}