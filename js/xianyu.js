let url = $request.url;
let accept = $request.Accept || '';

let body = $response.body;
let headers = $response.headers;
//notify('debug','$request',JSON.stringify($request),'');
//notify('debug','url',url,'');
//console.log(url);
if (url.indexOf('reminderUrl') > -1) {
    const sz = url.split(/\?|&|=/g);
    let reminderUrl = sz[sz.indexOf("reminderUrl") + 1];
    reminderUrl = decodeURIComponent(reminderUrl);
    //1.0 系统通知
    notify('闲鱼', '', '点击打开链接', reminderUrl);

    //2.0 302
    let redirect = {
        status: '302',
        headers: {
            Location: reminderUrl,
        },
    };
    console.log(body);
    // redirect.body = body;
    $done(redirect);
}
$done({headers: headers, body: body, url: url});

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
