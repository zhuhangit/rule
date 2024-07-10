let url = $request.url;
let accept = $request.Accept || '';

var body = $response.body;
let headers = $response.headers;

if (body && body.indexOf("expiredTime") > -1) {
    const bodyJson = JSON.parse(body);
    //+1
    // "giftRemainCount":2,"giftIsExpired":1
    bodyJson.expiredTime = 1720799999000;
    bodyJson.giftIsExpired = 2;
    body = JSON.stringify(bodyJson);
    // 定义响应头
    headers['Content-Security-Policy'] = '*';
    $done({headers: headers, body: body, url: url});
}
$done({headers: headers, body: body, url: url});