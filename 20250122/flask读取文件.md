[flask图片资源](https://blog.csdn.net/2202_75832991/article/details/140854648)


# 存放图片的文件夹的路径
IMAGE_FOLDER = r"E:\work\flask\uploads"


@bp.route("/upload/<filename>")
def serve_image(filename):
    # 检查文件是否存在以及是否是安全的文件名（防止路径遍历攻击）
    file_path = os.path.join(IMAGE_FOLDER, filename)
    if ".." in filename or not os.path.isfile(file_path):
        return "Error: File not found or invalid filename", 404
    # 返回图片文件
    return send_from_directory(IMAGE_FOLDER, filename)