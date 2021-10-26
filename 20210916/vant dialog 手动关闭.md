    <van-dialog v-model="dialogShow" title="请确认是否删除资产" :before-close="onBeforeClose" show-cancel-button @confirm="delConfirm">
      <van-cell-group>
        <van-field v-model="delReason" placeholder="请输入删除原因" />
      </van-cell-group>
    </van-dialog>

    onBeforeClose(action, done) {
      if (action === "confirm") {
        return done(false);
      } else {
        return done();
      }
    },
    delConfirm(){
      let _this = this
      if(_this.delReason === ''){
        Toast("请输入删除原因");
        _this.delReason = ''
        _this.dialogShow = true
      }else{
        console.log(wangzhanRemove)
        http
          .get(wangzhanRemove, {
            id: _this.delId,
            delReason: _this.delReason
          })
          .then((res) => {
            console.log("wangzhanRemove", res);
            if (res.code == 200) {
              Toast.success("删除成功");
              _this.listData = [];
              _this.CurrentPage = 1;
              _this.wangzhanList();
              _this.selectwangzhanZc();
              _this.delReason = ''
              _this.dialogShow = false
            } else {
              Toast(res.msg);
            }
          });
      }

    },