(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1a026e37"],{"097d":function(t,e,i){"use strict";var r=i("5ca1"),a=i("8378"),n=i("7726"),s=i("ebd6"),o=i("bcaa");r(r.P+r.R,"Promise",{finally:function(t){var e=s(this,a.Promise||n.Promise),i="function"==typeof t;return this.then(i?function(i){return o(e,t()).then(function(){return i})}:t,i?function(i){return o(e,t()).then(function(){throw i})}:t)}})},"0c13":function(t,e,i){},"2cfc":function(t,e,i){},"41ca":function(t,e,i){"use strict";var r=i("0c13"),a=i.n(r);a.a},"4e81":function(t,e,i){"use strict";var r=i("c38d"),a=i.n(r);a.a},"5d58":function(t,e,i){t.exports=i("d8d6")},"67bb":function(t,e,i){t.exports=i("f921")},"69d3":function(t,e,i){i("6718")("asyncIterator")},"765d":function(t,e,i){i("6718")("observable")},8993:function(t,e,i){var r=i("5d58"),a=i("67bb");function n(t){return n="function"===typeof a&&"symbol"===typeof r?function(t){return typeof t}:function(t){return t&&"function"===typeof a&&t.constructor===a&&t!==a.prototype?"symbol":typeof t},n(t)}function s(e){return"function"===typeof a&&"symbol"===n(r)?t.exports=s=function(t){return n(t)}:t.exports=s=function(t){return t&&"function"===typeof a&&t.constructor===a&&t!==a.prototype?"symbol":n(t)},s(e)}t.exports=s},"8b24":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"flex flex-center bg-grey-3"},[i("div",{staticClass:"row q-gutter-md q-mt-md self-start"},[i("q-dialog",{attrs:{persistent:""},model:{value:"done"===t.fermenterOverview.machineStatus,callback:function(e){t.$set(t.fermenterOverview,"machineStatus==='done'",e)},expression:"fermenterOverview.machineStatus==='done'"}},[i("q-card",[i("q-card-section",{staticClass:"row items-center"},[i("q-avatar",{attrs:{icon:"mdi-progress-check",color:"deep-orange","text-color":"white"}}),i("span",{staticClass:"q-ml-sm"},[t._v("太好了！发酵过程已经完成！")])],1),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{outline:"",label:"确定",color:"deep-orange"}})],1)],1)],1),i("div",[i("q-card",{staticClass:"steps-card"},[i("q-card-section",{staticClass:"flex items-baseline"},[i("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"mdi-counter"}}),i("span",{staticClass:"text-h6"},[t._v("发酵步骤")])],1),i("q-separator",{attrs:{inset:""}}),"standby"===t.fermenterOverview.machineStatus?i("q-card-section",[i("q-input",{attrs:{"input-style":{fontSize:"24px"},label:"啤酒名称","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"请输入啤酒名称"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("q-icon",{staticStyle:{color:"darkgoldenrod"},attrs:{name:"mdi-beer"}})]},proxy:!0}],null,!1,3358985639),model:{value:t.beerName,callback:function(e){t.beerName=e},expression:"beerName"}}),t._l(t.fermentationSteps,function(e,r){return i("div",{key:r,staticClass:"row items-center justify-around"},[i("div",[i("q-icon",{staticStyle:{"font-size":"24px",color:"steelblue"},attrs:{name:"mdi-dice-"+(r+1)}})],1),i("q-space"),i("div",[i("q-input",{staticClass:"step-input",attrs:{"input-style":{textAlign:"right",fontSize:"24px"},type:"number",label:"发酵天数","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"请输入发酵天数"},function(t){return t>0||"请输入正确的发酵天数"}]},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"mdi-calendar-clock"}})]},proxy:!0}],null,!0),model:{value:e.days,callback:function(i){t.$set(e,"days",t._n(i))},expression:"step.days"}})],1),i("q-space"),i("div",[i("q-input",{staticClass:"step-input",attrs:{"input-style":{textAlign:"right",fontSize:"24px"},type:"number",label:"发酵温度",rules:[function(t){return null!==t&&""!==t||"请输入发酵温度"},function(t){return t>0&&t<30||"请输入正确的发酵温度"}]},scopedSlots:t._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"mdi-temperature-celsius"}})]},proxy:!0}],null,!0),model:{value:e.temp,callback:function(i){t.$set(e,"temp",t._n(i))},expression:"step.temp"}})],1),i("q-space"),i("div",[i("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.fermentationSteps.length===r+1,expression:"fermentationSteps.length === index + 1"}],attrs:{round:"",dense:"",flat:"",color:"deep-orange",icon:"mdi-plus-circle-outline"},on:{click:function(e){return t.handleAddStep(r)}}}),i("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.fermentationSteps.length>r+1,expression:"fermentationSteps.length > index + 1"}],attrs:{round:"",dense:"",flat:"",color:"blue",icon:"mdi-minus-circle-outline"},on:{click:function(e){return t.handleDelStep(r)}}})],1)],1)})],2):i("q-card-section",[i("q-toolbar",{staticClass:"bg-grey-2 glossy shadow-1"},[i("q-toolbar-title",[i("q-icon",{staticStyle:{color:"darkgoldenrod"},attrs:{name:"mdi-beer"}}),t._v("\n              "+t._s(t.fermenterOverview.beerName)+"\n            ")],1)],1),i("q-list",{attrs:{bordered:"",separator:""}},t._l(t.fermenterOverview.fermentationSteps,function(e,r){return i("q-item",{key:r,class:t.stepBgColor(r)},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{staticStyle:{"font-size":"24px",color:"steelblue"},attrs:{name:"mdi-dice-"+(r+1)}})],1),i("q-item-section",[i("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v("发酵时长")]),i("q-item-label",{staticClass:"text-h6"},[t._v(t._s(e.days)+" 天")])],1),i("q-item-section",[i("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v("发酵温度")]),i("q-item-label",{staticClass:"text-h6"},[t._v(t._s(e.temp)+" ℃")])],1),i("q-item-section",[i("q-item-label",{staticClass:"text-h6"},[t._v(t._s(t.stepProgressText(r)))])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:t.stepIcon(r),color:"green"}})],1)],1)}),1)],1)],1)],1),i("div",{staticClass:"column"},[i("div",{staticClass:"row q-gutter-md"},[i("div",{staticClass:"cursor-pointer",on:{click:t.switchGravityUnit}},[i("q-card",{staticClass:"bottom-card"},[i("q-card-section",{staticClass:"flex items-baseline"},[i("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"mdi-test-tube"}}),i("span",{staticClass:"text-h6"},[t._v("初始比重")])],1),i("q-separator",{attrs:{inset:""}}),i("q-card-section",{staticClass:"flex justify-center"},[i("div",{staticClass:"text-h3"},[t._v(t._s(t.fermenterOverview.hydrometerData.originalGravity?t.displayedGravity(t.fermenterOverview.hydrometerData.originalGravity):"N/A"))]),i("div",{staticClass:"text-caption"},[t._v(t._s(t.displayedGravityUnit))])])],1)],1),i("div",{staticClass:"cursor-pointer",on:{click:t.switchGravityUnit}},[i("q-card",{staticClass:"bottom-card"},[i("q-card-section",{staticClass:"flex items-center"},[i("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"mdi-test-tube"}}),i("span",{staticClass:"text-h6"},[t._v("当前比重")]),i("q-space"),i("q-icon",{directives:[{name:"show",rawName:"v-show",value:t.fermenterOverview.hydrometerData.originalGravity&&t.fermenterOverview.hydrometerData.currentGravity,expression:"fermenterOverview.hydrometerData.originalGravity && fermenterOverview.hydrometerData.currentGravity"}],staticStyle:{"font-size":"2rem"},attrs:{name:t.hydroMeterBattery.icon,color:t.hydroMeterBattery.color}},[i("q-tooltip",{attrs:{anchor:"top left",self:"center middle"}},[t._v("\n                  电子比重计电量："+t._s(t.fermenterOverview.hydrometerData.batteryLevel)+"%\n                ")])],1)],1),i("q-separator",{attrs:{inset:""}}),i("q-card-section",{staticClass:"flex justify-center"},[i("div",{staticClass:"text-h3"},[t._v("\n                "+t._s(t.fermenterOverview.hydrometerData.currentGravity?t.displayedGravity(t.fermenterOverview.hydrometerData.currentGravity):"N/A")+"\n                "),i("q-badge",{directives:[{name:"show",rawName:"v-show",value:t.fermenterOverview.hydrometerData.originalGravity&&t.fermenterOverview.hydrometerData.currentGravity,expression:"fermenterOverview.hydrometerData.originalGravity && fermenterOverview.hydrometerData.currentGravity"}],attrs:{color:"orange",floating:"",transparent:""}},[t._v("\n                  ABV "+t._s(t.alcoholByVolume)+"%\n                ")])],1),i("div",{staticClass:"text-caption"},[t._v(t._s(t.displayedGravityUnit))])])],1)],1),i("div",[i("q-card",{staticClass:"bottom-card"},[i("q-card-section",{staticClass:"flex items-center"},[i("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"mdi-blender"}}),i("div",{staticClass:"text-h6"},[t._v("工作状态")]),i("q-space"),i("q-icon",{directives:[{name:"show",rawName:"v-show",value:t.fermenterOverview.isCooling,expression:"fermenterOverview.isCooling"}],staticStyle:{color:"dodgerblue","font-size":"2rem"},attrs:{name:"mdi-snowflake"}},[i("q-tooltip",{attrs:{anchor:"top middle",self:"center middle"}},[t._v("\n                  正在制冷\n                ")])],1),i("q-icon",{directives:[{name:"show",rawName:"v-show",value:t.fermenterOverview.isHeating,expression:"fermenterOverview.isHeating"}],staticStyle:{color:"orangered","font-size":"2rem"},attrs:{name:"mdi-fire"}},[i("q-tooltip",{attrs:{anchor:"top middle",self:"center middle"}},[t._v("\n                  正在加热\n                ")])],1)],1),i("q-separator",{attrs:{inset:""}}),i("q-card-section",{staticClass:"flex justify-center"},[i("q-btn",{staticClass:"full-width glossy",attrs:{color:"deep-orange",size:"20px",icon:t.machineStatusIcon,label:t.startButtonText,disable:t.startButtonDisabled},on:{click:t.handleStartBtnClick}})],1)],1)],1)]),i("div",{staticClass:"row q-mt-md"},[i("div",{staticClass:"q-mr-md cursor-pointer",on:{click:t.switchTempUnit}},[i("q-card",{staticClass:"thermometer-card"},[i("q-card-section",{staticClass:"flex items-baseline"},[i("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"mdi-thermometer"}}),i("span",{staticClass:"text-h6"},[t._v("目标温度")]),i("div",{staticClass:"text-h2"},[t._v(t._s(t.displayedTemp(t.fermenterOverview.setTemp).toFixed(1))+t._s(t.displayedTempUnit))])],1),i("q-separator",{attrs:{inset:""}}),i("q-card-section",[i("div",{staticClass:"row justify-center"},[i("div",[i("vue-thermometer",{attrs:{max:t.displayedTemp(28),min:t.displayedTemp(2),scale:"c"===t.tempUnit?"℃":"℉",options:t.setThermoMeterOption,value:t.displayedTemp(t.fermenterOverview.setTemp)}})],1)])])],1)],1),i("div",{staticClass:"q-mr-md cursor-pointer",on:{click:t.switchTempUnit}},[i("q-card",{staticClass:"thermometer-card"},[i("q-card-section",{staticClass:"flex items-baseline"},[i("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"mdi-thermometer"}}),i("div",{staticClass:"text-h6"},[t._v("麦芽汁温度")]),i("div",{staticClass:"text-h2"},[t._v(t._s(t.displayedTemp(t.fermenterOverview.wortTemp).toFixed(1))+t._s(t.displayedTempUnit))])],1),i("q-separator",{attrs:{inset:""}}),i("q-card-section",[i("div",{staticClass:"row justify-center"},[i("div",[i("vue-thermometer",{attrs:{max:t.displayedTemp(t.wortTempMax),min:t.displayedTemp(2),scale:"c"===t.tempUnit?"℃":"℉",options:t.wortThermoMeterOption,value:t.displayedTemp(t.fermenterOverview.wortTemp)}})],1)])])],1)],1),i("div",{staticClass:"cursor-pointer",on:{click:t.switchTempUnit}},[i("q-card",{staticClass:"thermometer-card"},[i("q-card-section",{staticClass:"flex items-baseline"},[i("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"mdi-thermometer"}}),i("div",{staticClass:"text-h6"},[t._v("发酵箱温度")]),i("div",{staticClass:"text-h2"},[t._v(t._s(t.displayedTemp(t.fermenterOverview.chamberTemp).toFixed(1))+t._s(t.displayedTempUnit))])],1),i("q-separator",{attrs:{inset:""}}),i("q-card-section",[i("div",{staticClass:"row justify-center"},[i("div",[i("vue-thermometer",{attrs:{max:t.displayedTemp(t.chamberTempMax),min:t.displayedTemp(2),scale:"c"===t.tempUnit?"℃":"℉",options:t.chamberThermoMeterOption,value:t.displayedTemp(t.fermenterOverview.chamberTemp)}})],1)])])],1)],1)])])],1),i("div",{staticClass:"q-my-md"},[i("q-card",{staticStyle:{width:"1128px"}},[i("q-card-section",{staticClass:"q-px-xl"},[i("q-list",{staticClass:"q-px-xl",attrs:{dense:""}},[i("q-item",[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"mdi-calendar-search"}})],1),i("q-item-section",[i("q-range",{attrs:{min:t.chartRangeModel.totalMinIndex,max:t.chartRangeModel.totalMaxIndex,step:t.chartRangeModel.step,"left-label-value":t.rawChartDataSeries.timeMark[t.chartRangeModel.defaultIndex.min],"right-label-value":t.rawChartDataSeries.timeMark[t.chartRangeModel.defaultIndex.max],readonly:t.chartRangeModel.totalMaxIndex+1<t.chartRangeModel.step,disable:t.chartRangeModel.totalMaxIndex<1,label:"",markers:"",snap:""},model:{value:t.chartRangeModel.defaultIndex,callback:function(e){t.$set(t.chartRangeModel,"defaultIndex",e)},expression:"chartRangeModel.defaultIndex"}})],1)],1)],1)],1),i("q-card-section",[i("ferm-chart",{attrs:{"gravity-unit":t.gravityUnit,"temp-unit":t.tempUnit,"received-data-series":t.slicedChartData}})],1)],1)],1)])},a=[],n=(i("551c"),i("06db"),i("097d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-thermometer",class:t.customClass},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height}},[i("g",[i("g",{attrs:{id:"11"}},t._l(t.ticks,function(e,r){return i("path",{directives:[{name:"show",rawName:"v-show",value:t.defaultOptions.thermo.ticksEnabled,expression:"defaultOptions.thermo.ticksEnabled"}],key:r,attrs:{stroke:t.defaultOptions.thermo.tickColor,"stroke-width":t.defaultOptions.thermo.tickWidth,"stroke-miterlimit":t.defaultOptions.thermo.tickWidth,id:"12"+r,d:t.offsetLine(r)}})}),0),i("circle",{attrs:{cx:t.roundDotPositionX,cy:t.glassHeight,r:.9*t.glassWidth+2,stroke:t.defaultOptions.thermo.frameColor,"stroke-width":"4",fill:t.defaultOptions.thermo.color}}),i("rect",{attrs:{fill:t.defaultOptions.thermo.frameColor,"fill-rule":"nonzero","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dashoffset":"0",ry:"16",rx:"16",y:t.glassOffset-2,x:t.baseXOffset-2,height:t.glassHeight+4,width:t.glassWidth+4,id:"14"}}),i("rect",{attrs:{fill:t.defaultOptions.thermo.backgroundColor,"fill-rule":"nonzero","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dashoffset":"0",ry:"16",rx:"16",y:t.glassOffset,x:t.baseXOffset,height:t.glassHeight,width:t.glassWidth,id:"15"}}),i("circle",{attrs:{cx:t.roundDotPositionX,cy:t.glassHeight,r:.9*t.glassWidth,stroke:t.defaultOptions.thermo.backgroundColor,"stroke-width":"4",fill:t.defaultOptions.thermo.color}}),i("rect",{attrs:{fill:t.defaultOptions.thermo.color,stroke:"#000000","stroke-width":"0","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"4","stroke-dashoffset":"0",ry:"8",rx:"8",x:t.baseXOffset+3,y:t.thermoOffset,width:t.thermoWidth,height:t.thermoHeight,id:"svg_18"}}),t._l(t.ticks,function(e,r){return i("text",{directives:[{name:"show",rawName:"v-show",value:t.defaultOptions.text.textEnabled,expression:"defaultOptions.text.textEnabled"}],key:r,attrs:{id:"svg_19"+r,fill:t.defaultOptions.text.color,stroke:t.defaultOptions.text.color,"stroke-width":"0",x:t.textSpacing,y:t.offsetText(r),"font-size":t.defaultOptions.text.fontSize,"font-family":t.defaultOptions.text.fontFamily,"text-anchor":"middle","xml:space":"preserve"}},[t._v(t._s(e)+t._s(t.scale))])})],2)])])}),s=[],o=i("8993"),c=i.n(o),l=(i("c5f6"),.75),m={props:{value:{type:Number,default:0,required:!1},min:{type:Number,default:-20,required:!1},max:{type:Number,default:25,required:!1},scale:{type:String,default:"°C",required:!1},options:{type:Object,required:!1},customClass:{type:String,required:!1}},created:function(){this.defaultOptions={text:{color:"black",fontSize:10,textAdjustmentY:2,fontFamily:"Arial",textEnabled:!0},thermo:{color:"#FF0000",backgroundColor:"#fcf9f9",frameColor:"black",ticks:10,ticksEnabled:!0,tickColor:"black",tickWidth:"1"},layout:{height:300,width:90}}},mounted:function(){null!==this.options&&void 0!==this.options&&this.mergeDefaultOptionsWithProp(this.options)},data:function(){return{defaultOptions:Object}},computed:{baseXOffset:function(){return this.defaultOptions.layout.width/5},width:function(){return this.defaultOptions.layout.width},height:function(){return this.defaultOptions.layout.height},textSpacing:function(){return this.width*l},tickStep:function(){return Math.abs(this.max-this.min)/(this.defaultOptions.thermo.ticks-1)},ticks:function(){for(var t=[],e=this.max,i=0;i<this.defaultOptions.thermo.ticks-1;i++)t.push(Math.round(e)),e-=this.tickStep;return t.push(Math.round(this.min)),t},thermoWidth:function(){return this.defaultOptions.layout.width/6},glassWidth:function(){return this.defaultOptions.layout.width/6+6},tickWidth:function(){return Math.ceil(this.defaultOptions.layout.width/12)},glassOffset:function(){return.02*this.defaultOptions.layout.height},glassHeight:function(){var t=.95*this.defaultOptions.layout.height;while(this.defaultOptions.layout.height-t<30)t-=1;return t},tickStepSize:function(){return this.glassHeight/this.defaultOptions.thermo.ticks},thermoOffset:function(){var t=Math.ceil(this.glassHeight-this.thermoHeight);return this.glassOffset+t},level:function(){return Math.ceil(100*(this.value-this.min)/(this.max-this.min))},thermoHeight:function(){return this.level*(this.glassHeight/100)+(100-this.level)/100*this.glassHeight*.075},roundDotPositionX:function(){return this.baseXOffset+.5*this.glassWidth},roundDot:function(){return"m74.829132,"+this.glassHeight+"a33.41457,32 0 1 1 -66.829132,0a33.41457,32 0 1 1 66.829132,0z"}},methods:{mergeDefaultOptionsWithProp:function(t){var e=this.defaultOptions;for(var i in t)if(null!==t[i]&&"object"===c()(t[i]))for(var r in t[i])void 0!==t[i][r]&&null!==t[i][r]&&(e[i][r]=t[i][r]);else e[i]=t[i]},offsetText:function(t){var e=this.tickStepSize/this.defaultOptions.thermo.ticks+this.glassOffset+this.defaultOptions.text.textAdjustmentY,i=t*this.tickStepSize;return Number(i)+Number(e)},offsetLine:function(t){var e=this.tickStepSize/this.defaultOptions.thermo.ticks+this.glassOffset,i=t*this.tickStepSize,r=t%2===0?"l"+Math.ceil(1.4*this.tickWidth):"l"+Math.ceil(this.tickWidth+this.tickWidth);i=Number(i)+Number(e)+r;var a="m"+Number(.4*this.defaultOptions.layout.width)+".121861,";return a+i+".121853,0"}},watch:{options:function(t){null!==t&&void 0!==t&&this.mergeDefaultOptionsWithProp(t)}}},h=m,d=(i("4e81"),i("2877")),u=Object(d["a"])(h,n,s,!1,null,"1274fc34",null),f=u.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"fermChart"}})},v=[],g={name:"fermChart",props:{gravityUnit:{type:String,default:"sg",required:!0},tempUnit:{type:String,default:"c",required:!0},receivedDataSeries:{type:Object,default:{timeMark:[],setTemp:[],wortTemp:[],chamberTemp:[],gravitySg:[]},required:!0}},data:function(){return{theChart:null,chartSetting:{wortTemp:{labelName:"麦芽汁温度",color:"orangered"},chamberTemp:{labelName:"发酵箱温度",color:"dodgerblue"},setTemp:{labelName:"目标温度",color:"rebeccapurple"},gravity:{labelName:"麦芽汁比重",color:"limegreen"},lineSmooth:!0,xAxisLabel:"时 间 线",yAxisLabel:{temp:"温 度",gravity:"比 重"}}}},computed:{gravityUnitFormat:function(){return"p"===this.gravityUnit?{unit:"°P",decimal:2}:{unit:"SG",decimal:3}},tempUnitFormat:function(){return"c"===this.tempUnit?{unit:"℃",decimal:1}:{unit:"℉",decimal:1}},chartDataSeries:function(){var t;return t="p"===this.gravityUnit?this.receivedDataSeries.gravitySg.map(this.convertSg2P):this.receivedDataSeries.gravitySg,"c"===this.tempUnit?{timeMark:this.receivedDataSeries.timeMark,setTemp:this.receivedDataSeries.setTemp,wortTemp:this.receivedDataSeries.wortTemp,chamberTemp:this.receivedDataSeries.chamberTemp,gravity:t}:{timeMark:this.receivedDataSeries.timeMark,setTemp:this.receivedDataSeries.setTemp.map(this.convertC2F),wortTemp:this.receivedDataSeries.wortTemp.map(this.convertC2F),chamberTemp:this.receivedDataSeries.chamberTemp.map(this.convertC2F),gravity:t}},chartOption:function(){var t=this;return{legend:{data:[{name:this.chartSetting.wortTemp.labelName,textStyle:{color:this.chartSetting.wortTemp.color}},{name:this.chartSetting.chamberTemp.labelName,textStyle:{color:this.chartSetting.chamberTemp.color}},{name:this.chartSetting.setTemp.labelName,textStyle:{color:this.chartSetting.setTemp.color}},{name:this.chartSetting.gravity.labelName,textStyle:{color:this.chartSetting.gravity.color}}]},tooltip:{trigger:"axis"},dataset:{source:this.chartDataSeries},grid:{containLabel:!0},xAxis:{type:"time",offset:0,name:this.chartSetting.xAxisLabel,nameLocation:"center",nameGap:40,nameTextStyle:{fontSize:18,fontWeight:"bold"}},yAxis:[{type:"value",name:this.chartSetting.yAxisLabel.temp+"(".concat(this.tempUnitFormat.unit,")"),nameLocation:"end",nameRotate:360,nameGap:20,nameTextStyle:{fontSize:18,fontWeight:"bold"},min:function(t){return Math.floor(t.min-1)},max:function(t){return Math.ceil(t.max+1)},minInterval:.5,maxInterval:1.5,axisLabel:{formatter:function(e){return e.toFixed(t.tempUnitFormat.decimal)+t.tempUnitFormat.unit}}},{type:"value",name:this.chartSetting.yAxisLabel.gravity+"(".concat(this.gravityUnitFormat.unit,")"),nameLocation:"end",nameRotate:360,nameGap:20,nameTextStyle:{fontSize:18,fontWeight:"bold"},min:function(e){return(.99*e.min).toFixed(t.gravityUnitFormat.decimal)},max:function(e){return(1.01*e.max).toFixed(t.gravityUnitFormat.decimal)},splitLine:{show:!1},axisLabel:{formatter:function(e){return e.toFixed(t.gravityUnitFormat.decimal)+t.gravityUnitFormat.unit}}}],series:[{name:this.chartSetting.wortTemp.labelName,type:"line",smooth:this.chartSetting.lineSmooth,lineStyle:{width:3,color:this.chartSetting.wortTemp.color},itemStyle:{color:this.chartSetting.wortTemp.color},yAxisIndex:0,encode:{x:"timeMark",y:"wortTemp"}},{name:this.chartSetting.chamberTemp.labelName,type:"line",smooth:this.chartSetting.lineSmooth,lineStyle:{width:3,color:this.chartSetting.chamberTemp.color},itemStyle:{color:this.chartSetting.chamberTemp.color},yAxisIndex:0,encode:{x:"timeMark",y:"chamberTemp"}},{name:this.chartSetting.setTemp.labelName,type:"line",smooth:this.chartSetting.lineSmooth,lineStyle:{width:3,color:this.chartSetting.setTemp.color},itemStyle:{color:this.chartSetting.setTemp.color},yAxisIndex:0,encode:{x:"timeMark",y:"setTemp"}},{name:this.chartSetting.gravity.labelName,type:"line",smooth:this.chartSetting.lineSmooth,yAxisIndex:1,lineStyle:{width:3,color:this.chartSetting.gravity.color},itemStyle:{color:this.chartSetting.gravity.color},encode:{x:"timeMark",y:"gravity"}}]}}},created:function(){},watch:{gravityUnit:function(){this.drawFermChart()},tempUnit:function(){this.drawFermChart()},receivedDataSeries:function(){this.drawFermChart()}},mounted:function(){this.drawFermChart()},methods:{convertSg2P:function(t){return t?1111.14*t-616.868-630.272*Math.pow(t,2)+135.997*Math.pow(t,3):t},convertC2F:function(t){return t?1.8*t+32:t},drawFermChart:function(){this.theChart=this.$echarts.init(document.getElementById("fermChart")),this.theChart.setOption(this.chartOption),window.addEventListener("resize",function(){this.chartOption.theChart.resize()})}}},y=g,w=(i("a698"),Object(d["a"])(y,p,v,!1,null,"e67a0612",null)),x=w.exports,b={name:"PageIndex",components:{VueThermometer:f,FermChart:x},watch:{rawChartDataSeries:function(){this.updateChartRange()},watchMachineRunning:function(){var t;"running"===this.watchMachineRunning?(setTimeout(this.updateChartData,1e4),t=setInterval(this.updateChartData,864e5/this.chartRangeModel.step)):"standby"===this.watchMachineRunning&&(clearInterval(t),this.$q.sessionStorage.has("storedChartData")&&this.$q.sessionStorage.remove("storedChartData"))}},methods:{handleAddStep:function(t){this.fermentationSteps.length<6&&this.fermentationSteps[t].days&&this.fermentationSteps[t].temp&&(this.fermentationSteps[t].days=Math.round(this.fermentationSteps[t].days),this.fermentationSteps.push({days:"",temp:""}))},handleDelStep:function(t){this.fermentationSteps.splice(t,1)},handleStartBtnClick:function(){var t=this;"standby"===this.fermenterOverview.machineStatus?(this.fermentationSteps[this.fermentationSteps.length-1].days&&this.fermentationSteps[this.fermentationSteps.length-1].temp||this.fermentationSteps.splice(this.fermentationSteps.length-1,1),this.fermenterOverview.beerName=this.beerName,this.fermenterOverview.fermentationSteps=this.fermentationSteps,this.isRequestingBackend=!0,this.$axios.post("/fermentation",{beerName:this.beerName,fermentationSteps:this.fermentationSteps}).then(function(e){t.fermenterOverview.machineStatus="running",t.$q.notify({color:"info",icon:"mdi-checkbox-marked-circle-outline",message:"发酵步骤已成功发送至主控板，发酵开始!"})}).catch(function(e){console.log(e),t.$q.notify({color:"negative",icon:"mdi-close-circle-outline",message:"Error: 向主控板发送发酵步骤时出现错误!"})}).finally(function(){t.isRequestingBackend=!1})):"running"===this.fermenterOverview.machineStatus&&this.confirmAbortion()},confirmAbortion:function(){var t=this;this.$q.dialog({title:"确认终止发酵",message:"是否确认终止目前正在进行的发酵流程？",ok:{push:!0},cancel:{push:!0,color:"negative"},persistent:!0}).onOk(function(){t.isRequestingBackend=!0,t.$axios.get("/abort").then(function(e){t.fermenterOverview.machineStatus="standby",t.$q.notify({color:"info",icon:"mdi-checkbox-marked-circle-outline",message:"发酵已经被人为终止"})}).catch(function(e){console.log(e),t.$q.notify({color:"negative",icon:"mdi-close-circle-outline",message:"Error: 无法中断发酵过程!"})}).finally(function(){t.isRequestingBackend=!1})}).onCancel(function(){console.log(">>>> Cancel")})},stepIcon:function(t){return t>this.fermenterOverview.currentFermentationStepIndex?"mdi-circle-outline":t<this.fermenterOverview.currentFermentationStepIndex?"mdi-check-circle":this.fermenterOverview.currentFermentationStepPercentage>0&&this.fermenterOverview.currentFermentationStepPercentage<=15?"mdi-circle-slice-1":this.fermenterOverview.currentFermentationStepPercentage>15&&this.fermenterOverview.currentFermentationStepPercentage<=30?"mdi-circle-slice-2":this.fermenterOverview.currentFermentationStepPercentage>30&&this.fermenterOverview.currentFermentationStepPercentage<=45?"mdi-circle-slice-3":this.fermenterOverview.currentFermentationStepPercentage>45&&this.fermenterOverview.currentFermentationStepPercentage<=55?"mdi-circle-slice-4":this.fermenterOverview.currentFermentationStepPercentage>55&&this.fermenterOverview.currentFermentationStepPercentage<=70?"mdi-circle-slice-5":this.fermenterOverview.currentFermentationStepPercentage>70&&this.fermenterOverview.currentFermentationStepPercentage<=85?"mdi-circle-slice-6":"mdi-circle-slice-7"},stepBgColor:function(t){return t>this.fermenterOverview.currentFermentationStepIndex?"bg-grey-3":t<this.fermenterOverview.currentFermentationStepIndex?"bg-grey-5":""},stepProgressText:function(t){return t>this.fermenterOverview.currentFermentationStepIndex?"尚未开始":t<this.fermenterOverview.currentFermentationStepIndex?"已经完成":"正在进行 "+this.fermenterOverview.currentFermentationStepPercentage+"%"},displayedGravity:function(t){if("sg"===this.gravityUnit)return t.toFixed(3);var e=t,i=1111.14*e-616.868-630.272*Math.pow(e,2)+135.997*Math.pow(e,3);return i.toFixed(2)},switchGravityUnit:function(){"sg"===this.gravityUnit?this.gravityUnit="p":this.gravityUnit="sg"},displayedTemp:function(t){return"number"===typeof t?"c"===this.tempUnit?t:1.8*t+32:-99.9},switchTempUnit:function(){"c"===this.tempUnit?this.tempUnit="f":this.tempUnit="c"},connectionTest:function(){var t=this;this.isRequestingBackend||this.$axios.get("/connecttest").then(function(e){t.dismissConnectionTestNotify&&(t.dismissConnectionTestNotify(),t.dismissConnectionTestNotify=null),console.log(e)}).catch(function(){t.dismissConnectionTestNotify||(t.dismissConnectionTestNotify=t.$q.notify({color:"negative",icon:"mdi-close-network-outline",message:"Error: 前端与主控板之间的通讯中断!",timeout:0}))})},updateOverview:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&this.$q.loading.show({message:"Loading...",delay:500}),this.isRequestingBackend=!0,this.$axios.get("/overview",{timeout:1e4}).then(function(e){t.fermenterOverview=e.data;var i={machineStatus:t.fermenterOverview.machineStatus,machineStatusIcon:t.machineStatusIcon,breweryName:t.fermenterOverview.breweryName,wifiIsConnected:t.fermenterOverview.wifiIsConnected,realDate:t.fermenterOverview.realDate,realTime:t.fermenterOverview.realTime};t.$root.$emit("statusBarInfo",i)}).catch(function(t){console.log(t)}).finally(function(){e&&t.$q.loading.hide(),t.isRequestingBackend=!1})},updateChartData:function(){var t=this;this.isRequestingBackend=!0,this.$axios.get("/chart").then(function(e){var i=e.data.timeMark,r=e.data.setTemp,a=e.data.wortTemp,n=e.data.chamerTemp,s=e.data.gravitySg;t.rawChartDataSeries.timeMark.push(i),t.rawChartDataSeries.setTemp.push(r),t.rawChartDataSeries.wortTemp.push(a),t.rawChartDataSeries.chamberTemp.push(n),t.rawChartDataSeries.gravitySg.push(s),t.$q.sessionStorage.set("storedChartData",t.rawChartDataSeries)}).catch(function(t){console.log(t)}).finally(function(){t.isRequestingBackend=!1})},updateChartRange:function(){var t,e,i=3,r=24*i,a=7*r,n=this.rawChartDataSeries.timeMark.length;t=n>0?n-1:0,e=n>a?n-a:0,this.chartRangeModel={totalMinIndex:0,totalMaxIndex:t,defaultIndex:{min:e,max:t},step:r}}},computed:{watchMachineRunning:function(){return this.fermenterOverview.machineStatus},hydroMeterBattery:function(){return this.fermenterOverview.hydrometerData.batteryLevel>90?{icon:"mdi-battery",color:"green"}:this.fermenterOverview.hydrometerData.batteryLevel<=90&&this.fermenterOverview.hydrometerData.batteryLevel>70?{icon:"mdi-battery-70",color:"green"}:this.fermenterOverview.hydrometerData.batteryLevel<=70&&this.fermenterOverview.hydrometerData.batteryLevel>50?{icon:"mdi-battery-50",color:"green"}:this.fermenterOverview.hydrometerData.batteryLevel<=50&&this.fermenterOverview.hydrometerData.batteryLevel>30?{icon:"mdi-battery-30",color:"green"}:this.fermenterOverview.hydrometerData.batteryLevel<=30&&this.fermenterOverview.hydrometerData.batteryLevel>10?{icon:"mdi-battery-10",color:"red"}:{icon:"mdi-battery-alert",color:"red"}},alcoholByVolume:function(){if(this.fermenterOverview.hydrometerData.originalGravity&&this.fermenterOverview.hydrometerData.currentGravity)return(131.25*(this.fermenterOverview.hydrometerData.originalGravity-this.fermenterOverview.hydrometerData.currentGravity)).toFixed(1)},displayedGravityUnit:function(){return"sg"===this.gravityUnit?"SG":"°P"},chamberTempMax:function(){return this.fermenterOverview.chamberTemp>28?Math.ceil(this.fermenterOverview.chamberTemp):28},wortTempMax:function(){return this.fermenterOverview.wortTemp>28?Math.ceil(this.fermenterOverview.wortTemp):28},displayedTempUnit:function(){return"c"===this.tempUnit?"℃":"℉"},machineStatusIcon:function(){return"standby"===this.fermenterOverview.machineStatus?"mdi-power-standby":"running"===this.fermenterOverview.machineStatus?"mdi-progress-clock":"mdi-progress-check"},startButtonText:function(){return"standby"===this.fermenterOverview.machineStatus?"开始发酵":"done"===this.fermenterOverview.machineStatus?"发酵完成":"终止发酵"},startButtonDisabled:function(){return!("standby"===this.fermenterOverview.machineStatus&&this.beerName&&this.fermentationSteps[0].days&&this.fermentationSteps[0].temp||"running"===this.fermenterOverview.machineStatus)},slicedChartData:function(){var t=this.rawChartDataSeries;return{timeMark:t.timeMark.slice(this.chartRangeModel.defaultIndex.min,this.chartRangeModel.defaultIndex.max+1),wortTemp:t.wortTemp.slice(this.chartRangeModel.defaultIndex.min,this.chartRangeModel.defaultIndex.max+1),chamberTemp:t.chamberTemp.slice(this.chartRangeModel.defaultIndex.min,this.chartRangeModel.defaultIndex.max+1),setTemp:t.setTemp.slice(this.chartRangeModel.defaultIndex.min,this.chartRangeModel.defaultIndex.max+1),gravitySg:t.gravitySg.slice(this.chartRangeModel.defaultIndex.min,this.chartRangeModel.defaultIndex.max+1)}}},created:function(){this.connectionTest(),setInterval(this.connectionTest,8900),this.updateOverview(!0),setInterval(this.updateOverview,34700),this.$q.sessionStorage.has("storedChartData")&&(this.rawChartDataSeries=this.$q.sessionStorage.getItem("storedChartData")),this.updateChartRange()},data:function(){return{isRequestingBackend:!1,chartRangeModel:{totalMinIndex:0,totalMaxIndex:null,defaultIndex:{min:null,max:null},step:null},mockChartData:{timeMark:["2018/4/1 20:45","2018/4/8 21:00","2018/04/15 21:15","2018/04/22 21:30","2018/04/29 21:45","2018/05/06 22:00"],wortTemp:[19.2,19.9,20.3,21,21.5,21.2],chamberTemp:[20.3,20.9,21.1,21.7,22,21.8],setTemp:[22.5,22.5,22.5,22.5,22.5,22.5],gravitySg:[null,null,1.065,1.055,1.035,1.045]},fermenterOverview:{breweryName:"",wifiIsConnected:!0,realDate:"2019/7/28",realTime:"1:08",machineStatus:"standby",setTemp:20,wortTemp:20,chamberTemp:20,isHeating:!1,isCooling:!1,beerName:null,fermentationSteps:[{days:null,temp:null}],currentFermentationStep:null,currentFermentationStepIndex:null,currentFermentationStepPercentage:null,stepHoursLeft:null,totalFermentationStep:null,totalFermentationStepPercentage:null,totalHoursLeft:null,hydrometerData:{originalGravity:null,currentGravity:null,batteryLevel:null}},rawChartDataSeries:{timeMark:[],setTemp:[],chamberTemp:[],wortTemp:[],gravitySg:[]},beerName:"",fermentationSteps:[{days:null,temp:null}],tempUnit:"c",gravityUnit:"sg",dismissConnectionTestNotify:null,wortThermoMeterOption:{text:{color:"black",fontSize:10,textAdjustmentY:2,fontFamily:"Arial",textEnabled:!0},thermo:{color:"#FF7800",backgroundColor:"#fcf9f9",frameColor:"black",ticks:14,ticksEnabled:!0,tickColor:"black",tickWidth:"1"},layout:{height:300,width:80}},chamberThermoMeterOption:{text:{color:"black",fontSize:10,textAdjustmentY:2,fontFamily:"Arial",textEnabled:!0},thermo:{color:"#4768F9",backgroundColor:"#fcf9f9",frameColor:"black",ticks:14,ticksEnabled:!0,tickColor:"black",tickWidth:"1"},layout:{height:300,width:80}},setThermoMeterOption:{text:{color:"black",fontSize:10,textAdjustmentY:2,fontFamily:"Arial",textEnabled:!0},thermo:{color:"#FF0000",backgroundColor:"#fcf9f9",frameColor:"black",ticks:14,ticksEnabled:!0,tickColor:"black",tickWidth:"1"},layout:{height:300,width:80}}}}},S=b,O=(i("41ca"),Object(d["a"])(S,r,a,!1,null,"214219d0",null));e["default"]=O.exports},a698:function(t,e,i){"use strict";var r=i("2cfc"),a=i.n(r);a.a},c38d:function(t,e,i){},d8d6:function(t,e,i){i("1654"),i("6c1c"),t.exports=i("ccb9").f("iterator")},f921:function(t,e,i){i("014b"),i("c207"),i("69d3"),i("765d"),t.exports=i("584a").Symbol}}]);