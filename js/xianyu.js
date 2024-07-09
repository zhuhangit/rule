let url = $request.url;
let accept = $request.Accept || '';

var body = $response.body;
let headers = $response.headers;

if (accept.indexOf('text/html')>-1) {
  if(url.indexOf('reminderUrl')>-1){
    const sz = url.split(/?|&|=/);
    const reminderUrl = sz[sz.indexOf("reminderUrl")+1];
    //系统通知
    notify('闲鱼','解除限制','点击打开链接',reminderUrl);
  }
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
