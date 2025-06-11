/* eslint-disable indent */
/* eslint-disable react/jsx-key */
/* eslint-disable sonarjs/prefer-object-literal */
/* eslint-disable sonarjs/cognitive-complexity */
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import datat from "./data2";
import Finaltable from "./table2";
import Chart from "react-apexcharts";
import { CSVLink } from "react-csv";
import SideBar from "components/SideBar/SideBar";
import SelectEmpty from "assets/images/select-item.png";
import Frame1 from "./Frame2";
import CheckLoader from "./CheckLoader";
import { useLocation } from "react-router-dom";

function GoogleCharts() {
   const [parameterlist2, Setparameterlist2] = useState([]);
   const [gr, Sgr] = useState({});
   const [Mgr1, SMgr] = useState({});
   const [CheckboxParameter, SetCheckboxParameter] = useState(0);
   const [grSel, SetgrSel] = useState([]);
   const [grCol, SetgrCol] = useState([]);
   const [graphBackground, setGraphBackground] = useState();
   const [checkLoader, setCheckLoader] = useState(false);
   const location = useLocation();

   const [vehicleData] = useState({
      bus: location?.state?.bus,
      ecu: location?.state?.ecu,
      params: location?.state?.params,
      flag: location?.state?.flag,
   });

   useEffect(() => {
      if (vehicleData?.flag === "vehicle_info") {
         BUSsetSelected([
            ...BUSselected,
            { label: vehicleData.bus, value: vehicleData.bus },
         ]);
      }
   }, []);

   let colorlist1 = [
      "#00FF00",
      "#FF0000",
      "#FFA500",
      "#0048BA",
      "#B0BF1A",
      "#FFC0CB",
      "#A020F0",
      "#72A0C1",
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
   let BUS = [];
   if (datat.length > 0) {
      BUS = Object.keys(datat[0]);
   }
   const BUSdropDown = [];
   if (BUS.length > 0) {
      for (let i1 in BUS) {
         let BUSlist = {};
         BUSlist.label = BUS[i1];
         BUSlist.value = BUS[i1];
         BUSdropDown.push(BUSlist);
      }
   }
   const [apex, Setapex] = useState([]);
   const [BUSselected, BUSsetSelected] = useState([]);
   const [ECUdropDown1, ECUdropDownSel] = useState([]);
   const [ECUselected, ECUsetSelected] = useState([]);
   const [ParadropDown1, ParadropDownSel] = useState([]);
   const [Paraselected, ParasetSelected] = useState([]);
   const [ParameterPath, SetParameterPath] = useState([]);
   const [graphState, setGraphState] = useState(false);
   const [exportDefault, setExportDefault] = useState(false);
   const [apexoptions2, setapexoptions2] = useState({});
   const [apexseries2, setapexseries2] = useState([]);
   const [CData1, setCData1] = useState([]);
   let Position = false;
   const [startStop, setButton] = useState(false);
   const toggle = () => {
      setGraphState(true);
      setExportDefault(true);
      setButton(!startStop);
   };
   const [Tabledata2, setTableData2] = useState([]);
   const [Colordata, setColorData] = useState(["blue"]);
   useEffect(() => {
      setInterval(() => {
         if (
            document
               .getElementsByTagName("body")[0]
               .classList.contains("dark-theme")
         ) {
            setGraphBackground(true);
         } else {
            setGraphBackground(false);
         }
      }, 1);

      let last_ECUselected = ECUselected;
      let e1 = [];
      if (BUSselected.length > 0) {
         for (let i21 in ParameterPath) {
            for (let i22 in BUSselected) {
               for (let i23 in last_ECUselected) {
                  if (
                     ParameterPath[i21][0]["BUS"] ===
                        BUSselected[i22]["value"] &&
                     ParameterPath[i21][0]["ECU"] ===
                        last_ECUselected[i23]["value"]
                  ) {
                     e1.push(last_ECUselected[i23]);
                  }
               }
            }
         }
      }
      const ECUaddlist = [...new Set(e1)];
      if (vehicleData.flag === "vehicle_info") {
         ECUsetSelected([
            ...ECUaddlist,
            { label: vehicleData.ecu, value: vehicleData.ecu },
         ]);
      } else {
         ECUsetSelected(ECUaddlist);
      }

      setCData1((arr) => []);
      setTableData2([]);
      Sgr([]);
      SMgr([]);
      SetgrSel([]);
      Setapex([]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [BUSselected]);
   useEffect(() => {
      let last_Parameterselected = Paraselected;
      let Parameteraddlist = [];
      if (BUSselected.length > 0) {
         for (let i24 in ParameterPath) {
            for (let i25 in ECUselected) {
               for (let i26 in last_Parameterselected) {
                  if (
                     ParameterPath[i24][0]["ECU"] ===
                        ECUselected[i25]["value"] &&
                     ParameterPath[i24][0]["Parameter"] ===
                        last_Parameterselected[i26]["value"]
                  ) {
                     if (
                        Parameteraddlist.includes(last_Parameterselected[i26])
                     ) {
                        return;
                     }
                     Parameteraddlist.push(last_Parameterselected[i26]);
                  }
               }
            }
         }
      }
      if (vehicleData.flag === "vehicle_info") {
         ParasetSelected([
            ...Parameteraddlist,
            {
               label: vehicleData.params,
               value: vehicleData.params.split(" ").join(""),
            },
         ]);
      } else {
         ParasetSelected(Parameteraddlist);
      }
      setCData1((arr) => []);
      setTableData2([]);
      Sgr([]);
      SMgr([]);
      SetgrSel([]);
      Setapex([]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      console.log("ECUselected", ECUselected);
   }, [ECUselected]);
   useEffect(() => {
      let ab = {};
      for (let i32 in Paraselected) {
         ab[Paraselected[i32].value] = false;
      }
      Sgr(ab);
      let ab2 = {};
      for (let i32 in Paraselected) {
         ab2[Paraselected[i32].value] = false;
      }
      SMgr(ab2);
      setTableData2([]);
      SetgrSel([]);
      Setapex([]);
   }, [Paraselected]);
   useEffect(() => {
      // console.log(Tabledata2);
      if (Paraselected.length > 2) {
         document.querySelector(".parameter-dropdown span").innerHTML =
            Paraselected.length + " Parameters Selected";
      }
      if (ECUselected.length > 2) {
         document.querySelector(".ecu-dropdown span").innerHTML =
            ECUselected.length + " ECUs Selected";
      }
      if (BUSselected.length > 2) {
         document.querySelector(".bus-dropdown span").innerHTML =
            BUSselected.length + " Buses Selected";
      }
      const interval = setInterval(() => {
         let BUSselectedlist = [];
         for (var key1 in BUSselected) {
            BUSselectedlist.push(BUSselected[key1].value);
         }
         let ECUlist = [];
         if (BUSselectedlist.length > 0) {
            for (let i1 in BUSselectedlist) {
               let templist = Object.keys(datat[0][BUSselectedlist[i1]]);
               if (templist.length > 0) {
                  for (let i3 in templist) {
                     ECUlist.push(templist[i3]);
                  }
               }
            }
         }

         let ECUdropDown = [];
         if (ECUlist.length > 0) {
            for (let i4 in ECUlist) {
               let ECUlist1 = {};
               ECUlist1.label = ECUlist[i4];
               ECUlist1.value = ECUlist[i4];
               ECUdropDown.push(ECUlist1);
            }
         }
         ECUdropDownSel(ECUdropDown);
         let ECUValuelist = [];
         if (ECUselected.length > 0) {
            for (let i5 in ECUselected) {
               ECUValuelist.push(ECUselected[i5].value);
            }
         }
         let paramlist = [];
         for (let i6 in BUSselectedlist) {
            let selbuseculist = Object.keys(datat[0][BUSselectedlist[i6]]);
            for (let i7 in ECUValuelist) {
               if (selbuseculist.includes(ECUValuelist[i7]) === true) {
                  paramlist.push(
                     datat[0][BUSselectedlist[i6]][ECUValuelist[i7]]
                  );
               }
            }
         }
         let Parameterlist = [];
         for (let i8 in paramlist) {
            let tempparameterlist = Object.keys(paramlist[i8]);
            for (let i9 in tempparameterlist) {
               Parameterlist.push(tempparameterlist[i9]);
            }
         }
         let ParadropDown = [];
         if (Parameterlist.length > 0) {
            for (let i10 in Parameterlist) {
               let Parameterlist1 = {};
               Parameterlist1.label = Parameterlist[i10];
               Parameterlist1.value = Parameterlist[i10];
               ParadropDown.push(Parameterlist1);
            }
         }
         ParadropDownSel(ParadropDown);
         // eslint-disable-next-line sonarjs/no-unused-collection
         let ParameterSelected = [];
         if (Paraselected.length > 0) {
            for (let i11 in Paraselected) {
               let i12 = Paraselected[i11].value;
               ParameterSelected.push(i12);
            }
         }
         let paraval = [];
         let ParameterPath1 = [];
         for (let i13 in Parameterlist) {
            for (let i14 in BUSselectedlist) {
               let t1 = Object.keys(datat[0][BUSselectedlist[i14]]);
               if (t1.length > 0) {
                  for (let i15 in ECUValuelist) {
                     if (t1.includes(ECUValuelist[i15]) === true) {
                        let tempparalist21 = Object.keys(
                           datat[0][BUSselectedlist[i14]][ECUValuelist[i15]]
                        );
                        if (
                           tempparalist21.includes(Parameterlist[i13]) === true
                        ) {
                           paraval[Parameterlist[i13]] =
                              datat[0][BUSselectedlist[i14]][ECUValuelist[i15]][
                                 Parameterlist[i13]
                              ];
                           ParameterPath1.push([
                              {
                                 BUS: BUSselectedlist[i14],
                                 ECU: ECUValuelist[i15],
                                 Parameter: Parameterlist[i13],
                              },
                           ]);
                        }
                     }
                  }
               }
            }
         }
         SetParameterPath(ParameterPath1);
         if (BUSselected.length === 0) {
            ECUsetSelected([]);
            ParasetSelected([]);
            setButton(false);
            setGraphState(false);
            setCData1((arr) => []);
         }
         if (ECUselected.length === 0) {
            ParasetSelected([]);
            setButton(false);
            setGraphState(false);
            setCData1((arr) => []);
         }
         if (Paraselected.length === 0) {
            setButton(false);
            setGraphState(false);
            setCData1((arr) => []);
         }
         let Tabledata21 = [];
         const obj = { ...paraval };
         for (let i in obj) {
            obj[i].value = Math.floor(Math.random() + Math.random() * 15);
         }
         datat.push(obj);
         let getDate = new Date();
         let getTime = getDate.toLocaleTimeString();
         const getonelineData = { Time: getTime };
         let list1 = [];
         let tStore3 = {};
         if (startStop) {
            if (Paraselected.length > 0) {
               for (let key in Paraselected) {
                  list1.push(Paraselected[key].value);
               }
               for (let k1 in Parameterlist) {
                  getonelineData[Parameterlist[k1]] =
                     paraval[Parameterlist[k1]].value;
               }
               for (let kl in list1) {
                  let tempdata1 = {};
                  tempdata1["Parameter"] = list1[kl];
                  tempdata1["Min_Value"] = paraval[list1[kl]].minValue;
                  tempdata1["Current_Value"] = paraval[list1[kl]].value;
                  tempdata1["Max_Value"] = paraval[list1[kl]].maxValue;
                  tempdata1["unit"] = paraval[list1[kl]].unit;
                  tempdata1["color"] = colorlist1[kl];
                  tempdata1["def"] = paraval[list1[kl]].def;
                  Tabledata21.push(tempdata1);
               }
            }
            let colorlist2 = [];
            for (let i16 in list1) {
               colorlist2.push(colorlist1[i16]);
            }
            setColorData([...colorlist2]);
            setTableData2(Tabledata21);
            setCData1((arr) => [...arr, getonelineData]);
            // let len = CData1.length;
            // if (len > 10) {
            //   CData1.shift();
            //   if (len > 15) {
            //     CData1.shift();
            //     CData1.shift();
            //     CData1.shift();
            //   }
            // }
            // if (CData1.length >= 12) {
            //   CData1.shift();
            //   CData1.shift();
            // }
            let len5 = CData1.length;
            if (len5 > 300) {
               CData1.shift();
            }

            let ApexXaxisdata1 = {
               range: 9,
               labels: {
                  rotate: 0,
                  rotateAlways: false,
                  hideOverlappingLabels: true,
                  style: {
                     colors: graphBackground ? "white" : "black",
                  },
               },
            };
            let tStorage = [];
            for (let i31 in CData1) {
               tStorage.push(CData1[i31]["Time"]);
            }
            ApexXaxisdata1["categories"] = tStorage;
            console.log("apex", ApexXaxisdata1);
            let ApexYaxisdata1 = [];
            let ApexYaxis1 = [];
            let colorlist21 = [];
            let even = [
               "0",
               "2",
               "4",
               "6",
               "8",
               "10",
               "12",
               "14",
               "16",
               "18",
               "20",
               "22",
               "24",
            ];
            for (let i37 in list1) {
               if (gr[list1[i37]]) {
                  colorlist21.push(colorlist1[i37]);
               }
            }
            SetgrCol(colorlist21);
            let SingleChartSeries = [];
            let grSelected = [];
            for (let i33 in list1) {
               if (even.includes(i33) !== true) {
                  Position = true;
               } else {
                  Position = false;
               }

               if (Mgr1[list1[i33]]) {
                  let tStorage2 = [];
                  for (let i311 in CData1) {
                     tStorage2.push(CData1[i311]["Time"]);
                  }
                  let tStore1 = [];
                  for (let i39 in CData1) {
                     tStore1.push(CData1[i39][list1[i33]]);
                  }
                  let unitname = "Unit";
                  unitname = paraval[list1[i33]]["unit"];
                  let tablevalue = [];
                  for (let i40 in Tabledata2) {
                     if (Tabledata2[i40]["Parameter"] === list1[i33]) {
                        tablevalue = Tabledata2[i40];
                     }
                  }
                  let path = [];
                  for (let i41 in ParameterPath) {
                     if (ParameterPath[i41][0]["Parameter"] === list1[i33]) {
                        path = ParameterPath[i41][0];
                     }
                  }
                  let newapx = {
                     Path: path,
                     Tabledata: tablevalue,
                     series: [{ name: list1[i33], data: tStore1 }],
                     options: {
                        chart: {
                           id: list1[i33],
                           type: "line",
                           toolbar: {
                              show: true,
                           },
                           background: graphBackground ? "black" : "white",
                           zoom: {
                              enabled: true,
                              type: "xy",
                              autoScaleYaxis: true,
                           },
                        },
                        stroke: { width: 1.8, curve: "straight" },
                        colors: [Colordata[i33]],
                        dataLabels: {
                           enabled: true,
                           offsetX: 0,
                           offsetY: 0,
                           formatter: function (val, { dataPointIndex }) {
                              let len11 = CData1.length - 1;
                              if (dataPointIndex <= len11 - 2) {
                                 return;
                              }
                              return val;
                           },
                           style: {
                              fontSize: "15px",
                           },
                        },
                        xaxis: {
                           categories: tStorage2,
                           range: 9,
                           axisBorder: {
                              show: true,
                              color: Colordata[i33],
                           },
                           labels: {
                              rotate: 0,
                              rotateAlways: false,
                              hideOverlappingLabels: true,
                              style: {
                                 colors: graphBackground ? "white" : "black",
                              },
                           },
                        },
                        yaxis: {
                           title: {
                              text: unitname,
                              style: {
                                 color: Colordata[i33],
                              },
                           },
                           axisBorder: {
                              show: true,
                              color: Colordata[i33],
                           },
                           labels: {
                              style: {
                                 colors: Colordata[i33],
                              },
                           },
                        },
                        legend: {
                           showForSingleSeries: true,
                           formatter: function (
                              seriesName,
                              { dataPointIndex }
                           ) {
                              let len11 = CData1.length - 1;
                              return [
                                 seriesName,
                                 "-",
                                 tStore1[len11],
                                 unitname,
                              ];
                           },
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
                        grid: {
                           borderColor: graphBackground ? "black" : "white",
                        },
                     },
                  };
                  SingleChartSeries.push(newapx);
               }
               Setapex(SingleChartSeries);
               if (gr[list1[i33]]) {
                  grSelected.push(list1[i33]);
                  let tStore = [];
                  for (let i34 in CData1) {
                     tStore.push(CData1[i34][list1[i33]]);
                     tStore3[list1[i33]] = CData1[i34][list1[i33]];
                  }
                  ApexYaxisdata1.push({
                     name: list1[i33],
                     type: "line",
                     stacked: "false",
                     data: tStore,
                  });
                  ApexYaxis1.push({
                     seriesName: list1[i33],
                     opposite: Position,
                     axisTicks: {
                        show: true,
                     },
                     axisBorder: {
                        show: true,
                        color: Colordata[i33],
                     },
                     labels: {
                        style: {
                           colors: Colordata[i33],
                        },
                     },
                  });
               }
            }
            SetgrSel(grSelected);
            for (let a2 in list1) {
               if (grSel.includes(list1[a2], 0) !== true) {
                  Mgr1[list1[a2]] = false;
               }
            }
            let apexoptions11 = {
               chart: {
                  id: "Real Time",
                  toolbar: {
                     show: true,
                  },
                  background: graphBackground ? "black" : "white",
                  zoom: {
                     enabled: true,
                     type: "xy",
                     autoScaleYaxis: true,
                  },
               },
               dataLabels: {
                  enabled: true,
                  offsetX: 0,
                  offsetY: 0,
                  formatter: function (val, { dataPointIndex }) {
                     let len11 = CData1.length - 1;
                     if (dataPointIndex <= len11 - 2) {
                        return;
                     }
                     return val;
                  },
                  style: {
                     fontSize: "15px",
                  },
               },
               xaxis: ApexXaxisdata1,
               yaxis: ApexYaxis1,
               colors: colorlist21,
               stroke: { width: 1.8, curve: "straight" },
               legend: {
                  show: false,
                  showForSingleSeries: true,
                  formatter: function (seriesName) {
                     return [
                        seriesName,
                        ":-",
                        tStore3[seriesName],
                        paraval[seriesName].unit,
                     ];
                  },
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
               zoom: {
                  enabled: true,
                  type: "xy",
                  autoScaleYaxis: true,
               },
               grid: {
                  borderColor: graphBackground ? "black" : "white",
               },
            };
            setapexoptions2(apexoptions11);
            setapexseries2(ApexYaxisdata1);
         }
         Setparameterlist2(Parameterlist);
      }, 1000);

      return () => clearInterval(interval);
   });
   const SelectGarph = (para1) => {
      let a1 = para1;
      gr[a1["Para"]] = a1["Graph"];
      let CheckBoxSelectedParameter = [];
      for (let i35 in parameterlist2) {
         if (gr[parameterlist2[i35]]) {
            CheckBoxSelectedParameter.push(parameterlist2[i35]);
         }
      }
      SetCheckboxParameter(CheckBoxSelectedParameter.length);
   };
   const SelectGraph3 = (event) => {
      event.currentTarget.classList.toggle("legend-toggle");
      let state3 = Mgr1[event.currentTarget.innerText];
      Mgr1[event.currentTarget.innerText] = !state3;
   };
   const test = false;
   let abc = {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
   };

   const loaderFix = () => {
      console.log("test");
      setCheckLoader(true);
      setTimeout(() => {
         setCheckLoader(false);
      }, 1200);
   };

   return (
      <div className="graph-page">
         {checkLoader && <CheckLoader />}
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="graph-data">
                  <div className="graph-live-data">
                     <div className="graph-select-btn">
                        <div className="select-graph">
                           <div className="graph-btn-each">
                              <h2>Select BUS</h2>
                              <div className="multi-select-container">
                                 <MultiSelect
                                    options={BUSdropDown}
                                    value={BUSselected}
                                    onChange={BUSsetSelected}
                                    labelledBy="Select"
                                    className="bus-dropdown dark"
                                 />
                              </div>
                           </div>
                           <div className="graph-btn-each">
                              <h2>Select ECU</h2>
                              <div className="multi-select-container">
                                 <MultiSelect
                                    options={
                                       ECUselected.length <= 7
                                          ? ECUdropDown1
                                          : ECUselected
                                    }
                                    value={ECUselected}
                                    onChange={ECUsetSelected}
                                    labelledBy="Select"
                                    className="ecu-dropdown dark"
                                    hasSelectAll={test}
                                 />
                              </div>
                           </div>
                           <div className="graph-btn-each">
                              <h2>Select Parameter</h2>
                              <div className="multi-select-container">
                                 <MultiSelect
                                    options={ParadropDown1}
                                    value={Paraselected}
                                    onChange={ParasetSelected}
                                    labelledBy="Select"
                                    className="parameter-dropdown dark"
                                    // hasSelectAll={test}
                                 />
                              </div>
                           </div>
                        </div>
                        <div
                           className={`btn-start ${
                              Paraselected.length === 0 && "btn-disable-diag"
                           }`}
                        >
                           <button
                              onClick={toggle}
                              className={
                                 "toggle--button" +
                                 (startStop ? "toggle--stop" : "")
                              }
                           >
                              {startStop ? "Stop Diagnosis" : "Start Diagnosis"}
                           </button>
                           <div
                              className={`csv-export ${
                                 startStop ? "disable_link" : ""
                              } ${exportDefault ? "" : "link_disable"}`}
                           >
                              <CSVLink
                                 data={CData1}
                                 filename={"Chart_Data.csv"}
                              >
                                 Export All Data
                              </CSVLink>
                           </div>
                        </div>
                     </div>
                     {!graphState ? (
                        <div className="select-empty-param">
                           <img src={SelectEmpty} alt="select empty" />
                           <p>Select Bus, ECU and Parameter to see Live Data</p>
                        </div>
                     ) : (
                        <React.Fragment>
                           {BUSselected.length > 0 &&
                           ECUselected.length > 0 &&
                           Paraselected.length > 0 &&
                           Tabledata2.length > 0 ? (
                              <div>
                                 <Finaltable
                                    data1={Tabledata2}
                                    path={ParameterPath}
                                    SendData1={SelectGarph}
                                    Box="true"
                                    limit={CheckboxParameter}
                                    loaderFix={loaderFix}
                                 />
                              </div>
                           ) : (
                              <></>
                           )}
                           {BUSselected.length > 0 &&
                           ECUselected.length > 0 &&
                           Paraselected.length > 0 &&
                           CData1.length > 2 &&
                           apexseries2.length > 0 ? (
                              <div>
                                 <Chart
                                    options={apexoptions2}
                                    series={apexseries2}
                                    type="line"
                                    width="100%"
                                    height="260px"
                                    stroke={abc}
                                 />
                              </div>
                           ) : (
                              <></>
                           )}
                        </React.Fragment>
                     )}
                     <ul className="graph-legend">
                        {grSel?.map((data, index) => (
                           <li
                              onClick={SelectGraph3}
                              color={grCol[index]}
                              style={{ color: grCol[index] }}
                           >
                              <span
                                 data-color="red"
                                 className="graph-legend-dot"
                                 style={{ backgroundColor: grCol[index] }}
                              ></span>
                              <span className="graph-legend-name">{data}</span>
                           </li>
                        ))}
                     </ul>
                     <div className="seperate-graph-content">
                        {apex?.map((data, index) => (
                           <div key={index} className="seperate-graph">
                              <div className="multi-graph-table-sec">
                                 <ul>
                                    <li>
                                       <span>BUS Name :</span>
                                       <span>{data["Path"]["BUS"]}</span>
                                    </li>
                                    <li>
                                       <span>ECU Name :</span>
                                       <span>{data["Path"]["ECU"]}</span>
                                    </li>
                                    <li>
                                       <span>Parameter :</span>
                                       <span>{data["Path"]["Parameter"]}</span>
                                    </li>
                                 </ul>
                                 <ul style={{ color: "rgb(0, 127, 255)" }}>
                                    <li>
                                       <span>Min Value : </span>
                                       <span>
                                          {data["Tabledata"]["Min_Value"]}
                                       </span>
                                    </li>
                                    <li>
                                       <span>Current Value : </span>
                                       <span>
                                          {data["Tabledata"]["Current_Value"]}
                                       </span>
                                    </li>
                                    <li>
                                       <span>Max Value : </span>
                                       <span>
                                          {data["Tabledata"]["Max_Value"]}
                                       </span>
                                    </li>
                                 </ul>
                              </div>
                              <Frame1
                                 data1={data}
                                 startStop={startStop}
                                 yaxisdata={data["series"]}
                                 xaxisdata={
                                    data["options"]["xaxis"]["categories"]
                                 }
                                 path1={Tabledata2}
                              />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default GoogleCharts;
