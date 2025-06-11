/* eslint-disable indent */
import { Component } from "react";
export default class CopyRights extends Component {
   render() {
      return (
         <div className="copyrights-section">
            <span>
               Copyright &copy; {new Date().getFullYear()} BlueBinaries, Inc.
               All Rights Reserved.
            </span>
         </div>
      );
   }
}
