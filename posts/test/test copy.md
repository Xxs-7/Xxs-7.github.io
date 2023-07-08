---
title: '用户代理样式表'
date: '2022-01-01'
description: '测试 mdx 组件'
---

标题
# heading 1
## heading 2
### heading 3
#### heading 4
##### heading 5
###### heading 6

长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行长文本换行

english word break english word break english word break english word break english word break english word break english word break english word break english word break english word break english word break english word break 

123123123123123231222123123 213123123123 123123123123 

english word break english word break ;english word break english word break ;english word break english word break 

**`cross size`**

> flex-direction
> 
> 
> flex-wrap
> 
> flex-flow
> 
> justify-content
> 
> align-item
> 
> align-content
> 


### Code 

```jsx
display: flex;
// 行内元素display: inline-flex;
// webkit内核display: -webkit-flex; /* safari */
```

```
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```

### 表格

| 条件 |  | 属性（是否有效果） |  |
| --- | --- | --- | --- |
| 子项 | flex容器 | align-items | align-content |
| 单行 | 不指定高度 | 是 | 否 |
| 固定高度 | 是 | 是 | 否（但是有设置flex-wrap:wrap;时，有效果） |
| 多行 | 不指定高度 | 是 | 否 |
| 固定高度 | 是 | 是 | 是 |

```html
<!DOCTYPE html><html lang="en">  <head>    <meta charset="UTF-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <title>webpack</title>    <style>      body {        margin: 0;      }      .HolyGrail {        display: flex;        min-height: 100vh;        flex-direction: column;        text-align: center;        vertical-align: center;      }      header,      footer {        flex: 0 0 12em;        background-color: slategrey;      }      .content {        display: flex;        flex: 1;      }      .left,      .right {        flex: 0 0 12em;        background-color: teal;      }      .center {        flex: 1;        background-color: tomato;      }      @media (max-width: 768px) {        .content {          flex-direction: column;          flex: 1;        }        .left,        .rigth,        .center {          flex: auto;        }      }    </style>  </head>  <body>    <div class="HolyGrail">      <header>#header</header>      <div class="content">        <div class="left">#left</div>        <div class="center">#center</div>        <div class="right">#right</div>      </div>      <footer>#footer</footer>    </div>  </body></html>
```