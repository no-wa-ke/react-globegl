import React from "react";

import './styles.scss';

const Viewer = () => {
  return (
    <div class="iframe-content">
      <iframe src="https://sketchfab.com/models/16229093a5cf471aa5aecfc0b38c341e/embed?autospin=0.05&autostart=1&camera=0&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0" frameborder="0"></iframe>
      {/* <iframe src="https://sketchfab.com/models/d6521362b37b48e3a82bce4911409303/embed?autospin=0.05&autostart=1&camera=0&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0" frameborder="0"></iframe> */}
      {/* <iframe src="https://sketchfab.com/models/d6521362b37b48e3a82bce4911409303/embed?ui_animations=0&ui_stop=0&ui_inspector=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0" frameborder="0"></iframe> */}
    </div>
  );
};
export default Viewer;