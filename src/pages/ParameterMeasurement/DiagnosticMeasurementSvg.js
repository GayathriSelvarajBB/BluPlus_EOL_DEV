/* eslint-disable sonarjs/cognitive-complexity */
const DiagnosticMeasurementSvg = (props) => {
   const loader = (
      <foreignObject x="20" y="20" width="160" height="160">
         <div className="loader-example"></div>
      </foreignObject>
   );

   const Ecu = props.data?.bus?.Ecu;
   const BodyBus = Ecu?.buses[0];
   const ibus1 = Ecu?.buses[1];
   const ibus2 = Ecu?.buses[2];
   const adasbus = Ecu?.buses[3];
   const cbus = Ecu?.buses[4];
   const brakeBus = Ecu?.buses[5];
   const invbus = Ecu?.buses[6];
   const evbus = Ecu?.buses[7];
   const fcbus = cbus?.EcuList[6]?.bus;
   const bbus = evbus?.EcuList[1]?.bus;
   const thermalBus = evbus?.EcuList[2]?.bus;

   const getEcuData = (ecuList, compNo) => {
      return ecuList.find((ecu) => {
         return ecu.compNo === compNo;
      });
   };
   return (
      <svg
         data-testid="diagnostic-measurement-svg"
         xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         width="1901px"
         height="432px"
         viewBox="-0.5 -0.5 1901 432"
      >
         <g>
            <rect
               x="0"
               y="200"
               className={`rectangle-attributes ${
                  props.index >= 4 && getEcuData(BodyBus.EcuList, 4)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "1px",
                        }}
                     >
                        <div className="box-style">
                           <div id="cim" className="text-style">
                              {getEcuData(BodyBus.EcuList, 4)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="45" y="224" className="text-attributes">
                     {getEcuData(BodyBus.EcuList, 4)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(-73,123)">{props.index < 4 && loader}</g>
            <rect
               x="0"
               y="260"
               className={`rectangle-attributes ${
                  props.index >= 5 && getEcuData(BodyBus.EcuList, 5)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "280px",
                           marginLeft: "1px",
                        }}
                     >
                        <div className="box-style">
                           <div id="dsmc" className="text-style">
                              {getEcuData(BodyBus.EcuList, 5)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="45" y="284" className="text-attributes">
                     {getEcuData(BodyBus.EcuList, 5)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(-73,183)">{props.index < 5 && loader}</g>
            <rect
               x="0"
               y="320"
               className={`rectangle-attributes ${
                  props.index >= 6 && getEcuData(BodyBus.EcuList, 6)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "340px",
                           marginLeft: "1px",
                        }}
                     >
                        <div className="box-style">
                           <div id="ohc" className="text-style">
                              {getEcuData(BodyBus.EcuList, 6)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="45" y="344" className="text-attributes">
                     {getEcuData(BodyBus.EcuList, 6)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(-73,243)">{props.index < 6 && loader}</g>
            <rect
               x="0"
               y="380"
               className="rectangle-attributes optional"
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "400px",
                           marginLeft: "1px",
                        }}
                     >
                        <div className="box-style">
                           <div id="trm" className="text-style">
                              {getEcuData(BodyBus.EcuList, 7)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="45" y="404" className="text-attributes">
                     {getEcuData(BodyBus.EcuList, 7)?.name}
                  </text>
               </switch>
            </g>
            <rect
               x="170"
               y="200"
               className={`rectangle-attributes ${
                  props.index >= 8 && getEcuData(BodyBus.EcuList, 8)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "171px",
                        }}
                     >
                        <div className="box-style">
                           <div id="vsp" className="text-style">
                              {getEcuData(BodyBus.EcuList, 8)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="215" y="224" className="text-attributes">
                     {getEcuData(BodyBus.EcuList, 8)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(95,123)">{props.index < 8 && loader}</g>
            <rect
               x="170"
               y="260"
               className={`rectangle-attributes ${
                  props.index >= 9 && getEcuData(BodyBus.EcuList, 9)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "280px",
                           marginLeft: "171px",
                        }}
                     >
                        <div className="box-style">
                           <div id="psm" className="text-style">
                              {getEcuData(BodyBus.EcuList, 9)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="215" y="284" className="text-attributes">
                     {getEcuData(BodyBus.EcuList, 9)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(95,183)">{props.index < 9 && loader}</g>c
            <rect
               x="170"
               y="320"
               className={`rectangle-attributes ${
                  props.index >= 10 && getEcuData(BodyBus.EcuList, 10)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "340px",
                           marginLeft: "171px",
                        }}
                     >
                        <div className="box-style">
                           <div className="text-style" id="bcm">
                              {getEcuData(BodyBus.EcuList, 10)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="215" y="344" className="text-attributes">
                     {getEcuData(BodyBus.EcuList, 10)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(95,243)">{props.index < 10 && loader}</g>
            <rect
               x="170"
               y="380"
               className={`rectangle-attributes ${
                  props.index >= 11 && getEcuData(BodyBus.EcuList, 11)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "400px",
                           marginLeft: "171px",
                        }}
                     >
                        <div className="box-style">
                           <div id="plgm" className="text-style">
                              {getEcuData(BodyBus.EcuList, 11)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="215" y="404" className="text-attributes">
                     {getEcuData(BodyBus.EcuList, 11)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(95,303)">{props.index < 11 && loader}</g>
            <path d="M 90 400 L 130 400" className="line-attributes"></path>
            <path d="M 130 400 L 170 400" className="line-attributes"></path>
            <path d="M 90 340 L 130 340" className="line-attributes"></path>
            <path d="M 130 340 L 170 340" className="line-attributes"></path>
            <path d="M 90 280 L 130 280" className="line-attributes"></path>
            <path d="M 130 280 L 170 280" className="line-attributes"></path>
            <path d="M 90 220 L 130 220" className="line-attributes"></path>
            <path d="M 130 220 L 170 220" className="line-attributes"></path>
            <rect
               x="300"
               y="200"
               className={`rectangle-attributes ${
                  props.index >= 12 && getEcuData(ibus1.EcuList, 12)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "301px",
                        }}
                     >
                        <div className="box-style">
                           <div id="rotator" className="text-style">
                              {getEcuData(ibus1.EcuList, 12)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="345" y="224" className="text-attributes">
                     {getEcuData(ibus1.EcuList, 12)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(225,123)">{props.index < 12 && loader}</g>
            <rect
               x="300"
               y="260"
               className={`rectangle-attributes ${
                  props.index >= 13 && getEcuData(ibus1.EcuList, 13)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "280px",
                           marginLeft: "301px",
                        }}
                     >
                        <div className="box-style">
                           <div id="pwc_l" className="text-style">
                              {getEcuData(ibus1.EcuList, 13)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="345" y="284" className="text-attributes">
                     {getEcuData(ibus1.EcuList, 13)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(225,183)">{props.index < 13 && loader}</g>
            <rect
               x="300"
               y="320"
               className={`rectangle-attributes ${
                  props.index >= 14 && getEcuData(ibus1.EcuList, 14)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "340px",
                           marginLeft: "301px",
                        }}
                     >
                        <div className="box-style">
                           <div id="mfss" className="text-style">
                              {getEcuData(ibus1.EcuList, 14)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="345" y="344" className="text-attributes">
                     {getEcuData(ibus1.EcuList, 14)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(225,243)">{props.index < 14 && loader}</g>
            <rect
               x="300"
               y="380"
               className="rectangle-attributes optional"
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "400px",
                           marginLeft: "301px",
                        }}
                     >
                        <div className="box-style">
                           <div id="amp" className="text-style">
                              {getEcuData(ibus1.EcuList, 15)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="345" y="404" className="text-attributes">
                     {getEcuData(ibus1.EcuList, 15)?.name}
                  </text>
               </switch>
            </g>
            <rect
               x="470"
               y="200"
               className={`rectangle-attributes ${
                  props.index >= 16 && getEcuData(ibus1.EcuList, 16)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "471px",
                        }}
                     >
                        <div className="box-style">
                           <div id="icc" className="text-style">
                              {getEcuData(ibus1.EcuList, 16)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="515" y="224" className="text-attributes">
                     {getEcuData(ibus1.EcuList, 16)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(395,123)">{props.index < 16 && loader}</g>
            <rect
               x="470"
               y="260"
               className={`rectangle-attributes ${
                  props.index >= 17 && getEcuData(ibus1.EcuList, 17)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "280px",
                           marginLeft: "471px",
                        }}
                     >
                        <div className="box-style">
                           <div id="pwc_r" className="text-style">
                              {getEcuData(ibus1.EcuList, 17)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="515" y="284" className="text-attributes">
                     {getEcuData(ibus1.EcuList, 17)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(395,183)">{props.index < 17 && loader}</g>
            <rect
               x="470"
               y="320"
               className={`rectangle-attributes ${
                  props.index >= 18 && getEcuData(ibus1.EcuList, 18)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "340px",
                           marginLeft: "471px",
                        }}
                     >
                        <div className="box-style">
                           <div id="tds" className="text-style">
                              {getEcuData(ibus1.EcuList, 18)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="515" y="344" className="text-attributes">
                     {getEcuData(ibus1.EcuList, 18)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(395,243)">{props.index < 18 && loader}</g>
            <rect
               x="470"
               y="380"
               className="rectangle-attributes optional"
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "400px",
                           marginLeft: "471px",
                        }}
                     >
                        <div className="box-style">
                           <div id="rac" className="text-style">
                              {getEcuData(ibus1.EcuList, 19)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="515" y="404" className="text-attributes">
                     {getEcuData(ibus1.EcuList, 19)?.name}
                  </text>
               </switch>
            </g>
            <path d="M 390 400 L 430 400" className="line-attributes"></path>
            <path d="M 430 400 L 470 400" className="line-attributes"></path>
            <path d="M 390 340 L 430 340" className="line-attributes"></path>
            <path d="M 430 340 L 470 340" className="line-attributes"></path>
            <path d="M 390 280 L 430 280" className="line-attributes"></path>
            <path d="M 430 280 L 470 280" className="line-attributes"></path>
            <path d="M 390 220 L 430 220" className="line-attributes"></path>
            <path d="M 430 220 L 470 220" className="line-attributes"></path>
            <path
               d="M 490 175 L 540 175"
               className="path-class"
               transform="rotate(90,515,175)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                           display: "flex",
                           alignItems: "unsafe flex-start",
                           justifyContent: "unsafe center",
                           width: "1px",
                           height: "1px",
                           paddingTop: "165px",
                           marginLeft: "515px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              className="bus-class"
                              style={{
                                 fontSize: "12px",
                              }}
                           >
                              {ibus2?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="515" y="177" className="text-attributes">
                     {ibus2?.name}
                  </text>
               </switch>
            </g>
            <rect
               x="610"
               y="212.5"
               className={`rectangle-attributes ${
                  props.index >= 20 && getEcuData(adasbus.EcuList, 20)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "233px",
                           marginLeft: "611px",
                        }}
                     >
                        <div className="box-style">
                           <div id="fcm" className="text-style">
                              {getEcuData(adasbus.EcuList, 20)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="655" y="236" className="text-attributes">
                     {getEcuData(adasbus.EcuList, 20)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(535,136)">{props.index < 20 && loader}</g>
            <path
               d="M 99 370 L 159 370"
               className="path-class"
               transform="rotate(90,129,370)"
            ></path>
            <path
               d="M 99 310 L 159 310"
               className="path-class"
               transform="rotate(90,129,310)"
            ></path>
            <path
               d="M 99 250 L 159 250"
               className="path-class"
               transform="rotate(90,129,250)"
            ></path>
            <path
               d="M 94 185 L 164 185"
               className="path-class"
               transform="rotate(90,129,185)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                           display: "flex",
                           alignItems: "unsafe flex-start",
                           justifyContent: "unsafe center",
                           width: "1px",
                           height: "1px",
                           paddingTop: "165px",
                           marginLeft: "129px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              id="bodybus"
                              className="bus-class"
                              style={{
                                 fontSize: "12px",
                              }}
                           >
                              {BodyBus.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="129" y="177" className="text-attributes">
                     {BodyBus.name}
                  </text>
               </switch>
            </g>
            <path
               d="M 400 370 L 460 370"
               className="path-class"
               transform="rotate(90,430,370)"
            ></path>
            <path
               d="M 400 310 L 460 310"
               className="path-class"
               transform="rotate(90,430,310)"
            ></path>
            <path
               d="M 400 250 L 460 250"
               className="path-class"
               transform="rotate(90,430,250)"
            ></path>
            <path
               d="M 395 185 L 465 185"
               className="path-class"
               transform="rotate(90,430,185)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                           display: "flex",
                           alignItems: "unsafe flex-start",
                           justifyContent: "unsafe center",
                           width: "1px",
                           height: "1px",
                           paddingTop: "165px",
                           marginLeft: "430px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              className="bus-class"
                              style={{
                                 fontSize: "12px",
                              }}
                           >
                              IBUS1
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="430" y="177" className="text-attributes">
                     I...
                  </text>
               </switch>
            </g>
            <rect
               x="780"
               y="212.5"
               className={`rectangle-attributes ${
                  props.index >= 21 && getEcuData(adasbus.EcuList, 21)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "233px",
                           marginLeft: "781px",
                        }}
                     >
                        <div className="box-style">
                           <div id="pkc" className="text-style">
                              {getEcuData(adasbus.EcuList, 21)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="825" y="236" className="text-attributes">
                     {getEcuData(adasbus.EcuList, 21)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(704,136)">{props.index < 21 && loader}</g>
            <path
               d="M 697 192.5 L 777 192.5"
               className="path-class"
               transform="rotate(90,737,192.5)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                           display: "flex",
                           alignItems: "unsafe flex-start",
                           justifyContent: "unsafe center",
                           width: "1px",
                           height: "1px",
                           paddingTop: "168px",
                           marginLeft: "737px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              id="adasbus"
                              className="bus-class"
                              style={{
                                 fontSize: "12px",
                              }}
                           >
                              {adasbus?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="737" y="180" className="text-attributes">
                     {adasbus?.name}
                  </text>
               </switch>
            </g>
            <path
               d="M 700 232.5 L 740 232.5"
               className="line-attributes"
            ></path>
            <path
               d="M 740 232.5 L 780 232.5"
               className="line-attributes"
            ></path>
            <path
               d="M 712 257.5 L 762 257.5"
               className="path-class"
               transform="rotate(90,737,257.5)"
            ></path>
            <path
               d="M 870 232.5 L 900 232.5"
               className="line-attributes"
            ></path>
            <path
               d="M 890 222.5 L 910 222.5"
               className="path-class"
               transform="rotate(90,900,222.5)"
            ></path>
            <path
               d="M 890 242.5 L 910 242.5"
               className="path-class"
               transform="rotate(90,900,242.5)"
            ></path>
            <rect
               x="910"
               y="197.5"
               width="80"
               height="30"
               className={`rect-class ${
                  props.index >= 22 &&
                  getEcuData(getEcuData(adasbus.EcuList, 21)?.EcuList, 22)
                     ?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "78px",
                           height: "1px",
                           paddingTop: "213px",
                           marginLeft: "911px",
                        }}
                     >
                        <div className="box-style">
                           <div id="nfc-start" className="text-style">
                              {
                                 getEcuData(
                                    getEcuData(adasbus.EcuList, 21)?.EcuList,
                                    22
                                 )?.name
                              }
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="950" y="216" className="text-attributes">
                     {
                        getEcuData(getEcuData(adasbus.EcuList, 21)?.EcuList, 22)
                           ?.name
                     }
                  </text>
               </switch>
            </g>
            <g transform="translate(834,120)">{props.index < 22 && loader}</g>
            <path
               d="M 900 212.5 L 910 212.5"
               className="line-attributes"
            ></path>
            <path
               d="M 900 252.5 L 910 252.5"
               className="line-attributes"
            ></path>
            <rect
               x="910"
               y="237.5"
               width="80"
               height="30"
               className={`rect-class ${
                  props.index >= 23 &&
                  getEcuData(getEcuData(adasbus.EcuList, 21)?.EcuList, 23)
                     ?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "78px",
                           height: "1px",
                           paddingTop: "253px",
                           marginLeft: "911px",
                        }}
                     >
                        <div className="box-style">
                           <div id="fdha-al" className="text-style">
                              {
                                 getEcuData(
                                    getEcuData(adasbus.EcuList, 21)?.EcuList,
                                    23
                                 )?.name
                              }
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="950" y="256" className="text-attributes">
                     {
                        getEcuData(getEcuData(adasbus.EcuList, 21)?.EcuList, 23)
                           ?.name
                     }
                  </text>
               </switch>
            </g>
            <g transform="translate(834,160)">{props.index < 23 && loader}</g>
            <rect
               x="610"
               y="282.5"
               width="380"
               height="50"
               className={`rect-class ${
                  props.index >= 24 && getEcuData(adasbus.EcuList, 24)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "378px",
                           height: "1px",
                           paddingTop: "308px",
                           marginLeft: "611px",
                        }}
                     >
                        <div className="box-style">
                           <div id="adas" className="text-style">
                              {getEcuData(adasbus.EcuList, 24)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="800" y="311" className="text-attributes">
                     {getEcuData(adasbus.EcuList, 24)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(534,205)">{props.index < 24 && loader}</g>
            <rect
               x="610"
               y="355"
               width="60"
               height="35"
               className={`rect-class ${
                  props.index >= 25 &&
                  getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 25)
                     ?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "58px",
                           height: "1px",
                           paddingTop: "373px",
                           marginLeft: "611px",
                        }}
                     >
                        <div className="box-style">
                           <div id="mrr" className="text-style">
                              {
                                 getEcuData(
                                    getEcuData(adasbus.EcuList, 24)?.EcuList,
                                    25
                                 )?.name
                              }
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="640" y="376" className="text-attributes">
                     {
                        getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 25)
                           ?.name
                     }
                  </text>
               </switch>
            </g>
            <g transform="translate(534,280)">{props.index < 25 && loader}</g>
            <rect
               x="690"
               y="355"
               width="60"
               height="35"
               className={`rect-class ${
                  props.index >= 26 &&
                  getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 26)
                     ?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "58px",
                           height: "1px",
                           paddingTop: "373px",
                           marginLeft: "691px",
                        }}
                     >
                        <div className="box-style">
                           <div id="cmrr-fl" className="text-style">
                              {
                                 getEcuData(
                                    getEcuData(adasbus.EcuList, 24)?.EcuList,
                                    26
                                 )?.name
                              }
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="720" y="376" className="text-attributes">
                     {
                        getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 26)
                           ?.name
                     }
                  </text>
               </switch>
            </g>
            <g transform="translate(614,280)">{props.index < 26 && loader}</g>
            <rect
               x="770"
               y="355"
               width="60"
               height="35"
               className={`rect-class ${
                  props.index >= 27 &&
                  getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 27)
                     ?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "58px",
                           height: "1px",
                           paddingTop: "373px",
                           marginLeft: "771px",
                        }}
                     >
                        <div className="box-style">
                           <div id="cmrr_fr" className="text-style">
                              {
                                 getEcuData(
                                    getEcuData(adasbus.EcuList, 24)?.EcuList,
                                    27
                                 )?.name
                              }
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="800" y="376" className="text-attributes">
                     {
                        getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 27)
                           ?.name
                     }
                  </text>
               </switch>
            </g>
            <g transform="translate(694,280)">{props.index < 27 && loader}</g>
            <rect
               x="850"
               y="355"
               width="60"
               height="35"
               className={`rect-class ${
                  props.index >= 28 &&
                  getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 28)
                     ?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "58px",
                           height: "1px",
                           paddingTop: "373px",
                           marginLeft: "851px",
                        }}
                     >
                        <div className="box-style">
                           <div id="cmrr_rl" className="text-style">
                              {
                                 getEcuData(
                                    getEcuData(adasbus.EcuList, 24)?.EcuList,
                                    28
                                 )?.name
                              }
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="880" y="376" className="text-attributes">
                     {
                        getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 28)
                           ?.name
                     }
                  </text>
               </switch>
            </g>
            <g transform="translate(774,280)">{props.index < 28 && loader}</g>
            <rect
               x="930"
               y="355"
               width="60"
               height="35"
               className={`rect-class ${
                  props.index >= 29 &&
                  getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 29)
                     ?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "58px",
                           height: "1px",
                           paddingTop: "373px",
                           marginLeft: "931px",
                        }}
                     >
                        <div className="box-style">
                           <div id="cmrr_rr" className="text-style">
                              {
                                 getEcuData(
                                    getEcuData(adasbus.EcuList, 24)?.EcuList,
                                    29
                                 )?.name
                              }
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="960" y="376" className="text-attributes">
                     {
                        getEcuData(getEcuData(adasbus.EcuList, 24)?.EcuList, 29)
                           ?.name
                     }
                  </text>
               </switch>
            </g>
            <g transform="translate(854,280)">{props.index < 29 && loader}</g>
            <path
               d="M 628.75 343.75 L 651.25 343.75"
               className="path-class"
               transform="rotate(90,640,343.75)"
            ></path>
            <path
               d="M 708.75 343.75 L 731.25 343.75"
               className="path-class"
               transform="rotate(90,720,343.75)"
            ></path>
            <path
               d="M 788.75 343.75 L 811.25 343.75"
               className="path-class"
               transform="rotate(90,800,343.75)"
            ></path>
            <path
               d="M 868.75 343.75 L 891.25 343.75"
               className="path-class"
               transform="rotate(90,880,343.75)"
            ></path>
            <path
               d="M 948.75 343.75 L 971.25 343.75"
               className="path-class"
               transform="rotate(90,960,343.75)"
            ></path>
            <rect
               x="1040"
               y="200"
               className={`rectangle-attributes ${
                  props.index >= 30 && getEcuData(cbus.EcuList, 30)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "1041px",
                        }}
                     >
                        <div className="box-style">
                           <div id="eps1" className="text-style">
                              {getEcuData(cbus.EcuList, 30)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1085" y="224" className="text-attributes">
                     {getEcuData(cbus.EcuList, 30)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(964,123)">{props.index < 30 && loader}</g>
            <rect
               x="1040"
               y="260"
               className={`rectangle-attributes ${
                  props.index >= 31 && getEcuData(cbus.EcuList, 31)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "280px",
                           marginLeft: "1041px",
                        }}
                     >
                        <div className="box-style">
                           <div id="acu" className="text-style">
                              {getEcuData(cbus.EcuList, 31)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1085" y="284" className="text-attributes">
                     {getEcuData(cbus.EcuList, 31)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(964,183)">{props.index < 31 && loader}</g>
            <rect
               x="1040"
               y="320"
               className="rectangle-attributes optional"
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "340px",
                           marginLeft: "1041px",
                        }}
                     >
                        <div className="box-style">
                           <div id="scm" className="text-style">
                              {getEcuData(cbus.EcuList, 32)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1085" y="344" className="text-attributes">
                     {getEcuData(cbus.EcuList, 32)?.name}
                  </text>
               </switch>
            </g>
            <rect
               x="1210"
               y="200"
               className={`rectangle-attributes ${
                  props.index >= 33 && getEcuData(cbus.EcuList, 33)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "1211px",
                        }}
                     >
                        <div className="box-style">
                           <div id="eps2" className="text-style">
                              {getEcuData(cbus.EcuList, 33)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1255" y="224" className="text-attributes">
                     {getEcuData(cbus.EcuList, 33)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1134,123)">{props.index < 33 && loader}</g>
            <rect
               x="1210"
               y="260"
               className={`rectangle-attributes ${
                  props.index >= 34 && getEcuData(cbus.EcuList, 34)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "280px",
                           marginLeft: "1211px",
                        }}
                     >
                        <div className="box-style">
                           <div id="esp" className="text-style">
                              {getEcuData(cbus.EcuList, 34)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1255" y="284" className="text-attributes">
                     {getEcuData(cbus.EcuList, 34)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1134,183)">{props.index < 34 && loader}</g>
            <rect
               x="1210"
               y="320"
               className={`rectangle-attributes ${
                  props.index >= 35 && getEcuData(cbus.EcuList, 35)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "340px",
                           marginLeft: "1211px",
                        }}
                     >
                        <div className="box-style">
                           <div id="ibooster" className="text-style">
                              {getEcuData(cbus.EcuList, 35)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1255" y="344" className="text-attributes">
                     {getEcuData(cbus.EcuList, 35)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1134,243)">{props.index < 35 && loader}</g>
            <path d="M 1130 340 L 1170 340" className="line-attributes"></path>
            <path d="M 1170 340 L 1210 340" className="line-attributes"></path>
            <path d="M 1130 280 L 1170 280" className="line-attributes"></path>
            <path d="M 1170 280 L 1210 280" className="line-attributes"></path>
            <path d="M 1130 220 L 1170 220" className="line-attributes"></path>
            <path d="M 1170 220 L 1210 220" className="line-attributes"></path>
            <path
               d="M 1139 310 L 1199 310"
               className="path-class"
               transform="rotate(90,1169,310)"
            ></path>
            <path
               d="M 1139 250 L 1199 250"
               className="path-class"
               transform="rotate(90,1169,250)"
            ></path>
            <path
               d="M 1134 185 L 1204 185"
               className="path-class"
               transform="rotate(90,1169,185)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                           display: "flex",
                           alignItems: "unsafe flex-start",
                           justifyContent: "unsafe center",
                           width: "1px",
                           height: "1px",
                           paddingTop: "165px",
                           marginLeft: "1169px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              id="cbus"
                              className="bus-class"
                              style={{
                                 fontSize: "12px",
                              }}
                           >
                              {cbus?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1169" y="177" className="text-attributes">
                     {cbus?.name}
                  </text>
               </switch>
            </g>
            <path d="M 1300 280 L 1340 280" className="line-attributes"></path>
            <path d="M 1300 340 L 1340 340" className="line-attributes"></path>
            <path
               d="M 1275 215 L 1405 215"
               className="path-class"
               transform="rotate(90,1340,215)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                           display: "flex",
                           alignItems: "unsafe flex-start",
                           justifyContent: "unsafe center",
                           width: "1px",
                           height: "1px",
                           paddingTop: "165px",
                           marginLeft: "1340px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              id="brake-bus"
                              className="bus-class"
                              style={{
                                 fontSize: "12px",
                              }}
                           >
                              {brakeBus?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1340" y="177" className="text-attributes">
                     {brakeBus?.name}
                  </text>
               </switch>
            </g>
            <path
               d="M 1310 310 L 1370 310"
               className="path-class"
               transform="rotate(90,1340,310)"
            ></path>
            <path
               d="M 1144 365 L 1194 365"
               className="path-class"
               transform="rotate(90,1169,365)"
            ></path>
            <path
               d="M 1315 365 L 1365 365"
               className="path-class"
               transform="rotate(90,1340,365)"
            ></path>
            <rect
               x="1420"
               y="260"
               className={`rectangle-attributes ${
                  props.index >= 38 && getEcuData(invbus.EcuList, 38)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "280px",
                           marginLeft: "1421px",
                        }}
                     >
                        <div className="box-style">
                           <div id="mcu_f" className="text-style">
                              {getEcuData(invbus.EcuList, 38)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1465" y="284" className="text-attributes">
                     {getEcuData(invbus.EcuList, 38)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1344,183)">{props.index < 38 && loader}</g>
            <rect
               x="1420"
               y="320"
               className="rectangle-attributes optional"
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "340px",
                           marginLeft: "1421px",
                        }}
                     >
                        <div className="box-style">
                           <div id="mcu_r" className="text-style">
                              {getEcuData(invbus.EcuList, 39)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1465" y="344" className="text-attributes">
                     {getEcuData(invbus.EcuList, 39)?.name}
                  </text>
               </switch>
            </g>
            <path
               d="M 1340 215 L 1470 215"
               className="path-class"
               transform="rotate(90,1405,215)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "1px",
                           height: "1px",
                           paddingTop: "219px",
                           marginLeft: "1405px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              id="invbus"
                              className="bus-class"
                              style={{
                                 fontSize: "4px",
                              }}
                           >
                              <font style={{ fontSize: "12px" }}>
                                 {invbus?.name}
                              </font>
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text
                     x="1405"
                     y="220"
                     fontSize="4px"
                     className="text-attributes"
                  >
                     {invbus?.name}
                  </text>
               </switch>
            </g>
            <path d="M 1405 280 L 1420 280" className="line-attributes"></path>
            <path
               d="M 1375 310 L 1435 310"
               className="path-class"
               transform="rotate(90,1405,310)"
            ></path>
            <path d="M 1405 340 L 1420 340" className="line-attributes"></path>
            <rect
               x="1490"
               y="200"
               className={`rectangle-attributes ${
                  props.index >= 40 && getEcuData(evbus.EcuList, 40)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "1491px",
                        }}
                     >
                        <div className="box-style">
                           <div id="pdu" className="text-style">
                              {getEcuData(evbus.EcuList, 40)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1535" y="224" className="text-attributes">
                     {getEcuData(evbus.EcuList, 40)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1414,123)">{props.index < 40 && loader}</g>
            <path
               d="M 1580 185 L 1650 185"
               className="path-class"
               transform="rotate(90,1615,185)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "1px",
                           height: "1px",
                           paddingTop: "189px",
                           marginLeft: "1615px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              id="evbus"
                              className="bus-class"
                              style={{
                                 fontSize: "4px",
                              }}
                           >
                              <font style={{ fontSize: "12px" }}>
                                 {evbus?.name}
                              </font>
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text
                     x="1615"
                     y="190"
                     fontSize="4px"
                     className="text-attributes"
                  >
                     {evbus?.name}
                  </text>
               </switch>
            </g>
            <path d="M 1580 220 L 1615 220" className="line-attributes"></path>
            <path
               d="M 1614.5 220 L 1649.5 220"
               className="line-attributes"
            ></path>
            <rect
               x="1650"
               y="200"
               className={`rectangle-attributes ${
                  props.index >= 41 && getEcuData(evbus.EcuList, 41)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "1651px",
                        }}
                     >
                        <div className="box-style">
                           <div id="bms" className="text-style">
                              {getEcuData(evbus.EcuList, 41)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1695" y="224" className="text-attributes">
                     {getEcuData(evbus.EcuList, 41)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1574,123)">{props.index < 41 && loader}</g>
            <path
               d="M 1580 255 L 1650 255"
               className="path-class"
               transform="rotate(90,1615,255)"
            ></path>
            <path
               d="M 1614.5 325 L 1649.5 325"
               className="line-attributes"
            ></path>
            <rect
               x="1650"
               y="305"
               className={`rectangle-attributes ${
                  props.index >= 44 && getEcuData(evbus.EcuList, 44)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "325px",
                           marginLeft: "1651px",
                        }}
                     >
                        <div className="box-style">
                           <div id="ecc" className="text-style">
                              {getEcuData(evbus.EcuList, 44)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1695" y="329" className="text-attributes">
                     {getEcuData(evbus.EcuList, 44)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1574,228)">{props.index < 44 && loader}</g>
            <path
               d="M 1565 340 L 1665 340"
               className="path-class"
               transform="rotate(90,1615,340)"
            ></path>
            <path d="M 1740 220 L 1810 220" className="line-attributes"></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "1px",
                           height: "1px",
                           paddingTop: "220px",
                           marginLeft: "1775px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div id="bbus" className="bus-style">
                              &nbsp;{bbus?.name}&nbsp;
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1775" y="224" className="text-class">
                     &nbsp;{bbus?.name}&nbsp;
                  </text>
               </switch>
            </g>
            <path d="M 1810 199 L 1820 199" className="line-attributes"></path>
            <path d="M 1810 240 L 1820 240" className="line-attributes"></path>
            <rect
               x="1820"
               y="184"
               width="80"
               height="30"
               className={`rect-class ${
                  props.index >= 42 && getEcuData(bbus?.EcuList, 42)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "78px",
                           height: "1px",
                           paddingTop: "199px",
                           marginLeft: "1821px",
                        }}
                     >
                        <div className="box-style">
                           <div id="bcs" className="text-style">
                              {getEcuData(bbus?.EcuList, 42)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1860" y="203" className="text-attributes">
                     {getEcuData(bbus?.EcuList, 42)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1744,108)">{props.index < 42 && loader}</g>
            <rect
               x="1820"
               y="225"
               width="80"
               height="30"
               className={`rect-class ${
                  props.index >= 43 && getEcuData(bbus?.EcuList, 43)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "78px",
                           height: "1px",
                           paddingTop: "240px",
                           marginLeft: "1821px",
                        }}
                     >
                        <div className="box-style">
                           <div id="pviu" className="text-style">
                              {getEcuData(bbus?.EcuList, 42)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1860" y="244" className="text-attributes">
                     {getEcuData(bbus?.EcuList, 42)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1744,148)">{props.index < 43 && loader}</g>\
            <path
               d="M 1799.5 209.5 L 1820.5 209.5"
               className="path-class"
               transform="rotate(90,1810,209.5)"
            ></path>
            <path
               d="M 1799.5 229.5 L 1820.5 229.5"
               className="path-class"
               transform="rotate(90,1810,229.5)"
            ></path>
            <path d="M 1740 325 L 1810 325" className="line-attributes"></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "1px",
                           height: "1px",
                           paddingTop: "325px",
                           marginLeft: "1775px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div
                              id="thermal-bus"
                              className="bus-style white-space-normal"
                           >
                              {thermalBus?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1775" y="329" className="text-class">
                     {thermalBus?.name}
                  </text>
               </switch>
            </g>
            <path
               d="M 1785.5 300.5 L 1834.5 300.5"
               className="path-class"
               transform="rotate(90,1810,300.5)"
            ></path>
            <rect
               x="1820"
               y="266"
               width="80"
               height="30"
               className={`rect-class ${
                  props.index >= 45 &&
                  getEcuData(thermalBus?.EcuList, 45)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "78px",
                           height: "1px",
                           paddingTop: "281px",
                           marginLeft: "1821px",
                        }}
                     >
                        <div className="box-style">
                           <div id="ptc_6" className="text-style">
                              {getEcuData(thermalBus?.EcuList, 45)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1860" y="285" className="text-attributes">
                     {getEcuData(thermalBus?.EcuList, 45)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1744,190)">{props.index < 45 && loader}</g>
            <rect
               x="1820"
               y="310"
               width="80"
               height="30"
               className={`rect-class ${
                  props.index >= 46 &&
                  getEcuData(thermalBus?.EcuList, 46)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "78px",
                           height: "1px",
                           paddingTop: "325px",
                           marginLeft: "1821px",
                        }}
                     >
                        <div className="box-style">
                           <div id="ptc_3.5" className="text-style">
                              {getEcuData(thermalBus?.EcuList, 46)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1860" y="329" className="text-attributes">
                     {getEcuData(thermalBus?.EcuList, 46)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1744,235)">{props.index < 46 && loader}</g>
            <rect
               x="1820"
               y="356"
               width="80"
               height="30"
               className={`rect-class ${
                  props.index >= 47 &&
                  getEcuData(thermalBus?.EcuList, 47)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "78px",
                           height: "1px",
                           paddingTop: "371px",
                           marginLeft: "1821px",
                        }}
                     >
                        <div className="box-style">
                           <div id="eas" className="text-style">
                              {getEcuData(thermalBus?.EcuList, 47)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1860" y="375" className="text-attributes">
                     {getEcuData(thermalBus?.EcuList, 47)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1744,280)">{props.index < 47 && loader}</g>
            <path
               d="M 1785.5 349.5 L 1834.5 349.5"
               className="path-class"
               transform="rotate(90,1810,349.5)"
            ></path>
            <path d="M 1810 276 L 1820 276" className="line-attributes"></path>
            <path d="M 1810 325 L 1820 325" className="line-attributes"></path>
            <path d="M 1810 374 L 1820 374" className="line-attributes"></path>
            <rect
               x="1040"
               y="387.5"
               width="700"
               height="42.5"
               className={`rect-class ${
                  props.index >= 36 && getEcuData(cbus.EcuList, 36)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "698px",
                           height: "1px",
                           paddingTop: "409px",
                           marginLeft: "1041px",
                        }}
                     >
                        <div className="draw-color box-style">
                           <div id="vcu" className="text-style">
                              {getEcuData(cbus.EcuList, 36)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1390" y="412" className="text-class">
                     {getEcuData(cbus.EcuList, 36)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(964,310)">{props.index < 36 && loader}</g>
            <rect
               x="0"
               y="100"
               width="1900"
               height="50"
               className={`rect-class  ${props.index >= 3 && Ecu?.ecuStatus}`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "1898px",
                           height: "1px",
                           paddingTop: "125px",
                           marginLeft: "1px",
                        }}
                     >
                        <div className="draw-color box-style">
                           <div id="gateway" className="text-style">
                              {Ecu?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="950" y="129" className="text-class">
                     {Ecu?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(-73,23)">{props.index < 3 && loader}</g>
            <path
               d="M 1115 70 L 1175 70"
               className="path-class"
               transform="rotate(90,1145,70)"
            ></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "1px",
                           height: "1px",
                           paddingTop: "74px",
                           marginLeft: "1145px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div className="bus-style">TBUS</div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1145" y="78" className="text-class">
                     TBUS
                  </text>
               </switch>
            </g>
            <rect
               id="t-box"
               x="1100"
               y="0"
               className="rectangle-attributes fill-blue"
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "88px",
                           height: "1px",
                           paddingTop: "20px",
                           marginLeft: "1101px",
                        }}
                     >
                        <div className="box-style">
                           <div className="text-style text-white">
                              {props.data?.interface?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1145" y="24" className="text-attributes">
                     {props.data?.interface?.name}
                  </text>
               </switch>
            </g>
            <path
               d="M 935 85 L 965 85"
               className="path-class"
               transform="rotate(90,950,85)"
            ></path>
            <path
               d="M 105 55 L 135 55"
               className="path-class"
               transform="rotate(90,120,55)"
            ></path>
            <path d="M 120 70 L 950 70" className="line-attributes"></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "1px",
                           height: "1px",
                           paddingTop: "70px",
                           marginLeft: "535px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div className="bus-style DiagBus">
                              &nbsp; {props.data?.bus?.name}&nbsp;&nbsp;
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="535" y="74" className="text-class">
                     &nbsp; {props.data?.bus?.name}&nbsp;&nbsp;
                  </text>
               </switch>
            </g>
            <path
               id="obd2-connector"
               d="M 72.5 10 L 167.5 10 L 187.5 26 L 187.5 40 L 52.5 40 L 52.5 26 Z"
               className="path-style"
               transform="rotate(-180,120,25)"
            ></path>
            <rect
               x="57.5"
               y="10"
               width="130"
               height="30"
               fill="none"
               stroke="none"
               pointerEvents="all"
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "128px",
                           height: "1px",
                           paddingTop: "25px",
                           marginLeft: "59px",
                        }}
                     >
                        <div className="draw-color box-style">
                           <div className="text-style">
                              {props.data?.connector?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="123" y="29" className="text-class">
                     {props.data?.connector?.name}
                  </text>
               </switch>
            </g>
            <path d="M 1740 415 L 1820 415" className="line-attributes"></path>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "1px",
                           height: "1px",
                           paddingTop: "415px",
                           marginLeft: "1780px",
                        }}
                     >
                        <div className="draw-color-bg box-style">
                           <div id="fcbus" className="bus-style">
                              &nbsp; {fcbus?.name}&nbsp;&nbsp;
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1780" y="419" className="text-class">
                     &nbsp; {fcbus?.name}&nbsp;&nbsp;
                  </text>
               </switch>
            </g>
            <rect
               x="1820"
               y="400"
               width="80"
               height="30"
               className={`rect-class ${
                  props.index >= 37 && getEcuData(fcbus.EcuList, 37)?.status
               }`}
            ></rect>
            <g transform="translate(-0.5 -0.5)">
               <switch>
                  <foreignObject
                     pointerEvents="none"
                     width="100%"
                     height="100%"
                     requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                     className="foreign-object-style"
                  >
                     <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="display-class"
                        style={{
                           width: "78px",
                           height: "1px",
                           paddingTop: "415px",
                           marginLeft: "1821px",
                        }}
                     >
                        <div className="box-style">
                           <div id="dcc" className="text-style">
                              {getEcuData(fcbus.EcuList, 37)?.name}
                           </div>
                        </div>
                     </div>
                  </foreignObject>
                  <text x="1860" y="419" className="text-attributes">
                     {getEcuData(fcbus.EcuList, 37)?.name}
                  </text>
               </switch>
            </g>
            <g transform="translate(1744,323)">{props.index < 37 && loader}</g>
         </g>
         <switch>
            <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"></g>
            <a
               transform="translate(0,-5)"
               href="https://www.diagrams.net/doc/faq/svg-export-text-problems"
               target="_blank"
               rel="noreferrer"
            >
               <text textAnchor="middle" fontSize="10px" x="50%" y="100%">
                  Text is not SVG - cannot display
               </text>
            </a>
         </switch>
      </svg>
   );
};

export default DiagnosticMeasurementSvg;
