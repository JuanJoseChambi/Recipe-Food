import style from "./Loading.module.css"
export default function Loading () {
  return (
    <div>
      <div className={style.container}>
        <div className={style.loader}>
          <div className={style.myLoader}></div>
          {/* <div className={style.loaderIcon}><i class='bx bx-loader-alt bx-spin' ></i></div> */}
          <div className={style.loaderText}></div>
        </div>
      </div>
    </div>
  );
};

