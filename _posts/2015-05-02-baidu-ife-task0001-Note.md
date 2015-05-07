---
layout: post
title:  "baidu-ife task0001 note"
date:  2015-05-02
categories: baidu-ife
featured_image: /images/baidu-ife.jpg
---

###任务完成时间：04.13-04.20

* [baidu-ife task0001 任务地址](https://github.com/baidu-ife/ife/tree/master/task/task0001)

###04.13-04.14 

####针对任务1-6进行练习，其中遇到的问题主要在任务6：

#####1、请在不使用border-radius的情况下实现一个可复用的高度和宽度都自适应的圆角矩形 。

#####方法一：

这个问题以前从来没有接触过，所以咨询了已经做完的同学，了解到可以用图片解决边角圆形的方法。
很碰巧的，身旁的一本书，名为《html与css设计模式》（图灵程序设计丛书）里恰好介绍了圆角设计方法。
书中写了好几种样式的写法，选择了最简洁版的，代码摘抄如下：

{% highlight ruby %}

    .mbg {
    padding: 10px;
    width: 40%;
    overflow: hidden;
    background: url("../img/trc.gif") top right no-repeat,
                url("../img/blc.gif") bottom left no-repeat,
                url("../img/rc.gif") top left no-repeat,
                url("../img/rc.gif") bottom right no-repeat;
    } 

{% endhighlight %}
   
* 优点：

	达到题目要求，宽度和高度都可以自适应且可复用。

* 缺点：

	需要加载图片；
	
	图片中边框外必须为白色背景（这样才能遮住原来的直角...）；
	
	由于图片内容是固定的, 导致圆角矩形的边框宽度不能改变，颜色也不能变化；
	
	如果要改变的话，必须更改图片内容，比较麻烦。
    
#####方法二：

百度搜索到的代码，名为实心圆角矩形，代码摘抄如下：

{% highlight ruby %}

    .radius{
        width: 40%;
    }
    .top{
        border-top-color:#000;
        border-bottom:3px solid #000;
        border-left:3px dotted transparent;
        border-right:3px dotted transparent;
    }
    .center{
        color: #FFF;
        overflow: hidden;
        padding: 10px;
        background-color: #000;
    }
    .bot{
        border-top:3px solid #000;
        border-bottom-color:#000;
        border-left:3px dotted transparent;
        border-right:3px dotted transparent;
    }

{% endhighlight %}
    
* 实现原理：
	
	通过边框的dotted样式，巧妙的将边框变成梯形，
	
	这样交接处形成一个重合，看起来像切掉了矩形框的尖角，
	
	只要设置恰当的边框宽度，可以近似成圆角
    
* 优点：

	达到题目要求，宽度和高度都可以自适应且可复用。
	无需另外加载图片。

* 缺点：

	必须将圆角矩形内的背景颜色和边框颜色保持一致，不然会露馅...（外部背景颜色无所谓）
	IE不支持...
	圆角矩形的边框宽度不能改变，一改变边框宽度的话，边角就不像圆角了。
    
#####2、实现两列布局/三列布局。

原本觉得设计几列布局本不是难事，但实际操作中遇到了不少的问题，

自认为成功敲出了符合要求的代码（float和position各写了一种），后来才发现原来是个坑...

实现方案有多种，但是符合IE大爷脾气的方案才是好方案!!!

淘宝UED出品的双飞翼布局特别好用 因此贴一个链接 方便以后查阅~

* [双飞翼布局](http://www.imooc.com/wenda/detail/254035)
    
###04.15-04.18 

####练习任务7：

#####1、index.html

#####各类元素居中问题
    
水平居中有两种普通方法：

{% highlight ruby %}

    text-align: center /*相对父级元素的居中
    margin: 0 auto //设置子元素居中

{% endhighlight %}
        
在实际运用中，会发现有时候两种办法都不好使，这时可以运用第三种方法：

{% highlight ruby %}

    //margin和transform的结合
    //水平方法为：

    margin-left: 50%; 
    transform: translateX(-50%);

    //以此类推，垂直居中的方法为：

    margin-top:50%;
    transform: translateY(-50%);

{% endhighlight %}

这个时候元素可能百分百做到想要的居中效果了，但问题又来了：
transfrom属于CSS3，伺候不了IE...
        
 flexbox实现居中

{% highlight ruby %}

    .parent {
      display: flex;
      height: 300px; /* Or whatever */
    }
    .child {
      width: 100px;  /* Or whatever */
      height: 100px; /* Or whatever */
      margin: auto;  /* Magic! */
    }   

{% endhighlight %}
        
position 绝对定位
>
给父元素添加position: relative;
给需要定位的子元素添加position: absolute;
此时设置相应的left/right/top/bottom值就可以将子元素想定位在哪定位在哪，方便实用~
        
以上总结出来的居中方案适用于绝大多数CSS定位方式，后续发现新方法会补充...
当然，想要更高级的居中方法就可以让JavaScript上场啦~
        
#####渐变问题

最初自己写的时候就只考虑了四种浏览器内核的配置问题，
后来发现自己还是太单纯...

群里有同学分享了一个制作渐变效果的链接：
>
http://www.colorzilla.com/gradient-editor/

里面的色彩和透明度直接操作设置后 会有相应代码显示 十分方便 也可以偷个小懒~

#####IE6双倍marginbug问题

当其他IE版本和其他浏览器都支持相册三列在一排排放整齐后，
IE6强有力地站出来说No，顿时给跪了...

问了群里的同学才知道这原来是IE6双倍marginbug问题...

以下是百度出来的解释：
>
父元素与子元素之间，子元素同时设置了浮动和外边距属性，子元素会出现此bug，兄弟元素之间则不会。

解决的办法：
>
给子元素加上 display:inline 属性。
实现以上若效果还没好 尝试在父级元素行内样式中添加 clear: both;
    
#####2、blog.html和gallery.html

因为blog和gallery两个页面有很多相似的地方，所以放在一起写。

#####伪类使用的问题

blog页面中有好几处可以用伪类实现：文章的时间和分类块、侧边导航前端的色条。

gallery页面也有：照片标题前的分类字母、排行榜前的顺序数字。

一时间不知道按常规方式增加div好还是写成伪类好，

本着练习写伪类的想法，将以上内容都用伪类写了一遍...

最后发现又是IE不兼容 T_T 默默重写...

写的时候我一直在思考伪类的出现到底有什么用...

样式是可以更多样化，但考虑到兼容问题，还是得依据页面元素重要性来判断。

如果只是起到修饰页面的作用，大可以用伪类？

如果一些页面元素是必要元素，且考虑到兼容性和CSS样式丢失的情况，

还是用div创建的比较靠谱。

######添加几个伪类相关资料：

* [CSS 伪类选择器：如何使用 CSS3 伪类](http://lzw.me/a/css3-pseudo-classes.html)

* [CSS中伪类的使用](http://www.cnblogs.com/guopei/archive/2011/04/16/2017627.html)
           
#####搜索框的问题

嗯...我发现了图片中要求input聚焦后，边框和按钮颜色同时要发生变化...

这导致一个很纠结的问题发生了：

* 想法一：

放大镜和input框应该是并存的，而不是放大镜作为背景图片，

那么边框应该再加一个父级div包裹实现吧？

既然是父级，那么子元素获得焦点，怎么能让父元素改变样式呢...

* 想法二：

将input放大至边框包裹放大镜，但是这样图片会覆盖input的一部分...

在想法一的模式下，只实现了按钮随着聚焦变化而变化。

而后，和同学交流后，恍然大悟 = = 

想法二中的内容覆盖问题可以使用text-indent解决!

实践想法后，成功实现了边框和按钮同时变化~真是赞~

####瀑布流的问题

之前只知道可以用JavaScript或者jQuery实现瀑布流，要求只让用CSS...没有一点点防备...

于是百度到一个使用CSS3属性的方法，例如：

{% highlight ruby %}

    ul {
        /* 栏宽度 */
        -webkit-column-width:160px;
        -moz-column-width:160px;
        -o-colum-width:160px;
        column-width:160px;
        /* 两栏之间的间距 */
        -webkit-column-gap:1px;
        -moz-column-gap:1px;
        -o-column-gap:1px;
        column-gap:1px;
     }

{% endhighlight %}

这个方法的确可以实现瀑布流效果，但局限性也很大。

第一要考虑兼容性，第二这个排列方式只适合宽度一致的图片进行排布，不符合要求><
 
考虑了很多因素，觉得没有别的办法了...

于是一个个用绝对定位的方式把照片一张张给钉在页面上...
 
过了段时间，看见群里有小伙伴说可以用flexbox实现

于是找到一个全面介绍flexbox的好文章，mark：

http://www.w3cplus.com/css3/a-guide-to-flexbox.html

 日后进行测试练习~
         
#####排行榜的进度条问题
         
进度条的标签用的是html5的新标签 < progress >

使用之后发现，每个浏览器对它的支持效果都不一样，也是深深醉了...

不过IE最新渲染版本的支持效果最好也是意料之外 = =

想过用其他方法实现进度条的外观，但想想出题本意还是尝试使用<progress>吧...

######review更新：

< progress >为html5标签,兼容性较差。若要实现设计图的排行榜，用ol+div结构，进度条中应当用隐藏的文字标注当前的进度。
        
#####4、about.html

about页面的版面样式第一次遇见...

用到了background-clip实现中间轴内容部分的样式

两侧的内容采用了table布局...

我知道规范里说可以不用table布局的尽量不用table布局

但是我还是拿table写了

用table布局的想法是：

* 布局整齐，一块主题对应一块内容，样式比ul好写，且符合中轴线的布局样式。

* 整个页面只有这一个内容块，内容是集中且清晰的，

   用table可以简洁明了，即使在遇到浏览器不兼容或者CSS缺失的情况下，

   浏览者也可以看出这个页面的内容脉络。

######review更新：

建议不使用table布局

table布局灵活性较差,作业设计时只考虑了左右布局的实现，使得html结构限制于左右结构的布局。

设计页面时，应充分考虑文本和样式分离的原则，保持html结构的灵活性，方便CSS定义多种样式结构。
                   
###04.20

##总结：
    
#####完成效率不高：

原计划是跟中级班进度一样完成任务编写，

但中间几天受到其他事情的干扰没有集中时间和精力完成页面，导致后面进度变慢。

已经总结教训，前端培训放在第一位，其他不重要的事推掉推掉...投入前端深水的怀抱~
    
#####编写经验不够：

以前编写html+css的练习时，考虑的因素很少，对前端的认识肤浅...

现在通过几天的练习逐渐摸索了一些网页编写原则：

一、保证页面结构的可浏览性（即无CSS），html标签语义化。

二、编写CSS样式时，既要符合页面设计样式，同时考虑到浏览器兼容性以及响应式操作。

三、代码编写严格按照规范来写。

四、考虑深层次的东西：如何编写代码使页面加载速度更快、CSS的复用、减少代码量实现相同效果等等...
    
#####未来计划：

写总结的时候Task2已经发布了...

Task1结束后要认认真真全面学习JavaScript了，

计划啃完《JavaScript DOM 编程艺术》和《JavaScript高级程序设计》，

按时完成Task2的作业，

在时间允许的条件下阅读JQuery源代码。
    
    
##FIGHTING!!!
        
        
        