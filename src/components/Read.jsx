import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const [id, setId] = useState();
  const [showPopUp, setShowPopUp] = useState(false);

  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) return <h2>Loading</h2>;
  return (
    <div>
      {showPopUp && (
        <CustomModal
          id={id}
          showPopUp={showPopUp}
          setId={setId}
          setShowPopUp={setShowPopUp}
        />
      )}
      <h2>All data</h2>
      {users?.map((ele) => (
        <div key={ele.id} className="card w-50 mx-auto my-2">
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
            <p className="card-text">{ele.gender}</p>
            <button
              className="card-link"
              onClick={() => {
                setId(ele.id);
                setShowPopUp(true);
              }}
            >
              View
            </button>
            <Link to={`/edit/${ele.id}`} className="card-link">
              Edit
            </Link>
            <Link
              className="card-link"
              onClick={(e) => {
                e.preventDefault();
                dispatch(deleteUser(ele.id));
              }}
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Read;
