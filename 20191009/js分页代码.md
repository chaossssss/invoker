```
//pageNo当前页码
//totalPageNo 总页码
//methodNm调用方法
function getPageNavi(pageNo, totalPageNo, methodNm) {

    var navi = "";
    if (totalPageNo == 0) {
        return navi;
    }


    if (pageNo != 1 && pageNo != 0) {
        navi = "<a href='javascript:void(0);' onclick='" + methodNm + "(" + (pageNo - 1) + ")'>上一页</a>";
    }

    var startPage = pageNo - 3;
    if ((pageNo + 3) > totalPageNo) {
        startPage = totalPageNo - 6;
    }
    if (startPage <= 0) {
        startPage = 1;
    }

    if (startPage > 1) {
        navi = "<a href='javascript:void(0);' onclick='" + methodNm + "(1)'>1</a>" + navi;
    }

    var iPageCnt = 0;
    for (var index = startPage; index <= totalPageNo; index++) {
        iPageCnt++;
        if (pageNo == index) {
            navi += " <span class='current'>" + index + "</span>";
        } else {
            navi += "<a href='javascript:void(0);' onclick='" + methodNm + "(" + index + ")'>" + index + "</a>";
        }
        if (iPageCnt >= 7) {
            break;
        }
    }

    if (pageNo != totalPageNo) {
        navi += "<a href='javascript:void(0);' onclick='" + methodNm + "(" + (pageNo + 1) + ")'>下一页</a>";
    }

    if ((startPage + 7) <= totalPageNo) {
        navi += "<a href='javascript:void(0);' onclick='" + methodNm + "(" + totalPageNo + ")'>" + totalPageNo + "</a>";
    }

    return navi;
}

function getHuiPageNavi(pageNo, totalPageNo,totalCnt, methodNm) {

    $("#pageTotalCntID").text("共 " + totalCnt + " 条")

    var navi = "";
    if (totalPageNo == 0) {
        return navi;
    }


    if (pageNo != 1 && pageNo != 0) {
        navi = "<a  class='paginate_button previous disabled' href='javascript:void(0);' onclick='" + methodNm + "(" + (pageNo - 1) + ")'>上一页</a>";
    }

    var startPage = pageNo - 3;
    if ((pageNo + 3) > totalPageNo) {
        startPage = totalPageNo - 6;
    }
    if (startPage <= 0) {
        startPage = 1;
    }

    var iPageCnt = 0;
    for (var index = startPage; index <= totalPageNo; index++) {
        iPageCnt++;
        if (pageNo == index) {
            navi += "<span class='current_laypage'><em class=''></em><em>" + index + "</em></a></span>";
        } else {
            navi += "<a class='paginate_button' href='javascript:void(0);' onclick='" + methodNm + "(" + index + ")'>" + index + "</a>";
        }
        if (iPageCnt >= 7) {
            break;
        }
    }

    if (pageNo != totalPageNo) {
        navi += "<a class='paginate_next' href='javascript:void(0);' onclick='" + methodNm + "(" + (pageNo + 1) + ")'>下一页</a>";
    }

    if ((startPage + 7) <= totalPageNo) {
        navi += "<a class='paginate_button' href='javascript:void(0);' onclick='" + methodNm + "(" + totalPageNo + ")'>" + totalPageNo + "</a>";
    }

    return navi;
}



<span id="pageTotalCntID" class="layui-laypage-count"></span>
<div id="pageDiv" class="layui-box layui-laypage layui-laypage-default"></div>

var pageSize = 10;
currentPage = 1;


function pageFun(index) {
    currentPage = index;
    getList();  //获取列表
}

function getList() {
    if (<%=apiModel.Status %> == 1) {
    var markIndex;
    var data = getDataObject();
    $.ajax({
        type: "post",
        url: '<%=apiModel.ApiUrl %>',
        data: data,
        dataType: "json",
        beforeSend: function () {
        markIndex = myMask();
    },
    success: function (data) {
        console.log(data)
        myCloseMask(markIndex);
        if (data.code == "OK") {
            vue.items = data.data.ListData;

            var totalPages = parseInt(data.data.TotalPages);
            var totalCnt = parseInt(data.data.TotalCnt);
            currentPage = parseInt(data.data.CurrentPage);

            var pageHtml = getHuiPageNavi(currentPage, totalPages, totalCnt, "pageFun");
            $("#pageDiv").html(pageHtml);


        }
        else if (data.code == "ERROR") {
            myAlertError(data.context);
        }
        else if (data.code == "LOGIN") {
            top.location.href = "/admin/login.aspx";
        }
    },
    error: function () {
        myCloseMask(markIndex);
        myAlertError("获取失败");
    }
});

function getDataObject() {
    var data = {
        "currentPage": currentPage,
        "pageSize": pageSize,
    }
    return data;
}
```