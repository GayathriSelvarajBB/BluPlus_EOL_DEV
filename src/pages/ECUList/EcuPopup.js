/* eslint-disable quotes */
/* eslint-disable indent */
import { Component } from 'react';
import './ECUPopup.scss';
import Close from 'assets/images/close.png';
import Rotate from 'assets/images/rotate.png';
import Update from 'assets/images/software-system.png';
import SettingsSmall from 'assets/images/settings-icon-small.png';
import SettingsBig from 'assets/images/settings-big.png';
import { Link } from 'react-router-dom';

class EcuPopup extends Component {
  render() {
    const closePopup = () => {
      document.getElementById("ecu-popup").style.display = "none";
      var ecuClassList = document.getElementsByClassName("ecu-each-card");
      for(var i=0;i<ecuClassList.length;i++){ 
          ecuClassList[i].classList.remove("ecu-card-active")
      }
    }
    const rotatePopup = () => {
      document.getElementById("popup-flip").classList.toggle("ecu-popup-active");
    }
    return (
      <div className='ecu-popup' id="ecu-popup">
          <div className='popup-flip' id="popup-flip">
            <div className='rotate-icon' onClick={rotatePopup}>
              <img src={Rotate} alt="Rotate"/>
            </div>
            <section>
              <div className='close-icon' onClick={closePopup}>
                <img src={Close} alt="Close" />
              </div>
              <div className='about-ecu-popup'>
                <h4>ECU Information</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet nisi in lectus luctus, vel placerat orci molestie. Quisque in pellentesque augue.</p>
              </div>
              <div className='about-ecu-popup'>
                <h4>About ECU</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet nisi in lectus luctus, vel placerat orci molestie. Quisque in pellentesque augue.</p>
              </div>
              <div className='ecu-list-spec'>
                <ul>
                  <li>
                    <span className='ecu-list-spec-title'>DTC Count :</span>
                    <span className='ecu-list-spec-content'>4</span>
                  </li>
                  <li>
                    <span className='ecu-list-spec-title'>DTC Count :</span>
                    <span className='ecu-list-spec-content'>4</span>
                  </li>
                  <li>
                    <span className='ecu-list-spec-title'>DTC Count :</span>
                    <span className='ecu-list-spec-content'>4</span>
                  </li>
                  <li>
                    <span className='ecu-list-spec-title'>DTC Count :</span>
                    <span className='ecu-list-spec-content'>4</span>
                  </li>
                </ul>
              </div>
            </section>
            <aside>
                <div className='close-icon' onClick={closePopup}>
                    <img src={Close} alt="close" />
                </div>
                <div className=''>
                  <div className='software-update-popup'>
                    <img src={Update} alt="Update" />
                    <img src={SettingsSmall} alt="SettingsSmall" className='settings-small' />
                    <img src={SettingsBig} alt="SettingsBig" className='settings-big' />
                  </div>
                  <div className='software-version-popup'>
                    <h4>
                      <span>Current Version - 1.4</span>
                      <span>Available Version - 1.6</span>
                    </h4>
                    <Link to="/test">Click Here For More Information</Link>
                  </div>
                </div>
            </aside>
        </div>
      </div>
    )
  }
}

export default EcuPopup