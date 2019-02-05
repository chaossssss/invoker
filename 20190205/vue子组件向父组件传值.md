vue教程案例
向父组件传值方法一：
<div :style="{fontSize: postFontSize + 'em'}">
  <BlogPost
    v-for="post in posts"
    v-bind:key="post.id"
    v-bind:post="post"
    v-on:enlarge-text="postFontSize += 0.1"
  ></BlogPost>
</div>
子组件：
<div class="blog-post">
  <h3>{{ post.title }}</h3>
  <button v-on:click="$emit('enlarge-text')">
    Enlarge text
  </button>
  <div v-html="post.content"></div>
</div>

向父组件传值方法二：(传递一个值)
<div :style="{fontSize: postFontSize2 + 'em'}">
  <BlogPost2
    v-for="post in posts"
    v-bind:key="post.id"
    v-bind:post="post"
    v-on:enlarge-text="postFontSize2 += $event"
  ></BlogPost2>
</div>
子组件：
<div class="blog-post">
  <h3>{{ post.title }}</h3>
  <button v-on:click="$emit('enlarge-text', 0.1)">
    Enlarge text
  </button>
  <div v-html="post.content"></div>
</div>
向父组件触发事件方法三：
<div :style="{fontSize: postFontSize3 + 'em'}">
  <BlogPost2
    v-for="post in posts"
    v-bind:key="post.id"
    v-bind:post="post"
    v-on:enlarge-text="onEnlargeText"
  ></BlogPost2>
</div>
onEnlargeText: function (enlargeAmount) {
  this.postFontSize3 += enlargeAmount
}
子组件：
<div class="blog-post">
  <h3>{{ post.title }}</h3>
  <button v-on:click="$emit('enlarge-text', 0.1)">
    Enlarge text
  </button>
  <div v-html="post.content"></div>
</div>