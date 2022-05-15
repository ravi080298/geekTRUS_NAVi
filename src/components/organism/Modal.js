import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    height: 250,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "12px !important",
    border: "1px solid transparent",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overFlow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    boxShadow: "5px 10px 18px #888888"
  },
  parentContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  conatiner: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    marginTop: "20px",
    marginLeft: "10px"
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px"
  },
  submitButton: {
    backgroundColor: "green",
    border: "1px solid green",
    borderRadious: "25%",
    fontSize: "16px",
    color: "white",
    marginLeft: "50px",
    fontWeight: "500",
    cursor: "pointer"
  },
  cancelButton: {
    backgroundColor: "gary",
    color: "black",
    fontSize: "16px",
    fontWeight: "500",
    border: "1px solid gray",
    cursor: "pointer"
  },
  label: {
    fontWeight: "700",
    fontSize: "14px",
    marginRight: "2px"
  }
}));

function LKModal(props) {
  const classes = useStyles();
  const { openModal, setOpenModal, user } = props;
  const [name, setName] = useState(user[0].name);
  const [email, setEmail] = useState(user[0].email);
  const [role, setRole] = useState(user[0].role);
  const handleClose = () => {
    setOpenModal(!openModal);
  };
  const updateUser = () => {
    user[0].name = name;
    user[0].email = email;
    user[0].role = role;
    console.log(user);
    setOpenModal(!openModal);
  };

  const body = (
    <div className={classes.parentContainer}>
      <div className={classes.paper}>
        <div className={classes.conatiner}>
          <div className={classes.input}>
            <label id="name">
              <sapn className={classes.label}>Name :</sapn>
              <input
                type="text"
                placeholder="Name"
                value={name}
                for="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className={classes.input}>
            <label id="email">
              Email:
              <input
                type="email"
                placeholder="Email"
                value={email}
                for="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className={classes.input}>
            <label id="role">
              Role:
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                for="role"
              />
            </label>
          </div>
          <div className={classes.btnContainer}>
            <button onClick={handleClose} className={classes.cancelButton}>
              Cancel
            </button>
            <button onClick={updateUser} className={classes.submitButton}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal open={openModal} onClose={handleClose}>
      {body}
    </Modal>
  );
}

export default LKModal;
