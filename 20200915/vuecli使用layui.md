1.
main.js
Vue.prototype.$layui = window.layui
_this.$layui.use(["form", "layedit", "laydate"], function () {
          var form = _this.$layui.form,
            layer = _this.$layui.layer,
            layedit = _this.$layui.layedit,
            laydate = _this.$layui.laydate;

          //日期
          laydate.render({
            elem: "#startDate",
          });
          //日期
          laydate.render({
            elem: "#endDate",
          });
        });

2.window.layui.use()