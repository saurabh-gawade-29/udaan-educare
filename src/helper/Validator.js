import { toast } from "react-toastify";

let passRef = [];

export function add(reqRef) {
  passRef.push(reqRef);
}

export function hardValidator() {
  debugger;
  let kedar = "";
  let indi = 0;
  for (const target of passRef) {
    debugger;
    kedar = target;
    indi = passRef.indexOf(target);
    if (
      kedar.current.value === "" ||
      kedar.current.value === null ||
      kedar.current.value === undefined
    ) {
      let badRefs = passRef[indi];
      badRefs.current.focus();
      toast.error(`Please fill ${kedar.current.ariaLabel}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
  }
  toast.success(`success`, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return true;
}
