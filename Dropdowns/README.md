# Dropdowns

## 前言
下拉菜单，一般为鼠标划过和点击下拉菜单。划过下拉菜单一般采用CSS样式即可，点击下拉菜单采用JavaScript实现

## HTML结构
下拉菜单可以采用`div`或`ul`结构来显示

## CSS结构
下拉菜单开始是`display:none`，当划过`:hover`时`display`改为`block`。

## JavaScript
如果实现点击下拉菜单，则需要添加JavaScript语法。

```javascript
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
```