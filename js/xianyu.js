let url = $request.url;
let accept = $request.Accept || '';

let body = $response.body;
let headers = $response.headers;
//notify('debug','$request',JSON.stringify($request),'');
//notify('debug','url',url,'');
if (accept.indexOf('text/html')>-1) {
  if(url.indexOf('reminderUrl')>-1){
    console.log(url);
    console.log(url.split('&'));
    console.log(url.split(/\?|&|=/g));
    const sz = url.split(/\?|&|=/g);
    notify('debug','sz',JSON.stringify(sz),'');
    let reminderUrl = sz[sz.indexOf("reminderUrl")+1];
    notify('debug','reminderUrl',reminderUrl,'');
    reminderUrl = decodeURIComponent(reminderUrl);
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
