import React from 'react';
import style from "./Loading.module.css"
const Loading = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.loader}>
          <div className={style.loaderIcon}><i class='bx bx-loader-alt bx-spin' ></i></div>
          <div className={style.loaderText}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
