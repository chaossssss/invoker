app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  req.header('Content-Type', 'application/json;charset=utf-8');
  <!-- 加下面这条 -->
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.169.161:8080');
  next();
});
