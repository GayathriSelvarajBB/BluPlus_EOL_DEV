import { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Frame1 from "./Frame2";

export const Graph = (props) => {
   const [CData, setCData] = useState([{}]);
   const [Apexaxis, setApexaxis] = useState([]);
   const [ischecked, setChecked] = useState([]);
   const [check, setCheck] = useState(false);
   const [apex, setApex] = useState([]);
   const [ApexXaxisdata1, setApexXaxisdata1] = useState([]);
   const [ApexYaxis1, setApexYaxis1] = useState();
   const [grSel, SetgrSel] = useState([]);
   const [Mgr1,setMgr1] = useState({});
   const [ColorData, setColorData] = useState(["blue"]);
   const [Graph, setGraph] = useState(false);
   const [count, setCount] = useState([]);
   const [state3,setState3]=useState(false)
   let position = false;
   const SelectGraph3 = (event) => {
      console.log(event.target.innerText);
      setState3(Mgr1[event.target.innerText])
      Mgr1[event.target.innerText] = !state3;
   };
   const parameterdata = props.tabledata
   console.log("parameterdata",parameterdata)
   let name = [];
   const Clearall = () => {
      setApex([]);
      setChecked([]);
      setCheck(false);
      setCount([])
      setMgr1({})
      document
         .querySelectorAll("input[type=checkbox]")
         .forEach((el) => (el.checked = false));
   };
   let colorlist1 = [
      "#C138CC",
      "#F4D429",
      "#40CFB0",
      "#717479",
      "#FE9550",
      "#FF6464",
      "#2F74E6",
      "#68F246",
      "#DB2D43",
      "#C46210",
      "#9F2B68",
      "#F19CBB",
      "#3B7A57",
      "#FFBF00",
      "#9966CC",
      "#3DDC84",
      "#007FFF",
      "#665D1E",
      "#915C83",
      "#841B2D",
      "#7FFFD4",
      "#D0FF14",
      "#4B6F44",
      "#FF9966",
      "#FDEE00",
      "#89CFF0",
   ];

   const CheckHandler = ({ e, ele, i }) => {
      console.log("values", i);
      if (count.indexOf(i) !== -1) {
         setCount(count.filter((checkBox) => checkBox !== i));
      } else {
         setCount([...count, i]);
      }
      if (e.target.checked) {
         setCheck(true);
         setChecked((prev) => [...prev, ele]);
      } else {
         for (let i = 0; i < ischecked.length; i++) {
            if (ischecked[i] === ele) {
               var spliced = ischecked.splice(i, 1);
               console.log("Removed Value => ", spliced);
            }
            if (ischecked.length === 0) {
               setCheck(false);
            }
         }
      }
      if (ischecked.length <= 4) {
         setGraph(!Graph);
      }
      console.log("event", Graph);
   };
   console.log("object", ischecked);
   useMemo(() => {
      ischecked.map((ele) => name.push(ele["ecuParameter"]));
      // let test1 = [];
      // SMgr(test1);
   }, [ischecked, name]);
   console.log("ecu", parameterdata);
   useEffect(() => {
      for (let a2 in name) {
         Mgr1[name[a2]] = false;
      }
   }, []);
   console.log("mgr", Mgr1);
   const parameterbody = parameterdata.map((ele, i) => {
      let Current_Value = Math.floor(
         Math.random() *
            (ele["getEcuParameterMaxValue"] - ele["ecuParameterMinValue"]) +
            ele["ecuParameterMinValue"]
      );
      return (
         <>
            {ele["getEcuParameterMaxValue"] === 0 && ele["getEcuParameterMAxValue"]===null ? (
               <tr key={i}>
                  <td>{ele["ecuName"]}</td>
                  <td>{ele["ecuParameter"]}</td>
                  <td>
                     {ele["ecuParameterValue"]}{" "}
                     {ele["ecuParameterUnit"].toLowerCase()}
                  </td>
                  <td>{ele["ecuParameterUnit"].toLowerCase()}</td>
                  {/* <td>-</td> */}
                  <td>
                     <input
                        type="checkbox"
                        disabled={true}
                        value={ele}
                        onChange={(e) =>
                           CheckHandler({
                              e,
                              ele,
                           })
                        }
                     ></input>
                  </td>
               </tr>
            ) : (
               <tr key={i}>
                  <td>{ele["ecuName"]}</td>
                  <td>{ele["ecuParameter"]}</td>
                  <td>
                     {Current_Value} {ele["ecuParameterUnit"].toLowerCase()}
                  </td>
                  <td>
                     {ele["ecuParameterMinValue"]}{" "}
                     {ele["ecuParameterUnit"].toLowerCase()} -{" "}
                     {ele["getEcuParameterMaxValue"]}{" "}
                     {ele["ecuParameterUnit"].toLowerCase()}
                  </td>
                  <td key={i}>
                     <input
                        type="Checkbox"
                        // defaultChecked={Graph}
                        // value={Graph}
                        checked={count.includes(i)}
                        disabled={!count.includes(i) && count.length >= 4}
                        onChange={(e) =>
                           CheckHandler({
                              e,
                              ele,
                              i,
                           })
                        }
                     ></input>
                  </td>
               </tr>
            )}
         </>
      );
   });
   var options = {
      series: Apexaxis,
      chart: {
         height: 350,
         type: "line",
         stacked: false,
      },
      dataLabels: {
         formatter: function (val, { dataPointIndex }) {
            let len11 = CData.length - 1;
            console.log("data12", dataPointIndex);
            if (dataPointIndex <= len11 - 3) {
               return;
            }
            console.log("value", val);
            return val;
         },
         enabled: true,
      },
      colors: ColorData,

      stroke: { width: 1.8, curve: "straight" },
      plotOptions: {
         bar: {
            columnWidth: "20%",
         },
      },
      xaxis: {
         categories: ApexXaxisdata1,
         range: 5,
         axisBorder: {
            show: true,
         },
         labels: {
            rotate: 0,
            rotateAlways: false,
            hideOverlappingLabels: true,
            style: {},
         },
      },
      yaxis: ApexYaxis1,
      // tooltip: {
      //    shared: false,
      //    intersect: true,
      //    x: {
      //       show: false,
      //    },
      // },
      legend: {
         show: false,
         horizontalAlign: "left",
         offsetX: 40,
      },
   };
   // eslint-disable-next-line sonarjs/cognitive-complexity
   useEffect(() => {
      const interval = setInterval(() => {
         SetgrSel(name);
         console.log("gr", grSel);
         let list = [];
         for (let i40 in name) {
            list.push(name[i40]);
         }
         console.log("list", list);
         let ApexYaxisdata1 = [];
         let ApexYaxis1 = [];
         let even = ["0", "2", "4", "6", "8"];
         let getDate = new Date();
         let getTime = getDate.toLocaleTimeString();
         let getonelineData = { Time: getTime };
         parameterdata.map((ele) => {
            getonelineData[ele["ecuParameter"]] = Math.floor(
               Math.random() *
                  ([ele["getEcuParameterMaxValue"]] -
                     [ele["ecuParameterMinValue"]]) +
                  ele["ecuParameterMinValue"]
            );
         });
         console.log("get", getonelineData);
         // console.log("mgr", Mgr1);
         let colorlist2 = [];
         for (let i16 in list) {
            colorlist2.push(colorlist1[i16]);
         }
         setColorData([...colorlist2]);
         setCData((arr) => [...arr, getonelineData]);
         if (CData.length > 10) {
            CData.shift();
         }
         console.log("CData", CData);
         let SingleChartSeries = [];

         for (let i33 in list) {
            if (even.includes(i33) !== true) {
               position = true;
            } else {
               position = false;
            }
            let tStore = [];
            for (let i34 in CData) {
               tStore.push(CData[i34][list[i33]]);
            }
            let tStorage = [];
            for (let i31 in CData) {
               tStorage.push(CData[i31]["Time"]);
            }
            ApexYaxisdata1.push({
               name: list[i33],
               type: "line",
               stacked: "false",
               data: tStore,
            });
            ApexYaxis1.push({
               show: true,
               showAlways: true,
               showForNullSeries: true,
               // title: {
               //   text: list1[i33]
               // },
               seriesName: list[i33],
               opposite: position,
               axisTicks: {
                  show: true,
               },
               axisBorder: {
                  show: true,
                  color: ColorData[i33],
               },
               labels: {
                  style: {
                     color: ColorData[i33],
                  },
               },
               // tooltip:{
               //   enabled:true,
               // },
            });

            // eslint-disable-next-line sonarjs/no-unused-collection
            setApexYaxis1(ApexYaxis1);
            setApexXaxisdata1(tStorage);
            console.log("lis", list[i33]);
            setApexaxis(ApexYaxisdata1);
            console.log("data1", ApexXaxisdata1);
            if (Mgr1[list[i33]] === true) {
               console.log("color", ColorData[i33]);
               let newapx = {
                  series: [{ name: list[i33], data: tStore }],
                  options: {
                     chart: {
                        id: list[i33],
                        type: "line",
                        toolbar: {
                           show: true,
                        },
                        zoom: {
                           enabled: true,
                           type: "xy",
                           autoScaleYaxis: true,
                        },
                     },
                     stroke: { width: 1.8, curve: "straight" },
                     colors: [ColorData[i33]],
                     dataLabels: {
                        formatter: function (val, { dataPointIndex }) {
                           let len11 = CData.length - 1;
                           console.log("len", len11);
                           if (dataPointIndex <= len11 - 2) {
                              return;
                           }
                           return val;
                        },

                        enabled: true,
                        offsetX: 0,
                        offsetY: 0,

                        style: {
                           fontSize: "15px",
                        },
                     },
                     xaxis: {
                        categories: tStorage,
                        range: 5,
                        axisBorder: {
                           show: true,
                           color: ColorData[i33],
                        },
                        labels: {
                           rotate: 0,
                           rotateAlways: false,
                           hideOverlappingLabels: true,
                           style: {
                              color: "white",
                           },
                        },
                     },
                     yaxis: {
                        range: 5,
                        axisBorder: {
                           show: true,
                           color: ColorData[i33],
                        },
                        labels: {
                           style: {
                              colors: ColorData[i33],
                           },
                        },
                     },
                     legend: {
                        show: true,
                        color: ColorData[i33],
                        formatter: function (seriesName, { dataPointIndex }) {
                           let len11 = CData.length - 1;
                           return [seriesName, "-", tStore[len11]];
                        },
                        showForSingleSeries: true,
                        labels: {
                           useSeriesColors: "true",
                        },
                        onItemClick: {
                           toggleDataSeries: false,
                        },
                        onItemHover: {
                           highlightDataSeries: false,
                        },
                     },
                  },
               };
               SingleChartSeries.push(newapx);
            }

            setApex(SingleChartSeries);
         } // eslint-disable-next-line sonarjs/no-unused-collection
      }, 1000);
      return () => clearInterval(interval);
   }, [CData, name, parameterdata, Apexaxis]);
   console.log("res", Apexaxis);
   return (
      <>
         <div className="Parameter-Table">
            <table className="table-live">
               <thead>
                  <tr>
                     <th>ECU Name</th>
                     <th>Parameter Name</th>
                     <th>Value</th>
                     <th>Range/Reference</th>
                     <th>Graph</th>
                  </tr>
               </thead>
               <tbody>{parameterbody}</tbody>
            </table>
            <div>
               {check && (
                  <ReactApexChart
                     options={options}
                     series={options.series}
                     type="line"
                     height={350}
                  />
               )}
            </div>
            <ul className="graph-legend">
               {grSel?.map((data, index) => (
                  <li
                     key={index}
                     color={ColorData[index]}
                     style={{ color: ColorData[index] }}
                     onClick={SelectGraph3}
                  >
                     <span
                        data-color="red"
                        className="graph-legend-dot"
                        style={{ backgroundColor: ColorData[index] }}
                     ></span>
                     <span className="graph-legend-name">{data}</span>
                  </li>
               ))}
            </ul>
            <div className="seperate-graph-content">
               {apex?.map((data, index) => {
                  console.log("data", data);
                  return (
                     <div className="seperate-graph" key={index}>
                        <Frame1
                           data1={data}
                           yaxisdata={data["series"]}
                        ></Frame1>
                     </div>
                  );
               })}
            </div>
         </div>
         <div className="table-button">
            <button>Stop Monitoring</button>
            <button onClick={Clearall}>Clear all</button>
            <button onClick={props.onClick}>Back</button>
         </div>
      </>
   );
};
