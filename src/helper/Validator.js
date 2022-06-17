import { toast } from "react-toastify";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";

//TODO: Make an Empty of array for push ref here
let passRef = [];
let validCount = 0;
//TODO: add function use here to req ref from arguments and pass it to passRef
// ? Call When component did mount
export function add(reqRef) {
  passRef.push(reqRef);
}
const tastytoast = (error) => {
  toast.warn(`${error}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

//TODO: This is important function coz its first call when
// ? Call When onSubmit
export function hardValidator() {
  let control = "";
  let indi = 0;
  for (const target of passRef) {
    debugger;
    control = target;
    indi = passRef.indexOf(target);
    if (control.current.value === "" || control.current.value === null) {
      let badRefs = passRef[indi];
      badRefs.current.focus();
      tastytoast(control.current.ariaLabel);
      validCount++;
    }
  }
  if (control.current.name === "email" && control.current.value !== null) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(control.current.value)) {
      tastytoast(control.current.ariaLabel);
      let badRefs = passRef[indi];
      badRefs.current.focus();
      validCount++;
    }
  }
  if (validCount === 0) {
    debugger;
    validCount = 0;
    falseChecker();
  }
}
export const falseChecker = () => {
  Swal.fire({
    icon: "success",
    title: "Submitted Successfully",
    text: "We have received your message and will get back to you within 24 hours.",
    showConfirmButton: false,
  });
  return true;
};
