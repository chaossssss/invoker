fatal: unable to access 'https://github.com/.../.git': Could not resolve host: github.com



执行下面2条
git config --global --unset http.proxy 
git config --global --unset https.proxy