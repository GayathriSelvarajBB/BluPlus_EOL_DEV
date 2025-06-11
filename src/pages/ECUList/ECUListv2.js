/* eslint-disable quotes */
/* eslint-disable indent */
import React from 'react';
import EcuError from 'assets/images/ecu-error.png';
import SoftwareUpdate from 'assets/images/software-update.png';

class EcuEachCard extends React.Component {
    render(){
        const titleEcu = this.props.title;
        // const ecuHealth = this.props.ecuHealth;
        const dtc = this.props.dtc;
        const softwareUpdate = this.props.softwareUpdate;
        // const currentVersion = this.props.currentVersion;
        // const availableVersion = this.props.availableVersion;
        const ecuColorStatus = this.props.ecuColorStatus;
        return (
            <div className='ecu-list-box'>
                <div className={`ecu-each-card ${ecuColorStatus}`}>
                    <h4>{titleEcu}</h4>
                    <div className='status-view'>
                        <div className={`dtc-mistake ${dtc ? 'status-success' : 'status-failure'}`}>
                            <img src={EcuError} alt="ecu error" />
                        </div>
                        <div className={`ecu-mistake ${softwareUpdate ? 'status-success' : 'status-failure'}`}>
                            <img src={SoftwareUpdate} alt="software update" />
                        </div>
                    </div>
                    <div className='popup-check'>
                        
                    </div>
                </div>
            </div>
          )
    }
}

export default EcuEachCard