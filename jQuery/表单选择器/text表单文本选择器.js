/*

*/
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>:text表单选择器</title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js" type="text/javascript"></script>
</head>
<body>
    <h3>修改多个单行输入框元素的背景色</h3>
    <form id="frmTest" action="#">
    <input type="text" id="Text1" value="我是小纸条"/><br />
    <textarea rows="3" cols="8"></textarea><br />
    <input type="text" id="Text2" value="我也是小纸条"/><br />
    <button>
        Button</button><br />
    </form>
</body>
<script type="text/javascript">
    $("#frmTest :text").addClass("bg_red");
</script>
</html>
