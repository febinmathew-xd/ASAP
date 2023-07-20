import Navbar from "../Nav bar";
import Sidebar from "../Sidebar";
import { useEffect, useRef, useState } from "react";
import { Post, handlefileupload } from "../../Service/Api";
import { useLocation, useNavigate } from "react-router-dom";

function AddVenue() {
  const [name, setName] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseid, setCourseid] = useState();
  const [location, setLocation] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const navigate = useNavigate();

  const save = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
      tablename: "venue",
      venuename: name,
      location: location,
      lat: lat,
      lng: lng,
    };

    Post("save", param).then((data) => {
      navigate("/viewvenue");
    });
  };

  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setLocation(place.name);
      setLat(lat);
      setLng(lng);
    });
  }, []);

  return (
    <div className="container-fluid position-relative d-flex p-0">
      <div className="content">
        <Sidebar />
        <Navbar />

        <div
          className="col-sm-12 col-xl-11"
          style={{ marginLeft: "30px", marginTop: "20px" }}
        >
          <div className="bg-secondary rounded h-100 p-4">
            <h6 className="mb-4">Add Teacher</h6>
            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Date"
              />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input className="form-control" ref={inputRef} />
              <label for="floatingPassword">Location</label>
            </div>
            <button
              className="btn btn-success"
              onClick={(e) => {
                save();
              }}
            >
              Save
            </button>
            &nbsp; &nbsp;
          </div>
        </div>
        {/* <Footer2/> */}
      </div>
    </div>
  );
}
export default AddVenue;
