import DataTable from "react-data-table-component";
import "./home.scss";
import Header from "../Header";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiEdit } from "react-icons/ci";

export default function Home() {
  let initialValue = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    posgt: "",
  };
  const [userObj, setUserObj] = useState(initialValue);
  const [userList, setUserList] = useState([
    {
      fname: "Umang",
      lname: "Patel",
      email: "umang@gmail.com",
      password: 123,
      post: "MSC",
    },
  ]);
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.fname,
    },
    {
      name: "Last Name",
      selector: (row) => row.lname,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Password",
      selector: (row) => row.password,
    },
    {
      name: "Post",
      selector: (row) => row.post,
    },
    {
      name: "Actions",
      selector: (row) => "",
      cell: (row, index) => {
        console.log("table row,", row);
        return (
          <div>
            <CiEdit
              size={18}
              onClick={() => {
                setUserObj({ ...row, idx: index });
              }}
            />
          </div>
        );
      },
    },
  ];

  const functionOnChange = (e) => {
    setUserObj({ ...userObj, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let isValidate = true;
    if (!userObj?.fname) {
      toast.error("Please Enter your first name");
      isValidate = false;
    } else if (!userObj.lname) {
      toast.error("Please Enter your last name");
      isValidate = false;
    } else if (!userObj.email) {
      toast.error("Please Enter your Email");
      isValidate = false;
    } else if (!userObj.email.includes("@")) {
      toast.error("Please Enter valid Email");
      isValidate = false;
    } else if (!userObj.password) {
      toast.error("Please Enter your Password");
      isValidate = false;
    } else if (userObj.password.length < 8) {
      toast.error("Please Enter minimum 8 letters");
      isValidate = false;
    } else if (!userObj.post) {
      toast.error("Please Enter your post");
      isValidate = false;
    }
    return isValidate;
  };

  console.log("User", userObj);
  return (
    <div>
      <Toaster />
      <DataTable pagination columns={columns} data={userList} />

      <div className="form-section">
        <div className="form-user">
          <div className="form-item">
            <label>First Name</label>
            <input
              type="text"
              value={userObj?.fname}
              placeholder="Enter your first name"
              name="fname"
              onChange={(e) => {
                functionOnChange(e);
              }}
            />
          </div>
          <div className="form-item">
            <label>Last Name</label>
            <input
              type="text"
              value={userObj?.lname}
              placeholder="Enter your last name"
              name="lname"
              onChange={(e) => {
                functionOnChange(e);
              }}
            />
          </div>
          <div className="form-item">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={userObj?.email}
              onChange={(e) => {
                functionOnChange(e);
              }}
            />
          </div>
          <div className="form-item">
            <label>Password</label>
            <input
              type="password"
              value={userObj?.password}
              placeholder="Enter your password"
              name="password"
              onChange={(e) => {
                functionOnChange(e);
              }}
            />
          </div>
          <div className="form-item">
            <label>Post</label>
            <input
              type="text"
              value={userObj?.post}
              placeholder="Enter your post"
              name="post"
              onChange={(e) => {
                functionOnChange(e);
              }}
            />
          </div>
          <div className="form-button">
            <button
              onClick={() => {
                if (validate()) {
                  if (userObj.idx) {
                    if (userObj.idx !== undefined) {
                      const updatedList = [...userList];
                      updatedList[userObj.idx] = userObj;
                      setUserList(updatedList);
                    }
                  } else {
                    setUserList([...userList, userObj]);
                  }
                  setUserObj(initialValue);
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
