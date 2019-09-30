之前没做过多级表头的
```
<table class="layui-table">
  <colgroup>
    <col width="150">
    <col width="200">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th rowspan="2">区域</th>
      <th colspan="4">勤务管理</th>
      <th colspan="4">上报交办</th>
      <th rowspan="2">总勤务量</th>
      <th rowspan="2">总完成量</th>
      <th rowspan="2">总完成率</th>
      <th rowspan="2">总差错量</th>
      <th rowspan="2">总差错量</th>
    </tr> 
    <tr>
      <th>勤务量</th>
      <th>完成量</th>
      <th>未完成量</th>
      <th>完成率</th>
      <th>勤务量</th>
      <th>完成量</th>
      <th>未完成量</th>
      <th>完成率</th>
    </tr>
  </thead>
  <tbody>
    <tr v-if="d1 != ''">
      <td>{{d1}}</td>
      <td>{{d2}}</td>
      <td>{{d3}}</td>
      <td>{{d4}}</td>
      <td>{{d5}}</td>
      <td>{{d6}}</td>
      <td>{{d7}}</td>
      <td>{{d8}}</td>
   	  <td>{{d9}}</td>
   	  <td>{{d10}}</td>
   	  <td>{{d11}}</td>
   	  <td>{{d12}}</td>
   	  <td>{{d13}}</td>
   	  <td>{{d14}}</td>

    </tr>
  </tbody>
</table>
```