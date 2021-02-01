import React from "react";

function Loading() {
  return (
    <div className="loader main_loading" id="loading">
      <div id="c-loader" className="c-loader"></div>
    </div>
  );
}
const loadingListener = () => {
  const loading = document.querySelector("#loading");
  if (document.readyState !== "complete") {
    document.addEventListener("readystatechange", (event) => {
      document.body.style.overflow = "hidden";
      if (document.readyState === "complete") {
        document.body.style.overflow = "visible";
        loading.style.transition = "all 500ms ease-out";
        loading.classList.add("main_loading-hidden");
      }
    });
  } else {
    loading.classList.add("main_loading-hidden");
  }
};
export { Loading as default, loadingListener };
