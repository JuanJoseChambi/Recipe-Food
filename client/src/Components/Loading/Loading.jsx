import React from 'react';
import style from "./Loading.module.css"
const Loading = () => {
  return (
    <div>
      {/* <div class="ring">
        Loading
        <span></span>
      </div> */}
      <div className={style.container}>
        <div className={style.loader}>
          <div className={style.loaderdot}></div>
          <div className={style.loaderdot}></div>
          <div className={style.loaderdot}></div>
          <div className={style.loaderdot}></div>
          <div className={style.loaderdot}></div>
          <div className={style.loaderdot}></div>
          <div className={style.loaderText}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
