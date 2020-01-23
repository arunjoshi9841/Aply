import md5 from "md5";

const getGravatar = (emailAddress) => {
    const hash = md5(emailAddress);
    const profilePic = "https://www.gravatar.com/avatar/"+hash+"?d=https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
    return profilePic;
};

export default getGravatar;