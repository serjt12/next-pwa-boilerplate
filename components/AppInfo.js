import React, { PureComponent } from 'react';
import Paso1 from '../static/appinfo/paso1num.png';
import Paso2 from '../static/appinfo/paso2num.png';
import Paso3 from '../static/appinfo/paso3num.png';
import Paso4 from '../static/appinfo/paso4num.png';

class AppInfo extends PureComponent {
  state={}
  render() {
    return (
      <div className="info-container">
        <div className="dotbox">
          <span className="dotyellow"></span>
          <span className="dotgreen"></span>
        </div>
        <div className="steps-container">
          <div className="step1">
            <img src={Paso1} alt="paso 1" className="paso1img" />
            <div className="text1">
              <h3>REGISTRO</h3>
              <p>Puedes registrarte con tu cuenta de Facebook o Numero Celular</p>
            </div>
          </div>
          <div className="step2">
            <img src={Paso2} alt="paso 2" className="paso2img" />
            <div className="text2">
              <h4>CONFIRMA TU NUMERO CELULAR</h4>
              <p>Confirma tu numero celular, completa algunos datos que nos ayudaran con la seguridad de todos</p>
            </div>
          </div>
          <div className="step3">
            <img src={Paso3} alt="paso 3" className="paso3img" />
            <div className="text3">
              <h4>BUSCA TU VIAJE</h4>
              <p>Ahora estas listo para elegir tu destino y tu compañia</p>
            </div>
          </div>
          <div className="step4">
            <img src={Paso4} alt="paso 4" className="paso4img" />
            <div className="text4">
              <h4>CALIFICA</h4>
              <p>No olvides calificar tu conductor, asi podemos brindarte un mejor servicio </p>
            </div>
          </div>
        </div>
        <style scoped>{`
            .info-container {
                height: 500px;
              }
              
          .dotyellow {
            height: 10px;
            width: 10px;
            margin: 1px;
            background-color: #e6de34;
            border-radius: 50%;
            display: inline-block;
          }
          .dotgreen {
            height: 10px;
            width: 10px;
            margin: 1px;
            background-color: rgb(42,168,154);
            border-radius: 50%;
            display: inline-block;
          }
          
          .steps-container {
            background: rgb(42,168,154);
            height: 500px;
            overflow: hidden;
            color: white;
            font-size: 12px;
          }
          
          .steps-container img{
            width: 110px;
          }
          
          .step1,
          .step2,
          .step3,
          .step4 {
            position: relative;
          }
          .paso1img {
            float: left;
            position: absolute;
            left: -57px;
            top: 22px;
          }
          .text1 {
            position: absolute;
            top: 57px;
            left: 71px;
            text-align: left;
          }
          .paso2img {
            float: right;
            position: absolute;
            right: -57px;
            top: 138px;
          }
          .text2 {
            position: absolute;
            top: 158px;
            right: 78px;
            text-align: right;
          }
          .text2 h3 {
            display: inline-block;
          }
          
          .paso3img {
            float: left;
            position: absolute;
            left: -57px;
            top: 222px;
          }
          .text3 {
            position: absolute;
            top: 257px;
            left: 71px;
            text-align: left;
          }
          .text3 h3 {
            display: inline-block;
          }
          .paso4img {
            float: right;
            position: absolute;
            right: -57px;
            top: 329px;
          }
          .text4 {
            position: absolute;
            top: 367px;
            right: 73px;
            text-align: right;
          }
          .dotbox {
            text-align: center;
          }
          @media (min-width: 568px) {
            .info-container {
              display: none;
            }
          }       
        `}</style>
      </div>
    );
  }

}

export default AppInfo;
