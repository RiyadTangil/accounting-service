import React, { useState } from "react";
import swal from "sweetalert";
import SideVarNav from "../Dashboard/SidvarNav/SideVarNav";
import toast from "react-hot-toast";
const AddAdmin = () => {
  const [admin, setAdmin] = useState(null);
  console.log(admin);
  const handleAdmin = (e) => {
    e.preventDefault();
    const loading = toast.loading("Please wait...!");
    fetch(
      "https://accountingservice.vercel.app/addAdmin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/Json",
        },
        body: JSON.stringify({ email: admin }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss(loading);
        if (data) {
          return swal(
            "Admin Added",
            "Admin has been added successful.",
            "success"
          );
        }
        swal("Failed!", "Something went wrong! Please try again.", "error", {
          dangerMode: true,
        });
      })
      .catch((error) => {
        toast.dismiss(loading);
        swal("Failed!", "Something went wrong! Please try again.", "error", {
          dangerMode: true,
        });
      });
  };

  return (
    <div className="row">
      <SideVarNav></SideVarNav>
      <div className="col-md-9 mt-5">
        <div>
          <form
            style={{ backgroundColor: "#F4FDFB" }}
            onSubmit={handleAdmin}
            className="w-75 p-5  shadow"
          >
            <div class="row mb-3">
              <label
                for="inputEmail3"
                name="email"
                class="col-sm-2 col-form-label"
              >
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  name="email"
                  onBlur={(e) => setAdmin(e.target.value)}
                  class="form-control"
                  id="inputEmail3"
                ></input>
              </div>
            </div>

            <button type="submit" class="btn main-bg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
