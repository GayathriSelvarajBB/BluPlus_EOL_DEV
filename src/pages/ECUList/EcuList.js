/* eslint-disable indent */
/* eslint-disable quotes */

import React from 'react';
// import EcuError from '../../images/ecu-error.png';
// import SoftwareUpdate from '../../images/software-update.png';
import EcuEachCard from 'pages/ECUList/EcuEachCard';
// import Header from '../Header/Header';
// import './ECUList.scss';
import SideBar from 'components/SideBar/SideBar';
import EcuPopup from 'pages/ECUList/EcuPopup';

class EcuList extends React.Component {
    state = {
        loginStatus: true,
        ecuList: [
           {
               id: 'ecu-list-1',
               title: 'Engine control and transmission control management',
               ecuHealth: true,
               dtc: true,
               softwareUpdate: true,
               currentVersion: '',
               availableVersion: '',
               ecuColorStatus: 'ecu-pass'
           },
           {
               id: 'ecu-list-2',
               title: 'Electronic control of braking systems (ABS, ESP, ASR)',
               ecuHealth: false,
               dtc: false,
               softwareUpdate: false,
               currentVersion: '1.4',
               availableVersion: '1.46',
               ecuColorStatus: 'ecu-failure'
           },
           {
               id: 'ecu-list-3',
               title: 'Central electronics and body control modules',
               ecuHealth: true,
               dtc: true,
               softwareUpdate: true,
               currentVersion: '',
               availableVersion: '',
               ecuColorStatus: 'ecu-pass'
           },
           {
               id: 'ecu-list-4',
               title: 'Instrument cluster and airbags',
               ecuHealth: false,
               dtc: false,
               softwareUpdate: true,
               currentVersion: '',
               availableVersion: '',            
               ecuColorStatus: 'ecu-failure'
           },
           {
               id: 'ecu-list-5', 
               title: 'Control of special functions for diesel pump',
               ecuHealth: false,
               dtc: false,
               softwareUpdate: true,
               currentVersion: '',
               availableVersion: '',
               ecuColorStatus: 'ecu-failure'
           },
           {
               id: 'ecu-list-6',
               title: 'Roof control and cruise control units',
               ecuHealth: true,
               dtc: true,
               softwareUpdate: true,
               currentVersion: '',
               availableVersion: '',
               ecuColorStatus: 'ecu-pass'
           },
           {
               id: 'ecu-list-7',
               title: 'Air control units',
               ecuHealth: false,
               dtc: true,
               softwareUpdate: false,
               currentVersion: '2.3',
               availableVersion: '2.6',
               ecuColorStatus: 'ecu-failure'
           },
           {
               id: 'ecu-list-8',
               title: 'Electronic door and window control',
               ecuHealth: false,
               dtc: false,
               softwareUpdate: false,            
               currentVersion: '1.4',
               availableVersion: '1.46',
               ecuColorStatus: 'ecu-failure'
           },
           {
               id: 'ecu-list-9',
               title: 'Central locking, seat control devices',
               ecuHealth: true,
               dtc: true,
               softwareUpdate: true,
               currentVersion: '',
               availableVersion: '',
               ecuColorStatus: 'ecu-pass'
           },
           {
               id: 'ecu-list-10',
               title: 'Electronic steering',
               ecuHealth: true,
               dtc: true,
               softwareUpdate: true,
               currentVersion: '',
               availableVersion: '',
               ecuColorStatus: 'ecu-pass'
           },
           {
               id: 'ecu-list-11',
               title: 'Light or xenon control modules',
               ecuHealth: false,
               dtc: true,
               softwareUpdate: false,
               currentVersion: '1.4',
               availableVersion: '1.46',
               ecuColorStatus: 'ecu-failure'
           },
           {
               id: 'ecu-list-12',
               title: 'Navigation systems',
               ecuHealth: false,
               dtc: true,
               softwareUpdate: false,
               currentVersion: '1.4',
               availableVersion: '1.46',
               ecuColorStatus: 'ecu-failure'
           },
           {
               id: 'ecu-list-13',
               title: 'Other driver assistance systems',
               ecuHealth: true,
               dtc: true,
               softwareUpdate: true,
               currentVersion: '',
               availableVersion: '',
               ecuColorStatus: 'ecu-pass'
           }
        ]
      }
    render(){
        // const titleEcu = this.props.title;
        // const ecuHealth = this.props.ecuHealth;
        // const dtc = this.props.dtc;
        // const softwareUpdate = this.props.softwareUpdate;
        // const currentVersion = this.props.currentVersion;
        // const availableVersion = this.props.availableVersion;
        // const ecuColorStatus = this.props.ecuColorStatus;
        return (
            <div className='ecu-page'>                
                {/* <Header headerActive={this.state.loginStatus} /> */}
                <div className='page-wrapper'>     
                <EcuPopup />         
                <SideBar />
                <div className='body-wrapper'>
                <div className='ecu-each-cards'>
                        <div className='card-view-ecu'>
                            {this.state.ecuList.map((data) => (
                            <EcuEachCard key={data.id} id={data.id} title={data.title} ecuHealth={data.ecuHealth} dtc={data.dtc} softwareUpdate={data.softwareUpdate} currentVersion={data.currentVersion} availableVersion={data.availableVersion} ecuColorStatus={data.ecuColorStatus}  />
                            ))}
                        </div>
                </div>
                </div>
           </div>
            </div>
          )
    }
}

export default EcuList