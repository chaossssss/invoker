// 第一种 >>>
.my-el-form-item{
     & >>> .el-form-item__content{
          line-height:12px;   
     }
}
 //第二种 /deep/
.my-el-form-item{
      /deep/ .el-form-item__content{
          line-height:12px;   
     }
}
// 第三种::v-deep 和第二种类似
.my-el-form-item{
     ::v-deep .el-form-item__content{
          line-height:12px;   
     }
}