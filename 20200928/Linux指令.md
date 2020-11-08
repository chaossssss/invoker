今天小菜鸡搞了搞服务器部署
最终自动化实现了
1.新建文件夹

mkdir 文件名

新建一个名为test的文件夹在home下

view source1 mkdir /home/test

2.新建文本

在home下新建一个test.sh脚本

 vi /home/test.sh

3.删除文件或文件夹

1、删除home目录下的test目录

 rm /home/test

2、这种不带参数的删除方法经常会提示无法删除，因为权限不够。

 rm -r /home/test

3、-r是递归的删除参数表中的目录及其子目录。 目录将被清空并且删除。 当删除目录包含的具有写保护的文件时用户通常是被提示的。

rm -rf /home/test
***
用了这个
-4、f是不提示用户，删除目录下的所有文件。请注意检查路径，输成别的目录就悲剧了。

 rm -ir /home/test

使用rm -rf 目录名字 命令即可

-r 就是向下递归，不管有多少级目录，一并删除
-f 就是直接强行删除，不作任何提示的意思
***
 

rm 不带参数 只能删除文件

rm test.txt



5、-i是交互模式。使用这个选项，rm命令在删除任何文件前提示用户确认。

4.移动文件或文件夹

mv [options] 源文件或目录 目标文件或目录

示例：

1、移动hscripts文件夹/目录下的所有文件，目录和子目录到tmp目录mv hscripts tmp
分析：在上述命令中，如果tmp目录已经存在，mv命令将移动hscripts文件夹/目录下的所有文件，目录和子目录到tmp目录。 如果没有tmp目录，它将重命名 hscripts目录为tmp目录。

2、移动多个文件/更多问价到另一目录
mv file1.txt tmp/file2.txt newdir
这个命令移动当前目录的file1.txt文件和tmp文件夹/目录的file2.txt文件到newdir目录。