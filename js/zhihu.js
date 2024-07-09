$done({ headers: $request.headers, body: body, url: url });
// 定义 全局CSS/JS 用于移除网页上的广告元素、禁止点击弹窗广告等
var regex = '</body>';
var replace_str = '<link rel="stylesheet" href="https://raw.githubusercontent.com/zhuhangit/rule/master/css/zhihu.css" type="text/css" />\
  </body>\
  ';

let url = $request.url;
var url_target_regex = /(\/api\/|\.[a-zA-z0-9]+$)/g;

var url_target = url.match(url_target_regex);
if ($response.body) {  // 判断响应体是否存在
    if (url_target) {  // 判断该URL是否匹配目标
        $done({ headers: $request.headers, body: body, url: url });
    } else {
        var body = $response.body.replaceAll('</BODY>', '</body>').replaceAll(regex, replace_str); 
    }
    // 定义响应头
    let headers = $response.headers;
    headers['Content-Security-Policy'] = '*';
    $done({ headers: headers, body: body, url: url });
}
