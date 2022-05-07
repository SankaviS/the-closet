import React from "react";
import classes from "./../styles/contact.module.css";
import ContactlessSharpIcon from "@mui/icons-material/ContactlessSharp";
import LoyaltySharpIcon from "@mui/icons-material/LoyaltySharp";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import SubjectSharpIcon from "@mui/icons-material/SubjectSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
const Contact = () => {
  return (
    <div>
      <h1 className={classes.h1}>
        Contact Us <ContactlessSharpIcon />
      </h1>
      <p className={classes.p}>
        Email us with any questions or inquiries. We would be happy to answer
        your questions and setup a meeting with you
        <LoyaltySharpIcon />
      </p>
      <hr></hr>
      <form className={classes.form}>
        <label className={classes.label} for="fname">
          <DriveFileRenameOutlineSharpIcon /> Name :
        </label>
        <br></br>

        <input
          className={classes.input1}
          type="text"
          id="fname"
          name="firstname"
        />
        <br></br>
        <label className={classes.label} for="email">
          <AlternateEmailSharpIcon /> email :
        </label>
        <br></br>

        <input
          className={classes.input1}
          type="email"
          id="email"
          name="email"
        />
        <br></br>
        <label className={classes.label} for="sub">
          <SubjectSharpIcon /> subject :
        </label>
        <br></br>
        <input className={classes.input1} type="text" id="sub" name="subject" />
        <br></br>
        <label className={classes.label} for="message">
          <MailOutlineSharpIcon /> message :
        </label>
        <br></br>
        <input
          className={classes.input}
          type="text"
          id="message"
          name="message"
        />
        <br></br>

        <br></br>
        <button className={classes.button} type="submit" value="Submit">
          Send <SendSharpIcon />
        </button>
      </form>
    </div>
  );
};

export default Contact;
