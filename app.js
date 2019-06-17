a=1
b=1
--程序启动时会执行的事件
webView.onLongClick=function()
  hitTestResult = webView.getHitTestResult()
  if (hitTestResult.getType() == WebView.HitTestResult.IMAGE_TYPE or hitTestResult.getType() == WebView.HitTestResult.SRC_IMAGE_ANCHOR_TYPE)then

    AboutLayout={
      LinearLayout;
      orientation="vertical";
      Focusable=true,
      FocusableInTouchMode=true,


      {
        Button;--钮扣
        text="保存图片";--文本
        textSize="17";--文本大小
        textColor="#000000";
        backgroundColor="#ffffff";--背景色
        layout_weight="1.0"; 
        layout_width="fill";--宽度
        layout_marginTop="fill";--边顶
        onClick=function()
          picUrl = hitTestResult.getExtra()
          --导入包
import "android.content.Context"
import "android.net.Uri"

downloadManager=activity.getSystemService(Context.DOWNLOAD_SERVICE);
url=Uri.parse(picUrl);
request=DownloadManager.Request(url);
request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_MOBILE|DownloadManager.Request.NETWORK_WIFI);
request.setDestinationInExternalPublicDir("Download","PEI");
request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
downloadManager.enqueue(request);
          关闭对话框()
        end
      };

      {
        Button;--钮扣
        text="复制图片链接";--文本
        textSize="17";--文本大小
        textColor="#000000";
        backgroundColor="#FFFFFFFF";--背景色
        layout_weight="1.0"; 
        layout_width="fill";--宽度
        layout_marginTop="fill";--边顶
        onClick=function()
          picUrl = hitTestResult.getExtra()
          复制文本(picUrl)
          弹出消息("已复制")
          关闭对话框()
        end
      };
  


    };
    dlg=AlertDialog.Builder(this).setView(loadlayout(AboutLayout)).show()
    function 关闭对话框()
      return dlg and dlg.dismiss()
    end
    import "android.graphics.Paint"
  end
end








function 提示(内容)
  Toast.makeText(this, 内容,Toast.LENGTH_SHORT).show()
end

function 检测更新(Github地址)
  local dl=ProgressDialog.show(activity,nil,'更新检测中…')
  dl.show()
  local tt=Ticker()
  tt.start()
  packinfo=this.getPackageManager().getPackageInfo(this.getPackageName(),((1552294270/8/2-8392)/32/1250-25.25)/8-236)
  version=tostring(packinfo.versionName)
  versioncode=tostring(packinfo.versionCode)

  url=Github地址;
  function 过滤(content)
    版本名=content:match("【版本名】(.-)【版本名】")
    版本=content:match("【版本】(.-)【版本】")
    内容=content:match("【内容】(.-)【内容】")
    链接=content:match("【链接】(.-)【链接】")
    if(版本名==nil) then
      版本名="获取失败"
    end
    if(版本==nil) then
      版本="0"
    end
    if(内容==nil) then
      内容="获取失败"
    end
    if(链接==nil) then
      提示("服务器参数配置错误，请过段时间再次尝试")
    end

    if(版本 > versioncode) then
      dl.dismiss()
      tt.stop() 
      对话框()
      .设置标题("检测到更新")
      .设置消息("版本："..version.."→"..版本名.."\n更新内容："..内容)
      .设置积极按钮("下载更新",function()
        加载网页(链接)
        提示("下载更新中…")
      end)
      .设置消极按钮("取消更新")
      .显示()
    else
      dl.dismiss()
      tt.stop()
      提示("当前已是最新版本！")
    end
  end
  Http.get(url,nil,"UTF-8",nil,function(code,content,cookie,header)
    if(code==200 and content)then
      过滤(content)
    else
      dl.dismiss()
      tt.stop() 
      提示("本地网络或服务器异常  "..code)
    end
  end)
end

检测更新("https://go.6zgm.com/up.txt")
function clr()
  --导入File类
  import "java.io.File"
  --显示多选框
  items={"浏览记录","缓存文件"}
  多选对话框=AlertDialog.Builder(this)
  .setTitle("清除记录")
  --勾选后执行
  .setPositiveButton("确定",function()
    if clearhistory==1 and clearall==1 then
      File(lstads).delete()
      File(lstwebads).delete()
      lst={}
      lstweb={}
      os.execute("pm clear "..activity.getPackageName())
    elseif clearhistory==0 and clearall==1 then
      os.execute("pm clear "..activity.getPackageName())
    elseif clearhistory==1 and clearall==0 then
      File(lstads).delete()
      File(lstwebads).delete()
      lst={}
      lstweb={}
    else return nil
    end
  end)
  --选择事件
  .setMultiChoiceItems(items, nil,{ onClick=function(v,p)
      --清除历史
      if p==0 then clearhistory=1
      end
      --清除缓存
      if p==1 then clearall=1
      end
    end})
  多选对话框.show();
  clearhistory=0
  clearall=0
end
a=1
b=1
