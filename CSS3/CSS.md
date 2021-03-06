
# box-shadow
1. 阴影模糊半径与阴影扩展半径的区别

    阴影模糊半径：此参数可选，其值只能是为正值，如果其值为0时，表示阴影不具有模糊效果，其值越大阴影的边缘就越模糊；

    阴影扩展半径：此参数可选，其值可以是正负值，如果值为正，则整个阴影都延展扩大，反之值为负值时，则缩小；
2. X轴偏移量和Y轴偏移量值可以设置为负数

    box-shadow: X轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展半径] [阴影颜色] [投影方式];



# box-image

1. box-image:url('C:\谷歌下载') 40 strech


# 颜色渐变

1. linear-gradient(to left, red, orange,yellow,green,blue,indigo,violet);

2. 渐变方向
    - to top left 右下到左上
    - to top right 左下到右上


# 文字与字体

1. 文本阴影: ``` text-shadow: X-Offset Y-Offset blur color; ```

    X-Offset：表示阴影的水平偏移距离，其值为正值时阴影向右偏移，反之向左偏移；      

    Y-Offset：是指阴影的垂直偏移距离，如果其值是正值时，阴影向下偏移，反之向上偏移；

    Blur：是指阴影的模糊程度，其值不能是负值，如果值越大，阴影越模糊，反之阴影越清晰，如果不需要阴影模糊可以将Blur值设置为0；

    Color：是指阴影的颜色，其可以使用rgba色



# 设置元素背景图片的原始起始位置。

1. 语法：background-origin ： border-box | padding-box | content-box;
2. 参数分别表示背景图片是从边框，还是内边距（默认值），或者是内容区域开始显示。
3. 如果背景不是no-repeat，这个属性无效，它会从边框开始显示。

# 用来将背景图片做适当的裁剪以适应实际需要。

1. 语法：background-clip ： border-box | padding-box | content-box | no-clip

2. 参数分别表示从边框、或内填充，或者内容区域向外裁剪背景。no-clip表示不裁切，和参数border-box显示同样的效果。backgroud-clip默认值为border-box。


# 设置背景图片的大小，以长度值或百分比显示，还可以通过cover和contain来对图片进行伸缩。

1. 语法：background-size: auto | <长度值> | <百分比> | cover | contain

2. 取值说明：

(1)、auto：默认值，不改变背景图片的原始高度和宽度；

(2)、<长度值>：成对出现如200px 50px，将背景图片宽高依次设置为前面两个值，当设置一个值时，将其作为图片宽度值来等比缩放；

(3)、<百分比>：0％~100％之间的任何值，将背景图片宽高依次设置为所在元素宽高乘以前面百分比得出的数值，当设置一个值时同上；

(4)、cover：顾名思义为覆盖，即将背景图片等比缩放以填满整个容器；

(6)、contain：容纳，即将背景图片等比缩放至某一边紧贴容器边缘为止。


3.  contain :根据图片自身的宽高比例调整大小，调整到有一个值跟容器一致就不再变化，如果它的比例跟容器比例不一致那么不能填满容器。
    cover：不改变原来图片比例，覆盖容器超出部分相当于裁掉了。
    100% 100%；根据容器的比例来，造成图片可能跟自身原比例不一致。




# CSS3 选择器
1. :root 根选择器
    - 匹配元素E所在文档的根元素。在HTML文档中，根元素始终是<html>。

2. ：not 选择除某个元素之外的所有元素。
    - 例如: input:not([type="submit"]){
                border:1px solid red;
            }

3. :empty 表示空。
    - 用来选择没有任何内容的元素，这里没有内容指的是一点内容都没有，哪怕是一个空格。

4. :target 目标选择器。
    - 用来匹配文档(页面)的url的某个标志符的目标元素。我们先来上个例子，然后再做分析。


# 属性书写顺序

- 建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …