setup 处于beforeCreate、created
[vue3.0中setup使用(两种用法)](https://www.jb51.net/article/201199.htm)
```
<template>
 <div id="app">
  {{name}}
  <p>{{age}}</p>
  <button @click="plusOne()">+</button>
 </div>
</template>
  
<script>
import {ref} from 'vue'
export default {
 name:'app',
 data(){
  return {
   name:'xiaosan'
  }
 },
 setup(){
  const name =ref('小四')
  const age=ref(18)
  function plusOne(){
   age.value++ //想改变值或获取值 必须.value
  }
  return { //必须返回 模板中才能使用
   name,age,plusOne
  }
 }
}
</script>
```


```
import { ref, watch } from 'vue'
const counter = ref(0)
watch(counter,(newValue, oldValue) => {
  console.log('The new counter value is: ' + counter.value)
})
```
等价于
```
export default {
  data() {
    return {
      counter: 0
    }
  },
  watch: {
    counter(newValue, oldValue){
      console.log('The new counter value is: ' + this.counter)
    }
  }
  <!-- 监听两个 -->
  watch([myBrand, site],([currentB, preB],[currentS, preS]) => {
    console.log("现在的值"+currentS+"之前的值"+preS)
  },{})
}
```
将第一个参数设置成数组，这个数组的每一项都会被监听到。

```
import { featchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch, toRefs } from 'vue'
setup(props){
  const { user } = toRefs(props)
  const repositories = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value)
  }
  onMounted(getUserRepositories)
  watch(user, getUserRepositories)
  return {
    repositories,
    getUserRepositories
  }
}

```

import { ref, computed } from 'vue'
const counter = ref(0)
const twiceTheCounter = computed(() => counter.value * 2)

counter.value++
console.log(counter.value)
console.log(twiceTheCounter.value)





import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch, toRefs, computed } from 'vue'

setup(props){
  const { user } = toRefs(props)
  const repositories = ref([])

  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value)
  }
  onMounted(getUserRepositories)
  watch(user, getUserRepositories)

  const searchQuery = ref('')
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter(
      repository => repository.name.includes(searchQuery.value)
    )
  })
  return {
    repositories,
    getUserRepositories,
    searchQuery,
    repositoriesMatchingSearQuery
  }
}







import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user){
  const repositories = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value)
  }
  onMounted(getUserRepositories)
  watch(user, getUserRepositories)
  return {
    repositories,
    getUserRepositories
  }
}


import { ref, computed } from 'vue'
export default function useRepositoryNameSearch(repositories) {
  const searchQuery = ref('')
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter(repository => {
      return repository.name.inclueds(searchQuery.value)
    })
  })
  return {
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}


import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import { toRefs } from 'vue'

export dafault {
  components: {
    RepositoriesFilters,
    RepositoriesSortBy,
    RepositoriesList
  },
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props){
    const { user } = toRefs(props)
    const { repositories, getUserRepositories } = useUserRepositories(user)

    const {
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories)
    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery
    }
  },
  data() {
    return {
      filter: {}
    }
  },
  computed: {
    filteredRepositories(){}
  }
}



// context (attribute, 插槽, 事件)
export default {
  setup(props, context) {
    // Attribute
    console.log(context.attrs)
    // 插槽
    console.log(context.slots)
    // 触发事件
    console.log(context.emit)
  }
}


// 渲染函数
import { h, ref, reactive } from 'vue'
export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    return () => h('div', [readersNumber.value, book.title])
  }
}



<template>
  <MyMarker />
</template>
<script>
  import { provide } from 'vue'
  import MyMarker from './MyMarker.vue'

  export default {
    components: {
      MyMarker
    },
    setup(){
      provide('location','North Pole')
      provide('getlocation', {
        longitude: 90,
        latitude: 135
      })
    }
  }
</script>


<script>
import { inject } from 'vue'
export default {
  setup() {
    const userLocation = inject('location', 'The Universe')
    const userGeolocation = inject('geolocation')
    return {
      userLocation,
      userGeoLocation
    }
  }
}
</script>