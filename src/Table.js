import { useState } from "react";
import LKModal from "./Modal";

const Table = (props) => {
  const { data, list, setList } = props;
  const [allChecked, setAllChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [arrayToEdit, setArrayToEdit] = useState([]);

  const handleDelete = (event) => {
    const index = event.target.value;
    const array = list.filter((e) => {
      return index !== e.id;
    });
    setList(array);
  };

  let selectedItem = [];

  const handleSelect = (e) => {
    const id = e.target.value;
    if (selectedItem.includes(id)) {
      selectedItem = selectedItem.filter((element) => {
        return element !== id;
      });
    } else {
      selectedItem.push(e.target.value);
    }
  };

  const handleDeleteSelected = () => {
    const array = list.filter((e, index) => {
      return !selectedItem.includes(e.id);
    });
    setList(array);
    selectedItem.splice(0, selectedItem.length);
    setAllChecked(!allChecked);
    deSelectAll();
  };

  const handleSelectAll = () => {
    setAllChecked(!allChecked);
  };

  function selectAll() {
    var element = document.getElementsByName("check");
    if (allChecked) {
      for (let i = 0; i < element.length; i++) {
        if (element[i].type === "checkbox") {
          element[i].checked = true;
        }
      }
      for (let i = 0; i < element.length; i++) {
        selectedItem.push(element[i].value);
      }
    }
  }

  selectAll();
  deSelectAll();

  function deSelectAll() {
    let element = document.getElementsByName("check");
    if (!allChecked) {
      for (let i = 0; i < element.length; i++) {
        if (element[i].type === "checkbox") {
          element[i].checked = false;
        }
      }
      selectedItem = [];
    }
  }

  const EditInformation = (event) => {
    const id = event.target.value;
    const array = list.filter((e) => {
      return id === e.id;
    });
    setArrayToEdit(array);
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && (
        <LKModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          user={arrayToEdit}
        />
      )}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="allCheck"
                  checked={allChecked}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, idx) => (
              <tr key={idx}>
                <td>
                  <input
                    type="checkbox"
                    name="check"
                    value={element.id}
                    onClick={handleSelect}
                  />
                </td>

                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.role}</td>
                <td>
                  <span>
                    <button
                      value={element.id}
                      onClick={EditInformation}
                      className="edit-button"
                    >
                      Edit
                    </button>
                  </span>
                  <span>
                    <button
                      value={element.id}
                      onClick={handleDelete}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="delete-selected" onClick={handleDeleteSelected}>
          Delete Selected
        </button>
      </div>
    </>
  );
};
export default Table;
