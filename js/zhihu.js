// 定义 全局CSS/JS 用于移除网页上的广告元素、禁止点击弹窗广告等
var regex = '</body>';
var replace_str = '<link rel="stylesheet" href="https://raw.githubusercontent.com/zhuhangit/rule/master/css/zhihu.css" type="text/css" />\
  </body>\
  ';

let url = $request.url;
let accept = $request.Accept || '';

var body = $response.body;
let headers = $response.headers;

//路由
//var url_target_regex = /(\/api\/|\.[a-zA-z0-9]+$)/g;
//var url_target = url.match(url_target_regex);

// 判断响应体是否存在
// 仅处理主页
if ($response.body && accept.indexOf('text/html')>-1) {  
  body = body.replaceAll('</BODY>', '</body>').replaceAll(regex, replace_str); 
  // 定义响应头
  headers['Content-Security-Policy'] = '*';
  
  //系统通知
  //notify('执行成功','$request',JSON.stringify($request),'');
  //body = body.replace('</body>','<h1 style="position: fixed;z-index: 999;left: 0;top: 100px;background-color: #e3c949;width: 100%;height: 40px;line-height: 40px;text-align: center;color: red;letter-spacing: 10px;">512niubi</h1></body>');
  
  $done({ headers: headers, body: body, url: url });
}
$done({ headers: headers, body: body, url: url });

//系统通知
function notify(title = "", subtitle = "", content = "", open_url) {
      let opts = {};
      if (open_url) opts["open-url"] = open_url;
      if (JSON.stringify(opts) == "{}") {
          $notify(title, subtitle, content);
      } else {
          $notify(title, subtitle, content, opts);
      }
}
