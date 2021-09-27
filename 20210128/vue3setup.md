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
}
```


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