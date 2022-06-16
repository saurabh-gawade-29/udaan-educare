import { toast } from "react-toastify";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";

//TODO: Make an Empty of array for push ref here
let passRef = [];

//TODO: add function use here to req ref from arguments and pass it to passRef
// ? Call When component did mount
export function add(reqRef) {
  passRef.push(reqRef);
}

//TODO: This is important function coz its first call when
// ? Call When onSubmit
export function hardValidator() {
  debugger;
  let control = "";
  let indi = 0;
  for (const target of passRef) {
    debugger;
    control = target;
    indi = passRef.indexOf(target);
    if (control.current.value === "" || control.current.value === null) {
      let badRefs = passRef[indi];
      badRefs.current.focus();
      toast.error(`Please fill ${control.current.ariaLabel}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
  }
  Swal.fire({
    icon: "success",
    title: "Submitted Successfully",
    text: "We have received your message and will get back to you within 24 hours.",
    showConfirmButton: false,
  });
  return true;
}
