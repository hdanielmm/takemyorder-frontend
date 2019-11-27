import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Modal = () => {


  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });



  return (
    <div>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Confirm order</a>

      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </div>
  )
}

export default Modal;