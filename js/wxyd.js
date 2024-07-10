let url = $request.url;
let accept = $request.Accept || '';

var body = $response.body;
let headers = $response.headers;

//路由
//var url_target_regex = /(\/api\/|\.[a-zA-z0-9]+$)/g;
//var url_target = url.match(url_target_regex);

// 判断响应体是否存在
// 仅处理主页
if (body && body.expiredTime) {
    body.expiredTime = 1767196799000;
    // 定义响应头
    headers['Content-Security-Policy'] = '*';
    $done({ headers: headers, body: body, url: url });
}
$done({ headers: headers, body: body, url: url });