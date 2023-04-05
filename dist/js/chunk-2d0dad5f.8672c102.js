(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dad5f"],{"6cfb":function(t,v,_){"use strict";_.r(v);var d=function(){var t=this;t._self._c;return t._m(0)},e=[function(){var t=this,v=t._self._c;return v("div",[v("h1",[t._v("构造函数")]),v("h2",[t._v("基本使用")]),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("id")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"mindMapContainer"')]),t._v(">")]),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n")])]),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" MindMap "),v("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),v("span",{staticClass:"hljs-string"},[t._v('"simple-mind-map"')]),t._v(";\n\n"),v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" mindMap = "),v("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" MindMap({\n  "),v("span",{staticClass:"hljs-attr"},[t._v("el")]),t._v(": "),v("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".getElementById("),v("span",{staticClass:"hljs-string"},[t._v("'mindMapContainer'")]),t._v("),\n  "),v("span",{staticClass:"hljs-attr"},[t._v("data")]),t._v(": {\n    "),v("span",{staticClass:"hljs-string"},[t._v('"data"')]),t._v(": {\n        "),v("span",{staticClass:"hljs-string"},[t._v('"text"')]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v('"根节点"')]),t._v("\n    },\n    "),v("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n  }\n});\n")])]),v("h2",[t._v("实例化选项")]),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名称")]),v("th",[t._v("类型")]),v("th",[t._v("默认值")]),v("th",[t._v("描述")]),v("th",[t._v("是否必填")])])]),v("tbody",[v("tr",[v("td",[t._v("el")]),v("td",[t._v("Element")]),v("td"),v("td",[t._v("容器元素，必须为DOM元素")]),v("td",[t._v("是")])]),v("tr",[v("td",[t._v("data")]),v("td",[t._v("Object")]),v("td",[t._v("{}")]),v("td",[t._v("思维导图数据，可参考："),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js"}},[t._v("https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js")])]),v("td")]),v("tr",[v("td",[t._v("layout")]),v("td",[t._v("String")]),v("td",[t._v("logicalStructure")]),v("td",[t._v("布局类型，可选列表：logicalStructure（逻辑结构图）、mindMap（思维导图）、catalogOrganization（目录组织图）、organizationStructure（组织结构图）")]),v("td")]),v("tr",[v("td",[t._v("theme")]),v("td",[t._v("String")]),v("td",[t._v("default")]),v("td",[t._v("主题，可选列表：default（默认）、classic（脑图经典）、minions（小黄人）、pinkGrape（粉红葡萄）、mint（薄荷）、gold（金色vip）、vitalityOrange（活力橙）、greenLeaf（绿叶）、dark2（暗色2）、skyGreen（天清绿）、classic2（脑图经典2）、classic3（脑图经典3）、classic4（脑图经典4，v0.2.0+）、classicGreen（经典绿）、classicBlue（经典蓝）、blueSky（天空蓝）、brainImpairedPink（脑残粉）、dark（暗色）、earthYellow（泥土黄）、freshGreen（清新绿）、freshRed（清新红）、romanticPurple（浪漫紫）")]),v("td")]),v("tr",[v("td",[t._v("themeConfig")]),v("td",[t._v("Object")]),v("td",[t._v("{}")]),v("td",[t._v("主题配置，会和所选择的主题进行合并，可用字段可参考："),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js"}},[t._v("https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js")])]),v("td")]),v("tr",[v("td",[t._v("scaleRatio")]),v("td",[t._v("Number")]),v("td",[t._v("0.1")]),v("td",[t._v("放大缩小的增量比例")]),v("td")]),v("tr",[v("td",[t._v("maxTag")]),v("td",[t._v("Number")]),v("td",[t._v("5")]),v("td",[t._v("节点里最多显示的标签数量，多余的会被丢弃")]),v("td")]),v("tr",[v("td",[t._v("exportPadding")]),v("td",[t._v("Number")]),v("td",[t._v("20")]),v("td",[t._v("导出图片时的内边距")]),v("td")]),v("tr",[v("td",[t._v("imgTextMargin")]),v("td",[t._v("Number")]),v("td",[t._v("5")]),v("td",[t._v("节点里图片和文字的间距")]),v("td")]),v("tr",[v("td",[t._v("textContentMargin")]),v("td",[t._v("Number")]),v("td",[t._v("2")]),v("td",[t._v("节点里各种文字信息的间距，如图标和文字的间距")]),v("td")]),v("tr",[v("td",[t._v("selectTranslateStep")]),v("td",[t._v("Number")]),v("td",[t._v("3")]),v("td",[t._v("多选节点时鼠标移动到边缘时的画布移动偏移量")]),v("td")]),v("tr",[v("td",[t._v("selectTranslateLimit")]),v("td",[t._v("Number")]),v("td",[t._v("20")]),v("td",[t._v("多选节点时鼠标移动距边缘多少距离时开始偏移")]),v("td")]),v("tr",[v("td",[t._v("customNoteContentShow（v0.1.6+）")]),v("td",[t._v("Object")]),v("td",[t._v("null")]),v("td",[t._v("自定义节点备注内容显示，Object类型，结构为：{show: (noteContent, left, top) => {// 你的显示节点备注逻辑 }, hide: () => {// 你的隐藏节点备注逻辑 }}")]),v("td")]),v("tr",[v("td",[t._v("readonly（v0.1.7+）")]),v("td",[t._v("Boolean")]),v("td",[t._v("false")]),v("td",[t._v("是否是只读模式")]),v("td")]),v("tr",[v("td",[t._v("enableFreeDrag（v0.2.4+）")]),v("td",[t._v("Boolean")]),v("td",[t._v("false")]),v("td",[t._v("是否开启节点自由拖拽")]),v("td")]),v("tr",[v("td",[t._v("watermarkConfig（v0.2.4+）")]),v("td",[t._v("Object")]),v("td"),v("td",[t._v("水印配置，详细配置请参考下方表格【水印配置】")]),v("td")]),v("tr",[v("td",[t._v("textAutoWrapWidth（v0.3.4+）")]),v("td",[t._v("Number")]),v("td",[t._v("500")]),v("td",[t._v("节点内每行文本达到该宽度后自动换行")]),v("td")]),v("tr",[v("td",[t._v("customHandleMousewheel（v0.4.3+）")]),v("td",[t._v("Function")]),v("td",[t._v("null")]),v("td",[t._v("自定义鼠标滚轮事件处理，可以传一个函数，回调参数为事件对象")]),v("td")]),v("tr",[v("td",[t._v("mousewheelAction（v0.4.3+）")]),v("td",[t._v("String")]),v("td",[t._v("zoom")]),v("td",[t._v("鼠标滚轮的行为，"),v("code",[t._v("zoom")]),t._v("（放大缩小）、"),v("code",[t._v("move")]),t._v("（上下移动）。如果"),v("code",[t._v("customHandleMousewheel")]),t._v("传了自定义函数，这个属性不生效")]),v("td")]),v("tr",[v("td",[t._v("mousewheelMoveStep（v0.4.3+）")]),v("td",[t._v("Number")]),v("td",[t._v("100")]),v("td",[t._v("当"),v("code",[t._v("mousewheelAction")]),t._v("设为"),v("code",[t._v("move")]),t._v("时，可以通过该属性控制鼠标滚动一下视图移动的步长，单位"),v("code",[t._v("px")])]),v("td")]),v("tr",[v("td",[t._v("defaultInsertSecondLevelNodeText（v0.4.7+）")]),v("td",[t._v("String")]),v("td",[t._v("二级节点")]),v("td",[t._v("默认插入的二级节点的文字")]),v("td")]),v("tr",[v("td",[t._v("defaultInsertBelowSecondLevelNodeText（v0.4.7+）")]),v("td",[t._v("String")]),v("td",[t._v("分支主题")]),v("td",[t._v("默认插入的二级以下节点的文字")]),v("td")]),v("tr",[v("td",[t._v("expandBtnStyle（v0.5.0+）")]),v("td",[t._v("Object")]),v("td",[t._v("{ color: '#808080', fill: '#fff' }")]),v("td",[t._v("展开收起按钮的颜色")]),v("td")]),v("tr",[v("td",[t._v("expandBtnIcon（v0.5.0+）")]),v("td",[t._v("Object")]),v("td",[t._v("{ open: '', close: '' }")]),v("td",[t._v("自定义展开收起按钮的图标，可以传图标的svg字符串")]),v("td")]),v("tr",[v("td",[t._v("enableShortcutOnlyWhenMouseInSvg（v0.5.1+）")]),v("td",[t._v("Boolean")]),v("td",[t._v("true")]),v("td",[t._v("是否只有当鼠标在画布内才响应快捷键事件")]),v("td")]),v("tr",[v("td",[t._v("enableNodeTransitionMove（v0.5.1+）")]),v("td",[t._v("Boolean")]),v("td",[t._v("true")]),v("td",[t._v("是否开启节点动画过渡")]),v("td")]),v("tr",[v("td",[t._v("nodeTransitionMoveDuration（v0.5.1+）")]),v("td",[t._v("Number")]),v("td",[t._v("300")]),v("td",[t._v("如果开启节点动画过渡，可以通过该属性设置过渡的时间，单位ms")]),v("td")])])]),v("h3",[t._v("水印配置")]),v("table",[v("thead",[v("tr",[v("th",[t._v("字段名称")]),v("th",[t._v("类型")]),v("th",[t._v("默认值")]),v("th",[t._v("描述")])])]),v("tbody",[v("tr",[v("td",[t._v("text")]),v("td",[t._v("String")]),v("td",[t._v("''")]),v("td",[t._v("水印文字，如果为空字符串则不显示水印")])]),v("tr",[v("td",[t._v("lineSpacing")]),v("td",[t._v("Number")]),v("td",[t._v("100")]),v("td",[t._v("水印每行之间的间距")])]),v("tr",[v("td",[t._v("textSpacing")]),v("td",[t._v("Number")]),v("td",[t._v("100")]),v("td",[t._v("同一行水印之间的间距")])]),v("tr",[v("td",[t._v("angle")]),v("td",[t._v("Number")]),v("td",[t._v("30")]),v("td",[t._v("水印的倾斜角度，范围：[0, 90]")])]),v("tr",[v("td",[t._v("textStyle")]),v("td",[t._v("Object")]),v("td",[t._v("{color: '#999', opacity: 0.5, fontSize: 14}")]),v("td",[t._v("水印文字样式")])])])]),v("h2",[t._v("静态方法")]),v("h3",[t._v("defineTheme(name, config)")]),v("blockquote",[v("p",[t._v("v0.2.23+")])]),v("p",[t._v("定义新主题。")]),v("p",[v("code",[t._v("name")]),t._v("：新主题名称")]),v("p",[v("code",[t._v("config")]),t._v("：主题数据")]),v("p",[v("code",[t._v("simple-mind-map")]),t._v("内置了众多主题，另外你也可以注册新主题，建议在实例化之前进行注册，这样在实例化时可以直接使用新注册的主题，使用示例：")]),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" MindMap "),v("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),v("span",{staticClass:"hljs-string"},[t._v("'simple-mind-map'")]),t._v("\n"),v("span",{staticClass:"hljs-comment"},[t._v("// 注册新主题")]),t._v("\nMindMap.defineTheme("),v("span",{staticClass:"hljs-string"},[t._v("'主题名称'")]),t._v(", {})\n\n"),v("span",{staticClass:"hljs-comment"},[t._v("// 1.实例化时使用新注册的主题")]),t._v("\n"),v("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" mindMap = "),v("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" MindMap({\n    "),v("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v(": "),v("span",{staticClass:"hljs-string"},[t._v("'主题名称'")]),t._v("\n})\n\n"),v("span",{staticClass:"hljs-comment"},[t._v("// 2.动态切换新主题")]),t._v("\nmindMap.setTheme("),v("span",{staticClass:"hljs-string"},[t._v("'主题名称'")]),t._v(")\n")])]),v("p",[t._v("主题的所有配置可以参考"),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js"}},[t._v("默认主题")]),t._v("。"),v("code",[t._v("defineTheme")]),t._v("方法会把你传入的配置和默认配置做合并。大部分主题其实需要自定义的部分不是很多，一个典型的自定义主题配置可以参考"),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/blueSky.js"}},[t._v("blueSky")]),t._v("。")]),v("h3",[t._v("usePlugin(plugin, opt = {})")]),v("blockquote",[v("p",[t._v("v0.3.0+")])]),v("ul",[v("li",[v("code",[t._v("opt")]),t._v("：v0.4.0+，插件参数。如果某个插件支持自定义选项的话可以通过这个参数传入。")])]),v("p",[t._v("注册插件，如果需要使用非核心的一些功能，比如小地图、水印等，可以通过该方法进行注册。可链式调用。")]),v("p",[t._v("注意：插件需要在实例化"),v("code",[t._v("MindMap")]),t._v("前注册。")]),v("h3",[t._v("hasPlugin(plugin)")]),v("blockquote",[v("p",[t._v("v0.4.0+")])]),v("p",[t._v("获取是否注册了某个插件，返回的是插件在注册插件列表里的索引，为"),v("code",[t._v("-1")]),t._v("则代表插件没有注册。")]),v("h2",[t._v("静态属性")]),v("h3",[t._v("pluginList")]),v("blockquote",[v("p",[t._v("v0.3.0+")])]),v("p",[t._v("当前注册的所有插件列表。")]),v("h2",[t._v("实例方法")]),v("h3",[t._v("getSvgData()")]),v("blockquote",[v("p",[t._v("v0.3.0+")])]),v("p",[t._v("获取"),v("code",[t._v("svg")]),t._v("数据，返回一个对象，详细结构如下：")]),v("pre",{staticClass:"hljs"},[v("code",[t._v("{\n  svg, "),v("span",{staticClass:"hljs-comment"},[t._v("// Element，思维导图图形的整体svg元素，包括：svg（画布容器）、g（实际的思维导图组）")]),t._v("\n  svgHTML, "),v("span",{staticClass:"hljs-comment"},[t._v("// String，svg字符串，即html字符串，可以直接渲染到你准备的小地图容器内")]),t._v("\n  "),v("span",{staticClass:"hljs-attr"},[t._v("rect")]),t._v(": "),v("span",{staticClass:"hljs-comment"},[t._v("// Object，思维导图图形未缩放时的位置尺寸等信息")]),t._v("\n  origWidth, "),v("span",{staticClass:"hljs-comment"},[t._v("// Number，画布宽度")]),t._v("\n  origHeight, "),v("span",{staticClass:"hljs-comment"},[t._v("// Number，画布高度")]),t._v("\n  scaleX, "),v("span",{staticClass:"hljs-comment"},[t._v("// Number，思维导图图形的水平缩放值")]),t._v("\n  scaleY, "),v("span",{staticClass:"hljs-comment"},[t._v("// Number，思维导图图形的垂直缩放值")]),t._v("\n}\n")])]),v("h3",[t._v("render(callback)")]),v("ul",[v("li",[v("code",[t._v("callback")]),t._v("："),v("code",[t._v("v0.3.2+")]),t._v("，"),v("code",[t._v("Function")]),t._v("，当重新渲染完成时调用")])]),v("p",[t._v("触发整体渲染，会进行节点复用，性能较"),v("code",[t._v("reRender")]),t._v("会更好一点，如果只是节点位置变化了可以调用该方法进行渲染")]),v("h3",[t._v("reRender(callback)")]),v("ul",[v("li",[v("code",[t._v("callback")]),t._v("："),v("code",[t._v("v0.3.2+")]),t._v("，"),v("code",[t._v("Function")]),t._v("，当重新渲染完成时调用")])]),v("p",[t._v("整体重新渲染，会清空画布，节点也会重新创建，性能不好，慎重使用")]),v("h3",[t._v("resize()")]),v("p",[t._v("容器尺寸变化后，需要调用该方法进行适应")]),v("h3",[t._v("setMode(mode)")]),v("blockquote",[v("p",[t._v("v0.1.7+")])]),v("p",[t._v("切换模式为只读或编辑。")]),v("p",[v("code",[t._v("mode")]),t._v("：readonly、edit")]),v("h3",[t._v("on(event, fn)")]),v("p",[t._v("监听事件，事件列表：")]),v("table",[v("thead",[v("tr",[v("th",[t._v("事件名称")]),v("th",[t._v("描述")]),v("th",[t._v("回调参数")])])]),v("tbody",[v("tr",[v("td",[t._v("data_change")]),v("td",[t._v("渲染树数据变化，可以监听该方法获取最新数据")]),v("td",[t._v("data（当前渲染树数据）")])]),v("tr",[v("td",[t._v("view_data_change（v0.1.1+）")]),v("td",[t._v("视图变化数据，比如拖动或缩放时会触发")]),v("td",[t._v("data（当前视图状态数据）")])]),v("tr",[v("td",[t._v("back_forward")]),v("td",[t._v("前进或回退")]),v("td",[t._v("activeHistoryIndex（当前在历史数据数组里的索引）、length（当前历史数据数组的长度）")])]),v("tr",[v("td",[t._v("draw_click")]),v("td",[v("em",[t._v("画布的单击事件")])]),v("td",[t._v("e（事件对象）")])]),v("tr",[v("td",[t._v("svg_mousedown")]),v("td",[t._v("svg画布的鼠标按下事件")]),v("td",[t._v("e（事件对象）")])]),v("tr",[v("td",[t._v("mousedown")]),v("td",[t._v("el元素的鼠标按下事件")]),v("td",[t._v("e（事件对象）、this（Event事件类实例）")])]),v("tr",[v("td",[t._v("mousemove")]),v("td",[t._v("el元素的鼠标移动事件")]),v("td",[t._v("e（事件对象）、this（Event事件类实例）")])]),v("tr",[v("td",[t._v("drag")]),v("td",[t._v("如果是按住左键拖动的话会触发拖动事件")]),v("td",[t._v("e（事件对象）、this（Event事件类实例）")])]),v("tr",[v("td",[t._v("mouseup")]),v("td",[t._v("el元素的鼠标松开事件")]),v("td",[t._v("e（事件对象）、this（Event事件类实例）")])]),v("tr",[v("td",[t._v("mousewheel")]),v("td",[t._v("鼠标滚动事件")]),v("td",[t._v("e（事件对象）、dir（向上up还是向下down滚动）、this（Event事件类实例）")])]),v("tr",[v("td",[t._v("contextmenu")]),v("td",[t._v("svg画布的鼠标右键菜单事件")]),v("td",[t._v("e（事件对象）")])]),v("tr",[v("td",[t._v("node_click")]),v("td",[t._v("节点的单击事件")]),v("td",[t._v("this（节点实例）、e（事件对象）")])]),v("tr",[v("td",[t._v("node_mousedown")]),v("td",[t._v("节点的鼠标按下事件")]),v("td",[t._v("this（节点实例）、e（事件对象）")])]),v("tr",[v("td",[t._v("node_mouseup")]),v("td",[t._v("节点的鼠标松开事件")]),v("td",[t._v("this（节点实例）、e（事件对象）")])]),v("tr",[v("td",[t._v("node_dblclick")]),v("td",[t._v("节点的双击事件")]),v("td",[t._v("this（节点实例）、e（事件对象）")])]),v("tr",[v("td",[t._v("node_contextmenu")]),v("td",[t._v("节点的右键菜单事件")]),v("td",[t._v("e（事件对象）、this（节点实例）")])]),v("tr",[v("td",[t._v("node_mouseenter（v0.4.1+）")]),v("td",[t._v("节点的鼠标移入事件")]),v("td",[t._v("this（节点实例）、e（事件对象）")])]),v("tr",[v("td",[t._v("node_mouseleave（v0.4.1+）")]),v("td",[t._v("节点的鼠标移出事件")]),v("td",[t._v("this（节点实例）、e（事件对象）")])]),v("tr",[v("td",[t._v("before_node_active")]),v("td",[t._v("节点激活前事件")]),v("td",[t._v("this（节点实例）、activeNodeList（当前激活的所有节点列表）")])]),v("tr",[v("td",[t._v("node_active")]),v("td",[t._v("节点激活事件")]),v("td",[t._v("this（节点实例）、activeNodeList（当前激活的所有节点列表）")])]),v("tr",[v("td",[t._v("expand_btn_click")]),v("td",[t._v("节点展开或收缩事件")]),v("td",[t._v("this（节点实例）")])]),v("tr",[v("td",[t._v("before_show_text_edit")]),v("td",[t._v("节点文本编辑框即将打开事件")]),v("td")]),v("tr",[v("td",[t._v("hide_text_edit")]),v("td",[t._v("节点文本编辑框关闭事件")]),v("td",[t._v("textEditNode（文本编辑框DOM节点）、activeNodeList（当前激活的所有节点列表）")])]),v("tr",[v("td",[t._v("scale")]),v("td",[t._v("放大缩小事件")]),v("td",[t._v("scale（缩放比例）")])]),v("tr",[v("td",[t._v("node_img_dblclick（v0.2.15+）")]),v("td",[t._v("节点内图片的双击事件")]),v("td",[t._v("this（节点实例）、e（事件对象）")])]),v("tr",[v("td",[t._v("node_tree_render_end（v0.2.16+）")]),v("td",[t._v("节点树渲染完毕事件")]),v("td")]),v("tr",[v("td",[t._v("rich_text_selection_change（v0.4.0+）")]),v("td",[t._v("当注册了"),v("code",[t._v("RichText")]),t._v("插件时可用。当节点编辑时，文本选区发生改变时触发")]),v("td",[t._v("hasRange（是否存在选区）、rectInfo（选区的尺寸和位置信息）、formatInfo（选区的文本格式化信息）")])]),v("tr",[v("td",[t._v("transforming-dom-to-images（v0.4.0+）")]),v("td",[t._v("当注册了"),v("code",[t._v("RichText")]),t._v("插件时可用。当"),v("code",[t._v("svg")]),t._v("中存在"),v("code",[t._v("DOM")]),t._v("节点时，导出为图片时会将"),v("code",[t._v("DOM")]),t._v("节点转换为图片，转换过程中会触发该事件，可用通过该事件给用户提示，告知目前转换到的节点")]),v("td",[t._v("index（当前转换到的节点索引）、len（一共需要转换的节点数量）")])]),v("tr",[v("td",[t._v("node_dragging（v0.4.5+）")]),v("td",[t._v("当某个节点被拖拽时触发")]),v("td",[t._v("node（当前被拖拽的节点）")])]),v("tr",[v("td",[t._v("node_dragend（v0.4.5+）")]),v("td",[t._v("节点被拖拽结束时触发")]),v("td")]),v("tr",[v("td",[t._v("associative_line_click（v0.4.5+）")]),v("td",[t._v("点击某条关联线时触发")]),v("td",[t._v("path（连接线节点）、clickPath（不可见的点击线节点）、node（起始节点）、toNode（目标节点）")])]),v("tr",[v("td",[t._v("svg_mouseenter（v0.5.1+）")]),v("td",[t._v("鼠标移入svg画布时触发")]),v("td",[t._v("e（事件对象）")])]),v("tr",[v("td",[t._v("svg_mouseleave（v0.5.1+）")]),v("td",[t._v("鼠标移出svg画布时触发")]),v("td",[t._v("e（事件对象）")])])])]),v("h3",[t._v("emit(event, ...args)")]),v("p",[t._v("触发事件，可以是上面表格里的事件，也可以是自定义事件")]),v("h3",[t._v("off(event, fn)")]),v("p",[t._v("解绑事件")]),v("h3",[t._v("setTheme(theme)")]),v("p",[t._v("切换主题，可选主题见上面的选项表格")]),v("h3",[t._v("getTheme()")]),v("p",[t._v("获取当前主题")]),v("h3",[t._v("setThemeConfig(config)")]),v("p",[t._v("设置主题配置，"),v("code",[t._v("config")]),t._v("同上面选项表格里的选项"),v("code",[t._v("themeConfig")])]),v("h3",[t._v("getCustomThemeConfig()")]),v("p",[t._v("获取自定义主题配置")]),v("h3",[t._v("getThemeConfig(prop)")]),v("p",[t._v("获取某个主题配置属性值")]),v("h3",[t._v("getConfig("),v("em",[t._v("prop")]),t._v(")")]),v("blockquote",[v("p",[t._v("0.2.24+")])]),v("p",[v("code",[t._v("prop")]),t._v("：获取指定配置的值，不传则返回整个配置")]),v("p",[t._v("获取配置，即"),v("code",[t._v("new MindMap(opt)")]),t._v("的"),v("code",[t._v("opt")])]),v("h3",[t._v("updateConfig("),v("em",[t._v("opt")]),t._v(" = {})")]),v("blockquote",[v("p",[t._v("0.2.24+")])]),v("p",[v("code",[t._v("opt")]),t._v("：要更新的配置")]),v("p",[t._v("更新配置，即更新"),v("code",[t._v("new MindMap(opt)")]),t._v("的"),v("code",[t._v("opt")]),t._v("，可以只更新部分数据，比如：")]),v("pre",{staticClass:"hljs"},[v("code",[t._v("mindMap.updateConfig({\n    "),v("span",{staticClass:"hljs-attr"},[t._v("enableFreeDrag")]),t._v(": "),v("span",{staticClass:"hljs-literal"},[t._v("true")]),v("span",{staticClass:"hljs-comment"},[t._v("// 开启节点自由拖拽")]),t._v("\n})\n")])]),v("p",[t._v("该方法只做更新配置的事情，没有其他副作用，比如触发画布重新渲染之类的")]),v("h3",[t._v("getLayout()")]),v("p",[t._v("获取当前的布局结构")]),v("h3",[t._v("setLayout(layout)")]),v("p",[t._v("设置布局结构，可选值见上面选项表格的"),v("code",[t._v("layout")]),t._v("字段")]),v("h3",[t._v("execCommand(name, ...args)")]),v("p",[t._v("执行命令，每执行一个命令就会在历史堆栈里添加一条记录用于回退或前进。所有命令如下：")]),v("table",[v("thead",[v("tr",[v("th",[t._v("命令名称")]),v("th",[t._v("描述")]),v("th",[t._v("参数")])])]),v("tbody",[v("tr",[v("td",[t._v("SELECT_ALL")]),v("td",[t._v("全选")]),v("td")]),v("tr",[v("td",[t._v("BACK")]),v("td",[t._v("回退指定的步数")]),v("td",[t._v("step（要回退的步数，默认为1）")])]),v("tr",[v("td",[t._v("FORWARD")]),v("td",[t._v("前进指定的步数")]),v("td",[t._v("step（要前进的步数，默认为1）")])]),v("tr",[v("td",[t._v("INSERT_NODE")]),v("td",[t._v("插入同级节点，操作节点为当前激活的节点或指定节点，如果有多个激活节点，只会对第一个有效")]),v("td",[t._v("openEdit（v0.4.6+，是否激活新插入的节点并进入编辑模式，默认为"),v("code",[t._v("true")]),t._v("）、 appointNodes（v0.4.7+，可选，指定节点，指定多个节点可以传一个数组）、 appointData（可选，指定新创建节点的数据，比如{text: 'xxx', ...}，详细结构可以参考"),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js"}},[t._v("https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js")]),t._v("）")])]),v("tr",[v("td",[t._v("INSERT_CHILD_NODE")]),v("td",[t._v("插入子节点，操作节点为当前激活的节点或指定节点")]),v("td",[t._v("openEdit（v0.4.6+，是否激活新插入的节点并进入编辑模式，默认为"),v("code",[t._v("true")]),t._v("）、 appointNodes（v0.4.7+，可选，指定节点，指定多个节点可以传一个数组）、 appointData（可选，指定新创建节点的数据，比如{text: 'xxx', ...}，详细结构可以参考"),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js"}},[t._v("https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js")]),t._v("）")])]),v("tr",[v("td",[t._v("UP_NODE")]),v("td",[t._v("上移节点，操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点或在列表里的第一个节点使用无效")]),v("td")]),v("tr",[v("td",[t._v("DOWN_NODE")]),v("td",[t._v("操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点或在列表里的最后一个节点使用无效")]),v("td")]),v("tr",[v("td",[t._v("REMOVE_NODE")]),v("td",[t._v("删除节点，操作节点为当前激活的节点或指定节点")]),v("td",[t._v("appointNodes（v0.4.7+，可选，指定节点，指定多个节点可以传一个数组）")])]),v("tr",[v("td",[t._v("PASTE_NODE")]),v("td",[t._v("粘贴节点到节点，操作节点为当前激活的节点")]),v("td",[t._v("data（要粘贴的节点数据，一般通过"),v("code",[t._v("renderer.copyNode()")]),t._v("方法和"),v("code",[t._v("renderer.cutNode()")]),t._v("方法获取）")])]),v("tr",[v("td",[t._v("CUT_NODE")]),v("td",[t._v("剪切节点，操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点使用无效")]),v("td",[t._v("callback(回调函数，剪切的节点数据会通过调用该函数并通过参数返回)")])]),v("tr",[v("td",[t._v("SET_NODE_STYLE")]),v("td",[t._v("修改节点样式")]),v("td",[t._v("node（要设置样式的节点）、prop（样式属性）、value（样式属性值）、isActive（布尔值，是否设置的是激活状态的样式）")])]),v("tr",[v("td",[t._v("SET_NODE_ACTIVE")]),v("td",[t._v("设置节点是否激活")]),v("td",[t._v("node（要设置的节点）、active（布尔值，是否激活）")])]),v("tr",[v("td",[t._v("CLEAR_ACTIVE_NODE")]),v("td",[t._v("清除当前已激活节点的激活状态，操作节点为当前激活的节点")]),v("td")]),v("tr",[v("td",[t._v("SET_NODE_EXPAND")]),v("td",[t._v("设置节点是否展开")]),v("td",[t._v("node（要设置的节点）、expand（布尔值，是否展开）")])]),v("tr",[v("td",[t._v("EXPAND_ALL")]),v("td",[t._v("展开所有节点")]),v("td")]),v("tr",[v("td",[t._v("UNEXPAND_ALL")]),v("td",[t._v("收起所有节点")]),v("td")]),v("tr",[v("td",[t._v("UNEXPAND_TO_LEVEL（v0.2.8+）")]),v("td",[t._v("展开到指定层级")]),v("td",[t._v("level（要展开到的层级，1、2、3...）")])]),v("tr",[v("td",[t._v("SET_NODE_DATA")]),v("td",[t._v("更新节点数据，即更新节点数据对象里"),v("code",[t._v("data")]),t._v("对象的数据")]),v("td",[t._v("node（要设置的节点）、data（对象，要更新的数据，如"),v("code",[t._v("{expand: true}")]),t._v("）")])]),v("tr",[v("td",[t._v("SET_NODE_TEXT")]),v("td",[t._v("设置节点文本")]),v("td",[t._v("node（要设置的节点）、text（要设置的文本字符串，换行可以使用"),v("code",[t._v("\\n")]),t._v("）、richText（v0.4.0+，如果要设置的是富文本字符，需要设为"),v("code",[t._v("true")]),t._v("）")])]),v("tr",[v("td",[t._v("SET_NODE_IMAGE")]),v("td",[t._v("设置节点图片")]),v("td",[t._v("node（要设置的节点）、imgData（对象，图片信息，结构为："),v("code",[t._v("{url, title, width, height}")]),t._v("，图片的宽高必须要传）")])]),v("tr",[v("td",[t._v("SET_NODE_ICON")]),v("td",[t._v("设置节点图标")]),v("td",[t._v("node（要设置的节点）、icons（数组，预定义的图片名称组成的数组，可用图标可在"),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/svg/icons.js"}},[t._v("https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/svg/icons.js")]),t._v("文件里的"),v("code",[t._v("nodeIconList")]),t._v("列表里获取到，图标名称为"),v("code",[t._v("type_name")]),t._v("，如"),v("code",[t._v("['priority_1']")]),t._v("）")])]),v("tr",[v("td",[t._v("SET_NODE_HYPERLINK")]),v("td",[t._v("设置节点超链接")]),v("td",[t._v("node（要设置的节点）、link（超链接地址）、title（超链接名称，可选）")])]),v("tr",[v("td",[t._v("SET_NODE_NOTE")]),v("td",[t._v("设置节点备注")]),v("td",[t._v("node（要设置的节点）、note（备注文字）")])]),v("tr",[v("td",[t._v("SET_NODE_TAG")]),v("td",[t._v("设置节点标签")]),v("td",[t._v("node（要设置的节点）、tag（字符串数组，内置颜色信息可在"),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/utils/constant.js"}},[t._v("https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/utils/constant.js")]),t._v("里获取到）")])]),v("tr",[v("td",[t._v("INSERT_AFTER（v0.1.5+）")]),v("td",[t._v("将节点移动到另一个节点的后面")]),v("td",[t._v("node（要移动的节点）、 exist（目标节点）")])]),v("tr",[v("td",[t._v("INSERT_BEFORE（v0.1.5+）")]),v("td",[t._v("将节点移动到另一个节点的前面")]),v("td",[t._v("node（要移动的节点）、 exist（目标节点）")])]),v("tr",[v("td",[t._v("MOVE_NODE_TO（v0.1.5+）")]),v("td",[t._v("移动一个节点作为另一个节点的子节点")]),v("td",[t._v("node（要移动的节点）、 toNode（目标节点）")])]),v("tr",[v("td",[t._v("ADD_GENERALIZATION（v0.2.0+）")]),v("td",[t._v("添加节点概要")]),v("td",[t._v("data（概要的数据，对象格式，节点的数字段都支持，默认为{text: '概要'}）")])]),v("tr",[v("td",[t._v("REMOVE_GENERALIZATION（v0.2.0+）")]),v("td",[t._v("删除节点概要")]),v("td")]),v("tr",[v("td",[t._v("SET_NODE_CUSTOM_POSITION（v0.2.0+）")]),v("td",[t._v("设置节点自定义位置")]),v("td",[t._v("node（要设置的节点）、 left（自定义的x坐标，默认为undefined）、 top（自定义的y坐标，默认为undefined）")])]),v("tr",[v("td",[t._v("RESET_LAYOUT（v0.2.0+）")]),v("td",[t._v("一键整理布局")]),v("td")]),v("tr",[v("td",[t._v("SET_NODE_SHAPE（v0.2.4+）")]),v("td",[t._v("设置节点形状")]),v("td",[t._v("node（要设置的节点）、shape（形状，全部形状：https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/Shape.js）")])])])]),v("h3",[t._v("setData(data)")]),v("p",[t._v("动态设置思维导图数据，纯节点数据")]),v("p",[v("code",[t._v("data")]),t._v("：思维导图结构数据")]),v("h3",[t._v("setFullData("),v("em",[t._v("data")]),t._v(")")]),v("blockquote",[v("p",[t._v("v0.2.7+")])]),v("p",[t._v("动态设置思维导图数据，包括节点数据、布局、主题、视图")]),v("p",[v("code",[t._v("data")]),t._v("：完整数据，结构可参考"),v("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exportFullData.json"}},[t._v("exportFullData")])]),v("h3",[t._v("getData(withConfig)")]),v("blockquote",[v("p",[t._v("v0.2.9+")])]),v("p",[t._v("获取思维导图数据")]),v("p",[v("code",[t._v("withConfig")]),t._v("："),v("code",[t._v("Boolean")]),t._v("，默认为"),v("code",[t._v("false")]),t._v("，即获取的数据只包括节点树，如果传"),v("code",[t._v("true")]),t._v("则会包含主题、布局、视图等数据")]),v("h3",[t._v("export(type, isDownload, fileName)")]),v("blockquote",[v("p",[t._v("需要先注册"),v("code",[t._v("Export")]),t._v("插件")])]),v("p",[t._v("导出")]),v("p",[v("code",[t._v("type")]),t._v("：要导出的类型，可选值：png、svg、json、pdf（v0.2.1+）、smm（本质也是json）")]),v("p",[v("code",[t._v("isDownload")]),t._v("：是否需要直接触发下载，布尔值，默认为"),v("code",[t._v("false")])]),v("p",[v("code",[t._v("fileName")]),t._v("：（v0.1.6+）导出文件的名称，默认为"),v("code",[t._v("思维导图")])]),v("h3",[t._v("toPos(x, y)")]),v("blockquote",[v("p",[t._v("v0.1.5+")])]),v("p",[t._v("将浏览器可视窗口的坐标转换成相对于画布的坐标")]),v("h3",[t._v("addPlugin(plugin, opt)")]),v("blockquote",[v("p",[t._v("v0.4.0+")])]),v("p",[t._v("注册插件，使用"),v("code",[t._v("MindMap.usePlugin")]),t._v("注册插件只能在实例化之前，实例化后注册的插件是不会生效的，所以如果想在实例化后注册插件可以使用实例的"),v("code",[t._v("addPlugin")]),t._v("方法。")]),v("h3",[t._v("removePlugin(plugin)")]),v("blockquote",[v("p",[t._v("v0.4.0+")])]),v("p",[t._v("移除注册的插件，无论是通过"),v("code",[t._v("usePlugin")]),t._v("还是"),v("code",[t._v("addPlugin")]),t._v("方法注册的插件都可以移除。")])])}],a={},s=a,n=_("2877"),o=Object(n["a"])(s,d,e,!1,null,null,null);v["default"]=o.exports}}]);