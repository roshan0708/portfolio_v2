import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="loader main_loading" id="loading">
      <Spinner
        animation="grow"
        variant="dark"
        style={{ width: "100px", height: "100px" }}
      />
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
