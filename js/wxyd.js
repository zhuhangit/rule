let url = $request.url;
let accept = $request.Accept || '';

var body = $response.body;
let headers = $response.headers;

console.log(typeof(body));
console.log(body.expiredTime);
if (body && body.expiredTime) {
    body.expiredTime = 1767196799000;
    // 定义响应头
    headers['Content-Security-Policy'] = '*';
    $done({ headers: headers, body: body, url: url });
}
$done({ headers: headers, body: body, url: url });