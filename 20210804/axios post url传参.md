axios.post(`http://localhost:8080/case`, {
    "id": "aaa"
  }, {
    params: {
      "name": "markix"
    }
  })
  .then(function (resp) {
    console.log("response", resp.data);
  }, (err) => {
    console.log(err);
  });
请求url：http://localhost:8080/case?name=markix
请求体：{“id”: “aaa”}