import Swal from "sweetalert2";
export const sideMenuLinks = [
  { title: "updateDate", link: "Settings", src: "User", gap: true },
  { title: "Activites ", link: "Table", src: "Calendar" },
  { title: "changepassword ", link: "changepassword", src: "Calendar" },
];

export const handleFormModel = async () => {
  const { value: inputValue } = await Swal.fire({
    title: "update data",
    html: `
  <input  placeholder="Enter the update name" id="swal-input1" class="swal2-input" >
  <input type="number" placeholder="Enter the update phone"  id="swal-input2" class="swal2-input">
  
`,
    showCancelButton: true,
  });
};
