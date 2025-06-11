/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import Chart from "react-apexcharts";

function Frame1(props) {
   console.log("frame1", props);
   // console.log("y",props.yaxisdata[0]["data"])
   // console.log("x",props.xaxisdata)
   //  let x1 = [];
   //  x1 = props.xaxisdata;
   //  let y1 = [0];
   //  y1 = props.yaxisdata[0]["data"];
   const [GraphType, SetGraphType] = useState("Line");
   // const [tabIndex, setTabIndex] = useState(0);
   // let r1=Math.floor(Math.random() + Math.random() * 100);
   // let r2=Math.floor(Math.random() + Math.random() * 150);
   // let r3=Math.floor(Math.random() + Math.random() * 200);
   // let r4=Math.floor(Math.random() + Math.random() * 250);
   // let r5=Math.floor(Math.random() + Math.random() * 300);
   // let linedata = props.data1;
   // linedata['options']['stroke']['curve']="straight";
   // linedata['options']['chart']['id']=r1.toLocaleString;
   // let scatterdata = props.data1;
   // scatterdata['options']['chart']['type']='scatter';
   // scatterdata['options']['chart']['id']=r2.toLocaleString;
   // let bardata = props.data1;
   // bardata['options']['chart']['type']='bar';
   // bardata['options']['chart']['id']=r3.toLocaleString;
   // let areadata = props.data1;
   // areadata['options']['chart']['type']='area';
   // areadata['options']['chart']['id']=r4.toLocaleString;
   // let stepdata = props.data1;
   // stepdata['options']['stroke']['curve']="stepline";
   // stepdata['options']['chart']['id']=r3.toLocaleString;
   let linedata1 = {
      series: props.yaxisdata,
      options: {
         chart: {
            id: props.data1["series"][0]["name"] + "1",
            type: "line",
            // toolbar: props.data1["options"]["chart"]["toolbar"],
            // background: props.data1["options"]["chart"]["background"],
            // zoom: props.data1["options"]["chart"]["zoom"],
         },
         stroke: { width: 1.8, curve: "straight" },
         colors: props.data1["options"]["colors"],
         dataLabels: props.data1["options"]["dataLabels"],
         xaxis: props.data1["options"]["xaxis"],
         yaxis: props.data1["options"]["yaxis"],
         legend: props.data1["options"]["legend"],
         // grid: props.data1["options"]["grid"],
         markers: {
            size: 0,
            // colors: props.data1["options"]["colors"],
         },
      },
   };
   let scatterdata1 = {
      series: props.yaxisdata,
      options: {
         chart: {
            id: props.data1["series"][0]["name"] + "2",
            type: "scatter",
            // toolbar: props.data1["options"]["chart"]["toolbar"],
            // background: props.data1["options"]["chart"]["background"],
            // zoom: props.data1["options"]["chart"]["zoom"],
         },
         stroke: { width: 1.8, curve: "straight" },
         colors: props.data1["options"]["colors"],
         dataLabels: props.data1["options"]["dataLabels"],
         xaxis: props.data1["options"]["xaxis"],
         yaxis: props.data1["options"]["yaxis"],
         legend: props.data1["options"]["legend"],
         // grid: props.data1["options"]["grid"],
         markers: {
            size: 5,
            // colors: props.data1["options"]["colors"],
         },
      },
   };
   // let bardata1={
   //   series:props.yaxisdata,
   //   options:{
   //     chart:{
   //       id:props.data1["series"][0]["name"]+"3",
   //       type:"bar",
   //       toolbar: props.data1["options"]["chart"]["toolbar"],
   //       background:props.data1["options"]["chart"]["background"],
   //       zoom:props.data1["options"]["chart"]["zoom"],
   //     },
   //     stroke: { width: 1.8,
   //       curve: "straight"
   //      },
   //     colors:props.data1["options"]["colors"],
   //     dataLabels:props.data1["options"]["dataLabels"],
   //     xaxis:props.data1["options"]["xaxis"],
   //     yaxis:props.data1["options"]["yaxis"],
   //     legend:props.data1["options"]["legend"],
   //     grid:props.data1["options"]["grid"],
   //   }
   // }
   // let areadata1={
   //   series:props.yaxisdata,
   //   options:{
   //     chart:{
   //       id:props.data1["series"][0]["name"]+"4",
   //       type:"area",
   //       toolbar: props.data1["options"]["chart"]["toolbar"],
   //       background:props.data1["options"]["chart"]["background"],
   //       zoom:props.data1["options"]["chart"]["zoom"],
   //     },
   //     stroke: { width: 1.8,
   //       curve: "straight"
   //      },
   //     colors:props.data1["options"]["colors"],
   //     dataLabels:props.data1["options"]["dataLabels"],
   //     xaxis:props.data1["options"]["xaxis"],
   //     yaxis:props.data1["options"]["yaxis"],
   //     legend:props.data1["options"]["legend"],
   //     grid:props.data1["options"]["grid"],
   //   }
   // }
   let stepdata1 = {
      series: props.yaxisdata,
      options: {
         chart: {
            id: props.data1["series"][0]["name"] + "5",
            type: "bar",
            // toolbar: props.data1["options"]["chart"]["toolbar"],
            // background: props.data1["options"]["chart"]["background"],
            // zoom: props.data1["options"]["chart"]["zoom"],
         },
         stroke: { width: 1.8, curve: "stepline" },
         colors: props.data1["options"]["colors"],
         dataLabels: props.data1["options"]["dataLabels"],
         xaxis: props.data1["options"]["xaxis"],
         yaxis: props.data1["options"]["yaxis"],
         legend: props.data1["options"]["legend"],
         // grid: props.data1["options"]["grid"],
         markers: {
            size: 0,
            // colors: props.data1["options"]["colors"],
         },
      },
   };
   const getGraphType = (event) => {
      SetGraphType(event.target.value);
      // console.log(linedata1)
      // console.log(scatterdata1)
      // console.log(stepdata1)
   };
   return (
      <div>
         <div className="graph-selection">
            <label>Graph Type: </label>
            <select onChange={getGraphType} value={GraphType}>
               <option value="Line">Line</option>
               <option value="Scatter">Scatter</option>
               <option value="Step">Step</option>
            </select>
         </div>
         {GraphType === "Line" ? (
            <Chart
               options={linedata1.options}
               series={linedata1.series}
               type="line"
               width="100%"
               height="100%"
            />
         ) : GraphType === "Scatter" ? (
            <Chart
               options={scatterdata1.options}
               series={scatterdata1.series}
               type="scatter"
               width="100%"
               height="100%"
            />
         ) : GraphType === "Step" ? (
            <Chart
               options={stepdata1.options}
               series={stepdata1.series}
               type="line"
               width="100%"
               height="100%"
            />
         ) : (
            <></>
         )}
         {/* {GraphType==="Line" ?  <Chart
        options={linedata1.options}
        series={linedata1.series}
        type="line"
        width="100%"
        height="100%"
      />:(GraphType==="Area" ?  <Chart
      options={areadata1.options}
      series={areadata1.series}
      type="area"
      width="100%"
      height="100%"
    />:(GraphType==="Scatter" ?  <Chart
    options={scatterdata1.options}
    series={scatterdata1.series}
    type="scatter"
    width="100%"
    height="100%"
  />:(GraphType==="Bar" ?  <Chart
  options={linedata1.options}
  series={linedata1.series}
  type="bar"
  width="100%"
  height="100%"
/>:(GraphType==="Step" ?  <Chart
  options={stepdata1.options}
  series={stepdata1.series}
  type="line"
  width="100%"
  height="100%"
/>:<></>))))} */}
         {/* {GraphType==="Line" ?  <Chart
        options={linedata.options}
        series={linedata.series}
        type="line"
        width="100%"
        height="100%"
      />:<></>}
              {GraphType==="Area" ?  <Chart
        options={areadata.options}
        series={areadata.series}
        type="area"
        width="100%"
        height="100%"
      />:<></>}
              {GraphType==="Scatter" ?  <Chart
        options={scatterdata.options}
        series={scatterdata.series}
        type="scatter"
        width="100%"
        height="100%"
      />:<></>}
              {GraphType==="Bar" ?  <Chart
        options={linedata.options}
        series={linedata.series}
        type="bar"
        width="100%"
        height="100%"
      />:<></>} */}

         {/* <Tabs
        selectedIndex={tabIndex}
        onSelect={tabIndex => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab>Line</Tab>
          <Tab>Scatter</Tab>
          <Tab>bar</Tab>
          <Tab>area</Tab>
        </TabList>
        <TabPanel>
       {x1.length===y1.length && x1.length>2 ?
       <div>
      <Chart
        options={linedata.options}
        series={linedata.series}
        type="line"
        width="100%"
        height="100%"
      /></div>:<></>}
      </TabPanel>
        <TabPanel>
        {x1.length===y1.length && x1.length>2 ?
        <div>
        <Chart
                                              options={scatterdata.options}
                                              series={scatterdata.series}
                                              type='scatter'
                                              width="100%"
                                              height='100%'
                    />
        </div>:<></>}
        </TabPanel>
        <TabPanel>
          {x1.length===y1.length && x1.length>2 ?
          <div>
          <Chart
                                              options={bardata.options}
                                              series={bardata.series}
                                              type="bar"
                                              width="100%"
                                              height='100%'
                    />
          </div>:<></>}       
        </TabPanel>
        <TabPanel>
          {x1.length===y1.length && x1.length>2 ?
          <div>
        <Chart
                                              options={areadata.options}
                                              series={areadata.series}
                                              type="area"
                                              width="100%"
                                              height='100%'
                    /></div>:<></>}
        </TabPanel>
      </Tabs> */}
      </div>
   );
}
export default Frame1;
