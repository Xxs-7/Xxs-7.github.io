---
title: 'grid 布局'
date: '2022-01-01'
---

# grid布局

https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html 

函数&关键字：

`repeat`，fr，minmax，auto-fill，span

单元格命令，合并

### 一、概述

网格布局（grid）是一个CSS布局方案，它将容器划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Flex 布局是轴线布局，只能指定“项目”针对轴线的位置，可以看作是 **一维布局** 。 Grid 布局则是将容器划分成“行”和“列”，产生单元格，然后指定“项目所在”的单元格，可以看作是 **二维布局** 。

### 二、基本概念

### 2.1 容器和项目

采用网格布局的区域，称为“容器”（container）。容器内部采用网格定位的子元素，称为“项目”（item）。

### 2.2 行和列

容器里面的水平区域称为“行”（row），垂直区域称为“列”（column）。

### 2.3 单元格

行和列的交叉区域，称为“单元格”（cell）。

正常情况下，`n`行和 `m`列会产生 `n x m`个单元格。比如，3行3列会产生9个单元格。

### 2.4 网格线

划分网格的线，称为“网格线”（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，`n`行有 `n + 1`根水平网格线，`m`列有 `m + 1`根垂直网格线，比如三行就有四根水平网格线。

### 三、容器属性

```css
display：grid/inline-grid
```

注意，设为网格布局以后，容器子元素（项目）的 `float`、`display: inline-block`、`display: table-cell`、`vertical-align`和 `column-*`等设置都将失效。

### 3.1 grid-template-columns 和 grid-template-rows

`grid-template-columns`属性定义每一列的列宽；例如：100px 100px 100px，也可以使用百分比。 `grid-template-rows`属性定义每一行的行高。

1. `repeat()`接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。 
例如：
`gird-template-columns: repeat(3, 33.33%)` 重复3列各占 33.3 % 
`grid-template-columns: repeat(2, 100px 20px 80px);` 按模式重复2次，共6列。
2. `auto-fill`关键字表示自动填充。每一行（或每一列）容纳尽可能多的单元格
3. `fr`关键字 为了方便表示比例关系，网格布局提供了 `fr`关键字（fraction 的缩写，意为“片段”）。如果两列的宽度分别为 `1fr`和 `2fr`，就表示后者是前者的两倍。（按剩余空间等比例划分）
4. `minmax()`函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
5. `auto`关键字表示由浏览器自己决定长度。等于行（列）子元素的最大高（宽）度。
6. **网格线的名称** `grid-template-columns`属性和 `grid-template-rows`属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。 例如： 下面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。
    
    ```
    .container {
      display: grid;
      grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
      grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
    }
    ```
    
    网格布局允许同一根线有多个名字，比如 `[fifth-line row-5]`。
    

### 3.2 grid-row-gap, grid-column-gap 和 grip-gap

`grid-row-gap`属性设置行与行的间隔（行间距）； `grid-column-gap`属性设置列与列的间隔（列间距）； `grid-gap`属性是 `grid-column-gap`和 `grid-row-gap`的合并简写形式。如果 `grid-gap`省略了第二个值，浏览器认为第二个值等于第一个值。

### 3.3 grid-template-areas

网格布局允许指定“区域”（area），一个区域由单个或多个单元格组成。`grid-template-areas`属性用于定义区域。

在指定完 `grid-row-gap`, `grid-column-gap` 后，划分不同区域，项目使用 `grid-area` 占据区域。

### 3.4 grid-auto-flow

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是“先行后列”，即先填满第一行，再开始放入第二行，即下图数字的顺序。

`row/column/row dense/column dense`

### 3.5 justify-item, align-items 和place-item

单元格内的子元素在单元格区域内的水平，垂直对齐方式

### 3.6 justify-content, align-content 和 place-content

整个子元素内容区域在布局内的水平，垂直对齐方式

3.7 gird-auto-columns 和 grid-auto-rows

多余子元素所占据的单元格的尺寸

### 四、项目属性

### 4.1 grid-column-start, grid-column-end, grid-row-start 和 grid-row-end

项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

> grid-column-start属性：左边框所在的垂直网格线
grid-column-end属性：右边框所在的垂直网格线
grid-row-start属性：上边框所在的水平网格线
grid-row-end属性：下边框所在的水平网格线
> 

`span`关键字，表示跨越多少网格：

```html
.item-1 {
  grid-column-start: span 2;
}
```

### 4.2 grid-column 和 grid-row

缩写

### 4.3 grid-area

`grid-area`属性指定项目放在哪一个区域

> .item-1 {
  grid-area: e;
}
> 

### 4.4 justify-self ,align-self 和 place-self

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。

> .item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
> 

这两个属性都可以取下面四个值。

> start：对齐单元格的起始边缘。end：对齐单元格的结束边缘。center：单元格内部居中。stretch：拉伸，占满单元格的整个宽度（默认值）。
> 

### 五、常见使用案例

圣杯布局

1. 单个容器 + grid-column

```html
<style>
  html,
  body {
    height: 100%;
  }
  .container {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr auto;
  }
  .header {
    height: 80px;
    grid-column: 1/4;
    background-color: bisque;
  }
  .footer {
    height: 80px;
    grid-column: 1/4;
    background-color: aquamarine;
  }
  .item1 {
    width: 100px;
    background-color: yellow;
  }
  .item2 {
    background-color: brown;
  }
  .item3 {
    width: 100px;
    background-color: blue;
  }
</style>
<div class="container">
  <div class="header">header</div>
  <div class="item1"></div>
  <div class="item2"></div>
  <div class="item3"></div>
  <div class="footer"></div>
</div>
```

1. 单个容器 + grid-template-areas

```html
<style>
  html,
  body {
    height: 100%;
  }
  .container {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      "header header header" "item1 item2 item3"
      "footer footer footer";
  }
  .header {
    height: 80px;
    grid-area: header;
    background-color: bisque;
  }
  .footer {
    height: 80px;
    grid-area: footer;
    background-color: aquamarine;
  }
  .item1 {
    width: 100px;
    grid-area: item1;
    background-color: yellow;
  }
  .item2 {
    grid-area: item2;
    background-color: brown;
  }
  .item3 {
    width: 100px;
    grid-area: item3;
    background-color: blue;
  }
</style>
<div class="container">
  <div class="header">header</div>
  <div class="item1"></div>
  <div class="item2"></div>
  <div class="item3"></div>
  <div class="footer"></div>
</div>
```

1.  嵌套content