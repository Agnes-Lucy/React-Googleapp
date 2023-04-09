import image from "../images/me.jpg"
const Profile = () => {
    return (
        <div>
            <img src={image} alt = "profile pix" style = {{height: "22px" , borderRadius: "50px"}} />
        </div>
    )
}

export default Profile;